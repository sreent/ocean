# Gantt

A plan over time: its tasks in a list beside it, by indentation, and across the weeks and days each task as a bar with what's done inside, its baseline faded beneath, its slack dashed after it; summaries as brackets, milestones as diamonds, finish-to-start curves between them, and today. Proposed.

- The critical path is told by line, never colour: in ink, twice as heavy, as production is. Its curves are ink too; the others are `--faint`.
- What's done fills the bar in `--chart-1`, the plan's one series (css/charts.css). A bar's edge is `--faint`, 3 to 1 on the card.
- A task that will finish after its due date is late: its edge turns `--bad`, a tick in `--bad` marks the date it was due, and beside it a cross and its words, "3 days late". Its dates in the list are `--bad` too.
- The baseline, the plan as it was agreed, is a ghost beneath each bar, faded to 0.42: what's no longer in force. Where a bar has moved from its ghost, the plan has slipped.
- Slack is a dashed tail from a bar's end to the latest it may finish, with a tick there: time it may take, not yet taken.
- Summaries are brackets over their tasks, in `--muted`, their names at 600. Milestones are diamonds in ink. Today is a line in `--accent`, with its word.
- Weekends are `--sunken` behind the days. Weeks are labelled by their Monday, and days by their number.
- A what-if (a task that slips, takes longer or changes hands, with nothing saved) shows where each task it moves would go: dashed in `--changes` over the plan, as what isn't so yet, a bar's outline or a milestone's diamond (`.gantt-whatif`). A summary keeps its bracket; the tasks under it show the move.
- It's SVG drawn from attributes alone (x, y, width, height, a path's d) and styled by classes, so it works under a policy that runs no inline style.
- The list is what screen readers read: each task's name, its dates and what's done, with what the chart shows in words (a milestone, on the critical path, late and by how much, its slack, what it follows, its baseline, where a what-if would put it). The chart is hidden from them.
- A task's name can open it: a link inside `.gantt-name`, which reads as a name and is underlined under the pointer.
- Where it's narrow, the list keeps its names and the chart scrolls under it, in its own frame, which a4a scrolls to today when it opens; the dates and what's done stay for screen readers.

- **Days a task's assignee is away** while it's on (a4a, D43) are shaded behind its bar, a day wide each, in `--sunken` and edged in dashes of `--line-control`, so they aren't taken for a weekend (`rect.gantt-away`); half a day is the dashed edge alone (`.gantt-away.half`). Each says "Away", or "Away in the morning", in its title, and never why.

**Takes:** `rows` (each `kind`: `task`, `summary` or `milestone`; `name`, `href`, `depth`, `start`, `end`, `done`, `baseline`, `critical`, `due`, `slackTo`, `after`, `whatIf`, `away`), `from`, `to`, `today`, `dayWidth`.

**Markup:** the list and the chart share their rows: a head 40px tall, then 32px a row, in the list (`height`) and in the chart (row r's top is `40 + 32r`).

```html
<section class="gantt gantt-box" aria-labelledby="g-title">
  <div class="gantt-scroll" tabindex="0" role="group" aria-label="Data center migration, 2 Nov to 13 Dec">
    <div class="gantt-grid">
      <div class="gantt-side">
        <div class="gantt-side-head" aria-hidden="true"><span>Task</span><span>When</span><span>Done</span></div>
        <ol class="gantt-rows">
          <li class="gantt-row summary" data-depth="0"><span class="gantt-name">Build the new site</span><span class="gantt-when">9–27 Nov</span><span class="gantt-done">30%<span class="hidden"> done</span></span></li>
          <li class="gantt-row late" data-depth="1"><span class="gantt-name">Order the hardware<span class="hidden">, on the critical path, 3 days late: it was due 13 Nov, planned for 9–13 Nov</span></span><span class="gantt-when">9–18 Nov</span><span class="gantt-done">80%<span class="hidden"> done</span></span></li>
        </ol>
      </div>
      <svg class="gantt-chart" width="714" height="520" viewBox="0 0 714 520" aria-hidden="true">
        <rect class="gantt-weekend" …/>  <line class="gantt-rule" …/>  <text class="gantt-week" …>9 Nov</text>  <text …>9</text>
        <path class="gantt-link critical" d="…"/><path class="gantt-link-head critical" d="M x y l-6 -3.5 v7 z"/>
        <path class="gantt-summary" d="M x1 y+21 V y+12 H x2 V y+21"/>
        <g class="gantt-task critical late">
          <rect class="gantt-base" x y="row+24" width height="4" rx="2"/>
          <rect class="gantt-bar" x y="row+8" width height="12" rx="4"/>
          <rect class="gantt-done-part" x="x+2" y="row+10" width="(width-4) × done" height="8" rx="2.5"/>
          <line class="gantt-due" …/><path class="gantt-late-mark" d="…"/><text class="gantt-late" …>3 days late</text>
        </g>
        <g class="gantt-task"><rect class="gantt-base" …/><path class="gantt-slack" d="M end+3 y H latest"/><path class="gantt-slack-end" d="M latest y-4 v8"/><rect class="gantt-bar" …/></g>
        <g class="gantt-task critical"><rect class="gantt-base" …/><path class="gantt-milestone" d="M cx row+6 l8 8 -8 8 -8 -8z"/></g>
        <rect class="gantt-whatif" x y="row+8" width height="12" rx="4"/>   <!-- a what-if's mark; a milestone's is the diamond's path -->
        <line class="gantt-today" …/><text class="gantt-today-label" …>Today</text>
      </svg>
    </div>
  </div>
  <ul class="gantt-legend"><li><svg width="28" height="14" aria-hidden="true">…</svg>The critical path: ink, twice as heavy</li>…</ul>
</section>
```

Draw in this order, so each sits on the last: weekends, rules and the axis; curves; summaries; each task's group; a what-if's marks; today. A task's name as a link: `<span class="gantt-name"><a href="…">Burn-in tests</a><span class="hidden">, on the critical path…</span></span>`.

**In a4a:** Plans, for a plan's tasks and its waterfall. Load css/charts.css with it. The preview is a static rendition of a plan to move a data center.

## To change, where it's seen

a4a's timeline is this Gantt made editable (`.gantt.editable`): its list a sheet whose cells are typed in, and its bars dragged, stretched and linked, each change made as a command makes it. Ocean gives each state its look; a4a supplies every word, every key and every date. Proposed, for a4a (D74).

- **The sheet** (`.gantt-side.gantt-sheet`, `role="treegrid"`): the rows the list had, each a row of compact cells by kind: the task (`.gantt-cell.name`: a grip, its id, its summary), a date someone set (`.date`), the planned span (`.dates.planned`, the engine's), a duration (`.duration`), a person (`.person`, by their mark and name) and what's done (`.done`). Dates and durations are in Plex Mono. The heads say which field each is, in the project's own words, so the dates people set and the dates planned stand side by side, labelled. A cell nobody may type in says so (`aria-readonly="true"`): the planned span, a summary's rolled-up dates, and every cell of a task nobody here may change. Under the pointer a cell that takes typing is `--sunken`; the cell with the keyboard's focus wears the ring inside its edge.
- **A cell being typed in** (`.editing`) holds its input, 26px tall. Refused, its input is `aria-invalid="true"` and edged in `--bad`, and why is said in words above the chart, with how to put it right (`.error-note`, `role="alert"`), which the input names (`aria-describedby`). **Saving** (`.saving`), the value as typed is underlined, dashed, as what isn't in force yet, and screen readers hear ", saving". **A person** is picked as a field's value is (Picker): the cell's input is a combobox, and its options open in the top layer (`ul.popover.options.gantt-pick[popover]`), so the chart's frame never cuts them off: under the cell, or over it near the window's foot, where the browser anchors one thing to another (CSS anchor positioning), and in the middle of the window where it can't.
- **Rows**: chosen, `--accent-soft` (`aria-selected="true"`), as a list's rows are. Ranked by hand, each row a person may move has a grip, the backlog's handle (`button.gantt-grip`, `⋮⋮`). On its way, a row is dashed where it was (`.moving`) and the list says so (`.gantt-rows.dragging`, a closed hand); where it would land is a line in `--accent` on the edge of the row beside it (`.drop-before`, `.drop-after`) and across the chart (`line.gantt-drop-line`); dropped onto a row, to go under it as a subtask, that row is edged and filled (`.drop-into`, and `rect.gantt-drop-into` across the chart). A row the draft changed has a `--writes` edge (`.drafted`). A row nobody here may change has a lock after its name and no grip (`.locked`), and its words say why ("read-only: it's in Infrastructure, which you can only read").
- **A new task** (`.gantt-row.new`): a plus and the input its summary is typed in, at the end of the sheet (`data-depth="0"`) or under its parent, a level in, after the parent's last task; named for screen readers by where it goes ("New task in Build the new site").
- **A bar chosen** (`g.gantt-task.chosen`) is `--accent-soft`; the one whose row has the keyboard's focus wears the focus ring (`rect.gantt-ring`, or `path.gantt-ring` around a milestone), so the bar and its row show one choice. **Its handles** (`g.gantt-handles`), drawn on the chosen bar and under the pointer, never on a locked one: the body moves it (`rect.gantt-hit.move`, an open hand), a grip at each end changes how long it takes (`rect.gantt-resize`, in `--accent`, held by `line.gantt-hit.resize`), and a dot just past each end links it (`circle.gantt-link-handle`, held by `circle.gantt-hit.link`): from its finish to another task's start, finish to start.
- **On its way** (`g.gantt-task.moving`, edged in `--accent`, the chart `.dragging`): where it was is dashed (`rect.gantt-was`); where it would land, snapped to the days it would take, is dashed in `--accent` on `--accent-soft`, the row's height, under the bar (`rect.gantt-ghost`), as a board's slot is, with its dates beside it (`text.gantt-ghost-label`). From the keyboard the bar itself moves a working day at a time: `.moving`, with where it was.
- **A link being drawn**: the dot it's drawn from is filled (`.gantt-link-handle.on`); a dashed curve in `--accent` follows the pointer (`path.gantt-link-draft`, `path.gantt-link-head.draft`); the task under it is the target (`g.gantt-task.target`, edged in `--accent`, its start's dot filled), with what dropping does beside it ("After MIG-8").
- **Locked** (`g.gantt-task.locked`): no handles, an arrow's pointer, and a lock after the bar (`svg.gantt-lock`, the lock from `icons/`, 12px, with a `<title>` saying why), as its row says.
- **A date someone set**, where it isn't the date planned: a bracket in `--muted` (`path.gantt-set`), "[" at a start the plan comes after (a start no earlier than), "]" at a due date the plan finishes before. A task late against its due date keeps its tick in `--bad` and its words, above.
- **The axis at four zooms**, one upper row of labels (`text.gantt-major`; `.gantt-week` is the same, and stays) over a lower one (plain `text`): by day, 17px a day, weeks by their Monday over the days; by week, 6px a day, months over each week's Monday; by month, 2px a day, quarters over months; by quarter, 0.6px a day, years over quarters. A rule at each upper label. Days nobody works (`rect.gantt-off`, or `.gantt-weekend`, the same): the weekends and the project's own holidays, at the day's and the week's zoom; by month and by quarter a day is 2px or less, and its shade would only be a texture, so it's left out. Today as always: a line in `--accent`, with its word.
- **A draft**: a band across the top of the chart (`.gantt-draft`, before `.gantt-scroll`, which it joins): a `writes` badge with its word, then what the draft changed and what it does to the finish, then Keep and Drop, Keep the primary ("Keep it", "Drop it": the product's words). While it's there the chart's frame is `--writes`. Each task the draft changed is dashed in `--writes` on `--writes-bg` (`g.gantt-task.drafted`; the critical path keeps its weight), its row edged; a task that only follows one is drawn where it would go, with where it was dashed (`rect.gantt-was`).
- **What a move would also move**: when a move would shift tasks whose dates people set, the engine proposes, and nothing moves until the person says. It's levelling's list of moves (LoadGrid), since a proposal is levelling's kind of move: `section.levelling.gantt-proposals`, raised, with a heading that says what and how many, and `ul.levelling-list.choose`, a box for each (`label.issue-pick > input`, ticked to accept it), its id, what it is and whose, its date in the grammar of a change (`.change-lines`: the field, what it was struck through, what it becomes in `--changes`) and how far. Then the primary, for those ticked ("Move MIG-7 and 2 more"), all, none (the task alone), and "Put it back". a4a moves the focus to the heading (`tabindex="-1"`) when it opens.

**Keyboard** (a4a supplies the keys; Ocean the look of each state): the sheet is one stop, a treegrid. The arrows move from cell to cell and row to row; Space chooses a row; Enter or F2 types in a cell, Enter saves it, Escape puts it back. On a row, Alt and ← or → moves the task a working day, Alt, Shift and ← or → changes its length, and Alt and ↑ or ↓ moves its row: the bar shows it on its way while it moves, the focus stays on the row, and each step is said in a live region (`p.hidden[role="status"]`): "Moved MIG-7 to 23–27 Nov." Links from the keyboard are made by a command (CommandBar: "depends on MIG-8"). Ctrl+Z undoes the last change (Toast).

**What a screen reader hears**: the chart is hidden from it, as before; the sheet is what it reads: each row's level, whether it's open, whether it's chosen; each cell with its column's head, its value, and whether it can be typed in; and in the task's own words, what the chart shows: on the critical path, late and by how much, the date set and the date planned, read-only and why, being moved and where it would land. What a drag would do is said in the live region ("Drop it to start MIG-7 23 Nov.").

**Touch**: in `pointer: coarse`, an editable Gantt's rows are 44px. The sheet's rows grow by Ocean's CSS, and a4a draws the chart's rows 44px too: row r's top is 40 + 44r, and everything in a row comes down 6px (the bar's top at T + 14). a4a takes the height from the sheet (a row's `offsetHeight`, again when it changes) rather than asking the media query itself, so the chart is always drawn to the rows the CSS gives. The handles' hit strokes widen (`line.gantt-hit.resize` 44px, `circle.gantt-hit.link` 36px around its dot) and the move target is the row's height, so each is 44px. A bar held still a moment (D53's 220 ms) is picked up, and a held bar starts no text selection. A bar too short for its three targets keeps only the move, and its dates are typed in its sheet. On a phone the timeline becomes the agenda ([Agenda](../Agenda/README.md)), and a task is changed in its sheet (EditSheet).

**Narrower**, by the Gantt's own width, so the chart always keeps room beside the sheet: under 72rem a person shows by their mark alone, and screen readers still say the name; under 60rem the planned span leaves the sheet, since the bars show it and each task's words say it, and the names narrow; under 40rem the sheet keeps its names alone, its other cells out of the layout, so nothing hidden takes the focus, and a4a changes a task in its sheet there.

**Takes**, beyond the rows above: `editable`; per row `id`, `locked` (and why), `chosen`, `focused`, `set` (each date someone set: `{ field, value }`), `drafted`, `was`; `cells` (the columns, each `kind`: `date`, `dates`, `duration`, `person`, `done`, and its head); `editing` (a cell, its value, `invalid` and why, `saving`); `dragging` (a bar: where it would land; a link: from where, onto which; a row: before, after or into which); `draft` (what changed, `onKeep`, `onDrop`); `proposals` (each `id`, `what`, `who`, the field, from, to, how far; `onAccept` with all, none or ids, `onPutBack`); `zoom`; `said`.

**Markup:** as the read-only Gantt's, with the sheet for the list. T is a row's top, 40 + 32r (44r on a touch screen); x and w are a bar's.

```html
<section class="gantt gantt-box editable" aria-labelledby="t-title">
  <h2 id="t-title" class="hidden">Data center migration</h2>
  <div class="gantt-tools">
    <div class="modes" role="group" aria-label="Zoom"><button type="button" aria-pressed="true">Day</button><button type="button" aria-pressed="false">Week</button><button type="button" aria-pressed="false">Month</button><button type="button" aria-pressed="false">Quarter</button></div>
    <button type="button">Today</button><span class="grow"></span>
  </div>
  <p class="note" id="t-keys">Drag a bar to move it… From the keyboard, on a task’s row: <kbd>Alt</kbd> and <kbd>←</kbd> or <kbd>→</kbd> moves it a working day…</p>
  <p class="error-note" id="t-error" role="alert"><svg class="icon" aria-hidden="true"><!-- cross --></svg><strong>MIG-8 can’t be due before it starts.</strong><span>It starts 16 Nov: give it a due date on or after that, or press Escape to keep 17 Nov.</span></p>
  <p class="hidden" role="status">Moved MIG-7 to 23–27 Nov.</p>
  <!-- a draft: <div class="gantt-draft" role="region" aria-label="Draft"><span class="badge writes">Draft</span><p><strong>2 tasks changed.</strong> The plan ends 2 days later, 11 Dec. Nothing is saved until you keep it.</p><button type="button" class="small primary">Keep it</button><button type="button" class="small">Drop it</button></div> -->
  <div class="gantt-scroll" tabindex="0" role="group" aria-label="Data center migration, 2 Nov to 13 Dec">
    <div class="gantt-grid">
      <div class="gantt-side gantt-sheet" role="treegrid" aria-label="Data center migration’s tasks" aria-describedby="t-keys">
        <div class="gantt-side-head" role="row"><span class="gantt-cell name" role="columnheader">Task</span><span class="gantt-cell date" role="columnheader">Start</span><span class="gantt-cell date" role="columnheader">Due</span><span class="gantt-cell duration" role="columnheader">Estimate</span><span class="gantt-cell person" role="columnheader">Assignee</span><span class="gantt-cell dates planned" role="columnheader">Planned</span></div>
        <div class="gantt-rows" role="rowgroup">                                   <!-- .dragging while a row is on its way -->
          <div class="gantt-row summary" role="row" data-depth="0" aria-level="1" aria-expanded="true" aria-selected="false">
            <span class="gantt-cell name" role="gridcell" tabindex="-1"><a href="…" tabindex="-1">Build the new site</a></span>
            <span class="gantt-cell date" role="gridcell" tabindex="-1" aria-readonly="true"></span>…
          </div>
          <div class="gantt-row" role="row" data-depth="1" aria-level="2" aria-selected="true">   <!-- .locked .drafted .moving .drop-before .drop-after .drop-into -->
            <span class="gantt-cell name" role="gridcell" tabindex="0"><button type="button" class="gantt-grip" tabindex="-1" aria-label="Move MIG-6" aria-describedby="t-keys"><span aria-hidden="true">⋮⋮</span></button><span class="issue-id">MIG-6</span><a href="…" tabindex="-1">Order the hardware</a><span class="hidden">, on the critical path</span></span>
            <span class="gantt-cell date" role="gridcell" tabindex="-1">9 Nov</span>
            <span class="gantt-cell date editing" role="gridcell"><input type="text" value="13 Nov" aria-label="Due date of MIG-6"></span>   <!-- refused: aria-invalid="true" aria-describedby="t-error" -->
            <span class="gantt-cell duration saving" role="gridcell" tabindex="-1">5d<span class="hidden">, saving</span></span>
            <span class="gantt-cell person" role="gridcell" tabindex="-1"><span class="who" data-kind="person"><span class="avatar small" aria-hidden="true">AS</span><span class="who-name">Anna Schmidt</span></span></span>
            <span class="gantt-cell dates planned" role="gridcell" tabindex="-1" aria-readonly="true">9–13 Nov</span>
          </div>
          <div class="gantt-row new" role="row" data-depth="1" aria-level="2"><span class="gantt-cell name" role="gridcell"><svg class="icon" aria-hidden="true"><!-- plus --></svg><input type="text" placeholder="Add a task" aria-label="New task in Build the new site"></span></div>
        </div>
      </div>
      <svg class="gantt-chart" width="714" height="360" viewBox="0 0 714 360" aria-hidden="true">   <!-- .dragging while a bar or a link is on its way -->
        <rect class="gantt-off" …/>  <!-- the axis, as above -->
        <g class="gantt-task critical chosen"><rect class="gantt-bar" x y="T+8" width height="12" rx="4"/>…</g>
        <rect class="gantt-ring" x="x-3" y="T+5" width="w+6" height="18" rx="6"/>
        <g class="gantt-handles">
          <rect class="gantt-hit move" x y="T" width="w" height="32"/>
          <rect class="gantt-resize" x="x-2" y="T+7" width="4" height="14" rx="2"/><line class="gantt-hit resize" x1="x" x2="x" y1="T" y2="T+32"/>
          <rect class="gantt-resize" x="x+w-2" y="T+7" width="4" height="14" rx="2"/><line class="gantt-hit resize" x1="x+w" x2="x+w" y1="T" y2="T+32"/>
          <circle class="gantt-link-handle" cx="x-9" cy="T+14" r="4"/><circle class="gantt-hit link" cx="x-9" cy="T+14" r="4"/>
          <circle class="gantt-link-handle" cx="x+w+9" cy="T+14" r="4"/><circle class="gantt-hit link" cx="x+w+9" cy="T+14" r="4"/>
        </g>
      </svg>
    </div>
  </div>
</section>
```

| Mark | Its attributes |
| --- | --- |
| On its way | `rect.gantt-was`: where it was, x, T+8, w, 12, rx 4. `rect.gantt-ghost`: where it would land, x′, T+3, w′, 22, rx 6, before the task's group. `text.gantt-ghost-label`: its dates, 8px after the further of the ghost and the bar, at T+18 |
| A link being drawn | `circle.gantt-link-handle.on` where it starts; `path.gantt-link-draft`, a link's curve to the pointer, with `path.gantt-link-head.draft` at its end; on the target, `g.gantt-task.target` and its start's dot `.on`, and a `text.gantt-ghost-label` beside it |
| A date someone set | `path.gantt-set`: a start, at its day's left edge x, `M x+4 T+6 H x V T+22 H x+4`; a due date, at its day's right edge x, `M x-4 T+6 H x V T+22 H x-4` |
| Locked | `<svg class="gantt-lock" x="x+w+6" y="T+8" width="12" height="12" viewBox="0 0 24 24"><path d="M7 11h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1z"/><path d="M8.5 11V8a3.5 3.5 0 0 1 7 0v3"/><title>…</title></svg>` |
| A row moved | `line.gantt-drop-line`: across the chart, 1.5px inside the edge where it would land; `rect.gantt-drop-into`: 0, T, the chart's width, the row's height, for the row it would go under |
| A draft | `g.gantt-task.drafted` for each task it changed, with its `rect.gantt-was` |

Draw in this order: days off, rules and the axis; a row's `gantt-drop-into`; curves; summaries; for each task, where it was, where it would land, its group, its ring, its handles and its label; a link being drawn; a row's drop line; today.

## Links of four kinds, with lag

a4a keeps a dependency's kind and its lag on its one "depends on" link, so search, rules and imports see one kind of dependency (D72). The Gantt draws each kind from and to the ends it joins, says its lag beside it, and inks the links that drive a task's dates heavier than those that don't. Proposed, for a4a.

- **From the end it names, to the end it names.** Finish to start, as before; start to start (SS), finish to finish (FF) and start to finish (SF). A link leaves a start leftwards and a finish rightwards, 6px out from the bar, turns with corners of 4px, and enters its successor at the end its kind names, from outside the bar, its head's tip on the bar: a start from the left, the head pointing right; a finish from the right, the head pointing left. Where the two ends overlap, it goes around through the gap between the rows, 2px under the successor's row top, as finish to start does.
- **Driving or not**: a link that drives its task's dates (the engine's `driving`: without it the task would start or finish earlier) is inked heavier, `--muted` at 1.75 (`path.gantt-link.driving`, its head `.gantt-link-head.driving`); one that doesn't stays `--faint` at 1.25. The critical path's links always drive, and stay ink, twice as heavy (`.critical`), so the three read apart by weight and by ink.
- **A lag or a lead** (`text.gantt-lag`), in working days with its sign ("+2d", "−1d", a true minus), in Plex Mono at 10px in `--muted`, haloed in the card's colour so it reads over a weekend's shade; beside the link's first leg, 4px out on the side away from its bars. None is drawn for a lag of 0.
- **In words**: the chart stays hidden from screen readers, and the task's words say its links as the chart shows them: "starts 2 working days after Order the hardware finishes (finish to start), which drives its start"; "finishes no earlier than Rack and cable finishes (finish to finish), which doesn't drive it". The legend names the weights and the lag.
- **Drawn on the chart** (`.gantt.editable`): a link may be drawn from either of a bar's dots onto either end of another, the start's dot making a link from its start and the finish's from its finish; the target's dot nearer the pointer is filled (`.gantt-link-handle.on`), and the words beside it say the kind it would make ("Start to start, after MIG-8"). A lag is typed in a command ("depends on MIG-8 SS +2d") or in the link's own form, where a4a gives the link its kind and lag.

**Takes**, per row, in place of `after` for every kind: `links` (each `from`, the row it follows; `type`: `FS`, `SS`, `FF` or `SF`; `lag`, in working days, negative for a lead; `driving`; and its words).

**Markup:** T is a row's top and y its middle, T + 14; L is the link's leg. Each link is its path and its head, drawn after the rules and before the summaries, as before.

| Kind | Leaves | Enters, head | Its leg |
| --- | --- | --- | --- |
| Finish to start | the predecessor's finish, rightwards | the successor's start, from the left: `M xs y′ l-6 -3.5 v7 z` | 10px right of the finish; around through the gap where the start comes first |
| Start to start | the predecessor's start, leftwards | the successor's start, from the left: `M xs y′ l-6 -3.5 v7 z` | 10px left of the earlier start |
| Finish to finish | the predecessor's finish, rightwards | the successor's finish, from the right: `M xf y′ l6 -3.5 v7 z` | 10px right of the later finish |
| Start to finish | the predecessor's start, leftwards | the successor's finish, from the right: `M xf y′ l6 -3.5 v7 z` | 10px left of the start, around through the gap, and in from 14px right of the finish |

```html
<!-- start to start, +1d, driving: from Rack and cable's start (x 120, y 86) to Set up the network's (x 137, y 150) -->
<path class="gantt-link driving" d="M120 86H114Q110 86 110 90V146Q110 150 114 150H131"/><path class="gantt-link-head driving" d="M137 150l-6 -3.5v7z"/>
<text class="gantt-lag" x="106" y="121.5" text-anchor="end">+1d</text>
<!-- finish to finish, not driving: from Rack and cable's finish (x 169) to Label the cables' finish (x 186, y 118) -->
<path class="gantt-link" d="M169 86H192Q196 86 196 90V114Q196 118 192 118H192"/><path class="gantt-link-head" d="M186 118l6 -3.5v7z"/>
```
