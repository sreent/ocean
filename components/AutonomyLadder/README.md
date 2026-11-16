# AutonomyLadder

Autonomy is earned: the rung an agent works on, those its release allows beyond it, and how far it has come toward the next.

- One ladder in the same words for the family: Observes, Suggests, Asks, Acts. A product shows the rungs it has: a5s's three, from Suggests, and a7c's four.
- Whatever the rung, an agent never sends what vouches for something in a person's name, or what can't be taken back: a person signs those off. When it acts on its own, it says so at once, with Undo (the conversation kit, docs/conversation.md).
- The rung it's on has the agent colour (`--agent-tone` on `--agent-tone-soft`). Rungs its release allows are dashed; rungs it doesn't are faded.
- Under it, how far it has come toward the next rung, as graded samples, and who decides. The meter fills in the agent colour.
- The rungs sit side by side where there's room and stack wherever they're narrow, by container query.

**Takes:** `level`, `max`, `toward`, and the proposed `rungs` and `onChoose`.

**In a5s:** `studio/src/design/agentic.tsx`. The four-rung ladder is proposed. The preview is a static rendition.

**In a4a:** the ladder is a choice: how far triage may go in a project or in new ones, and how far the assistant goes in a conversation. It's a fieldset (`fieldset.ladder-choice`) whose legend is a label; each rung a label (`.rung`) holding its radio beside its name (`.rung-name`), in the agent colour, which the keyboard reaches, with the ring drawn round the whole rung. The rung chosen is the one it's on. Where it can't be changed, the fieldset is disabled and its rungs faded. Two rungs sit side by side until a narrow place stacks them (`.ladder.two`); a note under it says what holds at every rung (`.ladder-note`).

```html
<fieldset class="ladder-choice"><legend class="label">When it would change something</legend>
  <div class="ladder-box"><ol class="ladder two">
    <li aria-current="step"><label class="rung"><span class="lvl">ask · now</span>
      <span class="rung-name"><input type="radio" name="mode" value="ask" checked><strong>Asks</strong></span>
      <p>Each change waits for your yes.</p></label></li>
    <li class="beyond"><label class="rung">…</label></li>
  </ol></div>
  <p class="note ladder-note">It never deletes. Each visit starts at Asks.</p>
</fieldset>
```
