# Palette

Going anywhere a person may, and doing the common things, by name, from any page: Ctrl-K, or ⌘K on a Mac, or the button that says so. Proposed.

- It's the browser's own `<dialog>`, opened with `showModal()`, the focus in its field. It finds as they type, by the words of a name and of what each is, and only what they may open: a page that would refuse them isn't there to find.
- What it finds is grouped by what each is, always in one order: what waits on them first, then the pages, then agents, instances and drafts. Beside each name, in `--muted`, what it is: "an instance of the assistant", "waits for your decision".
- The arrows move through it, Home and End go to its ends, Enter opens the one chosen, and Escape closes it, with the focus back where it was. The pointer chooses too.
- The one chosen shows as chosen does everywhere: `--accent-soft` behind `--accent`, at 600.
- Finding nothing says so, and what it looked for: "Nothing you may open is called “frodo”." While it's still finding what there is, the first time, it says it's looking, whatever they've typed, rather than that it found nothing.
- Its foot says the keys, each in `<kbd>`, on `--sunken`.
- It goes, or does what a page's own button would, such as "Start a new agent": never what can't be undone, which asks first, on its own page.
- The button that opens it reads as a place to type, "Find anything", with its keys beside it, where a page keeps its way about, such as the top of the sidebar. On a phone, in the sidebar's bar, it's its icon alone, and screen readers still say its name.
- It's a combobox over a listbox, as ARIA has it: the field says which option is chosen (`aria-activedescendant`), each group is labelled by its heading, and a screen reader hears how many it found.

**Takes:** `open`, `onClose`, `query`, `onQuery`, `options` (each `{ id, name, where, group, icon }`), and `onChoose`.

**Markup:**

```html
<dialog class="dialog palette" aria-label="Find anything">
  <div class="palette-find">
    <svg class="icon" aria-hidden="true"><!-- find --></svg>
    <input role="combobox" aria-expanded="true" aria-controls="p-list" aria-activedescendant="p-o1"
           aria-autocomplete="list" aria-label="Find a page, an agent, an instance or a draft" placeholder="Find anything">
  </div>
  <div id="p-list" class="palette-list" role="listbox" aria-label="What it found">
    <div role="group" aria-labelledby="p-g1">
      <p class="label" id="p-g1">Waiting on you</p>
      <div role="option" id="p-o1" class="palette-option" aria-selected="true">
        <svg class="icon" aria-hidden="true"><!-- decide --></svg>
        <span class="palette-name">1 change an agent asked for</span><span class="palette-where">waits for your decision</span>
      </div>
    </div>
  </div>
  <p class="palette-keys"><span><kbd>↑</kbd> <kbd>↓</kbd> to choose</span><span><kbd>Enter</kbd> to open</span><span><kbd>Esc</kbd> to close</span></p>
</dialog>
```

**In a5s:** the studio's frame, on every page of the studio. The preview is a static rendition: the button opens the palette, and its open look is drawn in place below.
