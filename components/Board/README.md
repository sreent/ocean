# Board

An agile board: the sprint's name, dates and goal; a column for each state, with its count and its limit; cards; lanes, each under its header; and where a card someone drags would land. Proposed.

- The sprint's head: its name, its dates, how long it has left as a chip, and its goal after **Goal:**.
- Each column says what's in it: its count, or, with a limit, "4 of 5". Over its limit it says so in `--warn`, with the clock and its words: "3 of 2, 1 over the limit".
- A card: its id in Plex Mono and the assignee's mark, its summary, then its PriorityMeter and tags as chips. A resolved card's summary is `--muted`. The column says how it stands, so a card carries no state badge. Under the pointer a card shows an open hand: it can be picked up.
- Lanes, when the board has them, each under its header across every column: what it groups (an epic, a person) and how many issues. The header stays in view as the board scrolls sideways.
- A board with lanes runs long, so it scrolls in a frame of its own, at most the window's height (`.board-scroll.held`), and the column heads stay in view at its top as the lanes go by, on the page's own background. The page still scrolls past it at either end.
- A card on its way: where it was is an empty dashed outline; where it would land is dashed in `--accent` on `--accent-soft`, with the card raised on `--shadow-raised` and what dropping it does: "Drop it to move BACK-37 to In Progress: 5 of 5". Into another lane, the words say that too: "Drop it to move WEB-3 to In progress and set its Priority to Critical: 2 of 3".
- The card where it would land is a copy, showing it as the drop would leave it (its new lane's value; resolved, in a column that resolves it). Screen readers hear what dropping does instead, so the copy is hidden from them, and its summary is a `span`, not a link. While a card is on its way the board's frame is `.dragging`, and the pointer a closed hand.
- From the keyboard a card moves by a command (CommandBar), so dragging is never the only way. A card's id is the button that opens one for it (`aria-label="Move BACK-33 with a command"`): it reads as the id until it's pointed at or has the focus. A note above the columns says both ways.
- A move shows at once, and goes back where it was if it's refused, with an error note above the columns saying why (`.error-note`, see components/Layout) and Dismiss.
- Columns keep 15rem at least. Where they don't fit, the board scrolls sideways in its own frame, a phone's one column and the next one's edge at a time.

**Takes:** `sprint` (`name`, `dates`, `left`, `goal`), `columns` (each `name`, `count`, `limit`), `lanes` (each `name`, `id`, `count`, `cells`: a list of cards per column), cards (each `id`, `summary`, `href`, `priority`, `assignee`, `tags`, `resolved`), `dragging`, `onMove`, `onCommand`, `refused` (what went wrong with a move, and how to put it right).

**Markup:**

```html
<section class="board" aria-labelledby="sprint">
  <div class="sprint">
    <div class="sprint-title"><h2 id="sprint">Sprint 14</h2><span class="sprint-dates">9 to 20 Nov</span><span class="chip">5 working days left</span></div>
    <p class="sprint-goal"><strong>Goal:</strong> move storage to the new racks without downtime.</p>
  </div>
  <p class="note">Drag a card to another column to move it, or choose its id to move it with a command.</p>
  <div class="board-scroll held" tabindex="0" role="group" aria-label="Sprint 14's columns">   <!-- .held with lanes; .dragging while a card is on its way -->
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
              <span class="board-card-head"><button type="button" class="issue-id" aria-label="Move BACK-33 with a command">BACK-33</button><span class="avatar small" aria-hidden="true">KM</span></span>
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

Where a dragged card would land: `<li class="board-drop"><div class="board-card lifted" aria-hidden="true">…</div><p>Drop it to move BACK-37 to In Progress: 5 of 5</p></li>`, the copy's id a `<span class="issue-id">` and its summary a `<span class="board-card-summary">`; and where it was, `<li class="board-card moving" aria-hidden="true">…</li>`. Without lanes, `.board-cells` follows `.board-cols` directly; without a sprint, the section is named by a heading for screen readers alone, `<h2 class="hidden">`.

**In a4a:** Boards. The preview is a static rendition, a card drawn on its way.

On a phone each column is most of the screen wide (82vw, 22rem at most), the next one showing at the edge, and a swipe settles on a column's start (`scroll-snap-type: x proximity`, so dragging a card isn't fought). On a touch screen a card's id and summary keep their look and take a 44px target.
