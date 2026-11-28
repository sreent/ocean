# Calendar

Issues on the days they take: a month, or a week, of seven columns, and beside it a tray of the issues with no date yet, to drag onto a day. Proposed, for a4a's calendar view (D75).

- **Seven columns, in the order the product gives them.** The weekdays' names head them (`.cal-weekdays`, the product's words, hidden from screen readers, since each day's own name says its date), and the week starts on the product's day: Monday, Sunday or any other. The grid knows no weekday of its own: a day is placed by its place among the week's seven, and is quiet because the product says nobody works it, never because of its column.
- **A day** (`button.cal-day`): its number, at 600; today's on a line in `--accent`, with its word (`.today`, `.cal-today`), as the Gantt marks today. A day nobody works, a weekend or a holiday (`.off`), is quiet: `--sunken`, its number in `--muted`, a holiday's name beside the number (`.cal-holiday`). A day outside the month (`.outside`) is quieter still: the page's own `--page`, its number in `--faint`. Its name says its date in full, and whether it's today, a holiday, and how many issues it has ("Wednesday 18 November, today, 3 issues"), in the product's words.
- **Issues as chips** (`a.cal-chip`) on the week's grid, placed by classes alone, so they need no style of their own: `col-1` to `col-7` the column they start in that week, `span-1` to `span-7` how many days they take in it, and `lane-1` to `lane-3` their row in a month (to `lane-8` in a week), the first lane free on every day they take. Each says its id in mono and its summary, and for screen readers its dates and what's true of it. One that goes on past the week's end (`.continues`) has a square, dashed end with a chevron, and goes on in the next week's row from its first day (`.continued`, a square, dashed start).
- **What each is**: a milestone has a diamond before its id (`.milestone`); done, a tick in `--good`, its summary `--muted` (`.done`); late, edged in `--bad` with a cross, and its words for screen readers (`.late`); chosen, on `--accent-soft` and edged in `--accent` (`.chosen`); one nobody here may change has a lock and keeps an arrow's pointer (`.locked`).
- **A full day**: a month has three lanes; the fourth says how many more (`button.cal-more`, "+2 more"), and opens that day's issues, as the agenda lists them, in a popover or a sheet.
- **Dragging**: a chip on its way leaves its place dashed, its words hidden (`.moving`); where it would land is a copy of it, dashed in `--accent` on `--accent-soft` (`.ghost`, hidden from screen readers), and the day under it is edged in dashes of `--accent` and filled `--accent-soft` (`.drop`), as a board's slot is; the grid shows a closed hand (`.cal-grid.dragging`). What dropping does is said in words in a live region ("Drop it to start MIG-21 Wed 25 Nov."). A drop sets the date its project's plan uses, as a move on the timeline does, with what else it would move and Undo.
- **The tray** (`aside.cal-tray`): the issues with no date, each a card (`li.cal-tray-item`: its id, a button, and its summary), dragged from as a board's cards are. One on its way leaves its place dashed (`.moving`); one picked up from the keyboard is raised and edged in `--accent` (`.lifted`). Beside the grid where there's room, under it where there isn't (a calendar under 46rem).
- **Keyboard** (a4a supplies the keys; Ocean the look of each state): the days are one stop, a roving `tabindex`: the arrows move a day, or a week up and down, Home and End to the week's ends, Page Up and Page Down a month; the day with the focus wears the ring inside its edge. Each chip is a link, in the tab order after its week's days, and wears the ring 1px off its edge; on a chip, a4a's keys move it, Alt and an arrow a day or a week, as a bar moves on the timeline, and what moved is said. From the tray: Space on an issue's id picks it up (`.lifted`, `aria-pressed="true"`), the arrows take the focus through the days, the one with the focus showing where it would land (`.drop`), Enter puts it there and Escape puts it back.
- **What a screen reader hears**: each week a group named by its dates; each day by its name; each chip by its id, its summary, its dates and what's true of it ("a milestone", "3 days late", "done", "read-only", "continues next week"); "+2 more" by how many and which day; and what a drag would do, in the live region.
- **Touch**: in `pointer: coarse` each lane is 44px and each chip its lane's height; "+N more" is 44px; a chip or a tray card held still a moment (D53's 220 ms) is picked up, with no text selection and no menu.
- **Narrow**: the grid never scrolls the page sideways: its seven columns share whatever width there is, and in a calendar under 34rem the chips show their ids alone and the holidays' names go. On a phone a4a shows the agenda instead ([Agenda](../Agenda/README.md)), or a week, and the tray goes under it.

**Takes:** `span` (`month` or `week`), `weekdays` (seven names, in order), `weeks` (each its `label` and seven `days`: `date`, `name` for screen readers, `number`, `today`, `off`, `holiday`, `outside`, and how many issues), `chips` (per week: `id`, `summary`, `href`, `col`, `span`, `lane`, `continues`, `continued`, `milestone`, `done`, `late`, `chosen`, `locked`, and their words), `more` (per day: how many, and its words), `tray` (each `id`, `summary`), `dragging` (what, from where, onto which day, and the words for it), `focus` (a day or a chip), `onMove`, `onDrop`, `onOpenDay`.

**Markup:** each week is a grid of seven columns. Its seven days come first, in order, each taking its column's whole height; then its chips and "+N more", each placed by its classes. The rows are the days' numbers, then the lanes.

```html
<section class="cal" aria-labelledby="cal-title">                    <!-- .week for a week of eight lanes -->
  <div class="cluster spread"><h2 id="cal-title">November 2026</h2><div class="cluster"><div class="modes" role="group" aria-label="Show">…</div><button type="button">Today</button>…</div></div>
  <p class="hidden" role="status">Drop it to start MIG-21 Wed 25 Nov.</p>
  <div class="cal-body">                                              <!-- .no-tray without one -->
    <div class="cal-grid" role="group" aria-label="November 2026, a week a row">   <!-- .dragging while something is on its way -->
      <div class="cal-weekdays" aria-hidden="true"><span class="cal-weekday">Mon</span>…<span class="cal-weekday">Sun</span></div>
      <div class="cal-week" role="group" aria-label="16 to 22 Nov">
        <button type="button" class="cal-day" tabindex="-1" aria-label="Monday 16 November, 1 issue"><span class="cal-head-line"><span class="cal-num">16</span></span></button>
        <button type="button" class="cal-day today" tabindex="0" aria-label="Wednesday 18 November, today, 3 issues"><span class="cal-head-line"><span class="cal-num">18</span><span class="cal-today">Today</span></span></button>
        <button type="button" class="cal-day off" tabindex="-1" aria-label="Thursday 26 November, Thanksgiving, 1 issue"><span class="cal-head-line"><span class="cal-num">26</span><span class="cal-holiday">Thanksgiving</span></span></button>
        …                                                              <!-- seven in all; .outside, .drop -->
        <a class="cal-chip col-3 span-5 lane-1 chosen continues" href="…"><span class="issue-id">MIG-7</span><span class="cal-chip-summary">Rack and cable</span><span class="hidden">, 18 to 24 Nov, continues next week</span><svg class="icon cal-on" aria-hidden="true"><!-- chevron --></svg></a>
        <a class="cal-chip col-1 span-1 lane-2 late" href="…"><svg class="icon" aria-hidden="true"><!-- cross --></svg><span class="issue-id">MIG-6</span><span class="cal-chip-summary">Order the hardware</span><span class="hidden">, 9 to 13 Nov, 3 days late</span></a>
        <a class="cal-chip col-4 span-1 lane-1 milestone" href="…"><svg viewBox="0 0 16 16" aria-hidden="true"><path class="gantt-milestone" d="M8 1.5l6.5 6.5-6.5 6.5-6.5-6.5z"/></svg><span class="issue-id">MIG-14</span><span class="cal-chip-summary">Cutover</span><span class="hidden">, 10 Dec, a milestone</span></a>
        <button type="button" class="cal-more col-4 lane-4" aria-label="2 more on 19 Nov">+2 more</button>
      </div>
    </div>
    <aside class="cal-tray" aria-labelledby="tray-title">
      <h3 id="tray-title">No date yet <span class="note">4</span></h3>
      <p class="note" id="tray-keys">Drag one onto a day to set its start. From the keyboard, Space on its id picks it up…</p>
      <ul class="cal-tray-list">
        <li class="cal-tray-item"><button type="button" class="issue-id" aria-describedby="tray-keys">MIG-22</button><span class="cal-tray-summary">Order spare power supplies</span></li>   <!-- .moving; .lifted with aria-pressed="true" -->
      </ul>
    </aside>
  </div>
</section>
```

A chip done has a tick before its id, `<svg class="icon">` with the check's path; a locked one, the lock's. Where a dragged chip would land is a copy, `<a class="cal-chip col-3 span-1 lane-3 ghost" tabindex="-1" aria-hidden="true">…</a>`; where it was, `.moving` on the chip itself, `tabindex="-1"` and `aria-hidden="true"` while it's on its way.

**In a4a:** the calendar view of a search (`?view=calendar`), its issues on their planned days, the rest in the tray. The preview is a static rendition: a month, Monday first, of a data center's move, and a week, Sunday first.
