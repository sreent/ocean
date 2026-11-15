// Ocean's tokens as data, read from css/tokens.css, which is where they're written. The checks and
// the build both read them from here, so there is one reading of the file.

import { readFileSync } from "node:fs";

export const ROOT = new URL("../", import.meta.url);
export const read = (path) => readFileSync(new URL(path, ROOT), "utf8");

const DARK = "@media (prefers-color-scheme: dark)";
const DECLARED = /--([\w-]+):\s*([^;]+);/g;

const declared = (text) => Object.fromEntries([...text.matchAll(DECLARED)].map(([, name, value]) => [name, value.trim()]));

/** The file's three parts: the primitives, the meanings in light, and the meanings in dark. */
export function layers(css = read("css/tokens.css")) {
  const primitives = css.indexOf("/* Primitives");
  const meanings = css.indexOf("/* Meanings");
  const dark = css.indexOf(DARK);
  if (primitives < 0 || meanings < primitives || dark < meanings) {
    throw new Error("css/tokens.css lost its layers: /* Primitives, /* Meanings and the dark block, in that order");
  }
  return {
    primitives: declared(css.slice(primitives, meanings)),
    light: declared(css.slice(meanings, dark)),
    dark: declared(css.slice(dark, css.indexOf("\n}\n", dark))),
  };
}

/** Each theme as every token's value in it: the primitives, then the meanings over them. */
export function themes(css) {
  const { primitives, light, dark } = layers(css);
  const lit = { ...primitives, ...light };
  return { light: lit, dark: { ...lit, ...dark } };
}

/** The primitive a meaning names, following var() to the end. */
export function source(theme, name) {
  let at = name;
  for (let found; (found = /^var\(--([\w-]+)\)$/.exec(theme[at] ?? "")); ) at = found[1];
  return at;
}

/** A colour token's hex value in a theme. */
export function colour(theme, name) {
  const value = theme[source(theme, name)];
  if (!/^#[0-9a-f]{6}$/.test(value ?? "")) throw new Error(`--${name} is ${value}, not a colour`);
  return value;
}

/** WCAG 2's contrast ratio between two colours. */
export function contrast(a, b) {
  const luminance = (hex) => {
    const [r, g, bl] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
      .map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
    return 0.2126 * r + 0.7152 * g + 0.0722 * bl;
  };
  const [high, low] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (high + 0.05) / (low + 0.05);
}

/** The faces the tokens declare: each one's family, style and weight, the address the CSS gives
 * its file (`url`, beside the CSS file), and that file in this repo (`file`). */
export function faces(css = read("css/tokens.css")) {
  return [...css.matchAll(/@font-face\s*\{([^}]*)\}/g)].map(([, rule]) => {
    const url = /url\(([^)]+)\)/.exec(rule)[1].replace(/^["']|["']$/g, "");
    return {
      family: /font-family:\s*"([^"]+)"/.exec(rule)[1],
      style: /font-style:\s*(\w+)/.exec(rule)[1],
      weight: /font-weight:\s*(\d+)/.exec(rule)[1],
      url,
      file: url.replace(/^\.\.\//, ""),
    };
  });
}
