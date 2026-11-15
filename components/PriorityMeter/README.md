# PriorityMeter

How urgent an issue is, as a shape: five steps, filled in ink up to its level, always beside its word. Never a colour. Proposed.

- Five levels, highest first: Show-stopper (5), Critical (4), Major (3), Normal (2), Minor (1).
- The steps rise, so the shape says how high before the word does, and the word says which. Filled steps are `--text`; the rest `--line-strong`.
- Never colour a priority. Coral is a change to a record or a failure, and amber waits on someone: a Show-stopper that's late is `bad` because of its date, not its priority.
- To screen readers it's a meter named "Priority", with its word as its value (`role="meter"`, `aria-valuenow` from 1 to 5, `aria-valuetext`). The steps it fills follow `aria-valuenow`, so what's seen and what's said can't differ.

**Takes:** `level` (1 to 5) and `word`.

**Markup:**

```html
<span class="priority" role="meter" aria-label="Priority" aria-valuemin="1" aria-valuemax="5" aria-valuenow="4" aria-valuetext="Critical">
  <span class="priority-steps" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>
  <span class="priority-word">Critical</span>
</span>
```

**In a4a:** wherever an issue's priority shows: its row, its card on a board, its fields. The preview is a static rendition.
