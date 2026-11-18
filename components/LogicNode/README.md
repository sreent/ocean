# LogicNode

A step in a3t's flows: how a3t draws what happens in an app, whether it runs in one go or waits for people and for time. There's one way to build it, and it reads as Mendix's microflows do: left to right, a box for each step with its words inside. The grammar is the family's, so a7c's and a5s's builders read it at once ([Canvases](../Canvases/README.md)). Proposed.

- A step is a box: its icon in the colour of what it does (`--reads`, `--writes`, `--changes`, `--outside`, `--own`), its kind in small capitals, its words, and a line about it when it needs one. A step that finds records reads; one that creates, changes or deletes them changes; a service it calls is outside.
- A step with more than one way on sends each from its right side, with its word on its arrow: a decision's answers ("yes", "no"), a person's task's outcomes ("Approve", "Send back"). The first way goes straight on; the others turn down. Ways meet again at a small diamond, or each ends.
- A decision is a diamond, with its question above it.
- Rings: where a flow starts, thin, with what starts it under it: an action, a record as it is created, a date of the record, a condition that comes to hold, or a schedule. Where it ends, heavy, with its result; where it waits, double, with the clock, or with a message for an action that someone saves.
- A frame holds steps that go together: a loop ("For each line", or "Repeats while it holds", whose steps can wait), the steps an error handler guards with its way if they fail, steps that run all at once, and the first of several waits.
- Where a flow waits, what came before is saved: a bar in ink across the line, over the word "saves". What's between two bars commits together, and a failure after a bar can't undo what's before it; only an undo can.
- Who acts at a step is at its foot on the right, as Who draws them, small: a person round, an agent the lagoon square, the app's own authority the shield on `--own`. A step that stays with a person, such as a delete, says so.
- What hangs below a person's task, from its foot on the left, dashed, in the order it comes: each reminder, a bell, whose steps run while the task still waits and end there; then its deadline, the clock, and where the task goes then.
- Live, a step that waits says how many cases wait there now, and the longest wait, on `--warn-bg`.
- After a try, the path the flow took is green, each step's state is in its corner (a tick, a clock, a cross, a count of problems), and what it didn't use fades with its words still readable. The chosen step wears the focus ring.
- A new step goes on an arrow: the chosen arrow shows a "+". A step new in a working copy says so at its foot.
- A step moves by being dragged onto another arrow, or into a way with no steps: the "+" it will go to wears the accent's ring while it's over it. Dropped there, the step moves with all it holds, and the flow lays itself out again. Dropped anywhere else, it goes back. The keyboard moves a step up and down, and cuts, copies and pastes it.
- Arrows run at right angles with rounded corners, in `--faint`, with heads. The words on them are Ocean's labels.
- A long flow wraps into rows, as text does. It breaks between the steps of its main line, where it saves if it can, so each row is one stretch of work, and an arrow carries it from the end of one row to the start of the next. A frame or a flow it runs folds to one box until it's opened. "Show all of it" fits the window.

- Every canvas has its list, as FlowList draws one: the same steps in order, for the keyboard and a phone.
- Every kind of step is in [LogicKinds](../LogicKinds/README.md), and what a flow can do is in [LogicPatterns](../LogicPatterns/README.md).

**Takes:** `kind` (`step`, `decision`, `merge`, `start`, `wait`, `end`, `frame`), `icon`, `title`, `label` (its kind of step), `detail`, `tone`, `who` (a person by initials, an agent, or the app's own), `state`, `problems`, `live`, `chosen`, `dim` and `isNew`.

**On React Flow** (`@xyflow/react`), as a7c's builder draws its canvas: load React Flow's `base.css`, never its `style.css`, and put `flow flow-canvas` on the canvas. Each node holds one of the shapes above, which fills it, and each edge is drawn at right angles. A step keeps one height: its words wrap to two lines at most, and the line about it stays on one. The product lays its flow out itself, left to right, from its steps: a step dragged to another arrow moves there, and nobody places one by hand. The preview is a static rendition, placed by its own layout.
