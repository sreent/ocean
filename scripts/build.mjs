// Builds what's made from css/tokens.css and the rest of this repo: node scripts/build.mjs
//
// - tokens.json: the tokens as data, for tools such as a Tailwind theme (docs/products.md): each
//   colour by theme, as an alias of its primitive; the type; the spacing, radii, shadows and sizes.
// - dist/design-system/: this repo as a claude.ai Design System (docs/, components/, fonts/),
//   with the icons and screens to upload beside it, and the Teams cards to download.

import { execSync } from "node:child_process";
import { copyFileSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { charts, colour, faces, layers, read, ROOT, source, themes } from "./tokens.mjs";

// Each hue sits where MathWorks' colours and Maple's meet (docs/design.md, Where the colours come from)
const HUES = {
  ocean: "Ocean's blue, the cerulean MathWorks and Maplesoft share, and in dark the sky blue both use: what someone can do",
  lagoon: "Lagoon teal, MATLAB's reef teal and Maple's: agents, and the product's own doing",
  coral: "Coral, a crimson between MATLAB's old dark red and Maple's burgundy: a change to a record, and what failed",
  kelp: "Kelp, Maple's green toward MATLAB's: what's going well",
  amber: "Amber, MATLAB's orange toward Maple's brown: something written, such as a draft, and what waits on someone",
  violet: "Violet, MATLAB's purple and Maple's violet: the organisation's edge",
  sand: "Sand: the product's own messages",
  mist: "The mist: the light theme's neutral greys, as both makers draw their pages, from page to ink",
  deep: "The deep: the dark theme's charcoal",
};

const MEANINGS = {
  text: "Text and titles, on page, surface, sunken, you, agent, own-message and accent-soft.",
  muted: "Quieter text: notes, a line under a name, a step's detail. On page, surface, sunken and agent-tone-soft.",
  faint: "Labels, times, ids beside a name. On page and surface. Also a tier's line.",
  line: "Hairlines: between rows, around cards.",
  "line-strong": "Buttons' borders, whose words show them, and decoration such as a canvas's dot grid. Never the only sign of anything.",
  "line-control": "A field's edge (input, select, text area, an expression): 3 to 1 on surface, page and sunken, so a person sees where to type.",
  page: "The page behind the cards.",
  surface: "Cards, the sidebar, controls. Also text on agent-tone, service-tone, bad and text (a hint).",
  sunken: "Wells inside a card, such as a decision's changes; rows and buttons under the pointer.",
  accent: "What someone can do: links, the primary button, the current page. On page, surface and accent-soft.",
  "accent-strong": "The primary button under the pointer.",
  "accent-text": "Text on accent and accent-strong: the primary button's label.",
  "accent-soft": "What's chosen: the current page, a pressed toggle, a traced value.",
  focus: "The keyboard's ring: 2px solid, 2px off the element. 3 to 1 on surface.",
  you: "Your own messages in a conversation.",
  agent: "An agent's messages in a conversation.",
  "own-message": "The product's own word in a conversation, beside the agent's and the person's.",
  "agent-tone": "What sets an agent apart from a person: its square mark, its node, the rung it's on. 3 to 1 on surface, and surface on it.",
  "agent-tone-soft": "Behind an agent's node and the rung of autonomy it's on.",
  "service-tone": "Family addition (proposed): a service identity's mark, such as a7c's skills' and a3t's service accounts'. Neutral, never the agent colour.",
  "service-tone-soft": "Family addition (proposed): behind a service identity's node.",
  viewfinder: "A camera's view, as when photographing a receipt: its own dark, the same in either theme.",
  "viewfinder-line": "Edges and the status pill on a camera's view.",
  "viewfinder-text": "Text and controls on a camera's view.",
  "viewfinder-mark": "The frame that finds a document on a camera's view: the accent's light step, in either theme.",
  paper: "A document as photographed, such as a receipt: white in either theme.",
  "paper-ink": "The print on a photographed document.",
  reads: "What a tool does: reads. On reads-bg, page and surface.",
  "reads-bg": "Behind a reads badge.",
  writes: "Writes what nobody relies on yet: a draft, a proposal, a working copy. On writes-bg.",
  "writes-bg": "Behind a writes badge.",
  changes: "Changes a record, or a system others rely on. Coral means this and failure, nothing else. On changes-bg and sunken.",
  "changes-bg": "Behind a changes badge.",
  outside: "Crosses the organisation's edge: reads content from outside, or sends data out. On outside-bg. Darker than accent in light and lighter in dark, so the two differ for colour-blind readers too.",
  "outside-bg": "Behind an outside badge.",
  own: "The product's own doing: its checks, its own tools, its signed approvals. On own-bg.",
  "own-bg": "Behind an own badge.",
  good: "Going well: active, passed, done, deployed. On good-bg.",
  "good-bg": "Behind a good badge; a right grade.",
  warn: "Waiting on someone: a decision, an approval, a grade. On warn-bg.",
  "warn-bg": "Behind a warn badge; what to know before deciding.",
  bad: "Failed, refused, denied. On bad-bg; surface on it for the danger button.",
  "bad-bg": "Behind a bad badge; a critical grade.",
  idle: "Paused, not needed, not started yet. On idle-bg.",
  "idle-bg": "Behind an idle badge, and a badge with no tone.",
};

const TYPE = [
  { name: "Headings", family: "sans", note: "A page's title is its h1, its sections' the h2, theirs the h3, on every page of every product.", styles: [
    { name: "page-title", fontSize: "1.45rem", lineHeight: 1.5, fontWeight: 650, letterSpacing: "-0.01em", sample: "Decisions", usage: "Each page's title, its h1 (text-xl). 650 draws as Plex Sans 700." },
    { name: "section-title", fontSize: "1.02rem", lineHeight: 1.5, fontWeight: 600, sample: "How it's wired", usage: "A section's title, h2." },
    { name: "subsection-title", fontSize: "0.92rem", lineHeight: 1.5, fontWeight: 600, sample: "What a tool does", usage: "A part of a section, h3, in muted." },
    { name: "card-title", fontSize: "1.05rem", lineHeight: 1.5, fontWeight: 600, sample: "assistant asks to change a due date", usage: "A decision's title, a dialog's, an agent's name where a conversation starts (text-lg)." },
    { name: "facts-title", fontSize: "1.4rem", lineHeight: 1.2, fontWeight: 700, sample: "Agent facts", usage: "The heading of an agent's facts, and nowhere else." },
    { name: "tile-figure", fontSize: "1.6rem", lineHeight: 1.5, fontWeight: 650, letterSpacing: "-0.01em", sample: "1,284 runs", usage: "A figure on a tile, in tabular numbers." },
  ] },
  { name: "Text", family: "sans", note: "Plain words at 15px, a line and a half apart.", styles: [
    { name: "body", fontSize: "15px", lineHeight: 1.5, fontWeight: 400, sample: "Changes to records wait for a person to decide at level 1.", usage: "Everything else (text-base)." },
    { name: "body-dense", fontSize: "0.94rem", lineHeight: 1.5, fontWeight: 400, sample: "Read at 14:02 by run r-8f3a2c, for Ben Okafor", usage: "Popovers and an agent's facts (text-md)." },
    { name: "supporting", fontSize: "0.9rem", lineHeight: 1.5, fontWeight: 400, sample: "What starts its runs, and the tools it may call, each through a5s's checks.", usage: "The note under a title, in muted." },
    { name: "detail-text", fontSize: "0.85rem", lineHeight: 1.5, fontWeight: 400, sample: "for Ben Okafor · billing · 2 minutes ago", usage: "A line under a name, a step's detail, a hint (text-sm), in muted." },
    { name: "label-caps", fontSize: "0.74rem", lineHeight: 1.5, fontWeight: 650, letterSpacing: "0.05em", sample: "WHAT A TOOL DOES", usage: "A label over a group, set in capitals and faint. The sidebar's groups: 0.72rem, 600, 0.06em." },
    { name: "badge-text", fontSize: "0.75rem", lineHeight: 1.5, fontWeight: 600, sample: "waiting on you", usage: "Badges, tiers and counts (text-xs)." },
  ] },
  { name: "Code", family: "mono", note: "Plex Mono for what people copy and compare.", styles: [
    { name: "code", fontSize: "0.88em", lineHeight: 1.5, fontWeight: 400, sample: "0.1.0+f0a5fd78a056 · run r-8f3a2c", usage: "Ids, versions and digests, inline: 0.88em of the text around them." },
    { name: "code-small", fontSize: "0.75rem", lineHeight: 1.5, fontWeight: 400, sample: "2026-11-15 14:05:40Z", usage: "Times on a run's timeline and in the ledger; a rung's level (text-xs)." },
  ] },
];

const SPACING = {
  "space-1": "An icon and its words; a trail's steps.", "space-2": "Inside controls; between a badge and its neighbour.",
  "space-3": "Between rows of a decision; a well's padding.", "space-4": "A popover's sides; between cards in a column.",
  "space-5": "A dialog's padding; an approval's sides.", "space-6": "Between a page's parts.", "space-8": "Around a page's empty state.",
};
const RADII = {
  "radius-sm": "Buttons, inputs, tiers, and the square marks of agents and services.",
  "radius-md": "Cards, wells, popovers, the ladder's rungs.",
  "radius-lg": "Decisions and dialogs: what floats or asks.",
  "radius-pill": "Badges, chips, meters.",
  radius: "The card's radius pages name: radius-md.",
};
const SIZES = {
  "text-xs": "Badges, times on a timeline, a rung's level.", "text-sm": "A line under a name, a step's detail, hints.",
  "text-md": "Popovers and an agent's facts.", "text-base": "The body: every page's text.",
  "text-lg": "A decision's title, a dialog's.", "text-xl": "A page's title.", "text-2xl": "The showcase's large sample.",
};

function tokensJson() {
  const { primitives, light, dark } = layers();
  const theme = themes();
  const used = {};
  for (const [name, mode] of [...Object.keys(light).map((n) => [n, "light"]), ...Object.keys(dark).map((n) => [n, "dark"])]) {
    const prim = source(theme[mode], name);
    if (prim !== name && /^#/.test(primitives[prim] ?? "")) ((used[prim] ??= { light: [], dark: [] })[mode]).push(name);
  }
  const colours = [];
  for (const [name, value] of Object.entries(primitives)) {
    if (!/^#[0-9a-f]{6}$/.test(value)) continue;
    const hue = HUES[name.split("-")[0]];
    const where = used[name] ? ["light", "dark"].filter((m) => used[name][m].length)
      .map((m) => `${m === "light" ? "Light" : "Dark"}: ${used[name][m].join(", ")}.`).join(" ") : "No meaning names it yet.";
    colours.push({ name, value, usage: `${hue}. ${where}` });
  }
  for (const name of Object.keys(light)) {
    if (!/^var\(/.test(light[name]) || !/^#/.test(theme.light[source(theme.light, name)])) continue;
    const at = (mode) => `{${source(theme[mode], name)}}`;
    if (!MEANINGS[name]) throw new Error(`--${name} has no usage note in build.mjs`);
    colours.push({ name, value: { light: at("light"), dark: at("dark") }, usage: MEANINGS[name] });
  }
  // The chart colours (css/charts.css), each with its light and dark value
  const chart = charts();
  const SERIES = ["blue", "orange", "sea green", "rose", "sky", "olive", "violet", "gold"];
  const RUNS = { "chart-done": "Runs that ended done.", "chart-short": "Runs cut short, such as by their budget.",
    "chart-failed": "Runs that failed.", "chart-open": "Runs still open." };
  for (const name of Object.keys(chart.light)) {
    const [, kind, n] = /^chart-(seq|div)?-?(\d+)?/.exec(name) ?? [];
    const usage = RUNS[name] ?? (name === "chart-other" ? "Any series past the eighth, folded into one: Ocean's mist."
      : kind === "seq" ? `Ocean Blue, step ${n} of 7, from least to most.`
        : kind === "div" ? `Ocean Orange-Blue, step ${n} of 9, from the orange end to the blue; 5 is the middle.`
          : `Series ${n}, ${SERIES[n - 1]}.${["5", "8"].includes(n) ? " Under 3 to 1 on white: label its marks in text." : ""}`);
    colours.push({ name, value: { light: chart.light[name].toLowerCase(), dark: chart.dark[name].toLowerCase() }, usage });
  }
  const families = {
    sans: primitives["font-sans"].replaceAll("'", "\""),
    mono: primitives["font-mono"].replaceAll("'", "\""),
  };
  const pick = (notes) => Object.entries(notes).map(([name, usage]) => ({ name, value: primitives[name], usage }));
  return {
    name: "Ocean",
    version: 1,
    color: { themes: [{ id: "light", name: "Light" }, { id: "dark", name: "Dark" }], tokens: colours },
    type: {
      fonts: faces().map(({ family, weight, style, file }) => ({ family, file, weight, style })),
      families,
      groups: TYPE,
    },
    spacing: { note: "Steps of a quarter of a rem.", tokens: pick(SPACING) },
    radius: {
      note: "People are round; agents and services are rounded squares; what floats is rounder than what sits.",
      tokens: [...pick(Object.fromEntries(Object.entries(RADII).filter(([n]) => n !== "radius"))),
        { name: "radius", value: primitives[source(theme.light, "radius")], usage: RADII.radius }],
    },
    shadow: {
      note: "Cards rest on a hairline shadow in light and none in dark; what floats is raised in both.",
      tokens: [
        { name: "shadow", value: { light: light.shadow, dark: dark.shadow }, usage: "Cards and sections at rest." },
        { name: "shadow-raised", value: { light: light["shadow-raised"], dark: dark["shadow-raised"] }, usage: "Decisions, dialogs and popovers." },
      ],
    },
    fontSize: { note: "The scale every style above is cut from; pages name these as var(--text-sm) and so on.", tokens: pick(SIZES) },
  };
}

const tokens = tokensJson();
writeFileSync(new URL("tokens.json", ROOT), `${JSON.stringify(tokens, null, 2)}\n`);

// The design system: this repo's docs, pieces and fonts, as claude.ai's Design System keeps them
const out = new URL("dist/design-system/", ROOT);
rmSync(out, { recursive: true, force: true });
const put = (path, text) => {
  const at = new URL(path, out);
  mkdirSync(new URL(".", at), { recursive: true });
  writeFileSync(at, text);
};
const copy = (from, to) => {
  const at = new URL(to, out);
  mkdirSync(new URL(".", at), { recursive: true });
  copyFileSync(new URL(from, ROOT), at);
};
const git = (args) => { try { return execSync(`git ${args}`, { cwd: ROOT, encoding: "utf8" }).trim(); } catch { return ""; } };

const untitled = (md) => md.replace(/^# [^\n]*\n+/, "");
// Links between the docs point into this repo; in the design system, the sections stand alone
const unlinked = (md) => md.replace(/\[([^\]]+)\]\((?!https?:)[^)]+\)/g, "$1");
put("project/README.md", `${unlinked(untitled(read("docs/design.md")))}
## Not synced

- Every preview is a static rendition: plain markup, styled by \`components/bundle.css\`, which is this repo's \`css/components.css\`. The React pieces stay in a5s (\`studio/src/design\`) and aren't built here.
- What the family adds (services, tiers, gates, the canvas, the workbench, the ledger's lines, the conversation kit and its Teams cards, and a4a's issues, boards and plans) is proposed: no product draws it yet.
- The screens are drawn from the previews, not taken from a product.
`);
put("project/platforms.md", unlinked(read("docs/platforms.md")));
put("project/conversation.md", unlinked(read("docs/conversation.md")));
// The conversation kit's cards for Microsoft Teams, to download
put("project/assets/Teams/README.md", unlinked(read("teams/README.md")));
for (const card of readdirSync(new URL("teams/cards/", ROOT)).filter((f) => f.endsWith(".json"))) copy(`teams/cards/${card}`, `project/assets/Teams/${card}`);
put("project/products.md", unlinked(read("docs/products.md")));
put("project/tokens.json", `${JSON.stringify({ ...tokens, meta: {
  source: "github", repo: "sreent/ocean", ref: `${git("rev-parse --abbrev-ref HEAD")}@${git("rev-parse --short HEAD")}`,
  paths: { tokens: ["css/tokens.css"], fonts: ["fonts"], assets: ["icons", "docs/images"], docs: ["docs/design.md", "docs/products.md", "docs/platforms.md", "docs/conversation.md"] },
  pulled: "from sreent/a5s (src/a5s/core/webchat/app.css, studio/src/design)", synced: new Date().toISOString().slice(0, 10),
} }, null, 2)}\n`);
for (const { file } of faces()) copy(file, `project/${file}`);
put("project/components/bundle.css", `${read("css/components.css")}\n${read("components/showcase.css")}`);
copy("components/index.d.ts", "project/components/index.d.ts");
const stylesheets = /^\s*<link rel="stylesheet" href="\.\.\/(?:\.\.\/css\/[\w.-]+|showcase)\.css">\n/gm;
for (const piece of readdirSync(new URL("components/", ROOT), { withFileTypes: true }).filter((d) => d.isDirectory())) {
  for (const file of readdirSync(new URL(`components/${piece.name}/`, ROOT))) {
    const text = read(`components/${piece.name}/${file}`);
    put(`project/components/${piece.name}/${file}`, file === "preview.html" ? text.replace(stylesheets, "") : text);
  }
}
put("project/assets/Icons/README.md", read("icons/README.md"));
put("project/assets/Screens/README.md", read("docs/images/README.md"));
const ink = colour(themes(read("css/tokens.css")).light, "text");
for (const icon of readdirSync(new URL("icons/", ROOT)).filter((f) => f.endsWith(".svg"))) {
  // An <img> can't take currentColor, so the design system's copies are inked in light's --text
  put(`uploads/Icons/${icon}`, read(`icons/${icon}`).replace('stroke="currentColor"', `stroke="${ink}"`));
}
for (const shot of readdirSync(new URL("docs/images/", ROOT)).filter((f) => f.endsWith(".png"))) {
  copy(`docs/images/${shot}`, `uploads/Screens/${shot}`);
}
console.log(`tokens.json: ${tokens.color.tokens.length} colours, ${tokens.type.groups.reduce((n, g) => n + g.styles.length, 0)} type styles. ` +
  `dist/design-system/ built.`);
