# Toast

What was just done, said once, at the foot of the window, where it doesn't cover the work. Proposed.

- It names the thing, in the past tense, as a page's status line does: "Cancelled T-1." "Removed N-4 from the notebook." The status line says it too: a toast is never the only place something is said.
- Undo, while it can still be undone, and only then. What asked first can't be undone, so its toast has none.
- A tick in `--good`, for what was done. Never for what went wrong, or for what needs the person: that stays on the page, where it went wrong, with how to put it right.
- It stays six seconds, and for as long as the pointer or the focus is on it; Dismiss closes it at once. At most three at a time, the newest at the foot.
- It rises 4px into place over 120ms, as what opens over the page does, unless the person asked for less motion.
- They stand in a live region (`role="status"`), so a screen reader says each once, politely.

**Takes:** `toasts` (each `{ id, words, undo }`, `undo` only while it can be undone) and `onDismiss`.

**Markup:**

```html
<div class="toasts" role="status">
  <div class="toast">
    <svg class="icon" aria-hidden="true"><!-- check --></svg>
    <p class="toast-words">Cancelled T-1.</p>
    <button type="button" class="small">Undo</button>
    <button type="button" aria-label="Dismiss"><svg class="icon" aria-hidden="true"><!-- cross --></svg></button>
  </div>
</div>
```

**In a5s:** the studio's frame, for what a page did, beside its status line.
