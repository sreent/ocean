# QueryBar

The search for issues, in a4a's query language: the query in Plex Mono, each problem underlined in `--bad` with its words beneath, suggestions as the person types, and a way to ask in words instead. Proposed.

- The query is a field, with a field's edge and the keyboard's ring around it. Behind its text sits a copy of it (`.query-mirror`, hidden from screen readers) where each problem is underlined, wavy, in `--bad`; the field itself stays an ordinary input. As the field scrolls, the page scrolls the copy with it.
- Each problem has its words beneath it, after a cross: what's wrong, "Unknown value “Fixd” for State", and the likely fix as a button, "Did you mean Fixed?". The field is `aria-invalid` and described by them.
- Suggestions open under it as the person types: the letters typed in bold, what each is ("State", "field", "tag") in `--faint`, and the one the arrows are on, on `--accent-soft`, where its kind turns `--muted` so it still reads. The field is a combobox (`aria-expanded`, `aria-controls`, `aria-activedescendant`).
- "Ask in words" is a toggle (`aria-pressed`) marked by the agent's mark, never a sparkle. Pressed, the field takes plain words, in Plex Sans. The agent that reads them answers by its mark and name, "Interpreted as:", with the query it made and Edit, which puts that query in the field to change. What it found is a plain line: "4 issues".
- On a phone the toggle shows the agent's mark alone, and screen readers still say its words.

**Takes:** `query`, `problems` (each `from`, `to`, `what`, `fix`), `suggestions` (each `label`, `kind`, `typed`), `active`, `words`, `read` (`{ agent, query }`), `found`, `onChange`, `onAsk`, `onEdit`.

**Markup:**

```html
<div class="query">
  <div class="query-row">
    <div class="query-field">                                   <!-- .words while asking in words -->
      <span class="query-mirror" aria-hidden="true">project: BACK State: <mark class="query-problem">Fixd</mark></span>
      <input type="text" class="query-input" role="combobox" aria-label="Search issues" aria-autocomplete="list" aria-expanded="false"
             aria-invalid="true" aria-describedby="q-problems" value="project: BACK State: Fixd" autocomplete="off" spellcheck="false" enterkeyhint="search">
    </div>
    <button type="button" class="query-ask" aria-pressed="false"><span class="avatar agent small" aria-hidden="true"><!-- agent --></span><span class="query-ask-words">Ask in words</span></button>
  </div>
  <p class="query-problems" id="q-problems"><svg class="icon" aria-hidden="true"><!-- cross --></svg><strong>Unknown value “Fixd” for State</strong><span aria-hidden="true">·</span><span>Did you mean <button type="button" class="link">Fixed</button>?</span></p>
</div>
```

Suggestions follow the row, inside `.query`, while the field is `aria-expanded="true"`:

```html
<ul class="popover options" id="q-options" role="listbox" aria-label="Suggestions">
  <li role="option" id="q-o1" aria-selected="true"><span><mark>Fix</mark>ed</span><span class="option-kind">State</span></li>
</ul>
```

Asked in words, what the agent read follows the row:

```html
<p class="query-read"><span class="who" data-kind="agent"><span class="avatar agent small" aria-hidden="true"><!-- agent --></span><span class="who-name">assistant</span></span><span>Interpreted as:</span><code>project: BACK Type: Bug Priority: Critical</code><button type="button" class="link">Edit</button></p>
<p class="query-found">4 issues</p>
```

**In a4a:** the top of the Issues page, of a board's backlog, and of a plan. The preview is a static rendition.
