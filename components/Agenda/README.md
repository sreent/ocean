# Agenda

A timeline or a calendar as a phone shows it: days, or weeks, as heads, and under each the issues that fall in it, with their dates and a mark for what each is. Proposed, for a4a's timeline and calendar views on a phone.

- **Heads** (`h3.agenda-head`): a day ("Wed 18 Nov") or a week ("16 to 22 Nov"), in the product's words, with how many issues it holds at its end (`.agenda-count`). A head stays in view while its issues go by, below the band above every page, and the next head takes its place.
- **Today** (`.agenda-day.today`, `aria-current="date"`): its head on a line in `--accent`, with its word (`.agenda-today`: "Today", or "This week" for a week), as the Gantt and the calendar mark today.
- **An issue** (`li.agenda-item`): a mark, its id in mono and its summary, both links to it, and its dates at the end in mono (`.agenda-when`). The mark is drawn as the Gantt draws the issue, so the two read alike (`svg.agenda-mark`, a 16-unit square): a task, a bar (`rect.gantt-bar`), in ink and twice as heavy on the critical path (`g.gantt-task.critical`); a milestone, a diamond in ink (`path.gantt-milestone`); late, the bar edged in `--bad` (`g.gantt-task.late`), its dates in `--bad`, and its words in a `bad` badge with a cross ("5 days late"); done, a tick in `--good` (`path.agenda-tick`), its summary in `--muted`.
- **Which issues fall under which head** is the product's: under each day, a4a lists what starts or ends that day, and under a week what runs in it; a day with nothing says so in a line of its own (`.agenda-none`), or is left out.
- From the keyboard it's links in reading order, under headings a screen reader moves between. Each issue's words say what its mark shows ("on the critical path", "a milestone", "done"), so the mark is never the only sign. Tapping one opens it, or in a4a its sheet, to change it (EditSheet).
- On a touch screen each link's target is 44px tall, its look unchanged.

**Takes:** `days` (each `label`, `count`, `today`, and its `items`: `id`, `summary`, `href`, `when`, `kind` as `task`, `milestone`, `late` or `done`, `critical`, `late` words, and words for screen readers), `by` (`day` or `week`), `none` (the words for a day with nothing).

**Markup:**

```html
<section class="agenda" aria-labelledby="ag-title">
  <h2 id="ag-title" class="hidden">Data center migration, day by day</h2>
  <ol class="agenda-days">
    <li class="agenda-day today" aria-current="date">
      <h3 class="agenda-head">Wed 18 Nov<span class="agenda-today">Today</span><span class="agenda-count">2<span class="hidden"> issues</span></span></h3>
      <ul class="agenda-items">
        <li class="agenda-item">
          <svg class="agenda-mark" viewBox="0 0 16 16" aria-hidden="true"><g class="gantt-task critical"><rect class="gantt-bar" x="2" y="5" width="12" height="6" rx="2.5"/></g></svg>
          <span class="agenda-main"><a class="issue-id" href="…">MIG-7</a><a class="agenda-summary" href="…">Rack and cable</a><span class="hidden">, on the critical path</span></span>
          <span class="agenda-when">18–24 Nov</span>
        </li>
        <li class="agenda-item late">
          <svg class="agenda-mark" viewBox="0 0 16 16" aria-hidden="true"><g class="gantt-task late"><rect class="gantt-bar" x="1.5" y="5" width="13" height="6" rx="2.5"/></g></svg>
          <span class="agenda-main"><a class="issue-id" href="…">MIG-6</a><a class="agenda-summary" href="…">Order the hardware</a><span class="badge bad"><svg class="icon" aria-hidden="true"><!-- cross --></svg>5 days late</span></span>
          <span class="agenda-when">9–13 Nov</span>
        </li>
        <li class="agenda-item done">
          <svg class="agenda-mark" viewBox="0 0 16 16" aria-hidden="true"><path class="agenda-tick" d="M3 8.5l3.2 3.2 6.8-6.8"/></svg>
          <span class="agenda-main"><a class="issue-id" href="…">MIG-13</a><a class="agenda-summary" href="…">Agree the cutover window</a><span class="hidden">, done</span></span>
          <span class="agenda-when">18 Nov</span>
        </li>
      </ul>
    </li>
    <li class="agenda-day"><h3 class="agenda-head">Fri 20 Nov</h3><p class="agenda-none">Nothing starts or ends</p></li>
  </ol>
</section>
```

A task off the critical path has the bar alone, `<svg class="agenda-mark" …><rect class="gantt-bar" x="1.5" y="5" width="13" height="6" rx="2.5"/></svg>`; a milestone, `<path class="gantt-milestone" d="M8 1.5l6.5 6.5-6.5 6.5-6.5-6.5z"/>`.

**In a4a:** the timeline and the calendar on a phone, where a timeline can't fit; and a full day's issues, from the calendar's "+N more". The preview is a static rendition at a phone's width, day by day and week by week.
