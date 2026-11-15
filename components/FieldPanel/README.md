# FieldPanel

An issue's fields, beside it: each label in Ocean's label style, and each value a control. A value an agent worked out waits, dashed, until a person accepts it. Proposed.

- Each value is a control: a button that opens its choices, or a field to type in. At rest it reads as text; under the pointer and on focus it shows a field's edge, `--line-control`, and on focus the keyboard's ring.
- Values keep their own look: a state's Badge, a PriorityMeter, a person's Who. Versions and durations ("2d 4h") are in Plex Mono. An empty value says so, in `--muted`: "No due date".
- A value an agent worked out that nobody has accepted yet is dashed, as a traced value is: not in force until a person accepts it. Beneath it, the agent by its mark and name, where it worked the value out from, and Accept. Accepting is a change to the issue, and its history says who accepted it, and from which agent.
- A value opened shows its choices in a popover: the chosen one on `--accent-soft`; what each does in `--faint`, or `--muted` on a row under the pointer or chosen, where `--faint` reads too little.
- Each value is named by its label and itself (`aria-labelledby`), so a screen reader says "State, In Progress".

**Takes:** `fields` (each `name`, `value`, `kind`: a choice, a person, a version, a duration, a date or text; and `proposed`, `{ by, from }`, while an agent's value waits to be accepted), `onChange`, `onAccept`.

**Markup:**

```html
<aside class="fields" aria-label="Fields of BACK-32">
  <dl class="fields-list">
    <div class="fields-row"><dt id="f-state">State</dt><dd>
      <button type="button" class="fields-value" id="v-state" aria-labelledby="f-state v-state" aria-haspopup="listbox"><span class="badge">Open</span></button>
    </dd></div>
    <div class="fields-row"><dt id="f-sub">Subsystem</dt><dd>
      <button type="button" class="fields-value proposed" id="v-sub" aria-labelledby="f-sub v-sub" aria-describedby="p-sub" aria-haspopup="listbox">Storage</button>
      <p class="fields-proposed" id="p-sub"><span class="avatar agent small" aria-hidden="true"><!-- agent --></span><span><strong>triage</strong> worked it out from 3 similar issues</span><button type="button">Accept</button></p>
    </dd></div>
    <div class="fields-row"><dt id="f-est">Estimation</dt><dd><input type="text" class="fields-value mono" aria-labelledby="f-est" value="2d 4h"></dd></div>
  </dl>
  <p class="fields-foot">Dashed values were worked out by an agent: check them, and accept each one you agree with.</p>
</aside>
```

Opened, the value takes `aria-expanded="true"` and `aria-controls`, and its choices follow it in the same `dd`:

```html
<ul class="popover options" id="state-options" role="listbox" aria-label="State">
  <li role="option" aria-selected="true"><span class="badge">In Progress</span><span class="option-kind">now</span></li>
  <li role="option" aria-selected="false"><span class="badge good"><!-- tick -->Fixed</span><span class="option-kind">resolves it</span></li>
</ul>
```

**In a4a:** an issue's page, beside its description. The preview is a static rendition.
