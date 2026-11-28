# Toast

What was just done, said once, at the foot of the window, where it doesn't cover the work. Proposed.

- It names the thing, in the past tense, as a page's status line does: "Cancelled T-1." "Moved MIG-7 to 23–27 Nov." The page says it too, where it happened: a toast is never the only place something is said.
- Undo, while it can still be undone, and only then. What asked first can't be undone, so its toast has none. Undo is never only in a toast: the product keeps a key for it (in a4a, Ctrl+Z, or ⌘Z on a Mac), which undoes the newest while it can still be undone, before its toast goes and after, and the history keeps it too.
- A tick in `--good`, for what was done. Never for what went wrong, or for what needs the person: that stays on the page, where it went wrong, with how to put it right.
- **Long enough to read.** It stays six seconds; ten when it offers Undo, since there's something to decide and to reach; and a second more for every ten words past the first ten. It doesn't go while the pointer or the focus is in it, or while the window is hidden, since a toast nobody can see hasn't been read. Dismiss closes it at once, and so does Escape with the focus in it, which gives the focus back to where it was. At most three at a time, the newest at the foot: a fourth sends the oldest away. Undo stays on its key when the toast goes.
- **Said once, in a live region that's always there.** The toasts' region is in the page from its first render, empty, with a status line of its own (`p.hidden[role="status"]`): what the product writes there a screen reader says, politely, once. The product writes each toast's words there, and with Undo, how to undo from the keyboard ("Ctrl+Z undoes it."), unless the page has said it already where it happened, as a timeline says each move in its own live region: then the toast shows it and isn't said again. The toasts themselves aren't a live region, so nothing is said twice, and three toasts are never read again each time one comes.
- **From the keyboard:** the region is a landmark the product names ("Notifications"), with a key of the product's to reach it (`aria-keyshortcuts`). A toast never takes the focus. Undo and Dismiss are buttons, each described by its toast's words (`aria-describedby`), so three of them aren't three of the same "Undo".
- It rises 4px into place over 120ms, as what opens over the page does, unless the person asked for less motion. On a touch screen its buttons are 44px.

**Takes:** `toasts` (each `{ id, words, undo, undoKeys, saidOnPage }`: `undo` only while it can be undone; `undoKeys` the words that say how from the keyboard; `saidOnPage` when the page has said it already) and `onDismiss`. The product supplies every word and key.

**Markup:** the region is rendered with the page, empty, and stays: toasts come and go inside it.

```html
<section class="toasts" aria-label="Notifications" aria-keyshortcuts="F8">   <!-- the product's words and key -->
  <p class="hidden" role="status">Moved MIG-7 to 23–27 Nov. Ctrl+Z undoes it.</p>   <!-- written once per toast; left alone when the page said it -->
  <div class="toast">
    <svg class="icon" aria-hidden="true"><!-- check --></svg>
    <p class="toast-words" id="toast-7">Moved MIG-7 to 23–27 Nov.</p>
    <button type="button" class="small" aria-describedby="toast-7">Undo</button>
    <button type="button" aria-label="Dismiss" aria-describedby="toast-7"><svg class="icon" aria-hidden="true"><!-- cross --></svg></button>
  </div>
</section>
```

A status line says only what changes in it, so the product empties it before it writes the next toast's words, which may be the same as the last.

**In a5s:** the studio's frame, for what a page did, beside its status line. **In a4a:** the Shell's toasts, for what a view changed, with Undo (a view edit's undo, D34); the timeline and the calendar say their moves themselves.
