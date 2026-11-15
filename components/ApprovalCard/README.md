# ApprovalCard

What someone is asked to decide, a phone's width at most: who asks and for whom, what it changes, why, and their yes or no.

- The stripe says what the change does: `--changes` for a record, `--writes` for something written, `--outside` for what leaves, `--own` for a version of the product's own settings.
- Who asks comes first, with their mark: an agent in a5s and a7c; a person, in a3t's change requests (proposed).
- What it changes, in a well: from what (struck through) to what (in `--changes`, at 650), or just what it's about.
- **Why:** in the words code worked out when it was asked for, never the agent's own.
- Approve is the primary button and Decline the other, both a full half of the card. Once decided, the card says so: "You approved it."
- The foot says the decision is signed and kept in the ledger.
- On a phone, the cards make a column; where there's room, they sit side by side.

**Takes:** `agent`, `asks`, `about`, `changes`, `why`, `tone`, `decided`, `busy`, `onApprove`, `onDecline`, and the proposed `by`.

**In a5s:** `studio/src/design/agentic.tsx`, and its decisions, grading and settings pages. The preview is a static rendition; its buttons decide.
