# ApprovalCard

What someone is asked to decide, a phone's width at most: who asks and for whom, what it changes, why, and their yes or no.

- The stripe says what the change does: `--changes` for a record, `--writes` for something written, `--outside` for what leaves, `--own` for a version of the product's own settings.
- Who asks comes first, with their mark: an agent in a5s and a7c; a person, in a3t's change requests (proposed).
- What it changes, in a well: from what (struck through) to what (in `--changes`, at 650), or just what it's about.
- **Why:** in the words code worked out when it was asked for, never the agent's own.
- Approve is the primary button and Decline the other, both a full half of the card. Once decided, the card says so: "You approved it."
- The foot says the decision is signed and kept in the ledger.
- On a phone, the cards make a column; where there's room, they sit side by side.

**Takes:** `agent`, `asks`, `about`, `changes`, `why`, `tone`, `decided`, `busy`, `onApprove`, `onDecline`, and the proposed `by` and `compact`.

**In a5s:** `studio/src/design/agentic.tsx`, and its decisions, grading and settings pages. The preview is a static rendition; its buttons decide.

**In a4a:** triage's suggestion for an issue is a decision a person takes some of. On the Suggestions page they sit side by side, each 24 to 28rem wide (`.approvals`).

- A tick beside each part to take (`.approval-pick`): each value the agent worked out is dashed until a person accepts it (`ins.proposed`), as the field panel's proposed value is, with how sure it is and its reason beneath (`.approval-reason`, holding a `.source`). A part with several lines stacks them (`dd.approval-stack`).
- Tags to add, each with its own tick and its word (`.approval-tag`, `.approval-state`: "to add", "added"); what's accepted already reads plain, with its word (`.approval-accepted`).
- A line of its own under the parts says what the card can't do or where its values are (`.approval-note`).
- On the issue's own page, it's smaller (`.approval.compact`): its summary in a line (`.approval-summary`), its values left in the field panel, and its buttons in a cluster.
- What an agent asks to do, in the words its dry run gave, where they aren't a change field by field, sits in a well (`.approval-well`).
- An app that asks to act for someone over MCP (OAuth's consent) is a decision on a page of its own, before the frame: the lone page's card is the approval itself (`main.approval.lone-card` in `body.lone`), its stripe `outside`, since what the app reads leaves a4a. Who asks is the app, by the name it gave itself, which a4a can't check, so the line under it says so and where the app sends the person back; a program on their own computer is said as much. Its parts are who it acts as, where it goes back to, what it may do, a tick for each (reading always, ticked and fixed), and where, a choice between every project and some (`.approval-pick` with radios), with a tick for each project beneath. Each part's ticks are a group named by its term, one under another (a `.stack.tight` with `role="group"` in the `dd`, which can't be the group itself). Allow is the primary button and Decline the other; the foot says where to revoke it.

```html
<div class="approvals">
  <section class="approval" aria-labelledby="s1">…
    <dl class="approval-changes">
      <div class="pair"><dt><label class="approval-pick"><input type="checkbox" checked>Assignee</label></dt>
        <dd class="approval-stack"><span><del>Unassigned</del> → <ins class="proposed">ben</ins></span>
          <span class="approval-reason"><span class="source inferred">fairly sure</span> Ben Okafor leads WEB.</span></dd></div>
    </dl>…
  </section>
</div>
```
