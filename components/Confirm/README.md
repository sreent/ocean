# Confirm

A button that asks first, for what can't be undone, in the browser's own dialog.

- Use it before deleting, revoking, or anything nobody can bring back. Not before what can be undone.
- The dialog's title is a question that names the thing ("Delete the draft of scout?"), and its text says what goes with it and that nobody can bring it back.
- Two answers: Keep it, which has the focus, and the confirming one in the danger colour ("Delete it"). Escape keeps it, even when a hint was open.
- Afterwards, say what happened: "The draft is gone."
- It's the browser's own `<dialog>`, opened with `showModal()`: it keeps the focus in it and the page behind out of reach, without styles of its own, which the pages' policy wouldn't allow.

- In a row's own actions or a card's head, the button is smaller (`button.small`): "Revoke it" beside a token, "Delete the field" beside its title.

- **Typed, in the danger colour**, for what can't be undone and reaches someone else, such as erasing what a product keeps about a person: the dialog asks for the thing's name typed, as `typed` below, with `danger` on: "Erase what a5s keeps about ben?", then "Type ben to erase it", then "Erase it". The product's server checks the name too, so no script skips it. It sits in an [ActionZone](../ActionZone/README.md) that can't be undone; anything less grave asks no name, since a dialog met too often is a dialog clicked through.
- **Typed again**, for a change everyone meets at once that can still be taken back, such as a project's new key: the dialog asks for the word typed again (`typed`), in a `form-field` between its text and its answers, and the confirming answer stays off until it matches, letter case aside. The field has the focus, since nothing happens until it's typed; Escape and Keep it still keep it. Such a change can be taken back, so it asks in the plain colour (`danger` off): "Rename BACK to CORE?", then "Type CORE again", then "Rename it".

**Takes:** `label`, `title`, `about`, `confirm`, `danger`, `small`, `typed` with `ask`, the words its field asks with, and `onConfirm`, which hears what was typed, for the product's server to check.

**In a5s:** `studio/src/design/controls.tsx`. The preview is a static rendition: the button opens the dialog, and its open look is drawn in place below.
