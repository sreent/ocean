# Hint

A word on what something means, for whoever points at it or tabs to it.

- One sentence, on `--text` with `--surface` words, 18rem wide at most.
- Its trigger is something a keyboard reaches, such as a button, so the hint shows on focus as well as on pointing.
- Use it for what a colour or a term means. Never for something people must read to act: put that on the page.

**Takes:** `label`, the sentence, and the trigger as children.

**In a5s:** `studio/src/design/controls.tsx`, on Radix's tooltip, which keyboards and screen readers reach as they do the mouse. The preview is a static rendition, with the hint shown.

**In a4a:** a page draws the hint itself, under its trigger (`.hint-anchor`): it shows on pointing and on focus, and Escape hides it. Beside a section's title (Settings), it opens from the head's end, so it stays in the section.

```html
<span class="hint-anchor"><button type="button" class="link" aria-describedby="h">What do the colours mean?</button>
  <span class="hint" role="tooltip" id="h" hidden>Grey means a tool only reads. Coral means it changes a record.</span></span>
```
