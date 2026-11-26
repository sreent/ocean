# ActingAs

Whose power a page uses, said on the pages that change things, so nobody approves, decides or erases without knowing which of their roles they're acting in.

- First in the page's `main`, before its head (`.acting-as`): their round initials, as a person is drawn everywhere, and in words, "Acting as **the owner of billing**", then what that lets them do here: "what you approve changes what agents may do in billing".
- In the person's own colour (`--you`, with an `--accent` edge): it says who's acting, not that anything's wrong. Never a warning's amber, which the band of a test already wears.
- Only on a page whose acts use a role: approving a version of the settings, deciding held changes, grading, the data protection officer's requests, suspending an instance. A page that only shows has none, so the line keeps meaning something; a product has no administrator's mode to be in.
- Where someone holds several roles, it names the one this page's acts count as, as the product's server checks them, never all they hold.

**Takes:** `who`, their initials and name; `role`, in words; `lets`, what it lets them do here.

**Markup:**

```html
<p class="acting-as"><span class="avatar" aria-hidden="true">AO</span>
  <span>Acting as <strong>the owner of billing</strong>: what you approve here changes what agents may do in billing.</span></p>
```

**In a5s:** each page whose acts need a role says which, from what its API says the person acts as. The preview is a static rendition.
