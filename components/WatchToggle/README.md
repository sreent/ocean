# WatchToggle

Watching an issue: a toggle in the issue's head, pressed while you watch it, with how many watch it; and who watches it, and why, in a card beside the issue. Proposed, for a4a.

- **The toggle** is a button that stays pressed (`button.watch`, `aria-pressed`), as a choice of modes does: pressed, it sits on `--accent-soft` with its border and words in `--accent`, at 600. Its word stays "Watch" either way, so a screen reader says "Watch, toggle button, pressed" rather than two words for one state. The bell is before it, and the count after it (`.watch-count`), which a screen reader hears in words: "3 people watch it".
- **Pressing it** watches the issue or stops watching it, at once. Under the pointer it says what it does: "Hear about its changes and comments", or "Press to stop".
- **Who watches** is a card in the page's side column (`.card.side-card`): each person by their mark and name, and under the name why (`.who-about`): "reported it", "was assigned it", "commented", "was mentioned", "leads the project", "chose to". Agents don't watch: they're told only when they're assigned or mentioned.
- A note under them says what watching means, and that taking part watches an issue too: whoever reports it, is assigned it, comments or is mentioned.

**Takes:** `watching`, `count`, `onToggle`; and the watchers, each `{ who, why }`.

**Markup:**

```html
<button type="button" class="watch" aria-pressed="true" title="You hear about its changes and comments. Press to stop.">
  <svg class="icon" aria-hidden="true"><!-- bell --></svg><span>Watch</span>
  <span class="watch-count"><span aria-hidden="true">3</span><span class="hidden">, 3 people watch it</span></span>
</button>

<section class="card side-card" aria-labelledby="watchers-title">
  <h2 id="watchers-title">Watchers</h2>
  <ul class="plain">
    <li><span class="who"><span class="avatar small" aria-hidden="true">AS</span><span><span class="who-name">Anna Schmidt</span><span class="who-about"> reported it</span></span></span></li>
  </ul>
  <p class="note">They hear about its changes and comments. …</p>
</section>
```

**In a4a:** an issue's page: the toggle in its head beside Apply a command, the card under its fields. The preview is a static rendition.
