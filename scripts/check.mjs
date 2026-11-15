// What Ocean is held to, for any product that uses it (docs/design.md). a5s's own tests
// (tests/test_design.py) began these; here they run with Node alone:
//
//   node scripts/check.mjs                                 this repo's css/
//   node scripts/check.mjs <tokens.css> [<components.css>] a product's own, such as a brand's
//
// 1. Each colour that carries text reads against what it sits on at 4.5 to 1, as WCAG's AA asks,
//    and focus rings and the marks of agents and services at 3 to 1, in light and in dark.
// 2. The meanings name only primitives, so a brand is one change in one place.
// 3. The pieces name meanings, never a colour of their own.
// 4. Nothing loads from outside: no address off the product in the CSS, and every face the
//    tokens declare is a font file here.
// 5. A chart's marks read on the card it sits on at 3 to 1: every status, Other, and the series
//    a chart uses most, all eight in dark. In light, series 5, 7 and 8 are under it, and their
//    marks are labelled in --text (css/charts.css).

import { existsSync, readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { charts, colour, contrast, faces, layers, ROOT, themes } from "./tokens.mjs";

const [tokensArg, piecesArg, chartsArg] = process.argv.slice(2);
const TOKENS = tokensArg ? pathToFileURL(tokensArg) : new URL("css/tokens.css", ROOT);
const PIECES = piecesArg ? pathToFileURL(piecesArg) : new URL("css/components.css", ROOT);
const CHARTS = chartsArg ? pathToFileURL(chartsArg) : new URL("css/charts.css", ROOT);
const files = { tokens: readFileSync(TOKENS, "utf8"), pieces: readFileSync(PIECES, "utf8"),
  charts: existsSync(CHARTS) ? readFileSync(CHARTS, "utf8") : "" };
const short = (url) => url.pathname.split("/").slice(-2).join("/");
const named = { tokens: short(TOKENS), pieces: short(PIECES), charts: short(CHARTS) };

const TEXT = [  // text, and what it's on: 4.5 to 1
  ...["page", "surface", "sunken", "you", "agent", "own-message"].map((on) => ["text", on]),
  ...["page", "surface", "sunken"].map((on) => ["muted", on]),
  ["faint", "page"], ["faint", "surface"],
  ["accent", "page"], ["accent", "surface"], ["accent", "accent-soft"],
  ["accent-text", "accent"], ["accent-text", "accent-strong"],
  ["text", "accent-soft"], ["changes", "sunken"],  // a traced value; a change, on a decision
  ["muted", "agent-tone-soft"], ["agent-tone", "agent-tone-soft"],  // the step an agent is on
  ["surface", "bad"], ["surface", "text"],  // the danger button; a hint
  ["text", "warn-bg"], ["warn", "surface"],  // a question that waits on the person, and its answers
  ["text", "changes-bg"], ["text", "writes-bg"], ["text", "outside-bg"],  // what sending does, in its tone
  ["viewfinder-text", "viewfinder"], ["viewfinder-text", "viewfinder-line"], ["paper-ink", "paper"],  // capture
  ...["reads", "writes", "changes", "outside", "own", "good", "warn", "bad", "idle"].map((tone) => [tone, `${tone}-bg`]),
];
const MARKS = [  // 3 to 1
  ["focus", "surface"], ["agent-tone", "surface"], ["surface", "agent-tone"],
  ["service-tone", "surface"], ["surface", "service-tone"],  // a service's mark (the family's)
  ...["reads", "writes", "changes", "outside", "own", "idle"].map((tone) => [tone, "surface"]),  // a step's icon on a canvas
  ["surface", "good"], ["surface", "warn"],  // a step's tick or clock, in its corner
  ["faint", "sunken"],  // a canvas's edges and the dots they join at: the order of the steps
  ["faint", "surface"], ["text", "surface"],  // a tier's line: dashed, solid, or production's ink
  ...["surface", "page", "sunken"].map((on) => ["line-control", on]),  // a field's edge, where to type
  ["viewfinder-mark", "viewfinder-line"],  // the frame that finds a document, on a camera's view
];
const CHART_MARKS = {  // on the card a chart sits on: 3 to 1
  light: ["chart-1", "chart-2", "chart-3", "chart-4", "chart-6", "chart-other", "chart-done", "chart-short", "chart-failed", "chart-open"],
  dark: ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5", "chart-6", "chart-7", "chart-8", "chart-other",
    "chart-done", "chart-short", "chart-failed", "chart-open"],
};

const problems = [];
const check = (what, fn) => {
  try {
    const found = fn();
    if (found.length) problems.push(`${what}:\n${found.map((line) => `  ${line}`).join("\n")}`);
  } catch (error) {
    problems.push(`${what}: ${error.message}`);
  }
};

check("Colours that read less well than WCAG asks", () =>
  Object.entries(themes(files.tokens)).flatMap(([name, theme]) =>
    [[TEXT, 4.5], [MARKS, 3]].flatMap(([pairs, least]) => pairs.flatMap(([fg, on]) => {
      const ratio = contrast(colour(theme, fg), colour(theme, on));
      return ratio < least ? [`${name}: --${fg} on --${on} is ${ratio.toFixed(2)} to 1, under ${least}`] : [];
    }))));

check("Chart marks that read less well than WCAG asks", () => {
  if (!files.charts) return [`${named.charts} is missing`];
  const marks = charts(files.charts);
  const theme = themes(files.tokens);
  return Object.entries(CHART_MARKS).flatMap(([mode, names]) => names.flatMap((name) => {
    const value = marks[mode][name];
    if (!/^#[0-9a-f]{6}$/i.test(value ?? "")) return [`${mode}: --${name} is ${value}, not a colour`];
    const ratio = contrast(value.toLowerCase(), colour(theme[mode], "surface"));
    return ratio < 3 ? [`${mode}: --${name} on --surface is ${ratio.toFixed(2)} to 1, under 3`] : [];
  }));
});

check("Meanings that name a colour, not a primitive", () => {
  const { light, dark } = layers(files.tokens);
  return Object.entries({ ...light, ...dark }).filter(([, value]) => value.includes("#"))
    .map(([name, value]) => `--${name}: ${value}`);
});

// Line by line, without comments, keeping each line's number
const lines = (text) => text.replace(/\/\*[\s\S]*?\*\//g, (comment) => comment.replace(/[^\n]/g, "")).split("\n");

check("Pieces with a colour of their own", () =>
  lines(files.pieces).flatMap((line, i) =>
    (/#[0-9a-fA-F]{3,8}\b/.test(line) ? [`${named.pieces}:${i + 1}: ${line.trim()}`] : [])));

check("Anything loaded from outside", () =>
  ["tokens", "pieces", "charts"].flatMap((part) => lines(files[part]).flatMap((line, i) =>
    (/https?:|\/\/|@import/.test(line) ? [`${named[part]}:${i + 1}: ${line.trim()}`] : []))));

check("Faces without their font file", () =>
  faces(files.tokens).flatMap(({ family, weight, url }) => {
    const path = new URL(url, TOKENS);
    if (!existsSync(path)) return [`${family} ${weight}: ${url} is missing`];
    const head = readFileSync(path).subarray(0, 4).toString("latin1");
    return head === "wOF2" ? [] : [`${family} ${weight}: ${url} isn't WOFF2`];
  }));

if (problems.length) {
  console.error(problems.join("\n\n"));
  process.exit(1);
}
const pairs = (TEXT.length + MARKS.length) * 2 + CHART_MARKS.light.length + CHART_MARKS.dark.length;
console.log(`Ocean holds: ${pairs} pairs read well in light and dark, charts' among them, the meanings name only ` +
  `primitives, the pieces name only meanings, and nothing loads from outside (${faces(files.tokens).length} faces, all here).`);
