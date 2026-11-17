# SprintLoad

A sprint's load against its people's capacity, as it's planned: per assignee, their issues in it, their story points, what's left of their estimates, and the hours they can work in it by their working week and days away. Ocean's figures table, with a meter. Proposed, for a4a (D43).

- **A row per person** (`table.figures.middle.capacity`), and one for the issues nobody has yet, in `.muted`, with no capacity.
- **The load** is a meter (`meter.capacity-meter`) of what's left against what they can work, the browser's own, which says its figures to a screen reader; over capacity, a `warn` badge says by how much, in words ("12h over"), so colour is never the only sign.
- **The foot** sums it all. A sprint without dates has no capacity: its column says "–".
- It scrolls sideways in its own frame where it's narrow (`.figures-scroll`).

**Takes:** `sprint`, `from`, `to`, `people` (each `name` or none, `issues`, `points`, `loadHours`, `capacityHours`), `totals`.

**Markup:**

```html
<section class="card stack" aria-labelledby="sprint-load">
<div class="section-head"><h2 id="sprint-load">Load against capacity</h2></div>
<p class="section-note">Sprint 15, 23 Nov to 6 Dec: what's left of each person's issues, against the hours they can work, by their working week and days away.</p>
<div class="figures-scroll" role="region" aria-label="Sprint 15: load against capacity" tabindex="0">
<table class="figures middle capacity">
<thead><tr><th scope="col">Who</th><th scope="col" class="num">Issues</th><th scope="col" class="num">Points</th><th scope="col" class="num">Left to do</th><th scope="col" class="num">Can work</th><th scope="col">Load</th></tr></thead>
<tbody>
<tr><th scope="row" class="row-head">Anna Schmidt</th><td class="num mono">4</td><td class="num mono">13</td><td class="num mono">52h</td><td class="num mono">64h</td><td><span class="capacity-cell"><meter class="capacity-meter" min="0" max="64" high="64" value="52">52h of 64h</meter></span></td></tr>
<tr><th scope="row" class="row-head">Ben Okafor</th><td class="num mono">3</td><td class="num mono">8</td><td class="num mono">44h</td><td class="num mono">32h</td><td><span class="capacity-cell"><meter class="capacity-meter" min="0" max="44" high="32" value="44">44h of 32h</meter><span class="badge" data-tone="warn">12h over</span></span></td></tr>
<tr><th scope="row" class="row-head"><span class="muted">Nobody yet</span></th><td class="num mono">2</td><td class="num mono">3</td><td class="num mono">6h</td><td class="num mono">–</td><td></td></tr>
</tbody>
<tfoot><tr><th scope="row">All of it</th><td class="num mono">9</td><td class="num mono">24</td><td class="num mono">102h</td><td class="num mono">96h</td><td></td></tr></tfoot>
</table>
</div>
</section>
```
