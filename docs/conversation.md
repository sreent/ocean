# The conversation kit

For outcomes, not apps. Someone says what they want done. An agent prepares it in a conversation, and the person answers what only they can, checks it, changes any line, and sends it. Status then comes to them. The kit works for any capability: an expense claim, leave, a change to a supplier's bank details, access to reports. A capability with no screens of its own gets its whole interface from here.

Proposed: no product draws it yet. Its look is [`css/components.css`](../css/components.css), from `.talk` on; its pieces' props are in [`components/index.d.ts`](../components/index.d.ts); each piece has a preview in [`components/`](../components).

## Seven moments

| Moment | What happens | Pieces |
| --- | --- | --- |
| Ask | The person says what they want, in their own words, or starts from a photo or a file | Talk |
| Gather | The agent finds what it can (records, documents, email, the calendar) and shows its work as it goes. The camera is for paper | WorkLog, Capture |
| Draft | The agent prepares the outcome: what needs the person first, the rest filled in, each value with its source | Draft, Source |
| Answer | The person answers what only they can: what the agent couldn't decide, or what breaks a rule | Question |
| Change | Any line, by hand, as a form. The change stays theirs | EditSheet |
| Sign off | Exactly what will happen, before it does. The person sends it | SignOff |
| Track | How it stands comes to the person, and it can be taken back while it still can be | Status |

## The rules

1. **Exceptions first.** Only what the agent couldn't decide, or what breaks a rule, becomes a question. It waits on the person, in `--warn`, with its clock. Everything the agent could fill is folded under "Filled in for you".
2. **Every value has a source.** A value read off a record or a document gets a solid tag. One the agent worked out gets a dashed tag, so the person knows to check it. One the person changed gets the accent. Any line opens to its source.
3. **Nothing is sent until the person sends it.** A draft is theirs alone: a write, not a change. The work log promises this while the agent works.
4. **Their changes stay theirs.** A later check never overwrites them. The original is kept, with a way to restore it.
5. **The person signs off.** Where sending vouches for something, such as a claim or a request for access, the person sends it, not the agent. SignOff shows:
   - exactly what will be sent;
   - what sending does, in the colour of what it does;
   - who decides next;
   - who prepared it, and what that agent may not do.

   What they send is signed and kept in the audit log.
6. **Status comes to them.** It shows the stages, who it waits on, and until when it can be taken back. Nobody has to check a screen; the agent says it will message them when it moves.
7. **The agent is marked as an agent.** It has its mark and its name, never a sparkle. "What it may do" opens its facts.
8. **One thing to do, worded for the outcome.** Write "Submit claim", "Ask for the change" or "Withdraw it", never "Confirm" or "OK". The one thing to do waits until the questions are answered, and says so.

Where a capability lets its agent act alone within limits (a5s's [autonomy ladder](../components/AutonomyLadder/README.md)), there's no sign-off. The agent acts, says so in the talk with a Status, and the person can take it back while that's still possible. The capability sets the rung, and the person's organisation allows it.

## What a capability gives the kit

A capability describes four things, and the kit draws the rest:

1. **What the outcome needs, and where each value can come from:** its fields, and the records, documents, calendars or people that fill them.
2. **The rules it checks, which become questions:** a cap, an overlap, a country, data that's sensitive.
3. **What sending does, and who decides next:** what it does, in the grammar's colours (writes, changes, sends out), and who approves, by name.
4. **Its stages, and until when it can be taken back:** the stages of the record it makes, and its recall.

The same four things, for four capabilities:

| | An expense claim | Leave | A supplier's bank details | Access to reports |
| --- | --- | --- | --- | --- |
| What it needs, from where | Expenses, from receipts, card payments and email; the purpose, from the calendar | The dates, from the request; cover and balance, from the team and the profile | The new account, from the supplier's letter; the old one, from the record | Which reports and why, from the request; their owner, from the record |
| Rules that become questions | The hotel's cap; what a dinner was for | It overlaps the release | The new bank is in another country | They include salaries, which are PII |
| What sending does; who decides | Submits the claim (changes); the person's manager | Asks for leave (changes); the manager | Asks to change the supplier's record (changes); Finance and the supplier's owner | Asks for access (changes); the reports' owner |
| Stages; until when it can be taken back | Submitted, with the approver, approved, paid; recall until the approver opens it | Asked, with the manager, approved; withdraw until it's decided | Asked, with Finance, with the owner, changed; withdraw until both approve | Asked, with the owner, granted, ended; withdraw until it's decided; it ends by itself |

## The pieces

| Piece | What it is |
| --- | --- |
| Talk | The conversation: the agent, by its mark and name; what's said; quick answers; and the composer, for words, a photo or a file |
| Capture | The camera, for paper an outcome needs. It takes the photo by itself once the document is in the frame, in its own dark in either theme |
| WorkLog | The agent's work while it happens, with where each piece came from, and a promise |
| Draft | What the agent prepared: what it is, how it stands and whose, its key figure, the questions first, the rest folded |
| Question | What only the person can answer, in `--warn`, with its answers, the likely ones first |
| Source | Where a value came from: solid when read, dashed when inferred, the accent when the person changed it |
| EditSheet | A line, opened to change by hand, over the conversation. The person's change is marked as theirs and the original is kept |
| SignOff | What will happen, exactly, before it does. The person sends it |
| Status | How it stands, who it waits on, and until when it can be taken back |

Three showcase pages put them together:

- **ExpenseClaim** is the reference flow: eight steps, from asking to submitted, on a phone.
- **Capabilities** has a leave request, a change to a supplier's bank details and an access request, drafted with the same pieces.
- **AppConversation** is an app made with a3t, at a desktop's size.

## Two sizes, and a page

- **On a phone,** the agent's cards sit in the talk, a phone's width at most. The latest draft is the live one, posted again as it changes.
- **On a wide screen,** the draft pins beside the talk and stays the live one, changing as the person answers.
- **Every outcome opens as a page too:** a record with its form, for anyone who'd rather fill it in, and for what a conversation is bad at, such as long lists, comparing records and bulk changes ([`platforms.md`](platforms.md)).

## Its colours

All of them are meanings from [`css/tokens.css`](../css/tokens.css), held to the checks:

- **A question:** `--warn` on `--warn-bg`, with the clock. It waits on the person.
- **What sending does:** the effect colours, usually `--changes` on `--changes-bg`; `--writes` or `--outside` where that's what it does.
- **The person's change:** `--accent` on `--accent-soft`.
- **The agent:** `--agent-tone`, in its mark.
- **The camera:** `--viewfinder`, `--viewfinder-line`, `--viewfinder-text` and `--viewfinder-mark`. The document is `--paper` and `--paper-ink`. All of these stay the same in either theme.
- **A stage:** done in `--good` with a tick; the one now in `--warn` with a clock.

Only the work under way moves, and not when someone asks for reduced motion.

## Next

- **Answers that show rather than ask:** a record, a list and a chart in the talk, for "Where's my claim?" and "What did we spend on travel?"
- **The catalogue:** each piece with a typed description of its data, so an agent asks for pieces and never draws them. Models describe, Ocean draws, and policy decides ([`platforms.md`](platforms.md)).
- **In a5s's chat first,** where agents already talk to people; then in a3t's apps.
