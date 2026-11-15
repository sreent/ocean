# LoadGrid

People's load, day by day: a row for each person and a column for each working day, each cell the hours booked, its shade the share of that day's capacity. Over capacity says so, in `--warn`, with its words. Then what levelling would move, before anything does. Proposed.

- The shade counts the load, in Ocean Blue (css/charts.css), a quarter of the day at a time: up to a quarter, half, three quarters, and all of it. The figure is always in the cell, so the shade is never the only sign.
- Ocean Blue's steps 1, 2, 4 and 6 carry the quarters, with `--text` on the first two and `--surface` on the others: each reads at 4.5 to 1 in light and in dark, where the ramp runs from deep to pale. No colour of text reads on step 3 in both, so it isn't used.
- Over capacity is `--warn` on `--warn-bg`, with the clock and its words: "10h of 8h".
- A day with no hours says "0h" on the card. A day someone is away is `--sunken`, with "away". Weekends are a gap between the weeks.
- Each person's capacity is beside their name: "8h a day", "6h a day".
- Levelling is proposed before it's done: each task it would move, with its id, who it's for, its dates in the grammar of a change (from, struck through, to, in `--changes`) and how far it moves, "2 days later". One primary button says what happens: "Level 4 tasks". Nothing moves until a person levels them.
- The grid scrolls sideways in its frame where it's narrow, the names staying in view. Levelling's rows stack.

**Takes:** `days` (each date, and whether it starts a week), `people` (each `name`, `capacity`, `hours` per day, or `away`), `levelling` (each `id`, `what`, `who`, `from`, `to`, `by`), `onLevel`.

**Markup:** `data-load` is `ceil(hours ÷ capacity × 4)`, from 1 to 4, and 0 for no hours; over capacity, the cell is `.over` instead.

```html
<section class="load load-box" aria-labelledby="l-title">
  <h2 id="l-title">Who's booked, and how much</h2>
  <p class="note" id="l-about">Hours booked against each person's capacity, 16 to 27 Nov. Weekends are the gap between the weeks.</p>
  <div class="load-scroll" tabindex="0" role="group" aria-label="Hours booked, 16 to 27 Nov">
    <table class="load-grid" aria-labelledby="l-title" aria-describedby="l-about">
      <thead><tr><th scope="col" class="load-who">Person</th><th scope="col">Mon <span>16 Nov</span></th>…<th scope="col" class="week-start">Mon <span>23 Nov</span></th>…</tr></thead>
      <tbody><tr>
        <th scope="row" class="load-who"><span class="who" data-kind="person"><span class="avatar small" aria-hidden="true">AS</span><span><span class="who-name">Anna Schmidt</span><span class="who-about">8h a day</span></span></span></th>
        <td class="load-cell" data-load="3">6h</td>
        <td class="load-cell over"><svg class="icon" aria-hidden="true"><!-- clock --></svg>10h<span>of 8h</span><span class="hidden">, over</span></td>
        <td class="load-cell off">away</td>
        <td class="load-cell week-start" data-load="2">4h</td>
      </tr></tbody>
    </table>
  </div>
  <ul class="load-key" aria-label="What the shades mean"><li>Share of the day booked:</li><li><span class="load-cell" data-load="1"></span>a quarter</li>…<li><span class="load-cell over"></span>over it, with the hours</li></ul>
  <section class="levelling" aria-labelledby="lv-title">
    <h3 id="lv-title">Levelling would move 4 tasks</h3>
    <p class="note">So nobody is booked over their day. Nothing moves until you level them.</p>
    <ul class="levelling-list">
      <li><span class="issue-id">BACK-34</span><span class="levelling-what">Mirror the backups to the new site <span class="who-about">· Anna Schmidt</span></span>
        <ul class="change-lines"><li><del>19–20 Nov</del> → <ins>23–24 Nov</ins></li></ul><span class="levelling-by">2 days later</span></li>
    </ul>
    <div class="levelling-actions"><button type="button" class="primary">Level 4 tasks</button><p class="note">…</p></div>
  </section>
</section>
```

**In a4a:** Plans, for who's booked and levelling. Load css/charts.css with it. The preview is a static rendition, two weeks of a data center's move.
