# Layout

How a page puts Ocean's pieces together: in a stack, in a cluster, or in a main column with an aside. These only place pieces. A piece keeps its own look wherever it's put, so a product needs no rules of its own to arrange them (rule 7, `docs/products.md`).

- **A stack** runs down the page with one gap between each piece and the next. It takes away each piece's own outer margin, so the gap is the only space: a card's, a heading's or a note's margin doesn't add to it. `.tight` is half the gap and `.loose` half again. What's as wide as its words, a button, badges, chips or a choice of modes, keeps its width in a stack instead of stretching across it.
- **A cluster** sits on one line and wraps when the line runs out: a heading and the buttons for it, a row of filters, Cancel and the one thing to do. `.end` puts what it holds at the line's end, as a form's buttons are, and `.spread` puts the first at the start and the last at the end. `.baseline` lines up words of different sizes, and `.start` lines up the tops. A cluster also takes away its pieces' outer margins.
- **`.grow`** takes what's left of a cluster's line, such as a search field beside its button.
- **A main column with an aside** (`.split`) holds the page's work beside what's about it, such as an issue beside its fields. The aside is 21rem. Under 1100px it goes beneath the main column.
- **A form** is a stack of labelled fields (`.form`). Each field (`.form-field`) has its label's words above it, tied to it by `for` and `id`, never by wrapping the control: a label that wraps a select takes its options' words into its name. Fields that belong together sit side by side (`.form-fields`) where there's room, and stack where there isn't; a field beside a taller one, such as one with help under it, keeps its control's height, and a tick among them (`.choice`) sits at the foot of their row, level with their controls. A field that chooses what the page shows, such as a filter or a sprint, has its label beside it (`.form-field.inline`).
- **A table wider than its place** (`.figures-scroll`) scrolls sideways in its own frame, which the keyboard reaches (`tabindex="0"`). Words hidden for screen readers stay inside it, so they never widen the page.
- **Prose** (`.prose`) is what people wrote in Markdown, such as a description, a comment or an assistant's answer: its code on `--sunken`, and its tables with lines between their rows.
- **What went wrong** (`.error-note`) is said where it went wrong: a cross, what happened in `--bad`, and beneath it, in `--muted`, how to put it right.
- **Text that becomes a field when chosen** (`.editable`), such as an issue's summary, shows `--sunken` under the pointer and the ring on focus.
- **A page before the frame**, such as signing in or setting up, is one card in the middle of the page: `body.lone` holding `main.card.lone-card`.

**Takes:** nothing. These are classes to put pieces in.

**Markup:**

```html
<div class="split">
  <div class="stack">
    <section class="card stack" aria-labelledby="t">
      <div class="cluster spread"><h2 id="t">Time spent</h2><span class="note">3h of 2d estimated</span></div>
      <div class="prose"><p>Reproduced it on a network <code>throttled</code> to 3G.</p></div>
    </section>
    <form class="card form">
      <div class="form-field"><label for="s">Summary</label><input id="s"></div>
      <div class="form-fields">
        <div class="form-field"><label for="p">Priority</label><select id="p">…</select></div>
        <div class="form-field"><label for="a">Assignee</label><select id="a">…</select></div>
      </div>
      <p class="error-note" role="alert"><svg class="icon" aria-hidden="true"><!-- cross --></svg><strong>BACK-12 was changed by someone else</strong></p>
      <div class="cluster end"><button type="button">Cancel</button><button type="submit" class="primary">Report it</button></div>
    </form>
  </div>
  <aside class="fields">…</aside>
</div>

<div class="figures-scroll" tabindex="0" role="group" aria-label="Hours, by person and day"><table class="figures">…</table></div>
```

**In a4a:** every page, under the frame. The preview is a static rendition.
