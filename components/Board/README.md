# Board

An agile board: the sprint's name, dates and goal; a column for each state, with its count and its limit; cards; lanes, each under its header; and where a card someone drags would land. Proposed.

- The sprint's head: its name, its dates, how long it has left as a chip, and its goal after **Goal:**.
- Each column says what's in it: its count, or, with a limit, "4 of 5". Over its limit it says so in `--warn`, with the clock and its words: "3 of 2, 1 over the limit".
- A card: its id in Plex Mono and the assignee's mark, its summary, then its PriorityMeter and tags as chips. A resolved card's summary is `--muted`. The column says how it stands, so a card carries no state badge.
- Lanes, when the board has them, each under its header across every column: what it groups (an epic, a person) and how many issues. The header stays in view as the board scrolls sideways.
- A card on its way: where it was is an empty dashed outline; where it would land is dashed in `--accent` on `--accent-soft`, with the card raised on `--shadow-raised` and what dropping it does: "Drop it to move BACK-37 to In Progress: 5 of 5".
- From the keyboard a card moves by a command (CommandBar), so dragging is never the only way.
- Columns keep 15rem at least. Where they don't fit, the board scrolls sideways in its own frame, a phone's one column and the next one's edge at a time.

**Takes:** `sprint` (`name`, `dates`, `left`, `goal`), `columns` (each `name`, `count`, `limit`), `lanes` (each `name`, `id`, `count`, `cells`: a list of cards per column), cards (each `id`, `summary`, `href`, `priority`, `assignee`, `tags`, `resolved`), `dragging`, `onMove`.

**Markup:**

```html
<section class="board" aria-labelledby="sprint">
  <div class="sprint">
    <div class="sprint-title"><h2 id="sprint">Sprint 14</h2><span class="sprint-dates">9 to 20 Nov</span><span class="chip">5 working days left</span></div>
    <p class="sprint-goal"><strong>Goal:</strong> move storage to the new racks without downtime.</p>
  </div>
  <div class="board-scroll" tabindex="0" role="group" aria-label="Sprint 14's columns">
    <div class="board-grid">
      <div class="board-cols">
        <div class="board-col-head"><h3>Open</h3><span class="board-count">3</span></div>
        <div class="board-col-head"><h3>In Progress</h3><span class="board-limit">4 of 5</span></div>
        <div class="board-col-head"><h3>In Review</h3><span class="badge warn"><!-- clock -->3 of 2, 1 over the limit</span></div>
      </div>
      <section class="board-lane" aria-labelledby="lane-3">
        <h3 class="board-lane-head" id="lane-3"><span class="issue-id">BACK-3</span>Data center migration<span class="note">5 issues</span></h3>
        <div class="board-cells">
          <ol class="board-cell" aria-label="Open, Data center migration">
            <li class="board-card">                                  <!-- .resolved; .moving where it was while dragged -->
              <span class="board-card-head"><span class="issue-id">BACK-33</span><span class="avatar small" aria-hidden="true">KM</span></span>
              <a class="board-card-summary" href="…">Label the new racks' power feeds</a>
              <span class="board-card-foot"><!-- PriorityMeter --><span class="chips"><span class="chip">storage</span></span><span class="hidden">Assignee: Kofi Mensah</span></span>
            </li>
          </ol>
        </div>
      </section>
    </div>
  </div>
</section>
```

Where a dragged card would land: `<li class="board-drop"><div class="board-card lifted">…</div><p>Drop it to move BACK-37 to In Progress: 5 of 5</p></li>`, and where it was, `<li class="board-card moving" aria-hidden="true">…</li>`. Without lanes, `.board-cells` follows `.board-cols` directly.

**In a4a:** Boards. The preview is a static rendition, a card drawn on its way.
