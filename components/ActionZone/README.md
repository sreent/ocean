# ActionZone

Where a page's consequential acts are: apart from what only shows, filters or saves a draft, and saying first whom and what they reach. Friction follows the risk.

- **Everyday** acts, on someone's own work or what they can take back themselves, such as saving a draft or cancelling their own task: a button where the work is. No zone, no dialog.
- **Consequential** acts, which reach other people, what agents may do, or the records of another system, such as approving a version of the settings, deciding a held change or suspending an instance: in a zone of their own (`.action-zone`), at the end of the page or of the card they act on, its edge in the change's colour. An act on the page's whole subject that may be wanted at once, such as suspending an instance, goes right below the page's head instead, so nobody scrolls past its figures to stop it. Before the buttons, a line says whom and what they reach (`.action-zone-reach`): "Suspending assistant-finance stops it answering 12 people. Nothing it's doing is lost, and resuming it carries on." The product may also ask for a fresh sign-in, as a5s does; no dialog besides.
- **Can't be undone**, where nothing brings it back and it reaches someone else, such as erasing what a product keeps about a person: a zone of its own (`.action-zone.cant-undo`), on the failure's well, marked "Can't be undone" in words beside a cross (`.action-zone-mark`), its button the danger one, outlined, as asking first is: only the dialog's answer is filled. Its [Confirm](../Confirm/README.md) asks for the thing's name typed, and the product's server checks the name too, so no script skips it.
- One zone for each act, or each pair that undo each other, such as Suspend and Resume. Its heading names the act ("Suspend or resume it").
- Its buttons sit in a row (`.cluster`). A card that lays out its own, such as an approval card's reason and its yes and no, puts them in the zone as they are, stacked, the reason's field as wide as the zone.
- A zone never holds everyday buttons, so its edge always means: this reaches beyond you.

**Takes:** `title`; `reach`, in words; `cantUndo`; and its buttons.

**Markup:**

```html
<section class="action-zone" aria-labelledby="z-suspend">
  <h2 id="z-suspend">Suspend or resume it</h2>
  <p class="action-zone-reach">Suspending assistant-finance stops it answering 12 people. Nothing it's doing is lost, and resuming it carries on.</p>
  <div class="cluster"><button type="button" class="primary">Suspend it</button></div>
</section>
<section class="action-zone cant-undo" aria-labelledby="z-erase">
  <h2 id="z-erase">Erase what a5s keeps about someone</h2>
  <p class="action-zone-mark"><svg class="icon" aria-hidden="true">…</svg>Can't be undone</p>
  <p class="action-zone-reach">Their conversations, notes and grades go, everywhere a5s keeps them, and nobody can bring them back.</p>
  <div class="cluster"><button type="button" class="danger">Erase it</button></div>
</section>
```

**In a5s:** each page's acts, by the tier `docs/design.md` gives each. The preview is a static rendition.
