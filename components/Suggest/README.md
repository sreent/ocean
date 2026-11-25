# Suggest

A field that suggests what to type: names someone could mean, under the field, as they type. Each is a name, and the words that tell it from names alike, such as a customer's domains. Proposed.

- The field is an ordinary input in a `.suggests` wrapper, and a combobox (`aria-autocomplete="list"`, `aria-expanded`, `aria-controls`, `aria-activedescendant`), as the query's is.
- Suggestions open under it as the person types, in Ocean's choices: the letters typed in bold, the one the arrows are on on `--accent-soft`. The arrows choose, Enter or Tab takes the one they're on, Escape puts them away, and what the person types stays theirs: a suggestion is never forced.
- What tells a name from names alike follows it in `--faint`, as a query suggestion's kind does, and wraps beneath the name when the two don't fit on one line: long company names that differ by a word, 「〇〇システム株式会社」 and 「〇〇システムズ株式会社」, read apart by their domains.
- A screen reader hears each suggestion's name and its words together, and how many there are.

**Takes:** `label`, `value`, `suggestions` (each `value`, and `about`), `active`, `onChange`.

**Markup:**

```html
<div class="form-field">
  <label for="customer">Name</label>
  <div class="suggests">
    <input id="customer" role="combobox" aria-autocomplete="list" aria-expanded="true" aria-controls="customer-options"
           aria-activedescendant="customer-o1" value="Acme" autocomplete="off">
    <ul class="popover options" id="customer-options" role="listbox" aria-label="Customers other desks serve">
      <li role="option" id="customer-o1" aria-selected="true"><span><mark>Acme</mark> Systems</span><span class="option-kind">acme.co.jp, acme.com</span></li>
      <li role="option" id="customer-o2" aria-selected="false"><span><mark>Acme</mark> Systems Europe</span><span class="option-kind">acme.eu</span></li>
    </ul>
  </div>
</div>
```

**In a4a:** a customer group's name on a help desk's form, from the customers the other desks serve (D56). The preview is a static rendition.
