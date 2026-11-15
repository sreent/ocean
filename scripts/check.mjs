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

import { existsSync, readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { colour, contrast, faces, layers, ROOT, themes } from "./tokens.mjs";

const [tokensArg, piecesArg] = process.argv.slice(2);
const TOKENS = tokensArg ? pathToFileURL(tokensArg) : new URL("css/tokens.css", ROOT);
const PIECES = piecesArg ? pathToFileURL(piecesArg) : new URL("css/components.css", ROOT);
const files = { tokens: readFileSync(TOKENS, "utf8"), pieces: readFileSync(PIECES, "utf8") };
const named = { tokens: TOKENS.pathname.split("/").slice(-2).join("/"), pieces: PIECES.pathname.split("/").slice(-2).join("/") };

const TEXT = [  // text, and what it's on: 4.5 to 1
  ...["page", "surface", "sunken", "you", "agent", "own-message"].map((on) => ["text", on]),
  ...["page", "surface", "sunken"].map((on) => ["muted", on]),
  ["faint", "page"], ["faint", "surface"],
  ["accent", "page"], ["accent", "surface"], ["accent", "accent-soft"],
  ["accent-text", "accent"], ["accent-text", "accent-strong"],
  ["text", "accent-soft"], ["changes", "sunken"],  // a traced value; a change, on a decision
  ["muted", "agent-tone-soft"], ["agent-tone", "agent-tone-soft"],  // the step an agent is on
  ["surface", "bad"], ["surface", "text"],  // the danger button; a hint
  ...["reads", "writes", "changes", "outside", "own", "good", "warn", "bad", "idle"].map((tone) => [tone, `${tone}-bg`]),
];
const MARKS = [  // 3 to 1
  ["focus", "surface"], ["agent-tone", "surface"], ["surface", "agent-tone"],
  ["service-tone", "surface"], ["surface", "service-tone"],  // a service's mark (the family's)
  ["faint", "surface"], ["text", "surface"],  // a tier's line: dashed, solid, or production's ink
];

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
  ["tokens", "pieces"].flatMap((part) => lines(files[part]).flatMap((line, i) =>
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
const pairs = (TEXT.length + MARKS.length) * 2;
console.log(`Ocean holds: ${pairs} pairs read well in light and dark, the meanings name only primitives, ` +
  `the pieces name only meanings, and nothing loads from outside (${faces(files.tokens).length} faces, all here).`);
