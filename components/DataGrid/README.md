# DataGrid

A sheet people edit in place: issues as rows, their fields as columns, typed into where they stand, as a4a's table view of a search. Heads that sort and take a few set widths; the box, the id and the summary in view while the rest scroll sideways in the grid's own frame; cells by kind, with their editing, refused, saving and read-only states; rows chosen, parents folded over their children, groups under a field's value with their roll-ups, and the total. Proposed, for a4a (D72).

- **One record.** A row is the issue, and typing in a cell changes it as a command does, so whatever a command would refuse, the cell refuses, in the server's words. Ocean gives each state its look; a4a supplies every word, every key and every value.
- **The frame** (`.dg-scroll`) scrolls the grid both ways, at most the window's height, so its heads stay at its top and the total at its foot while a long search goes by; on a phone it scrolls sideways inside itself and never the page. The box, the id and the summary (`.dg-pick`, `.dg-id`, `.dg-summary`) stay in view while the rest scroll under them, the summary edged in `--line`.
- **Heads** (`thead th`, `scope="col"`): the field's name, in the project's own words, as a button that sorts (`button.dg-sort`); the column it's sorted by is `aria-sort="ascending"` or `"descending"`, its name in `--text` and its mark pointing the way it runs (`svg.dg-sort-mark`); the others show their mark faintly under the pointer only. A number's head sits at its end, as its figures do (`th.dg-num`).
- **Widths** are a few set ones, a class on each column's `<col>`, never a style: `dg-w-s` (6rem, narrow), `dg-w-m` (9rem, medium), `dg-w-l` (14rem, wide) and `dg-w-xl` (22rem, widest). The box's and the id's columns are their own (`dg-col-pick`, `dg-col-id`). The pointer drags the grip at a head's end (`span.dg-resize`, hidden from screen readers), snapping to the nearest set width, the head `.resizing` while it's held; the keyboard steps through them (below); and the toolbar's Columns says each column's width as a choice. a4a keeps the widths in the saved search's view (`table.columns[].width`).
- **Dates set and dates planned** stand side by side, labelled so they read apart: each head says the field, and under it which of its dates (`span.dg-kind`: "set", "planned", the product's words). A planned date is the engine's, read-only and in `--muted` (`td.dg-planned`); planned to finish after its due date, it's late: `--bad` at 500 with a cross, and its words for screen readers ("3 days late: it's due 13 Nov") (`.dg-late`). The toolbar's Dates choice shows set, planned or both (`table.dates`).
- **Cells by kind**: text (the summary, as the row's header, `th.dg-summary`); a number (`.dg-num`, at its end, in tabular figures, such as points, % done or a cost); a date (`.dg-date`, Plex Mono); a period (`.dg-period`, Plex Mono at its end: "2d 4h"); a person (`.dg-person`, their mark and name, `.who`); a value with a tone (`.dg-badge`, a Badge with its shape, as the list shows a state); a cost in each currency it's kept in (`.dg-amounts`).
- **A cell to type in** is `--sunken` under the pointer, with a text cursor; the one with the keyboard's focus wears the ring inside its edge. **Being typed in** (`.editing`) it holds its input. **Refused**, the input is `aria-invalid="true"`, edged in `--bad`, and its note hangs under the cell, over the rows below (`p.error-note.dg-note`, `role="alert"`), saying what's wrong and how to put it right, which the input names (`aria-describedby`); a4a renders the note when the server refuses, so it's said once. **Saving** (`.saving`), the value as typed is underlined, dashed, as what isn't in force yet, and screen readers hear ", saving". **Read-only** (`aria-readonly="true"`): a planned date, a parent's or a group's roll-ups, the id, and every cell of a row nobody here may change. A person is picked as the Gantt's sheet picks one: the input is a combobox, its options `ul.popover.options.gantt-pick[popover]` in the top layer, anchored under the cell being typed in.
- **Rows**: a box to choose each (`td.dg-pick > label.issue-pick > input`), chosen `--accent-soft` (`aria-selected="true"`), with a box in the head to choose them all. A parent's children are indented a step a level (`data-depth`, 0 to 3), and folded by the chevron before its summary (`button.dg-fold`; the row `aria-expanded`, a folded parent's chevron pointing at it); a parent's summary is at 600, and what it rolls up from its children is read-only. A row nobody here may change has a lock after its summary and its words say why (`tr.locked`: "read-only: it's in Security, which you can only read").
- **Groups**, by a field's value (a4a's `group`): each group is a `<tbody>` under its head row (`tr.dg-group`), whose first cell spans the box, the id and the summary (`th.dg-group-head`, `colspan="3"`) and holds the list's own head (`button.issues-group-fold`: the chevron, the value, a Badge in its tone where it has one, as [IssueList](../IssueList/README.md) shows it, and how many). Its other cells roll up the group in the columns they roll up, read-only at 600: the earliest start, the latest finish, the total effort, % done (by effort) and the cost in each currency. A folded group's rows aren't drawn.
- **The total** (`tfoot tr.dg-total`): the same roll-ups for the whole search, its first cell spanning the three (`th.dg-total-head`), at the frame's foot.
- **The toolbar** (`.dg-tools`): how many and how many chosen; the dates shown (`.modes`: set, planned, both); the columns shown (`button.dg-columns-button` opening `div.popover.dg-columns[popover]`, anchored under it: a tick for each column and its width); and export (`.dg-export`, `role="group"`: CSV and Excel, each a link that downloads, `a.button.small[download]`). With rows chosen, the bar above offers a command for them, as the list's does (`.issues-bar`).

**Keyboard** (a4a supplies the keys; Ocean the look of each state): the grid is one stop, a roving `tabindex` on its cells (`role="treegrid"` where rows have levels, `role="grid"` where none do). The arrows move from cell to cell, Home and End to a row's ends, Ctrl and Home or End to the grid's, Page Up and Page Down a frame at a time. Enter or F2 types in a cell (or a character starts typing, replacing the value); Enter saves it and Escape puts it back; while typing, Tab saves and types in the next cell along the row, Shift and Tab the one before, and at the row's end Tab saves and the focus stays, so Tab never takes the person out of the grid while they type, and leaves it when they don't. Space on a row's box, or Shift and Space on any of its cells, chooses it. Ctrl and → opens a parent or a group, Ctrl and ← folds it (or, on a child, goes to its parent). On a head, Enter sorts by it, again to reverse it, and Alt and ← or → makes it a set width narrower or wider; each is said in a live region (`p.hidden[role="status"]`): "Sorted by Due date, earliest first." "Assignee is wide." A cell the arrows reach scrolls clear of the heads and the total (the frame's `scroll-padding`); a4a scrolls it clear of the frozen columns too, by their width.

**What a screen reader hears**: the grid by its title and its keys (`aria-labelledby`, `aria-describedby`); each row's level, whether it's open and whether it's chosen; each cell with its column's head (the field, then "set" or "planned"), its value, and whether it can be typed in; the summary as the row's header, so moving down a column says whose value it is; a roll-up with its words ("earliest 9 Nov", "in all 18d 4h"); what's late, locked or saving in words; a refusal, once, from its note. A virtualised grid says how many rows there are (`aria-rowcount`, and `aria-rowindex` on each row drawn).

**Touch**: in `pointer: coarse` rows and heads are 44px, and an input fills its cell's height; the chevron's target grows to 44px without moving the summary, as the frame's dense rows do; the box is its 44px label. A width is chosen in Columns, where the grip is small for a finger.

**Narrower**, by the grid's own width: under 40rem the id and the summary narrow (4.75rem and 9rem), so a column still shows beside them, and the deepest levels indent less. The toolbar wraps. On a phone a4a may open a row's issue in its sheet ([EditSheet](../EditSheet/README.md)) rather than type in a cell.

**Takes:** `columns` (each `field`, its `head` and `kind` words, `type` as `text`, `number`, `date`, `period`, `person`, `badge` or `money`, `width` as `s`, `m`, `l` or `xl`, `planned`, `sortable`), `sort` (`field`, `direction`), `rows` (each `id`, `href`, `summary`, `depth`, `open`, `chosen`, `locked` and why, its `cells` by field: `value`, words for screen readers, `tone` and `shape` for a badge, `late` and its words, `readOnly`), `groups` (each `value`, `tone`, `count`, `open`, `rollups` by field, and its `rows`), `total` (its words and `rollups`), `editing` (a cell, what's typed, `invalid` and its note, `saving`), `dates` (`set`, `planned`, `both`), `shown` (the columns shown), `exports` (CSV and Excel addresses), `said`; `onSort`, `onWidth`, `onShown`, `onDates`, `onEdit`, `onChoose`, `onFold`.

**Markup:** a table, its columns sized by their `<col>`. In groups, each group is a `<tbody>`; with no groups, one `<tbody>`, and `role="grid"` where no row has children.

```html
<section class="data-grid-box" aria-labelledby="dg-title">
  <h2 id="dg-title">Q4 infrastructure, by project</h2>
  <div class="dg-tools">
    <p class="note">21 tasks in 3 projects · 1 chosen</p><span class="grow"></span>
    <div class="modes" role="group" aria-label="Dates shown"><button type="button" aria-pressed="false">Set</button><button type="button" aria-pressed="false">Planned</button><button type="button" aria-pressed="true">Both</button></div>
    <button type="button" class="dg-columns-button" popovertarget="dg-cols"><svg class="icon" aria-hidden="true"><!-- settings --></svg>Columns</button>
    <div class="dg-export" role="group" aria-label="Export"><span class="label" aria-hidden="true">Export</span><a class="button small" href="…/plans/table.csv?…" download>CSV</a><a class="button small" href="…/plans/table.xlsx?…" download>Excel</a></div>
  </div>
  <div class="popover dg-columns" id="dg-cols" popover>
    <fieldset><legend class="label">Columns shown</legend>
      <ul class="dg-columns-list">
        <li><label><input type="checkbox" checked>Due date set</label><select aria-label="Width of Due date set"><option selected>Narrow</option><option>Medium</option><option>Wide</option><option>Widest</option></select></li>
      </ul>
    </fieldset>
  </div>
  <p class="note" id="dg-keys">Click a cell to type in it. From the keyboard, the arrows move from cell to cell; <kbd>Enter</kbd> or <kbd>F2</kbd> types in one…</p>
  <p class="hidden" role="status">Sorted by Due date, earliest first.</p>
  <div class="dg-scroll">
    <table class="data-grid" role="treegrid" aria-labelledby="dg-title" aria-describedby="dg-keys" aria-multiselectable="true">   <!-- .no-pick without the boxes -->
      <colgroup><col class="dg-col-pick"><col class="dg-col-id"><col class="dg-col-summary dg-w-l"><col class="dg-w-s">…<col class="dg-w-m"></colgroup>
      <thead><tr>
        <th scope="col" class="dg-pick" tabindex="-1"><label class="issue-pick"><input type="checkbox" tabindex="-1" aria-label="Choose all 21 tasks"></label></th>
        <th scope="col" class="dg-id" tabindex="-1"><button type="button" class="dg-sort" tabindex="-1"><span class="dg-head-name"><span>ID</span></span><svg class="dg-sort-mark" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 7.5 6 4.5 9 7.5"/></svg></button><span class="dg-resize" aria-hidden="true"></span></th>
        <th scope="col" class="dg-summary" tabindex="-1">…Summary…</th>
        <th scope="col" aria-sort="ascending" tabindex="-1"><button type="button" class="dg-sort" tabindex="-1"><span class="dg-head-name"><span>Due date</span><span class="dg-kind">set</span></span><svg class="dg-sort-mark" …/></button><span class="dg-resize" aria-hidden="true"></span></th>   <!-- .resizing while its grip is held -->
        <th scope="col" class="dg-num" tabindex="-1">…Estimate…</th>
      </tr></thead>
      <tbody>
        <tr class="dg-group" aria-level="1" aria-expanded="true">
          <th scope="row" colspan="3" class="dg-group-head" tabindex="-1"><button type="button" class="issues-group-fold" tabindex="-1"><svg class="icon" aria-hidden="true"><!-- chevron --></svg><span class="issues-group-name">Data center migration</span><span class="issues-group-count">6<span class="hidden"> tasks</span></span></button></th>
          <td class="dg-date" aria-readonly="true" tabindex="-1"></td>
          <td class="dg-date dg-planned" aria-readonly="true" tabindex="-1"><span class="hidden">earliest </span>9 Nov</td>
          <td class="dg-period" aria-readonly="true" tabindex="-1"><span class="hidden">in all </span>18d 4h</td>
          <td class="dg-num" aria-readonly="true" tabindex="-1">€24,800</td>
        </tr>
        <tr data-depth="0" aria-level="2" aria-expanded="true" aria-selected="false">
          <td class="dg-pick" tabindex="-1"><label class="issue-pick"><input type="checkbox" tabindex="-1" aria-label="Choose MIG-5"></label></td>
          <td class="dg-id" aria-readonly="true" tabindex="-1"><a class="issue-id" href="…" tabindex="-1">MIG-5</a></td>
          <th scope="row" class="dg-summary" tabindex="-1"><button type="button" class="dg-fold" tabindex="-1" aria-label="Fold MIG-5"><svg class="icon" aria-hidden="true"><!-- chevron --></svg></button>Build the new site</th>
          <td class="dg-period" aria-readonly="true" tabindex="-1">10d 4h<span class="hidden">, the total of its tasks</span></td>
        </tr>
        <tr data-depth="1" aria-level="3" aria-selected="true">                  <!-- .locked -->
          <td class="dg-pick" tabindex="-1"><label class="issue-pick"><input type="checkbox" tabindex="-1" aria-label="Choose MIG-6" checked></label></td>
          <td class="dg-id" aria-readonly="true" tabindex="-1"><a class="issue-id" href="…" tabindex="-1">MIG-6</a></td>
          <th scope="row" class="dg-summary" tabindex="0">Order the hardware</th>
          <td class="dg-date" tabindex="-1">9 Nov</td>
          <td class="dg-date dg-planned dg-late" aria-readonly="true" tabindex="-1"><svg class="icon" aria-hidden="true"><!-- cross --></svg>18 Nov<span class="hidden">, 3 days late: it's due 13 Nov</span></td>
          <td class="dg-date editing"><input type="text" value="17 Nov" aria-label="Due date of MIG-7" aria-invalid="true" aria-describedby="dg-err">
            <p class="error-note dg-note" id="dg-err" role="alert"><svg class="icon" aria-hidden="true"><!-- cross --></svg><strong>MIG-7 can't be due before it starts.</strong><span>It starts 19 Nov: give it a due date on or after that, or press Escape to keep 25 Nov.</span></p></td>
          <td class="dg-period saving" tabindex="-1">2d 4h<span class="hidden">, saving</span></td>
          <td class="dg-num" tabindex="-1">3</td>
          <td class="dg-person" tabindex="-1"><span class="who" data-kind="person"><span class="avatar small" aria-hidden="true">AS</span><span class="who-name">Anna Schmidt</span></span></td>
          <td class="dg-badge" tabindex="-1"><span class="badge warn"><svg class="icon" aria-hidden="true"><!-- clock --></svg>In Review</span></td>
        </tr>
      </tbody>
      <tfoot><tr class="dg-total"><th scope="row" colspan="3" class="dg-total-head" tabindex="-1">All 21 tasks</th>…<td class="dg-num" aria-readonly="true" tabindex="-1"><span class="dg-amounts"><span>€28,400</span><span>$12,600</span></span></td></tr></tfoot>
    </table>
  </div>
</section>
```

A locked row's summary: `<th scope="row" class="dg-summary" aria-readonly="true" tabindex="-1">Single sign-on fails on Safari<svg class="icon" aria-hidden="true"><!-- lock --></svg><span class="hidden">, read-only: it's in Security, which you can only read</span></th>`, and every cell of it `aria-readonly="true"`.

**In a4a:** the table view of a search (`?view=table`), and a plan across projects grouped by project (a portfolio): its columns any field of a row's project, set and planned dates side by side, slack, % done and time spent, and money only for those who may see costs; exported from `GET /plans/table.csv` and `.xlsx`. The preview is a static rendition: a quarter's infrastructure across three projects, the first two open, a cell refused and one saving, and the columns shown, opened.
