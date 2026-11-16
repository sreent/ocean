# Editor

Where Markdown is written as it will read: its words bold or struck through, its lists, checklists and tables drawn, its pictures shown, over the Markdown that is kept. A choice of two at the toolbar's end puts the Markdown itself in its place, for whoever would rather write that.

- The toolbar sits on the field's top edge, in `--sunken`, its tools in groups (words, blocks, what goes in), a rule of `--line` between them. Each tool is named for a screen reader and on pointing ("Bold", "Checklist"); it's 2rem square, so a pointer finds it.
- A tool that's on where the caret is, is pressed: `aria-pressed`, drawn in `--accent-soft` and `--accent` as a chosen mode is. Bold, italic and struck through are their own letters, drawn so; the rest are Ocean's line icons.
- The field keeps a field's edge, `--line-control`, and Ocean's focus ring when it has the caret. It's a text box to a screen reader (`role="textbox"`, `aria-multiline`), named as its field is, since a label can't name an editable region.
- Visual and Markdown are `.modes`, small, at the bar's end. In Markdown, the bar says so, and the field is the composer's text area.
- A checklist's items have their boxes where bullets would be; ticking one in the editor changes the text, so it undoes as any change does.
- A table's cells are edged in `--line`, and say their alignment with `data-align`, never a style attribute: a product whose pages forbid inline styles draws them all the same. A chosen cell is washed in `--accent-soft`.
- A file dragged over it rings the field in `--accent`, dashed. A picture on its way says "Uploading…", in a pill on `--sunken`, where it will go; what went wrong is said under the field, in the words of what to do.
- While nothing is written, its hint shows in `--muted`.
- "@" offers people under the field, as the composer does (`.composer > .popover.options`).

What's written reads, in `.prose`, as it did in the editor: a picture fits its column; one from elsewhere is named in `--muted`, never fetched; a checklist's boxes stand where bullets would, and one someone may tick shows a pointer.

**Takes:** `value` (Markdown) and `onChange`; `label`; `mode` and `onMode`; `placeholder`; `uploading`, the names on their way; `status`, what's said under it.

**In a4a:** `apps/web/src/features/editor` (D39): Milkdown, on ProseMirror, reading and writing Markdown with remark, as the page that shows it does. It draws Ocean's classes: the surface is `.editor-surface.prose`, a checklist's item `li.editor-task` with its box and its words, an upload's mark `.editor-uploading`. Its own words: "Visual" and "Markdown", "Uploading…", "Save it first: then pictures and files can go in it."

```html
<div class="editor">
  <div class="composer editor-visual">
    <div class="editor-bar">
      <div class="editor-tools" role="group" aria-label="Words">
        <button type="button" class="editor-tool" aria-label="Bold" title="Bold" aria-pressed="true"><span class="editor-glyph bold" aria-hidden="true">B</span></button>
        <button type="button" class="editor-tool" aria-label="Italic" title="Italic" aria-pressed="false"><span class="editor-glyph italic" aria-hidden="true">I</span></button>
      </div>
      <div class="editor-tools" role="group" aria-label="Blocks">
        <button type="button" class="editor-tool" aria-label="Checklist" title="Checklist" aria-pressed="false"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true">…</svg></button>
      </div>
      <span class="grow"></span>
      <div class="modes editor-mode" role="group" aria-label="How to write it">
        <button type="button" aria-pressed="true">Visual</button><button type="button" aria-pressed="false">Markdown</button>
      </div>
    </div>
    <div class="editor-surface prose" role="textbox" aria-multiline="true" aria-label="Description" contenteditable="true">
      <p>The invoice shows <strong>19%</strong>.</p>
      <ul><li class="editor-task" data-item-type="task" data-checked="false"><input type="checkbox" aria-label="Done: Check the rounding"><div><p>Check the rounding</p></div></li></ul>
    </div>
  </div>
  <p class="field-help editor-status" role="status"></p>
</div>
```
