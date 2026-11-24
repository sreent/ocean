# Ocean

Ocean is the one look a5s, a7c, a3t and a4a share. It's calm, with colour only where it means something, and it makes plain what an agent or an automation may do, what it did, and who decides. Its colours mix those of two makers of software for mathematics, MathWorks and Maplesoft, taken where the two meet: cerulean for what someone can do, teal for agents, a maple red for any change to a record, and green for what's going well, on neutral greys. The palette is neither maker's brand, and isn't any product's. An organisation's own colours replace the primitives, in one place, for every product at once.

## Voice

Write from the reader's side, in plain words, the way the pages already do.

- Say what something means for the person reading: "Changes to records wait for a person to decide at level 1", not the machinery behind it.
- Buttons are verbs that say what happens: **Approve**, **Decline**, **Publish it**, **Keep it**, **Delete it**. What follows says what happened: "You approved it." "The draft is gone." The page's status line says it, and a toast says it once more at the foot of the window, with **Undo** while it can still be undone.
- Before what can't be undone, ask a question that names the thing, and say what goes with it: "Delete the draft of scout?" "Its folder and its test cases go with it, and nobody can bring them back." The safe answer comes first and has the focus.
- A decision gives its reason after **Why:**, in the words code worked out when it was asked for, never the agent's own.
- Each page and each card has one thing to do, and only that is the primary button.
- Name people by name, and roles in words ("Owner of billing") with the id beside them in `--faint`. Agents go by their id in lower case ("assistant", "watcher"), and are "it". An app's own agent goes by the app's name ("Expenses").
- Product names are lower case: a5s, a7c, a3t, a4a.
- Headings are sentence case and say what's there: "How it's wired", "What you see of it, and why".
- A status line starts with a capital, whatever the server's words.
- Times as people read them: today's alone, older ones with their day, "2 minutes ago" on a card. The ledger gives its times to the second, in UTC.
- Numbers count something: "3 model calls", "4.2k tokens, 61% cached", "48 graded, 96% right".
- No emoji, and no exclamation marks.

## Colour

### Two layers

`css/tokens.css` holds the tokens in two layers, and everything else names the second.

| Layer | What it holds | Examples |
| --- | --- | --- |
| Primitives | The palette, type, spacing and radii. A brand changes these alone. | `--ocean-600`, `--space-4`, `--radius-md` |
| Meanings | What each colour is for, in light and dark. Every other style names only these. | `--text`, `--accent`, `--agent-tone`, `--changes` |

- Name meanings in every rule: `--text` on `--surface`, a badge's `--changes` on `--changes-bg`. Never a primitive, never a colour of a page's own.
- The page is `--page`. Cards and the sidebar are `--surface`, with a 1px `--line` around them. Wells inside a card are `--sunken`.
- `--accent` is for what someone can do: links, the primary button, the current page. What's chosen sits on `--accent-soft`, in `--accent`, at 600.
- A field's edge (an input, a select, a text area, an expression) is `--line-control`, 3 to 1 on what it sits on, so a person sees where to type. Buttons keep `--line-strong`: their words show them.
- `--outside` sits darker than `--accent` in light and lighter in dark, so the organisation's edge and what someone can do differ by more than hue.
- Dark follows the device, with the same meanings over the deep neutrals.

### Where the colours come from

MathWorks' colours and Maple's agree more than they differ: both have a cerulean blue and a bright sky blue, a teal, a green, a purple and neutral greys. Ocean takes each hue from between theirs, and fits each step's lightness to the contrast its meanings need, so the hues are theirs and the lightness is Ocean's. Where they differ, in their warm colours, each gives one meaning: a maple red, Maplesoft's red turned toward MATLAB's orange, marks a change, and a golden amber between MATLAB's orange and Maple's brown marks what's written and waiting. In dark, waiting is MATLAB's yellow as it is.

| Primitive | What it's for | MathWorks, MATLAB | Maplesoft, Maple | Ocean, light / dark |
| --- | --- | --- | --- | --- |
| `ocean` | What someone can do | MathWorks' blue `#015696`, `#0076a8`; MATLAB's light blue `#2fbeef` | `#006699`, `#004f79`; its sky `#00aaff` | `#0369a1` / the sky, `#19aaf0` |
| `lagoon` | Agents; the product's own doing | the reef palette's teal `#00a3a3` | the plots' teal `#00786a` | `#007b72` / `#3ecdc0` |
| `coral` | A change to a record; what failed | orange `#dd5400`, the old dark red `#a2142f` | Maplesoft's red `#ed4124`, the plots' burgundy `#78000e` | `#b93d21` / `#ef8168` |
| `amber` | Written, not yet relied on; waiting on someone | orange `#dd5400`; yellow `#edb120`, as it is in dark | the plots' brown `#784c00`, orange `#ff931e` | `#955900` / `#edb120` |
| `kelp` | Going well | green `#3baa32` | the plots' green `#00783f` | `#007d51` / `#59e1a2` |
| `violet` | The organisation's edge | purple `#8516d1` | the plots' violet `#604191` | `#622f99` / `#cdb8f0` |
| `mist`, `deep` | The neutrals, from page to ink | the figure's grey `#f0f0f0`, its axes `#262626` | greys `#f5f5f5`, `#e1e1e1`, charcoal `#2a2a2a` | the page `#f5f6f7`, wells the figure's grey `#f0f0f0`, ink `#25272a` / charcoal `#14181c` to `#ebedef`, with a breath of the cerulean |

The makers' values are MATLAB's line colours (`colororder`, R2025a and before), its `reef` palette and its classic figure, Maple's default plot colours (Niagara, `plots:-setcolors`), Maplesoft's own pages, and MathWorks' blue as Cleve Moler's blog sampled it from the logo (`#015696`) and as Brandfetch lists it (`#0076a8`).

### Zen, stylish, scientific: just right

Ocean's colours are chosen to be three things at once, and to stop at just right:

- Zen: calm first. Colour only where it means something, the tones near one lightness, the greys airy, and nothing louder than its meaning.
- Stylish: a few hues that sit together, each taken from the makers' palettes rather than made up.
- Scientific: what's claimed is measured. `scripts/check.mjs` holds the contrast, a colour-blind validator the chart colours, and how far apart the meanings sit is measured, below.
- Just right: chosen by eye, then measured, with every number within reach of what Ocean asks rather than each pushed as far as it goes. Pushed, the amber turned a muddy brown and the reds uneven. Where two tones meet for a colour-blind reader, the shape and the word beside them tell them apart (The grammar).

How far apart the meanings sit for colour-blind readers, against Ocean's earlier palette: ΔE in OKLab ×100, the worse of protanopia and deuteranopia (Machado 2009, at full severity). 8 or more reads apart at a glance; under 6, the shape and the word carry it.

| Pair | Earlier, light / dark | Now, light / dark |
| --- | --- | --- |
| Going well, and failed | 7.0 / 3.0 | 7.7 / 9.9 |
| A change, and plain text | 21.6 / 16.5 | 19.8 / 23.2 |
| Going well, and waiting | 6.3 / 6.3 | 7.8 / 11.7 |
| A change, and a draft | 2.7 / 7.1 | 2.0 / 10.2 |
| Going well, and an agent | 6.0 / 6.3 | 4.9 / 8.0 |
| What someone can do, and an agent | 13.0 / 10.2 | 10.2 / 13.5 |
| What someone can do, and the organisation's edge | 9.5 / 10.3 | 7.6 / 8.1 |

### The grammar

These meanings are the products' shared grammar, the same on every surface: badges, a run's timeline, the map of an agent or a workflow, a decision's stripe, the ledger.

| What a tool or step does | Token | How something stands | Token |
| --- | --- | --- | --- |
| Reads | `--reads` | Going well | `--good` |
| Writes what nobody relies on yet: a draft, a proposal, a working copy | `--writes` | Waiting on someone | `--warn` |
| Changes a record, or a system others rely on | `--changes` | Failed, refused or denied | `--bad` |
| Crosses the organisation's edge: reads from outside, or sends out | `--outside` | Paused, not needed, not started | `--idle` |
| The product's own doing: its checks, its own tools | `--own` | | |

- Coral means a change to a record, or a failure, and nothing else. Amber means written but not yet relied on, or waiting on someone.
- How something stands has a shape before its word as well as a colour: a tick for `--good`, a clock for `--warn`, a cross for `--bad`, a pause for `--idle`. The tones are near one lightness, so the shape is what tells them apart for colour-blind readers.
- Say it in words too. A badge always carries its word ("changes due dates", "waiting on you"), so colour is never the only sign.
- Each tone has a `-bg` partner for badges: `--changes` on `--changes-bg`.
- The palette is closed. A product never adds a colour for a new state: it finds the meaning that fits, or the family adds one for every product.

### People, agents and services

- People are round, with their initials, on `--sunken`.
- Agents are rounded squares (`--radius-sm`) in `--agent-tone`, with the agent's mark in `--surface`. People never are, so a page shows at a glance whether a person or an agent did something.
- Services, such as a7c's skills' identities and a3t's service accounts, are rounded squares in `--service-tone`, with the tool's mark. They act, but they don't decide for themselves, so they're never the agent colour.
- The product's own doing is `--own`. In a conversation, its messages sit on `--own-message`, an agent's on `--agent`, and yours on `--you`.
- Wherever an agent speaks or acts, it's marked by its mark and its name, never by a sparkle. A sparkle says magic, and an agent answers for what it does ([`conversation.md`](conversation.md)).

## Charts

`css/charts.css` holds the chart colours, light and dark, and `charts/palettes.json` the same as data, for tools that can't read CSS.

- Series take `--chart-1` to `--chart-8` in order, never cycled; past eight, the rest fold into `--chart-other`. Series 1 is Ocean's blue, and no series is coral, so no line reads as a failure.
- The order mixes the makers' plots: MATLAB's blue and orange first, as its plots begin, then sea green, Maple's rose, the sky both use, Maple's olive, violet and MATLAB's gold. It was chosen by the colour-blind separation of neighbours, in light and dark at once.
- A chart of how things stood takes `--chart-done`, `--chart-short`, `--chart-failed` and `--chart-open` and nothing else, with their words. Never a series colour for a state, nor a state's colour for a series.
- In light, series 5 and 8 (sky and gold) are under 3 to 1 on white: label their marks in `--text`, and keep the figures beside the chart as a table. Scatter plots and maps use the first five series in light, four in dark.
- One measure from least to most is Ocean Blue (`--chart-seq-1` to `-7`), Maplesoft's sky deepening to MathWorks' blue; above and below a middle is Ocean Orange-Blue (`--chart-div-1` to `-9`), MATLAB's orange and blue either side of grey.

## Type

- IBM Plex Sans for text, and IBM Plex Mono for ids, versions, digests and times people compare. Both are bundled in `fonts/`, under the SIL Open Font License, and pages load fonts from the product alone, so nothing loads from outside, which matters on premises. IBM Plex Sans Thai, drawn to match, is bundled with them for Thai letters alone, so a page loads it only where it has some. A page in Thai says so, `lang="th"`, which gives its lines more room for the vowels and tones Thai stacks above and below its letters. The letters Vietnamese adds to Latin (ơ, ư, đ, and the vowels with tone marks) come from the same Plex Sans and Plex Mono, as subsets (Fontsource's, 5.3.0) defined after their Latin faces with a `unicode-range`, so a Vietnamese word is drawn in one typeface, and a page loads them only where it has some.
- The body is 15px (`--text-base`), a line and a half apart. Sizes come from the scale `--text-xs` to `--text-2xl`, and a rem is the body's 15px.
- A page's title is its one h1 (1.45rem, 650), its sections' titles are h2 (1.02rem, 600), and theirs are h3 (0.92rem, 600, in `--muted`), the studio's pages and the server's alike.
- A note under a title is 0.9rem in `--muted`, no wider than 52rem. A label over a group is 0.74rem at 650, in capitals 0.05em apart, in `--faint`.
- Weights: 400 for text, 500 for buttons, 600 for names and titles, 650 for a page's title and labels (Plex draws it at 700), and 700 for an agent's facts.
- Figures that line up use tabular numbers.

## Space and layout

- Spacing steps by a quarter of a rem, from `--space-1` (0.25rem) to `--space-8` (2rem). Lay out groups with flex or grid and `gap`.
- The frame: a 236px sidebar of the pages someone may use, under Work, Build, Decide and Oversee, beside the page. The page's header is `--surface` with a `--line` under it, and `main` is at most 76rem wide, padded 1.75rem 2rem 3rem.
- Cards are padded 1.25rem 1.5rem and sit 1rem apart. Two side by side need 24rem each.
- Under 760px the sidebar becomes a row of each page's icon, and screen readers still say each page's name.
- Decisions are a phone's width at most (28rem): a column on a phone, side by side where there's room.
- On a wide screen a conversation is 44rem wide at most, and what's said in it 34rem, so its lines stay short enough to read. The agent's cards are a phone's width at most.
- The ladder and the path stack wherever they're narrow, by container query rather than by the window.
- Every canvas has its list: the same steps, in order, for the keyboard and for a phone. A narrow screen starts with the list.

## Shape and depth

- `--radius-sm` (6px) for buttons, inputs, tiers and the marks of agents and services; `--radius-md` (10px) for cards, wells and popovers; `--radius-lg` (14px) for decisions and dialogs; `--radius-pill` for badges, chips and meters. People are circles, with their initials. A circle with a mark in it is a stage or a state (a tick, a clock), or what hangs from an agent on a canvas. A button is never a circle.
- Cards rest on `--shadow` in light and on nothing in dark. What floats over the page, such as popovers, dialogs and decisions, takes `--shadow-raised`.
- Line tells how something stands. Dashed is what isn't in force yet: an instance not in the settings yet, a rung beyond the current one, someone's own tier, a value an agent worked out until a person checks it. Faded to 0.42 is what a run didn't use, with its words still readable in `--muted`.

## Motion

Two movements only, and only when the person hasn't asked for less motion. What opens over the page, such as a popover, a dialog, a hint, a sheet or a toast, rises 4px into place over 120ms, easing out. Nothing else moves: what's loading keeps the shape it will have, still, and never shimmers. The work an agent has under way turns until it's done.

## States

- Focus: 2px solid `--focus`, 2px off the element, on everything a keyboard reaches.
- Under the pointer: `--sunken` behind rows and buttons. The primary button darkens to `--accent-strong`.
- Chosen or pressed: `--accent-soft` behind `--accent`, at 600 (`aria-current`, `aria-pressed`).
- Disabled: 0.55 opacity, and no pointer.
- Loading: the shape of what's coming, in `--sunken`, where it will be (a skeleton), with "Loading…" in words for screen readers; only the first time, since what a page showed stays while it loads again.
- Danger: the button's word and border in `--bad`. Only the confirming button in a dialog is filled with `--bad`, in `--surface`.

## Iconography

- Lines on a 24-unit square: stroke 1.8, round caps and joins, no fill, in `currentColor`, so an icon takes its text's colour. 1.15rem in the sidebar, 0.9 to 1.1rem in marks and badges.
- The set is in `icons/`, 38 of them. The agent's mark is for agents alone. The shield with a tick (`audit`) is for what's signed and kept in the ledger, and for the product's own messages. The tool is for tools and services.
- No icon font and no emoji. A new icon is drawn the same way, on the same square.

## What it's held to

`scripts/check.mjs` holds every product to what a5s's tests began:

- Every colour that carries text reads against what it sits on at 4.5 to 1, as WCAG's AA asks, and every mark at 3 to 1: focus rings, the marks of agents and services, a step's icon and the canvas's curves, a field's edge, a chart's marks, and the camera's frame. In light and in dark. A brand that reads less well fails before anyone sees it.
- The meanings name only primitives, so a brand is one change in one place, and the pieces name only meanings.
- Nothing loads from outside: no address off the product in the CSS, and every face is a font file here.
- The chart palettes as data agree with `css/charts.css`, and the Teams cards are Adaptive Cards made only of what Teams draws.

Each product's browser tests hold its pages to the rest:

- axe finds nothing amiss in light or dark, as wide as a desktop and as a phone, by WCAG's rules and its best practices.
- Each piece works from the keyboard. A traced value opens and closes with the focus back on it, a hint shows to whoever tabs to it, and asking first starts on the safe answer and closes with Escape.
- No page writes an error to the console, such as a style its policy refused. Pages load only their own scripts and styles (`default-src 'none'`, `font-src 'self'`), inject no inline styles, and ask first in the browser's own dialog.

## To change the brand

1. Change the primitives in `css/tokens.css`: the palette, and the fonts in `fonts/` if the brand has its own.
2. Run `node scripts/check.mjs`, and adjust each colour it names until it reads.
3. Run `node scripts/build.mjs` for `tokens.json`, and take the new release in each product.
