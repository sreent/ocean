# Burndown

A sprint's burndown: what's left at the end of each working day against the ideal, how it stands in a sentence, its figures at a glance, and every change to its scope. Proposed.

- How it stands comes first, a badge and its words: on track, ahead or done (`good`); behind (`warn`, with the clock); ended with work left (`bad`); not started, or nothing in it (`idle`). The words say it in hours or issues, against the ideal as today began: "Behind: 26h left, where the ideal had 20h left as today began. At the pace so far, 3h a day, the rest would be done by 26 Nov, after the sprint ends."
- Its facts at a glance (`.report-facts`): what was committed, what's left, how the scope changed ("+8h, −4h", each part only when it isn't nothing), and the working days left.
- What's left is a line of the first series (`.chart-line.s1`), 2px, ending in a dot ringed in the card's colour, named at its end in `--text`: "26h left". It runs to today and stops: days to come have no line.
- The ideal is a guide, `.burn-ideal`: dashed, in `--faint`, as what isn't so. It runs from what was committed at the start to nothing at the end of the last working day.
- Where the scope changed, a ring in the colour of a change (`.burn-scope`, `--changes`) on that day's point, with how much: "+8h". A change on a weekend belongs to the Monday.
- Today is a line in `--accent` (`.chart-today`), named in the key rather than on the chart, where it would sit on the line.
- Only working days are drawn, one unit to a pixel at the width the chart is given, so its words keep their size on a phone.
- The figures are a table beside the chart (`.chart-figures`), stacked under it where the card is narrower than 48rem: at the start, then each working day with what's left, the ideal, what was done, what was added and the time logged. Today's row is in the name's weight; a column with nothing in it is left out.
- Each change is listed under it, folded (`details.chart-more`), in its words (added, taken out, deleted, resolved, reopened, estimate changed): "11 Nov: Added BACK-31 Single sign-on fails on Safari, +8h".
- In a dashboard's widget it's compact: the words, the facts, the chart, and its figures folded beneath.

**Takes:** `sprint` (name, goal, dates, board), `by` (`estimate` or `count`), `start`, `remaining`, `days` (each `date`, `remaining`, `ideal`, `completed`, `added`, `removed`, `logged`), `status` (`verdict`, `words`), `changes` (each `date`, `issue`, `summary`, `kind`, `amount`), `today`.

**Markup:** the SVG is drawn from its attributes alone, so it needs no style of its own; every class is in css/components.css.

```html
<section class="card" aria-label="Sprint 14's burndown"><div class="report">
  <div class="report-head"><h2>Sprint 14 <span class="note">on Backend sprints</span></h2><p class="note">9 to 20 Nov, 10 working days · Fix SSO on Safari</p></div>
  <div class="report-says"><span class="badge warn"><svg class="icon" aria-hidden="true"><!-- clock --></svg>Behind</span><p>Behind: 26h left, where the ideal had 20h left as today began. …</p></div>
  <dl class="report-facts"><div><dt>Committed</dt><dd>40h</dd></div><div><dt>Left</dt><dd>26h</dd></div><div><dt>Scope changed</dt><dd>+8h, −4h</dd></div><div><dt>Working days left</dt><dd>4</dd></div></dl>
  <div class="chart-box">
    <figure class="chart">
      <svg viewBox="0 0 640 250" role="img" aria-labelledby="b-title"><title id="b-title">What's left of Sprint 14 at the end of each working day, against the ideal; the figures are in the table beside it</title>
        <g><line class="chart-grid" x1="46" x2="564" y1="168" y2="168"/><text x="38" y="172" text-anchor="end">10h</text></g>
        <line class="chart-axis" x1="46" x2="564" y1="218" y2="218"/>
        <g><line class="chart-axis" x1="97.8" x2="97.8" y1="218" y2="222"/><text x="97.8" y="235" text-anchor="middle">9 Nov</text></g>
        <line class="chart-today" x1="356.8" x2="356.8" y1="18" y2="218"/>
        <path class="burn-ideal" d="M46 18L564 218"/>
        <path class="chart-line s1" d="M46 18L97.8 28L149.6 48L201.4 28…"/>
        <g><circle class="burn-scope" cx="201.4" cy="28" r="4.5"/><text class="chart-label" x="201.4" y="18" text-anchor="middle">+8h</text></g>
        <g><circle class="chart-dot s1" cx="356.8" cy="88" r="4"/><text class="chart-label" x="365.8" y="92">26h left</text></g>
      </svg>
      <figcaption><ul class="chart-key">
        <li><svg width="22" height="10" aria-hidden="true"><path class="chart-line s1" d="M1 5H21"/></svg>What's left</li>
        <li><svg width="22" height="10" aria-hidden="true"><path class="burn-ideal" d="M1 5H21"/></svg>Ideal</li>
        <li><svg width="12" height="12" aria-hidden="true"><circle class="burn-scope" cx="6" cy="6" r="4.5"/></svg>Scope changed</li>
        <li><svg width="6" height="14" aria-hidden="true"><path class="chart-today" d="M3 0V14"/></svg>Today</li>
      </ul></figcaption>
    </figure>
    <div class="figures-scroll" tabindex="0" role="group" aria-label="Sprint 14, day by day">
      <table class="figures chart-figures"><caption>Day by day, in hours of estimate</caption>
        <thead><tr><th scope="col">Day</th><th scope="col" class="num">Left</th><th scope="col" class="num">Ideal</th><th scope="col" class="num">Done</th><th scope="col" class="num">Added</th><th scope="col" class="num">Logged</th></tr></thead>
        <tbody><tr><th scope="row">At the start</th><td class="num">40h</td><td class="num">40h</td>…</tr><tr class="today"><th scope="row">16 Nov, today</th><td class="num">26h</td>…</tr></tbody>
      </table>
    </div>
  </div>
  <details class="chart-more"><summary>2 changes to its scope and progress</summary><ul><li>11 Nov: Added <a href="…">BACK-31</a> Single sign-on fails on Safari, +8h</li></ul></details>
</div></section>
```

**In a4a:** Reports → Burndown, a board's sprint (its link from the sprint board), a dashboard's widget, and `get_report` for agents. Load css/charts.css with it. The preview is rendered from a4a's own component, with a sprint that fell behind after work was added.
