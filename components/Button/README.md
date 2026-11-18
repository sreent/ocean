# Button

The one thing a page or a form is for, and the quieter things beside it.

- One primary button per page or card (`button.primary`): the one thing it's for. Its word is a verb that says what happens: Approve, Publish it, Delete it.
- Everything else is a plain button, with a `--line-strong` edge on `--surface`, or a link-like button (`button.link`) for what takes someone elsewhere.
- A link that does what a button would is drawn as one (`a.button`).
- What can't be undone is a danger button (`button.danger`), which asks first (see Confirm). Only the confirming answer in that dialog is filled with `--bad`.
- Disabled is 0.55 opacity, with no pointer. Say elsewhere why it can't be done yet.
- A choice of views is a row of buttons, the chosen one pressed (`.modes`, `aria-pressed`). In a3t, a page's tabs are one: a tab at a time, under the blocks above it.
- Labels at weight 500, padding 0.42rem 0.85rem, `--radius-sm`.

**Markup:** `<button type="button" class="primary">Approve</button>`. Buttons are plain HTML in every product, with these classes; there's no component to import.
