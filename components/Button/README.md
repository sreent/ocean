# Button

The one thing a page or a form is for, and the quieter things beside it.

- One primary button per page or card (`button.primary`): the one thing it's for. Its word is a verb that says what happens: Approve, Publish it, Delete it.
- Everything else is a plain button, with a `--line-strong` edge on `--surface`, or a link-like button (`button.link`) for what takes someone elsewhere.
- A link that does what a button would is drawn as one (`a.button`).
- What can't be undone is a danger button (`button.danger`), which asks first (see Confirm). Only the confirming answer in that dialog is filled with `--bad`.
- Disabled is 0.55 opacity, with no pointer. Say elsewhere why it can't be done yet.
- A choice of views is a row of buttons, the chosen one pressed (`.modes`, `aria-pressed`). Where its choices don't fit on one line, as a4a's five views do not at 390px (they need about 372px of 358px) or as a longer language's words do not, it wraps rather than scrolling inside itself: each row is filled and the lines run across and down, so it still reads as one control, and every choice stays in sight, the chosen one included, at any width, zoom or language, with nothing to swipe and nothing to find. Its focus ring sits inside each choice, where the control's rounded frame can't clip it.
- Labels at weight 500, padding 0.42rem 0.85rem, `--radius-sm`.

**Markup:** `<button type="button" class="primary">Approve</button>`. Buttons are plain HTML in every product, with these classes; there's no component to import.
