# CommandBar

A command, applied to the issues someone chose, in the browser's own dialog: the command, its problems, what it changes on each issue, a comment if they want one, and the one thing to do. Proposed.

- It names the issues first: "To 3 issues: BACK-12, BACK-15 and BACK-19".
- The command is a QueryBar's field, with its problems and suggestions, and the same "Ask in words": the agent reads the words and says, by its mark and name, what it read them as, with Edit.
- What it changes, before anything does, on `--sunken`: by issue, its id in Plex Mono and its summary, then a line for each field in the grammar of a change, "State: ~~Open~~ → **Fixed**": what it was struck through, and what it becomes in `--changes`, at 650. A field that stays as it is says so, in `--muted`.
- The one primary button says what happens, and to how many: "Apply to 3 issues". While a problem stands it waits, and says why beside it: "It applies once the problem is fixed."
- Nothing changes until the person applies it, whether they typed the command or asked in words. Each issue's history says who applied it, "via the assistant" when an agent read it from their words.
- It's the browser's own `<dialog>`, opened with `showModal()`: it keeps the focus in it, closes with Escape, and needs no style of its own, which the pages' policy wouldn't allow.

**Takes:** `issues`, `command`, `problems`, `words`, `read`, `preview` (each issue's `id`, `summary` and `changes`, each `{ field, from, to }`, `{ field, added }` or `{ field, value, same: true }`), `comment`, `onApply`, `onCancel`.

**Markup:**

```html
<dialog class="dialog command" aria-labelledby="c-title">
  <h2 id="c-title">Apply a command</h2>
  <p class="command-to">To 3 issues: <span class="issue-id">BACK-12</span>, <span class="issue-id">BACK-15</span> and <span class="issue-id">BACK-19</span></p>
  <div class="query"><!-- QueryBar's row, its problems, or what the agent read --></div>
  <div class="command-preview" role="group" aria-label="What it changes">
    <p class="label">What it changes</p>
    <ul class="command-issues">
      <li><span class="issue-id">BACK-12</span><span class="command-summary">Login times out on slow networks</span>
        <ul class="change-lines">
          <li><span class="change-field">State:</span> <del>In Progress</del> → <ins>Fixed</ins></li>
          <li><span class="change-field">Fix versions:</span> <ins>2.4.1</ins> <span class="same">added</span></li>
          <li class="same">Assignee: Anna Schmidt, as it is</li>
        </ul></li>
    </ul>
  </div>
  <label class="command-comment">A comment, if you want one<textarea></textarea></label>
  <div class="dialog-actions"><p class="command-hint">It applies once the problem is fixed.</p><button type="button">Cancel</button><button type="button" class="primary" disabled>Apply to 3 issues</button></div>
</dialog>
```

**In a4a:** wherever issues can be chosen: the Issues page, a board, an issue's own page. The preview is a static rendition, both dialogs drawn in place.
