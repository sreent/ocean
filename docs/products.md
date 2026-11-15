# Across a5s, a7c and a3t

a5s, a7c and a3t are three platforms about the same thing: work that people, agents and automations do under rules, where the record of who did what matters as much as the work. a7c automates work as workflows on a canvas, as n8n does, and lets agents find and fix what goes wrong. a5s runs agents, and shows people what each may do and did. a3t builds apps without code: forms, views, pages and processes, under governance (its code is in the `sreent/joget` repository). Ocean began in a5s. These are the rules for the three to look like one family, and what each changes to get there. [`platforms.md`](platforms.md) says how Ocean looks where people build, where they decide, and where they use what was built.

## The family's rules

1. One palette and one grammar. Coral is a change to a record in every product, and an agent is a lagoon square in every product.
2. A product is told apart by its name and its mark (its first two characters on the accent square), never by a colour of its own: any hue it took would collide with a meaning.
3. One frame: a sidebar of the pages someone may use, under the same four headings, Work, Build, Decide and Oversee, with the page beside it.
4. The palette is closed. A new state finds its meaning, and a new meaning is added to Ocean, for all three.
5. One brand change, in one place. An organisation's colours replace the primitives in `css/tokens.css`, and all three products take them.
6. The same checks: `scripts/check.mjs` in each product's CI, and axe on every page.
7. One source, so one truth. A product takes its look from this repo, at a commit, and anything new or changed in it is made here first, never in a product's own stylesheets: a piece a product needs is drawn here, for the three, and the product takes the commit that has it.

## The same words, the same look

Each product's words, and what Ocean draws them with. An empty cell is a word the product doesn't have yet.

| What | a5s | a7c | a3t | Ocean |
| --- | --- | --- | --- | --- |
| A step that reads | a tool that reads | risk `read` | `record.read` | `--reads`, Badge |
| A step that writes what nobody relies on yet | writes, such as a draft | a draft; a proposal in a case | a working copy in someone's own space | `--writes` |
| A step that changes a record | changes a record | risk `change` | `record.update`, `record.delete`, a deploy to Prod | `--changes` |
| A step that crosses the edge | sends outside; reads outside content | risk `send-out`; outside content read | `record.export`; a connection out | `--outside` |
| The product's own doing | a5s's own; a5s's checks | a7c's checks and policies | the platform's own (actor `system`) | `--own` |
| Going well | active, done | passed | healthy, merged, deployed | `--good` |
| Waiting on someone | waiting on you, held | ask: waiting for a person | in review, waiting for approval | `--warn` |
| Failed | failed, refused | failed, denied | failed, denied, rolled back | `--bad` |
| Paused | paused | none, not needed | frozen | `--idle` |
| A person | a person | a person | a user | Who, round |
| An agent | an agent | an agent; the copilot | | Who, the lagoon square |
| A service | | a skill's service identity | a service account | Who, the service square (proposed) |
| How far an agent may go | levels 0 to 2 | observe, suggest, act after approval, act | | AutonomyLadder |
| Where it runs | the sandbox; an instance | personal, team and production tiers | a personal Sandbox; a team's Preview, Staging and Prod | TierBadge (proposed) |
| The way to work | draft, publish, sign, deploy, watch | draft, tests, promotion up the tiers | working copy, change request, preview, release, Prod | JourneyPath |
| A decision | a decision; a version of the settings | an approval; a promotion | a change request's approval; a deploy's | ApprovalCard |
| What someone asks for, in a conversation | the chat; a task | a workflow's ask of a person | an app, in conversation | The conversation kit: Talk, Draft, Question, SignOff, Status (proposed) |
| What must pass first | what stops a release | a promotion's gates; test cases | a change request's checks | GateList (proposed) |
| Steps on a canvas | the agent's map | the builder's canvas | the process designer | FlowNode, the map's node |
| Where a value comes from | a traced value | a finding's evidence | a record's history | Traced; in a conversation, Source |
| The record of who did what | the ledger, the audit trail | the audit log | the sealed audit log | AuditEntry (proposed) |

### Autonomy, as one ladder

a5s and a7c both let agents earn autonomy. The family draws it as one ladder in the same words, and a product shows the rungs it has.

| Rung | What the agent does | a5s | a7c |
| --- | --- | --- | --- |
| Observes | Reads, and changes nothing | | observe |
| Suggests | Reads and drafts; a person does the rest | level 0 | suggest |
| Asks | Changes wait for a person's yes | level 1 | act after approval |
| Acts | Changes on its own, within limits, sampled and graded | level 2 | act |

a5s keeps its level numbers. The words and the look are the family's.

Whatever the rung, an agent never sends what vouches for something in a person's name, or what can't be taken back: a person signs those off. When it acts on its own, it says so at once, with Undo ([`conversation.md`](conversation.md)).

### Where it runs, as line

Where something runs is told by line rather than colour, so it never competes with the grammar. Someone's own space is dashed, as everything not yet in force is. A team's is solid. Production is drawn in ink, twice as heavy.

## What each product changes

### a5s

a5s takes Ocean from here, at a commit (its `deploy/ocean.sh`, pinned in `src/a5s/core/webchat/ocean/ocean.json`, which its tests hold the copy to): its pages and its studio load `css/tokens.css`, `css/components.css` and `fonts/` from that copy, and its studio `css/charts.css`. Its pages' policy stays as it is, since the files are a5s's own. What's done, and what's to do:

- Done: its chat's own messages take `--own-message`; its runs chart takes `--chart-done`, `--chart-short`, `--chart-failed` and `--chart-open`; its fields' edges and `--outside` come from `css/tokens.css`.
- Done: its agent's map is FlowNode on React Flow, laid out as n8n lays out a canvas, on the agent's page, a run's page and the draft's designer alike, with React Flow's `base.css` and Ocean's names: `refused`, `.fd-palette`, FlowList's `flow-listing`, `flow-row`, `flow-inline` and `flow-views`, and an agent its instance may ask as `agent-tone`. Its draft is a workbench in a window (`wb window`, `wb-main`), and its inspector says what each change made follow (`wb-well notice`), its parts set apart (`wb-section`).
- It keeps none of Ocean's rules in `studio.css`, and adds no piece of its own there: what it needs is drawn here first.
- To do: its chat moves to the conversation kit's Talk ([`conversation.md`](conversation.md)); Ocean doesn't carry the chat's own styles (`#conversation`, `#compose`) meanwhile.
- To do: each state gets its shape: `StatusBadge`, the grades and the gates draw a tick, a clock, a cross or a pause where they draw a dot today.
- To do: run `scripts/check.mjs` beside `tests/test_design.py`, or in its place.
- To do: the studio's pages' own compositions in `studio.css` (an agent's card, the tiles of an instance's figures, the runs chart, the sandbox's turns and test cases) move here as pieces, and the studio's React pieces (`studio/src/design`) as the family's components, when a7c or a3t first needs them.

### a7c

a7c's builder (`apps/web`) uses the system's fonts and colours today, with two colours of its own. Taking Ocean is mostly a swap of values in `apps/web/src/styles.css`:

| a7c today | Ocean |
| --- | --- |
| `system-ui, sans-serif` | `--font-sans`, with `fonts/` served by the control plane |
| `#b00020`: alerts, faulty steps, failed | `--bad`, and Badge `bad` for a failed case or gate |
| `#1b6e2a`: passed | `--good`, and Badge `good` |
| `Canvas`, `CanvasText` | `--surface`, `--text` |
| `LinkText` | `--accent` |
| `Highlight`: the chosen step | `--focus`, as FlowNode's chosen step |
| lines at 20% of the text colour | `--line`; at 35%, `--line-strong` |
| `.status` pills | Badge, with its shape: a tick for passed, a cross for failed |
| `.react-flow__edge.reads`, dashed: a step that an expression reads | `.reads-from`, shown for the chosen step, so that `reads` keeps meaning what a tool does |
| `@xyflow/react/dist/style.css` | `base.css`, with the canvas in `flow flow-canvas`: Ocean draws the rest |
| Handles at the top and the foot of a step | `at-left` and `at-right`: steps run left to right |
| `.box`, the steps on the canvas | FlowNode: a square, its icon in the colour of the step's risk, its name beneath |
| `.dialog` | the browser's own dialog, in Confirm's look |

Then the frame (Shell) around its pages, the GateList on a promotion, and the ladder on each agent's skills. a7c's risks map one to one: `read` to `--reads`, `change` to `--changes`, `send-out` to `--outside`.

#### The builder, as n8n lays it out

a7c's builder follows n8n's editor, which has worked out a workflow canvas well: the canvas fills the window, steps are squares with their names beneath, curves join them at a dot on each side, a step opens to what came in, its settings and what went out, and the one thing to do, Run the tests, sits at the canvas's foot. [Workbench](../components/Workbench/README.md) and [StepPanel](../components/StepPanel/README.md) show it. What a7c draws differently is what it does differently:

| | n8n | a7c | On a7c's canvas |
| --- | --- | --- | --- |
| Branching | an if or switch step, with an output for each answer | each step has its own condition, "Runs only when", in CEL | the condition as a label on the curve into the step |
| Expressions | JavaScript, mapped by dragging a field | CEL, reading other steps as `steps.<id>` | a chip for each value an expression reads, and a dashed curve to it from the chosen step |
| Data | items, passed from step to step | typed input and output, so problems show before the first run | a count of problems in the step's corner and the toolbar |
| Testing | a test runs the workflow for real | cases run on mocks in the personal tier, and change no system | Run the tests; "passed, mocked" |
| Going live | a switch, on or off | a draft is published as a version, and promoted from tier to tier through gates | the tier beside the draft, and Versions with its gates |
| Credentials | stored, and attached to a step | capabilities, declared; a connection reference that each tier binds | a reference, not a secret, in a step's settings |
| Risk | not shown | every operation is a read, a change or a send-out | each step's icon in the colour of its risk |

a7c is a new product without n8n's code (its ADR 0002): it takes n8n's ideas and patterns, never its code, words, icons or colours.

### a3t

a3t has no pages yet: its code (`sreent/joget`) is the governance kernel so far. Its plan, React 19 with Tailwind and shadcn/ui on Radix, takes Ocean without forking a component: give Tailwind Ocean's meanings as its theme's colours, and shadcn's components follow.

```css
@import "@sreent/ocean/tokens.css";
@import "@sreent/ocean/components.css";

@theme inline {
  --color-background: var(--page);
  --color-foreground: var(--text);
  --color-card: var(--surface);
  --color-card-foreground: var(--text);
  --color-popover: var(--surface);
  --color-popover-foreground: var(--text);
  --color-primary: var(--accent);
  --color-primary-foreground: var(--accent-text);
  --color-secondary: var(--sunken);
  --color-secondary-foreground: var(--text);
  --color-muted: var(--sunken);
  --color-muted-foreground: var(--muted);
  --color-accent: var(--sunken);
  --color-accent-foreground: var(--text);
  --color-destructive: var(--bad);
  --color-border: var(--line);
  --color-input: var(--line-control);
  --color-ring: var(--focus);
  /* and the grammar, for utilities such as text-changes and bg-changes-bg */
  --color-changes: var(--changes);
  --color-changes-bg: var(--changes-bg);
}
```

- Name shadcn's colours through Tailwind's theme, as above, and never by declaring shadcn's own variables on `:root`: its `--accent` and `--muted` are backgrounds, while Ocean's are a blue and a text colour of the same names.
- Ocean's `--radius-sm`, `--radius-md` and `--radius-lg` take the place of Tailwind's, and `--font-sans` and `--font-mono` already have Tailwind's names.
- The apps people build in a3t take the same tokens. An app's own branding is a change of primitives inside its frame, held to the same checks.
- Its change requests are ApprovalCards with a GateList (ChangeRequest draws one), its environments are TierBadges, its sealed audit log is AuditEntry, and its designer is AppDesigner.
- Its apps are used in conversation with the conversation kit: in their own frame (AppConversation), and in Microsoft Teams (InTeams), where Teams draws the kit's cards from `teams/cards`.

## Where Ocean lives

This repo is Ocean's one source. a5s copies its files from a release, since its pages serve only their own files. a7c and a3t depend on it by commit, as `"@sreent/ocean": "github:sreent/ocean#<commit>"`, and import `@sreent/ocean/tokens.css` and `@sreent/ocean/components.css`, with `@sreent/ocean/charts.css` where they draw charts. A Teams app takes the kit's cards from `@sreent/ocean/teams/cards`. Each product runs `node scripts/check.mjs` in CI, against its own `tokens.css` where it changes the brand.
