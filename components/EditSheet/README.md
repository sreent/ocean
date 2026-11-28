# EditSheet

One line of the outcome, opened to change it by hand, as a form: each field with its source, the person's change marked as theirs, the original kept, and a promise.

- It rises over the conversation, which dims; it never takes the person somewhere else.
- Each field says where its value came from. Where a value is tied to evidence (a card payment's date and amount), it says that changing it will ask why.
- The person's change is marked "Changed by you", with what it was and a way to restore it.
- It ends with the promise: a later check never overwrites the person's change.

It belongs to the conversation kit (docs/conversation.md), for any capability, not one kind of app.

## As a modal of its own

The sheet is also the way a product changes one thing on a phone, as a4a changes a task from its agenda or its timeline: `dialog.sheet`, the browser's own dialog with the sheet's look, so it needs no container of the product's making. Before it, a4a's phone edit sheet used `dialog.dialog`; this is the sheet's own, and `dialog.dialog` stays for what asks a question (Confirm) and for forms on a wide screen that aren't a sheet.

- **Opened with `showModal()`**: the browser keeps the focus in it and the page behind it inert, Escape closes it, and the focus goes back to what opened it (a4a returns it there itself where the browser doesn't). The page behind dims (`::backdrop`) and doesn't scroll (`body:has(dialog.sheet[open])`).
- **From the window's foot** on a phone, as wide as the window up to 36rem, at most the window's height less 2rem, scrolling inside itself, its foot clear of the home indicator (`env(safe-area-inset-bottom)`), with the sheet's handle at its top; it rises 4px into place over 120ms unless the person asked for less motion. **Wider than 760px** it's centred as a dialog is, its corners all rounded and its handle gone, so one element serves every width.
- **Inside**: its head (`.sheet-head`: the title, an `h2`, and what it belongs to beneath, then Close, a button named "Close"); the fields, each a `.form-field`; a note where the plan says something the fields don't; then its actions (`.dialog-actions`), the primary last. A refusal is said under the field, as anywhere ([Layout](../Layout/README.md)'s `.error-note`).
- **What a screen reader hears**: a dialog, named by its title (`aria-labelledby`) and described by what it belongs to (`aria-describedby`), then its fields by their labels.
- **Touch**: Close, the fields and the buttons are 44px, as everywhere on a touch screen.

**Markup:**

```html
<dialog class="sheet" aria-labelledby="es-title" aria-describedby="es-about">   <!-- opened with showModal() -->
  <div class="sheet-head"><div><h2 id="es-title">Rack and cable</h2><span id="es-about">MIG-7 · Data center migration</span></div><button type="button" aria-label="Close"><svg class="icon" aria-hidden="true"><!-- cross --></svg></button></div>
  <form class="stack" aria-labelledby="es-title">
    <div class="form-field"><label for="es-due">Due date</label><input id="es-due" type="text" value="25 Nov" aria-describedby="es-planned"></div>
    <p class="note" id="es-planned">Planned for 23–25 Nov, after Order the hardware.</p>
    <div class="dialog-actions"><button type="button">Cancel</button><button type="submit" class="primary">Save</button></div>
  </form>
</dialog>
```

**In a4a:** a task changed on a phone, from the agenda, the timeline's sheet under 40rem, or a row of the table. The preview draws it in place, not over a page.
