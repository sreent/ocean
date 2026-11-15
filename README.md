# Ocean

Ocean is the look a5s, a7c and a3t share: calm, with colour only where it means something, so a page makes plain what an agent or an automation may do, what it did, and who decides. It began in [a5s](https://github.com/sreent/a5s), and this repo is now its one source.

![An agent's page in a5s's studio, in Ocean: the sidebar, and the map of how the agent is wired, its tools striped by what they do](docs/images/a5s-studio-agent.png)

## What's here

| Path | What |
| --- | --- |
| [`css/tokens.css`](css/tokens.css) | The tokens in two layers: the primitives (palette, type, spacing, radii), which a brand changes, and the meanings (what each colour is for, in light and dark), which everything else names |
| [`css/components.css`](css/components.css) | The pieces' look: the frame, controls, badges, a decision, an agent's facts, the ladder of autonomy, a run as time, the map's nodes, the family's additions, and the conversation kit |
| [`fonts/`](fonts) | IBM Plex Sans (400 to 700) and Plex Mono (400, 500), with their licence |
| [`icons/`](icons) | The 28 line icons, on a 24-unit square, in `currentColor` |
| [`css/charts.css`](css/charts.css) | The chart colours: eight series and Other, Ocean Blue, Ocean Orange-Blue, and how runs end, in light and dark |
| [`charts/`](charts) | The same palettes for Tableau (`Preferences.tps`), and as data |
| [`tokens.json`](tokens.json) | The tokens as data, built from `css/tokens.css`, for tools such as a Tailwind theme |
| [`components/`](components) | Each piece: what it's for, what it takes, and a preview of it as pages draw it |
| [`docs/design.md`](docs/design.md) | The brand book: voice, colour and its grammar, type, layout, icons, and what it's held to |
| [`docs/products.md`](docs/products.md) | Across a5s, a7c and a3t: the same words, the same look, and what each product changes |
| [`docs/platforms.md`](docs/platforms.md) | Where people build, decide and use: the workbench, pages and the runtime, the kits each needs, and the plan for rebuilding Ocean here |
| [`docs/conversation.md`](docs/conversation.md) | The conversation kit, for outcomes rather than apps: its seven moments, its rules, what a capability gives it, and its pieces |
| [`scripts/check.mjs`](scripts/check.mjs) | The checks: contrast in light and dark, meanings that name only primitives, nothing loaded from outside |

## Using it

Load the two stylesheets, tokens first, and name meanings in your own styles:

```html
<link rel="stylesheet" href="ocean/css/tokens.css">
<link rel="stylesheet" href="ocean/css/components.css">
```

```css
.note { color: var(--muted); }
.held { background: var(--changes-bg); color: var(--changes); }
```

a5s serves the files itself, from a release. a7c and a3t take them as a dependency, pinned to a commit:

```json
"@sreent/ocean": "github:sreent/ocean#<commit>"
```

[`docs/products.md`](docs/products.md) says what each product changes, including a3t's Tailwind theme.

## Checking it

```bash
node scripts/check.mjs
```

A product that changes the brand checks its own tokens:

```bash
node node_modules/@sreent/ocean/scripts/check.mjs path/to/tokens.css
```

```bash
node scripts/build.mjs
```

The build writes `tokens.json`, and `dist/design-system/` for the Ocean design system on claude.ai.

## How it looks today

The studio in a5s, in Ocean: an agent's runs over time, a run's path through its agent's map, and the catalogue of agents.

![An instance's page: its figures, runs by day, and how runs ended](docs/images/a5s-studio-dashboard.png)
![A run's page: what started it, and its path through the agent's map](docs/images/a5s-studio-run.png)
![The catalogue of agents, each card led by what it does](docs/images/a5s-studio-catalogue.png)

IBM Plex is © IBM Corp., under the SIL Open Font License 1.1 ([`fonts/`](fonts)).
