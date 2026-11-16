# Timesheet

A person's week of logged time: a row per issue and work type, a cell per day to enter or correct it, and each day's total against their working hours that day. Ocean's figures table, with a field in each cell. Proposed, for a4a (D43).

- **The head** names each day and, under it, the hours they work that day (`.day-hours`): their working week, less days away; "Off" on a day they don't.
- **A row** is an issue (its id, its summary as `.item-name`) and a work type (`.item-about`), as the row head.
- **A cell** is a field (`input.mono`), its label the row and the day ("BACK-31, Development, Mon 23 Nov"); it takes "1h 30m" or minutes, saves when it's left, and empties to remove. A day of several entries isn't a field: it's the total, linked to the issue, where they're changed one by one.
- **The foot** gives each day's total against its hours. Over is in `--warn` (`td.over`), under in `--muted` (`td.short`); the figures beside them say how much, so colour is never the only sign.
- It scrolls sideways in its own frame (`.figures-scroll`), its row heads staying put.

**Takes:** `week`, `days` (each `name`, `hours`), `rows` (each `issue`, `summary`, `type`, `minutes` and `entries` per day), `totals`, `onSet`.

**Markup:**

```html
<section class="card stack" aria-labelledby="sheet">
<div class="section-head"><h2 id="sheet">Week of Mon 23 Nov</h2><span class="note">31h 30m of 36h</span></div>
<div class="figures-scroll" role="region" aria-label="Your week" tabindex="0">
<table class="figures middle timesheet">
<thead><tr><th scope="col">Issue</th><th scope="col" class="num">Mon 23<span class="day-hours">8h</span></th><th scope="col" class="num">Tue 24<span class="day-hours">8h</span></th><th scope="col" class="num">Wed 25<span class="day-hours">Off</span></th><th scope="col" class="num">Thu 26<span class="day-hours">8h</span></th><th scope="col" class="num">Fri 27<span class="day-hours">4h</span></th></tr></thead>
<tbody>
<tr><th scope="row" class="row-head"><a class="mono" href="#">BACK-31</a><span class="item-name">Rotate signing keys without downtime</span><span class="item-about">Development</span></th><td class="num"><input class="mono" size="6" aria-label="BACK-31, Development, Mon 23 Nov" value="6h"></td><td class="num"><input class="mono" size="6" aria-label="BACK-31, Development, Tue 24 Nov" value="5h 30m"></td><td class="num"><input class="mono" size="6" aria-label="BACK-31, Development, Wed 25 Nov" placeholder="–"></td><td class="num"><input class="mono" size="6" aria-label="BACK-31, Development, Thu 26 Nov" value="7h"></td><td class="num"><input class="mono" size="6" aria-label="BACK-31, Development, Fri 27 Nov" placeholder="–"></td></tr>
<tr><th scope="row" class="row-head"><a class="mono" href="#">BACK-27</a><span class="item-name">Paginate the audit log</span><span class="item-about">Testing</span></th><td class="num"><input class="mono" size="6" aria-label="BACK-27, Testing, Mon 23 Nov" value="2h"></td><td class="num"><input class="mono" size="6" aria-label="BACK-27, Testing, Tue 24 Nov" value="3h"></td><td class="num"><input class="mono" size="6" aria-label="BACK-27, Testing, Wed 25 Nov" placeholder="–"></td><td class="num mono" title="Several entries: change them on the issue"><a href="#">1h 30m</a></td><td class="num"><input class="mono" size="6" aria-label="BACK-27, Testing, Fri 27 Nov" value="6h 30m"></td></tr>
</tbody>
<tfoot><tr><th scope="row">Each day</th><td class="num mono">8h<span class="day-hours">of 8h</span></td><td class="num mono">8h 30m<span class="day-hours">of 8h</span></td><td class="num mono short">0m<span class="day-hours">of 0h</span></td><td class="num mono">8h 30m<span class="day-hours">of 8h</span></td><td class="num mono over">6h 30m<span class="day-hours">of 4h</span></td></tr></tfoot>
</table>
</div>
</section>
```
