# Across a5s, a7c, a3t and a4a

a5s, a7c, a3t and a4a are four platforms about the same thing: work that people, agents and automations do under rules, where the record of who did what matters as much as the work. a7c automates work as workflows on a canvas, as n8n does, and lets agents find and fix what goes wrong. a5s runs agents, and shows people what each may do and did. a3t builds apps without code: forms, views, pages and processes, under governance (its code is in the `sreent/joget` repository). a4a (agenda) tracks the work itself, as YouTrack does: projects of issues with their fields, a query language and a command language, agile boards, and plans over time with their people's load, their cost and their baselines; its assistant and its triage are agents, and so are agents outside it, such as Claude Code, which act on issues through its MCP server. Ocean began in a5s. These are the rules for the four to look like one family, and what each changes to get there. [`platforms.md`](platforms.md) says how Ocean looks where people build, where they decide, and where they use what was built.

## The family's rules

1. One palette and one grammar. Coral is a change to a record in every product, and an agent is a lagoon square in every product.
2. A product is told apart by its name and its mark (its first two characters on the accent square), never by a colour of its own: any hue it took would collide with a meaning.
3. One frame: a sidebar of the pages someone may use, under the same four headings, Work, Build, Decide and Oversee, with the page beside it.
4. The palette is closed. A new state finds its meaning, and a new meaning is added to Ocean, for every product.
5. One brand change, in one place. An organisation's colours replace the primitives in `css/tokens.css`, and every product takes them.
6. The same checks: `scripts/check.mjs` in each product's CI, and axe on every page.
7. One source, so one truth. A product takes its look from this repo, at a commit, and anything new or changed in it is made here first, never in a product's own stylesheets: a piece a product needs is drawn here, for every product, and the product takes the commit that has it.

## The same words, the same look

Each product's words, and what Ocean draws them with. An empty cell is a word the product doesn't have yet. a4a's own words, such as priority and the critical path, are under [a4a](#a4a).

| What | a5s | a7c | a3t | a4a | Ocean |
| --- | --- | --- | --- | --- | --- |
| A step that reads | a tool that reads | risk `read` | `record.read` | an agent's search of issues, over MCP | `--reads`, Badge |
| A step that writes what nobody relies on yet | writes, such as a draft | a draft; a proposal in a case | a working copy in someone's own space | a field an agent worked out, until a person accepts it | `--writes` |
| A step that changes a record | changes a record | risk `change` | `record.update`, `record.delete`, a deploy to Prod | a change to an issue; a command applied; levelling | `--changes` |
| A step that crosses the edge | sends outside; reads outside content | risk `send-out`; outside content read | `record.export`; a connection out | | `--outside` |
| The product's own doing | a5s's own; a5s's checks | a7c's checks and policies | the platform's own (actor `system`) | | `--own` |
| Going well | active, done | passed | healthy, merged, deployed | Fixed, Verified, Done | `--good` |
| Waiting on someone | waiting on you, held | ask: waiting for a person | in review, waiting for approval | In Review, Blocked; a column over its limit; someone booked over their day | `--warn` |
| Failed | failed, refused | failed, denied | failed, denied, rolled back | late: a task finishing after its due date | `--bad` |
| Paused | paused | none, not needed | frozen | Won't fix, Duplicate, Obsolete | `--idle` |
| A person | a person | a person | a user | a person: an assignee, a reporter | Who, round |
| An agent | an agent | an agent; the copilot | | the assistant; triage; an agent over MCP, such as claude-code | Who, the lagoon square |
| A service | | a skill's service identity | a service account | a script with an API token | Who, the service square (proposed) |
| How far an agent may go | levels 0 to 2 | observe, suggest, act after approval, act | | | AutonomyLadder |
| Where it runs | the sandbox; an instance | personal, team and production tiers | a personal Sandbox; a team's Preview, Staging and Prod | | TierBadge (proposed) |
| The way to work | draft, publish, sign, deploy, watch | draft, tests, promotion up the tiers | working copy, change request, preview, release, Prod | | JourneyPath |
| A decision | a decision; a version of the settings | an approval; a promotion | a change request's approval; a deploy's | | ApprovalCard |
| What someone asks for, in a conversation | the chat; a task | a workflow's ask of a person | an app, in conversation | the assistant; asking in words | The conversation kit: Talk, Draft, Question, SignOff, Status (proposed) |
| What must pass first | what stops a release | a promotion's gates; test cases | a change request's checks | | GateList (proposed) |
| Steps on a canvas | the agent's map | the builder's canvas | the process designer | | FlowNode, the map's node |
| Where a value comes from | a traced value | a finding's evidence | a record's history | a field an agent worked out | Traced; in a conversation, Source |
| The record of who did what | the ledger, the audit trail | the audit log | the sealed audit log | an issue's history | AuditEntry (proposed) |

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
- Done: it keeps none of Ocean's rules in `studio.css` or `app.css`, and adds no piece of its own there: what it needs is drawn here first. Its `tests/test_design.py` fails if either styles a selector Ocean's pieces or charts style. What `studio.css` still holds are its pages' own compositions, below.
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

### a4a

a4a is new, and starts on Ocean. Its web app is React 19 with Tailwind v4, which takes Ocean as a3t's does (above), and its components emit Ocean's markup and classes:

```css
@import "@sreent/ocean/tokens.css";
@import "@sreent/ocean/components.css";
@import "@sreent/ocean/charts.css";
```

- Tailwind's theme names Ocean's meanings, as a3t's does, and never a colour of a4a's own. Its plans are SVG drawn from their attributes and styled by Ocean's classes, so its pages' policy runs no inline style.
- The palette stays closed: a4a's states find their meanings in the grammar, below, and add no colour.
- Its agents are agents wherever they act: the assistant, triage, and agents outside it over MCP, such as claude-code, each by the agent's square and its lower-case id, never a sparkle. One acting for a person says so: "claude-code for Anna Schmidt · via MCP". A script with an API token is a service.
- Asking in words, for a search or a command, is marked by the agent's mark and name, and answers "Interpreted as:" with the query it made, before anything happens.
- A value an agent worked out is dashed until a person accepts it, and the issue's history says who did.
- Done: it keeps no rules of its own. Its one stylesheet imports Ocean, maps Tailwind's theme to Ocean's meanings, and lets React's root hold the frame (`#root`). How its pages place Ocean's pieces is Ocean's too (Layout, below), and Tailwind places only structure, such as a grid's columns. Its `apps/web/scripts/check-design.mjs`, part of `pnpm test`, fails on any other rule, and on any utility that would carry a look or space a piece.

| a4a's word | Ocean |
| --- | --- |
| Renaming a project's key | Confirm, typed again (`typed`), in the plain colour: the new key typed a second time turns "Rename it" on |
| Fixed, Verified, Done | Badge `good`, with a tick |
| In Review, Blocked | Badge `warn`, with a clock: waiting on someone |
| Won't fix, Duplicate, Obsolete | Badge `idle`, with a pause: not needed |
| Open, In Progress | Badge with no tone: a plain fact |
| A task finishing after its due date | `bad`, with a cross and its words: "3 days late" |
| A column over its limit | `warn`, with its words: "3 of 2, 1 over the limit" |
| Someone booked over their day | `warn`, with its words: "10h of 8h" |
| A command's change to an issue | `changes`, in the grammar of a change: "State: Open → Fixed" |
| Priority: Show-stopper, Critical, Major, Normal, Minor | PriorityMeter: five steps beside the word, never a colour |
| Tags | chips, with no colour |
| A file anyone uploaded | an image shows in place; any other file, SVG and HTML included, by its kind, and downloads |
| A text file, or sound or video, shown in place | once opened, under its row: text in Plex Mono on `--sunken`, in a frame of its own, with which part of how much ("The first 64 KB of 1.2 MB"); sound and video in the browser's own player |
| A character that turns text around, in a file shown in place | its code on `--warn-bg`: `U+202E` |
| A version of an article against the one before | lines added on `--changes-bg` with a `+`, removed struck through with a `−` |
| An issue's id, a version, a duration | Plex Mono: `BACK-12`, `2.4.1`, `2d 4h` |
| The critical path | told by line, as production is: in ink, twice as heavy |
| A baseline | faded beneath, as what's no longer in force |
| Load, a day's share booked | Ocean Blue's steps (`--chart-seq-*`), with its hours |
| Planned value, earned value, actual cost | the series' colours in order, with the figures beside them as a table |
| What's left of a sprint; created against resolved; time logged | the series' colours in order, with the figures beside them as a table |
| A sprint's ideal | dashed, in `--faint`, as what isn't so |
| A change to a sprint's scope | `--changes`, a ring with how much: "+8h" |
| A state's band in cumulative flow | how its state stands (`--chart-done`, `--chart-short`, `--chart-failed`, `--chart-open`), never a series colour |
| A percentile | a solid line in ink with its words: "Half by 2.9 days" |
| Time spent past an estimate | `warn`, with its words: "2h over" |
| A row of an import that isn't imported | `bad`, with a cross and its words: "Not imported" |
| Unread, in the inbox | a dot in `--accent` and the words at 650; a count beside the sidebar's link |
| Watching an issue | a toggle, pressed as a mode is, with how many watch |
| Voting for an issue | Watching's toggle, pressed while you've voted, with how many voted |
| Reactions to a description or a comment | small toggles, an emoji and how many each, pressed while one is yours; who reacted in its title; a fixed set of eight to add from |
| A comment the requester of a help desk request sees | `outside`, framed and with its words: "public: sent to Jane Doe" |
| A request's first response, due / overdue / answered in time | `warn` with a clock / `bad` with a cross / `good` with a tick; answered late is a plain fact |
| An agent acting as itself, with a token of its own | its lagoon square and its id, for no one: "claude · via MCP" |
| What an agent changed on its own, which a person can undo | a quiet `Undo` at the history head's end, in `--accent` |
| A change undone | in its place, its lines in `--muted`, with an `idle` badge: "undone" |
| A workflow rule, on / off / needing a fix | `good` with a tick / `idle` with a pause, the whole card in `--muted` / `bad` with a cross, and what no longer reads in it |
| What a rule does: changes issues / refuses a change (a guard) / tells people / calls a webhook | `changes`, in the grammar of a change / `own`, the product's own check / a plain fact / `outside`, since what it knows leaves the product |
| A rule's run: applied / nothing to change / failed or refused | `good` / `idle` / `bad`, with what it changed, or why not |
| A pull request: open / merged / closed without merging | `warn` with a clock: waiting on review / `good` with a tick / `idle` with a pause |
| The command a commit gave an issue (`BACK-12 #Fixed`) | applied as its author, `good`, with what it changed; not applied, `bad`, with why in words |
| An app that asks to act for someone over MCP (OAuth) | ApprovalCard on a page of its own, striped `outside`: what the app reads leaves a4a; its name is its own word, and said so |
| A day someone is away / half a day away | `--sunken`, with "away" / dashed in `--muted`, with what's left of the day: "3h of 4h"; never why |
| Why someone is away (holiday, sick, training) | words in the person's own table, seen only by them, administrators and whoever entered it; "Not shown to you" in `.muted` to anyone else |
| Writing a description, a comment, a reply or an article | Editor: written as it reads, a toolbar on the field's top edge with its tools pressed when on; "Visual" or "Markdown" at its end, the choice kept |
| A screenshot pasted or dropped in what's written | uploaded as one of the issue's or the article's files, and "Uploading…" in a pill where it will go until it's there |
| A picture within what's written | a4a's own fits its column; one from elsewhere, or of a kind that isn't a picture (SVG), is named in `--muted` and never fetched |
| A checklist's item, ticked by someone who may change the text | its box where a bullet would be, with a pointer; saved against the version read, and if someone changed it meanwhile, said so and reloaded |
| An issue being ranked in a backlog | its outline dashed where it was; a line in `--accent` where it will land; Alt and an arrow from the keyboard, and what moved said |
| A sprint to drop an issue on | dashed; edged in `--accent` while an issue is dragged, filled `--accent-soft` under it |
| Someone over capacity in a sprint | a `warn` badge with how much, in words: "12h over" |
| A timer running / paused | its time in `--accent`, "Running" / in `--text`, "Paused" |
| A day in a timesheet over / under its hours | `--warn`, at 600 / `--muted`; the figures beside it say how much |
| A day a task's assignee is away, on the Gantt | `--sunken` behind the bar, edged in dashes of `--line-control`; half a day the dashed edge alone; never why |
| An issue's news in a Teams channel | the kit's cards from `teams/cards/a4a-change.json`: who did what, the issue's line, its state in a Badge; only what every reader of the project may see |
| An issue as one person sees it in Teams, and what their action did | `teams/cards/a4a-issue.json`, answered in place for them alone; a refusal in `Attention`, with its words |
| A Teams or Slack message made an issue | Teams: the dialog from `teams/cards/a4a-new-issue.json` (the project, a summary from its first line, the message as the description), answered with the issue card; Slack: its own modal, in the same order. The issue's page names where it came from in a side card (`.card.side-card`): the chat, the channel and a link to the message, who sent it and when, its files as links, and a `.note` when it was cut to fit |
| A channel subscribed to a project's or a saved search's issues | Settings' rows: the channel, its chat, what it hears of, and who subscribed it, who vouches for its people; one that stopped, in `--muted`, with why |
| A chat account linked to someone's a4a account | a row of their profile's, with its chat and name, and Unlink; Teams knows people who sign in with Microsoft Entra ID without one |
| a4a offline, or a new version of it ready | Notice, above every page: offline in `--sunken` and `--muted`, nothing to press; a new version on `--accent-soft`, with "Reload" |
| a4a on a touch screen | everything to tap 44px at the least; a dense row's links and boxes grow their target, not their look |
| A whiteboard | Whiteboard: SVG drawn from its attributes on `--sunken`'s dots, panned and zoomed by its `viewBox`, beside its outline in reading order; who is looking, by their marks |
| A whiteboard's note: plain, an idea, agreed, a question, a problem, parked | `--surface` / `writes` / `good` / `warn` / `bad` / `idle`, on its `-bg`, with a band and a badge saying its word |
| An issue on a whiteboard | a card: its id in mono, its summary, its state as a Badge and its assignee, as its reader may see it now |
| A card someone may not see (limited, another project, deleted) | dashed in `--line-control` on `--sunken`, one line saying so, the same for every reason; nothing of it drawn or sent |
| An arrow between two elements / one made into a link | `--faint`, as a canvas's edges / in ink, with the link's words in a pill |

It brought these pieces to Ocean, each with the markup its components emit in its README: [IssueList](../components/IssueList/README.md), [FieldPanel](../components/FieldPanel/README.md), [PriorityMeter](../components/PriorityMeter/README.md), [QueryBar](../components/QueryBar/README.md), [CommandBar](../components/CommandBar/README.md), [Board](../components/Board/README.md), [Gantt](../components/Gantt/README.md), [LoadGrid](../components/LoadGrid/README.md), [CostPanel](../components/CostPanel/README.md), [IssueLinks](../components/IssueLinks/README.md), [IssueHistory](../components/IssueHistory/README.md) (with a help desk request's public and internal comments, and the composer that offers people after an "@"), [Inbox](../components/Inbox/README.md) and [WatchToggle](../components/WatchToggle/README.md); and for its pages, [Layout](../components/Layout/README.md) (a stack, a cluster, a main column with an aside, forms, prose, what went wrong), [Directory](../components/Directory/README.md), [PlanPage](../components/PlanPage/README.md), [Settings](../components/Settings/README.md), [NavList](../components/NavList/README.md), [AgentSetup](../components/AgentSetup/README.md), [FieldValues](../components/FieldValues/README.md), [Webhooks](../components/Webhooks/README.md) and [HelpDesk](../components/HelpDesk/README.md), the lone pages its help desk shows people outside; and for files and its knowledge base, [AttachmentList](../components/AttachmentList/README.md), [ArticleTree](../components/ArticleTree/README.md) and [ArticlePage](../components/ArticlePage/README.md). Where its pages put the family's pieces to new uses (an approval as a triage suggestion, the conversation on a page of its own, the ledger in a card), those pieces' READMEs say how. IssueHistory keeps AuditEntry's spirit, with times as people read them, where the ledger keeps them to the second. In dense rows and on cards, people, agents and services take a smaller mark, `.avatar.small`.

For its reports, dashboards and imports it brought [Burndown](../components/Burndown/README.md), [CumulativeFlow](../components/CumulativeFlow/README.md), [Distribution](../components/Distribution/README.md), [CreatedResolved](../components/CreatedResolved/README.md), [TimeReport](../components/TimeReport/README.md), [Dashboard](../components/Dashboard/README.md) and [MappingTable](../components/MappingTable/README.md): charts drawn as CostPanel's are, from their attributes alone, each with its figures as a table beside it, and a page of widgets arranged without dragging.

For its workflow rules and version control it brought [Rule](../components/Rule/README.md), a rule read as a sentence (when, if, then), with the form that makes one, its preview and what rules did, and [Commits](../components/Commits/README.md), what in version control mentions an issue, with the command a commit gave it and whether it applied.

For people's days away it brought [DaysAway](../components/DaysAway/README.md), Settings put together for a person's days away and the form that enters them, and the load grid learned to show them, half days dashed, over a window each person chooses; a long board with lanes keeps its column heads in view in a frame of its own.

For writing it brought [Editor](../components/Editor/README.md): Markdown written as it reads, over the Markdown kept, with its toolbar and its states (a tool pressed where it's on, a file dragged over, a picture uploading, nothing written yet), and the Markdown itself a choice away; and `.prose` learned to fit a picture to its column, to name one from elsewhere without fetching it, and to draw a checklist's boxes where bullets would be.

For its agile boards and time tracking it brought [Backlog](../components/Backlog/README.md), a board's backlog to rank and plan sprints from, [SprintLoad](../components/SprintLoad/README.md), a sprint's load against its people's capacity, [Velocity](../components/Velocity/README.md), [Timer](../components/Timer/README.md), [Timesheet](../components/Timesheet/README.md) and [WorkWeek](../components/WorkWeek/README.md); a board's column heads say their story points, and the Gantt marks the days a task's assignee is away. Its [Board](../components/Board/README.md) then learned to rank as the backlog does: a card dragged up or down its column, or into another at a place, lands in a slot that makes room for it between two cards; from the keyboard, Alt and an arrow on its id moves it a place or a column, the card wearing the focus ring whole wherever it lands; and on a phone a card held still is picked up, where a finger that moves first swipes through the columns.

For a4a installed on a phone it brought [Notice](../components/Notice/README.md), a word about the app itself above every page, and taught the frame a phone's ways: the page reaching the screen's edges and kept clear of the notch and the home indicator, everything to tap 44px on a touch screen, a board's columns a phone's width with a swipe settling on each, and the issue row's box a label that's its target.

For its whiteboards it brought [Whiteboard](../components/Whiteboard/README.md): a team's canvas as SVG drawn from attributes alone, so it needs no inline style, with sections, notes whose tone is a meaning and a word, issue and article cards as each reader may see them, and arrows that become links; the keyboard's and a screen reader's way through it, its outline in reading order; and who is looking.

For its apps it brought [AppFrame](../components/AppFrame/README.md): an app's widget on a page, in a sandboxed frame of its own and named as an app's, with what it said and an ask when it wants to open something, the page never moved without the person; and an app's card for the admin's list, with what it may do in the words its consent showed.

## Where Ocean lives

This repo is Ocean's one source. a5s copies its files from a release, since its pages serve only their own files. a7c, a3t and a4a depend on it by commit, as `"@sreent/ocean": "github:sreent/ocean#<commit>"`, and import `@sreent/ocean/tokens.css` and `@sreent/ocean/components.css`, with `@sreent/ocean/charts.css` where they draw charts. A Teams app takes the kit's cards from `@sreent/ocean/teams/cards`. Each product runs `node scripts/check.mjs` in CI, against its own `tokens.css` where it changes the brand.
