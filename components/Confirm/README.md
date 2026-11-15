# Confirm

A button that asks first, for what can't be undone, in the browser's own dialog.

- Use it before deleting, revoking, or anything nobody can bring back. Not before what can be undone.
- The dialog's title is a question that names the thing ("Delete the draft of scout?"), and its text says what goes with it and that nobody can bring it back.
- Two answers: Keep it, which has the focus, and the confirming one in the danger colour ("Delete it"). Escape keeps it, even when a hint was open.
- Afterwards, say what happened: "The draft is gone."
- It's the browser's own `<dialog>`, opened with `showModal()`: it keeps the focus in it and the page behind out of reach, without styles of its own, which the pages' policy wouldn't allow.

**Takes:** `label`, `title`, `about`, `confirm`, `danger`, `onConfirm`.

**In a5s:** `studio/src/design/controls.tsx`. The preview is a static rendition: the button opens the dialog, and its open look is drawn in place below.
