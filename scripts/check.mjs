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
//    a chart uses most, all eight in dark. In light, series 5 and 8 (sky and gold) are under it,
//    and their marks are labelled in --text (css/charts.css). Words on a chart's shades, such as
//    the hours on a4a's load, read on them at 4.5 to 1.
// 6. In this repo, the chart palettes as data (charts/palettes.json) agree with css/charts.css, and
//    the Teams cards (teams/cards) are Adaptive Cards of version 1.5, made only of what Teams draws.

import { existsSync, readdirSync, readFileSync } from "node:fs";
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
  ["text", "good-bg"], ["text", "bad-bg"], ["text", "idle-bg"],  // a4a: a whiteboard's note in its tone
  ["viewfinder-text", "viewfinder"], ["viewfinder-text", "viewfinder-line"], ["paper-ink", "paper"],  // capture
  ["muted", "accent-soft"], ["accent", "sunken"],  // a4a: an issue's row, chosen or under the pointer
  ["bad", "surface"], ["changes", "surface"],  // a4a: a query's problem, a late task's words; a change in an issue's history
  ["bad", "you"], ["muted", "you"],  // a4a: "Not sent", under what the person said, in --muted
  ...["reads", "writes", "changes", "outside", "own", "good", "warn", "bad", "idle"].map((tone) => [tone, `${tone}-bg`]),
];
const MARKS = [  // 3 to 1
  ["focus", "surface"], ["agent-tone", "surface"], ["surface", "agent-tone"],
  ["service-tone", "surface"], ["surface", "service-tone"],  // a service's mark (the family's)
  ...["reads", "writes", "changes", "outside", "own", "idle", "bad"].map((tone) => [tone, "surface"]),  // a step's icon on a canvas
  ...["good", "bad", "accent"].map((tone) => [tone, "sunken"]),  // a run's path, a refused call, what an expression reads
  ["surface", "good"], ["surface", "warn"],  // a step's tick or clock, in its corner
  ["good", "surface"],  // a toast's tick, for what was just done
  ["faint", "sunken"],  // a canvas's edges and the dots they join at: the order of the steps
  ["faint", "surface"], ["text", "surface"],  // a tier's line: dashed, solid, or production's ink
  ["own", "own-message"],  // the shield beside the product's own word, in a conversation
  ...["surface", "page", "sunken"].map((on) => ["line-control", on]),  // a field's edge, where to type
  ["viewfinder-mark", "viewfinder-line"],  // the frame that finds a document, on a camera's view
  ["focus", "accent-soft"], ["focus", "sunken"],  // a4a: the ring on a row chosen, or under the pointer
  ["agent-tone", "page"], ["bad", "own-message"],  // a4a: the agent's mark by its notes in a conversation; a failure's cross there
];
const CHART_WORDS = [  // words on a chart's shades: a4a's hours on Ocean Blue's steps, at 4.5 to 1
  ["text", "chart-seq-1"], ["text", "chart-seq-2"], ["surface", "chart-seq-4"], ["surface", "chart-seq-6"],
];
const CHART_MARKS = {  // on the card a chart sits on: 3 to 1
  light: ["chart-1", "chart-2", "chart-3", "chart-4", "chart-6", "chart-7", "chart-other", "chart-done", "chart-short", "chart-failed", "chart-open"],
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

check("Words on a chart's shades that read less well than WCAG asks", () => {
  if (!files.charts) return [];
  const marks = charts(files.charts);
  const theme = themes(files.tokens);
  return ["light", "dark"].flatMap((mode) => CHART_WORDS.flatMap(([fg, on]) => {
    const ratio = contrast(colour(theme[mode], fg), (marks[mode][on] ?? "").toLowerCase());
    return ratio < 4.5 ? [`${mode}: --${fg} on --${on} is ${ratio.toFixed(2)} to 1, under 4.5`] : [];
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

// This repo's own files, beside its CSS: checked when no product's files are given
const OWN = !tokensArg && !piecesArg && !chartsArg;

check("Chart palettes as data that differ from css/charts.css", () => {
  if (!OWN) return [];
  const data = JSON.parse(readFileSync(new URL("charts/palettes.json", ROOT), "utf8"));
  const marks = charts(files.charts);
  const theme = themes(files.tokens);
  const found = [];
  const same = (what, mode, values, names) => names.forEach((name, i) => {
    const want = (marks[mode][name] ?? "").toLowerCase();
    if ((values[i] ?? "").toLowerCase() !== want) found.push(`${what}, ${mode}: ${values[i]}, where --${name} is ${want}`);
  });
  const ends = ["done", "short", "failed", "open"];
  for (const mode of ["light", "dark"]) {
    same("categorical", mode, data.categorical[mode], [1, 2, 3, 4, 5, 6, 7, 8].map((i) => `chart-${i}`));
    same("other", mode, [data.categorical.other[mode]], ["chart-other"]);
    same("sequential", mode, data.sequential[mode], [1, 2, 3, 4, 5, 6, 7].map((i) => `chart-seq-${i}`));
    same("diverging", mode, data.diverging[mode], [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => `chart-div-${i}`));
    same("status", mode, ends.map((end) => data.status[mode][end]), ends.map((end) => `chart-${end}`));
    if (data.surfaces[mode].toLowerCase() !== colour(theme[mode], "surface")) {
      found.push(`surfaces, ${mode}: ${data.surfaces[mode]}, where --surface is ${colour(theme[mode], "surface")}`);
    }
  }
  return found;
});

// What Teams draws in a card (Adaptive Cards 1.5, and Teams' own Badge, Icon and CompoundButton), as far as the kit has used
// or vetted it; a card element beyond these is checked in Teams before it's added here
const TEAMS_DRAWS = new Set(["AdaptiveCard", "TextBlock", "RichTextBlock", "TextRun", "Image", "ColumnSet", "Column", "Container",
  "FactSet", "ActionSet", "Table", "TableRow", "TableCell", "Badge", "Icon", "CompoundButton", "Input.Text", "Input.Date", "Input.Time", "Input.Number", "Input.ChoiceSet", "Input.Toggle",
  "Action.Execute", "Action.Submit", "Action.OpenUrl", "Action.ShowCard", "Action.ToggleVisibility"]);
check("Teams cards Teams can't draw", () => {
  const dir = new URL("teams/cards/", ROOT);
  if (!OWN || !existsSync(dir)) return [];
  return readdirSync(dir).filter((file) => file.endsWith(".json")).flatMap((file) => {
    let card;
    try { card = JSON.parse(readFileSync(new URL(file, dir), "utf8")); } catch (error) { return [`${file}: ${error.message}`]; }
    const found = card.type === "AdaptiveCard" && card.version === "1.5" ? [] : [`${file}: not an Adaptive Card of version 1.5`];
    const walk = (node) => {
      if (Array.isArray(node)) return node.forEach(walk);
      if (!node || typeof node !== "object") return;
      if (typeof node.type === "string" && !TEAMS_DRAWS.has(node.type)) found.push(`${file}: ${node.type}`);
      for (const [key, value] of Object.entries(node)) if (key !== "data" && key !== "msteams") walk(value);  // an action's own data is the app's
    };
    walk(card);
    return found;
  });
});

if (problems.length) {
  console.error(problems.join("\n\n"));
  process.exit(1);
}
const pairs = (TEXT.length + MARKS.length + CHART_WORDS.length) * 2 + CHART_MARKS.light.length + CHART_MARKS.dark.length;
console.log(`Ocean holds: ${pairs} pairs read well in light and dark, charts' among them, the meanings name only ` +
  `primitives, the pieces name only meanings, and nothing loads from outside (${faces(files.tokens).length} faces, all here)` +
  (OWN ? ". The chart palettes as data agree, and the Teams cards are drawable." : "."));
