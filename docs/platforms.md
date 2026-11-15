# Where people build, decide and use

a7c automates work as workflows on a canvas, as n8n does. a5s runs agents. a3t builds apps without code. Each is three places at once: somewhere people build, somewhere they oversee and decide, and somewhere people use what was built. Ocean began in the second, a5s's pages, and has to serve all three. This is how it looks in each, what it needs that it hasn't got, and the decisions that takes. It's the plan for rebuilding Ocean in this repo.

## Three surfaces

| Surface | What people do there | a7c | a5s | a3t | How it looks |
| --- | --- | --- | --- | --- | --- |
| Workbench | Build: wire steps, set their fields, test, version | the builder's canvas | the studio's drafts, the agent's map | the form, page and process designers | The whole window, in panes, compact |
| Pages | Oversee and decide: read, compare, approve | cases, findings, approvals, the audit log | the studio, decisions, grading, the audit trail | spaces, change requests, access, the audit log | Calm documents, as Ocean is today |
| Runtime | Use what was built | the forms a workflow asks people to fill | the chat, tasks | the apps people built | The app's own name and brand, on Ocean; in a conversation, the kit; in Teams, Teams' cards |

### The workbench

Builders spend hours in one view, so it's a tool, not a document.

- The work fills the window. The frame's sidebar shrinks to its icons; a toolbar runs along the top; the canvas fills the middle; an inspector sits on the right, 22 to 26rem wide; a picker of parts opens from the left.
- Compact, by a density layer rather than other components: text at 0.94rem in panels, 2rem rows, controls padded 0.3rem 0.6rem.
- The canvas is `--sunken` with a dot grid. Panels are `--surface`, with a `--line` between them, and nothing floats but menus and the picker.
- The toolbar says where the draft stands (saved, how many problems, its version) and holds its one thing to do: Publish, Promote, or Ask for the change.
- Steps are FlowNodes, as n8n lays them out: a square for each, its icon in the colour of what it does, so a workflow reads as the agent's map does: coral where a step changes a record, violet where data leaves.
- What n8n does best, every workbench does: each step's input and output as data, side by side, from the last run or from pinned test data; and expressions as fields, with a chip for each value they read, traced to the step it comes from.
- Keyboard first: every action has a key, shown in its menu, and the canvas moves from step to step with the arrows.
- Every canvas has its list: the same steps in order, which the keyboard and a phone use, and which a narrow screen starts with.
- On React Flow, as a7c's builder and a5s's designer are: Ocean draws the step in each node and the curves in its colours, and the product loads React Flow's `base.css`, never its `style.css`.

### Pages

As Ocean is today: cards on `--page`, text at 15px, at most 76rem wide, one thing to do per page. The trust pieces live here: decisions, gates, the ledger, where a value comes from.

### The runtime

- a3t's apps carry their own name and brand. Their pages are forms, lists of records with filters and saved views, a record with its history, a task inbox, and dashboards. Ocean is underneath: the same fields, tables and badges, held to the same checks, WCAG 2.2 AA among them, which a3t asks of every app it makes.
- An app's brand changes the accent and the neutrals. The grammar's hues stay: an app can't make "failed" blue. They move only as far as the checks need.
- Right to left and translations from the start, as a3t and a7c both ask. Ocean's layouts use logical properties (start and end, not left and right), so a page mirrors.
- The runtime shows the grammar only where it matters to the person using the app: who approved a request, where a value came from.

### The runtime, in conversation

People needn't start from a form. They can say what they want done, and the app answers in the conversation, with Ocean's pieces drawn as cards in it. The conversation kit draws this, for any capability ([`conversation.md`](conversation.md)).

1. **They state an outcome**, in their own words: "Claim my Singapore trip", "Pay the supplier once the goods arrive", "Every Monday, chase what's overdue". Or they start from a photo or a file.
2. **The agent gathers what it can**, and shows its work as it goes, with where each piece came from.
3. **It answers with a draft, exceptions first**: only what needs the person, as questions; the rest filled in, each value with its source; who decides; and its limits (the rung it acts on, its budget, its deadline). They answer, change any line, or ask why.
4. **Before anything happens, they sign off**: exactly what will happen, what sending does, in the colour of what it does, who decides next, and who prepared it. They send it, not the agent. At the ladder's top rung an agent may act on its own, and says so at once with Undo, but never where sending vouches for something or can't be taken back ([`conversation.md`](conversation.md)).
5. **Status comes to them**: where it is, who it waits on, and until when it can be taken back. An outcome that repeats becomes a standing task, with its repeats and budget, as a5s's tasks are.

What this needs of Ocean:

- **Every piece a person acts on has two sizes**: a card in a conversation, a phone's width at most, with one thing to do; and a page. The same piece in two frames: a card opens as its page, and a page's piece can be sent as a card. The decision card is already this.
- **The agent asks for pieces, never draws them.** It sends a description naming pieces from a catalogue (a draft, a question, a sign-off, a status, a record, a list, a chart, a decision) with their data, and the app draws them with Ocean. No markup or style from a model reaches a page: the pages' policy stays as it is, and every action a card offers passes the same checks as a page's, because AI proposes and policy decides.
- **In Microsoft Teams, Teams draws the cards.** The kit's rules, words and order carry over as Adaptive Cards (`teams/cards`), and Ocean's look returns wherever Teams shows a page of ours ([`conversation.md`](conversation.md)).
- **Chat isn't for everything.** Long lists, comparing records, bulk changes and audits are pages. The conversation is for intent, exceptions, quick inputs and decisions, and moves to a page whenever a page is better.
- The draft and the sign-off are the trust pieces of an agentic app: where a person sees what will change before anything does. They show the grammar at its plainest.

## Seven kits

| Kit | Pieces | Today |
| --- | --- | --- |
| Foundations | Tokens in layers (primitives, meanings, density), type, icons, motion, the chart palette | From a5s, with the chart palette and the interface's fixes; density to do |
| Core | Button, Field (input, select, combobox, checkbox, radio, switch, each with its label, hint and problem), Tabs, Table, Menu, Popover, Dialog, Drawer, Toast, Hint, Badge, Who, Card, Empty state, Loading, Page head, Shell | Buttons, badges, dialogs, hints, plain fields and tables from a5s; the rest to draw |
| Trust | ApprovalCard, GateList, TierBadge, JourneyPath, AuditEntry, Traced, Confirm, PermissionDiff, VersionDiff | Drawn, but for the two diffs, which come from a7c's merge panel and a3t's permission diffs |
| Agents | ToolCall, AgentFacts, AutonomyLadder, RunTimeline, Grading | From a5s; ToolCall from a7c's copilot panel |
| Workbench | Canvas, FlowNode, Edge, List, Picker, Inspector, ExpressionField, DataView, RunLog, Tests, Versions, Toolbar, Problems | Drawn, proposed: FlowNode with every kind of node and what a flow can do (FlowKinds, FlowPatterns), the canvas on React Flow, its list (FlowList), the picker (Picker), and a step opened (Workbench, StepPanel). The rest to draw from a7c's builder (`apps/web/src/builder`) |
| Runtime | Form (pages, sections, repeating rows), RecordList, RecordPage, TaskInbox, Dashboard | To draw, for a3t; its designer (AppDesigner) and an app in conversation (AppConversation) are drawn |
| Conversation | Talk (with its composer), Capture, WorkLog, Draft, Question, Source, EditSheet, SignOff, Status ([`conversation.md`](conversation.md)); RecordCard, ListCard and ChartCard, for answers that show rather than ask; the catalogue they're asked for by; and the kit's cards for Microsoft Teams (`teams/cards`) | Drawn, proposed, with its Teams cards, but for the three cards and the catalogue |

Each kit belongs to Ocean, in this repo. The product that draws a kit most leads it: a7c the workbench, a5s the agents and the conversation, a3t the runtime.

## Decisions

1. **One way to style: CSS classes on Ocean's tokens, with a thin React layer on Radix.** a5s's own pages have no React, and its pages' policy runs no inline style; a7c's builder is React; a3t plans Tailwind and shadcn/ui. Classes on tokens serve all three, and Tailwind takes the tokens as its theme ([`products.md`](products.md)). shadcn/ui everywhere would leave a5s's pages behind.
2. **Density as a third layer of tokens.** `[data-density="compact"]` changes sizes and spacing, never colour, so a workbench and a page share every piece.
3. **Themes by choice as well as by the device.** Builders often want a dark canvas by day. `[data-theme]` sits beside `prefers-color-scheme`, as the design system's own pages already work.
4. **A connector's logo identifies; it doesn't mean.** n8n's canvas is bright with integrations' logos. In Ocean the icon's colour carries what a step does, and a connector's logo stays small on the node, in one ink; full colour only in the picker, where recognising the app is the point. A canvas of full-colour logos would drown the one colour that tells a person a step changes a record.
5. **Logical properties throughout**, so every piece mirrors for right to left.
6. **Charts follow the palette.** Series take Ocean's chart palette; a chart of how things stood takes the status colours and nothing else; no chart has colours of its own.
7. **Two sizes for every piece a person acts on**, a card and a page, so the runtime works in a conversation and on its pages alike.
8. **A catalogue of pieces an agent may ask for**, each with a typed description of its data, versioned with Ocean. Models describe; Ocean draws; policy decides.

## The order of work

1. **Foundations.** Done: the chart palette, and the interface's fixes (statuses with a shape as well as a colour, controls' edges at 3:1, outside apart from the accent). To do: density, and themes by choice.
2. **Core**, as far as a5s's pages need, so a5s takes Ocean from here first with no change but the fixes. To do.
3. **The workbench**, from a7c's builder: the proof that a workflow canvas reads as Ocean. Drawn: Workbench, StepPanel and FlowNode. To do: a7c takes them.
4. **Trust's two diffs, and the runtime**, as a3t starts its pages. Drawn: a3t's designer, a change request, and an app in conversation. To do: the two diffs, and the runtime's pages.
5. **The conversation.** Drawn: its kit, and its cards for Microsoft Teams ([`conversation.md`](conversation.md)). Next: the catalogue, and the cards that show a record, a list or a chart, first in a5s's chat, where agents already talk to people, then in a3t's apps.
