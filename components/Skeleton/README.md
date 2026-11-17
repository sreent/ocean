# Skeleton

What's loading, in the shape it will have, so nothing jumps when it comes. Proposed.

- It stands where what it stands for will be: a card's title and its lines, a table's rows, a chart's or a canvas's block. Never a spinner over the whole page.
- Still: Ocean moves only what opens over the page and an agent's work under way, so a skeleton neither shimmers nor pulses.
- The region it stands in says it's busy (`aria-busy="true"`), and says "Loading…" in words for screen readers (`.skeleton-words`), while the shapes are hidden from them (`aria-hidden`).
- Only the first time: what a page showed stays while it loads again, as for another period, so nothing jumps then either.
- If loading fails, what went wrong takes its place, where it would have been, with how to put it right.

**Takes:** `lines` (three by default), `title`, `rows` with `columns`, for a table, and `block`, for a chart or a canvas.

**Markup:**

```html
<section class="card" aria-busy="true">
  <p class="skeleton-words" role="status">Loading…</p>
  <div class="skeleton" aria-hidden="true">
    <div class="skeleton-title"></div>
    <div class="skeleton-line"></div><div class="skeleton-line"></div><div class="skeleton-line"></div>
  </div>
</section>
```

**In a5s:** wherever a studio page loads what it shows, in place of "Loading…".
