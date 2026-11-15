# Ocean

Ocean is the one look a5s, a7c and a3t share. It's calm, with colour only where it means something, and it makes plain what an agent or an automation may do, what it did, and who decides. It takes a hint of the sea: deep blues for what someone can do, lagoon teal for agents, coral for any change to a record, and kelp green for what's going well. The palette isn't anyone's brand. An organisation's own colours replace the primitives, in one place, for all three products at once.

## Voice

Write from the reader's side, in plain words, the way the pages already do.

- Say what something means for the person reading: "Changes to records wait for a person to decide at level 1", not the machinery behind it.
- Buttons are verbs that say what happens: **Approve**, **Decline**, **Publish it**, **Keep it**, **Delete it**. What follows says what happened: "You approved it." "The draft is gone."
- Before what can't be undone, ask a question that names the thing, and say what goes with it: "Delete the draft of scout?" "Its folder and its test cases go with it, and nobody can bring them back." The safe answer comes first and has the focus.
- A decision gives its reason after **Why:**, in the words code worked out when it was asked for, never the agent's own.
- Each page and each card has one thing to do, and only that is the primary button.
- Name people by name, and roles in words ("Owner of billing") with the id beside them in `--faint`. Agents go by their id in lower case ("assistant", "watcher"), and are "it".
- Product names are lower case: a5s, a7c, a3t.
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
- The palette is closed. A product never adds a colour for a new state: it finds the meaning that fits, or the family adds one for all three products.

### People, agents and services

- People are round, with their initials, on `--sunken`.
- Agents are rounded squares (`--radius-sm`) in `--agent-tone`, with the agent's mark in `--surface`. People never are, so a page shows at a glance whether a person or an agent did something.
- Services, such as a7c's skills' identities and a3t's service accounts, are rounded squares in `--service-tone`, with the tool's mark. They act, but they don't decide for themselves, so they're never the agent colour.
- The product's own doing is `--own`. In a conversation, its messages sit on `--own-message`, an agent's on `--agent`, and yours on `--you`.
- Wherever an agent speaks or acts, it's marked by its mark and its name, never by a sparkle. A sparkle says magic, and an agent answers for what it does ([`conversation.md`](conversation.md)).

## Charts

`css/charts.css` holds the chart colours, light and dark, and `charts/Preferences.tps` the same for Tableau.

- Series take `--chart-1` to `--chart-8` in order, never cycled; past eight, the rest fold into `--chart-other`. Series 1 is Ocean's blue, and no series is coral, so no line reads as a failure.
- A chart of how things stood takes `--chart-done`, `--chart-short`, `--chart-failed` and `--chart-open` and nothing else, with their words. Never a series colour for a state, nor a state's colour for a series.
- In light, series 5, 7 and 8 are under 3 to 1 on white: label their marks in `--text`, and keep the figures beside the chart as a table. Scatter plots and maps use the first five series in light, four in dark.
- One measure from least to most is Ocean Blue (`--chart-seq-1` to `-7`); above and below a middle is Ocean Orange-Blue (`--chart-div-1` to `-9`).

## Type

- IBM Plex Sans for text, and IBM Plex Mono for ids, versions, digests and times people compare. Both are bundled in `fonts/`, under the SIL Open Font License, and pages load fonts from the product alone, so nothing loads from outside, which matters on premises. Plex has a Thai family designed to match, for when a product needs one.
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
- A conversation's lines stay short enough to read: 46rem, or 85% of the page, at most.
- The ladder and the path stack wherever they're narrow, by container query rather than by the window.

## Shape and depth

- `--radius-sm` (6px) for buttons, inputs, tiers and the marks of agents and services; `--radius-md` (10px) for cards, wells and popovers; `--radius-lg` (14px) for decisions and dialogs; `--radius-pill` for badges, chips and meters. People are circles.
- Cards rest on `--shadow` in light and on nothing in dark. What floats over the page, such as popovers, dialogs and decisions, takes `--shadow-raised`.
- Line tells how something stands. Dashed is what isn't in force yet: an instance not in the settings yet, a rung beyond the current one, someone's own tier, a value an agent worked out until a person checks it. Faded to 0.42 is what a run didn't use.

## Motion

Two movements only, and only when the person hasn't asked for less motion. What opens over the page, such as a popover, a dialog, a hint or a sheet, rises 4px into place over 120ms, easing out. The work an agent has under way turns until it's done.

## States

- Focus: 2px solid `--focus`, 2px off the element, on everything a keyboard reaches.
- Under the pointer: `--sunken` behind rows and buttons. The primary button darkens to `--accent-strong`.
- Chosen or pressed: `--accent-soft` behind `--accent`, at 600 (`aria-current`, `aria-pressed`).
- Disabled: 0.55 opacity, and no pointer.
- Danger: the button's word and border in `--bad`. Only the confirming button in a dialog is filled with `--bad`, in `--surface`.

## Iconography

- Lines on a 24-unit square: stroke 1.8, round caps and joins, no fill, in `currentColor`, so an icon takes its text's colour. 1.15rem in the sidebar, 0.9 to 1.1rem in marks and badges.
- The set is in `icons/`, 28 of them. The agent's mark is for agents alone. The shield with a tick (`audit`) is for what's signed and kept in the ledger, and for the product's own messages. The tool is for tools and services.
- No icon font and no emoji. A new icon is drawn the same way, on the same square.

## What it's held to

`scripts/check.mjs` holds every product to what a5s's tests began:

- Every colour that carries text reads against what it sits on at 4.5 to 1, as WCAG's AA asks, and focus rings and the marks of agents and services at 3 to 1, in light and in dark. A brand that reads less well fails before anyone sees it.
- The meanings name only primitives, so a brand is one change in one place, and the pieces name only meanings.
- Nothing loads from outside: no address off the product in the CSS, and every face is a font file here.

Each product's browser tests hold its pages to the rest:

- axe finds nothing amiss in light or dark, as wide as a desktop and as a phone, by WCAG's rules and its best practices.
- Each piece works from the keyboard. A traced value opens and closes with the focus back on it, a hint shows to whoever tabs to it, and asking first starts on the safe answer and closes with Escape.
- No page writes an error to the console, such as a style its policy refused. Pages load only their own scripts and styles (`default-src 'none'`, `font-src 'self'`), inject no inline styles, and ask first in the browser's own dialog.

## To change the brand

1. Change the primitives in `css/tokens.css`: the palette, and the fonts in `fonts/` if the brand has its own.
2. Run `node scripts/check.mjs`, and adjust each colour it names until it reads.
3. Run `node scripts/build.mjs` for `tokens.json`, and take the new release in each product.
