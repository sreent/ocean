# Teams

The conversation kit's cards for Microsoft Teams: the expense claim's cards, as Adaptive Card JSON (version 1.5, with Teams' Badge and Icon elements). The InTeams page in `components/` draws them.

| Card | What it is | The kit's piece |
| --- | --- | --- |
| `cards/draft.json` | The draft: its questions first, the rest folded behind Show, each value with its source | Draft, Question, Source |
| `cards/change.json` | A dialog to change a line: each field says its source, and the person's change is marked as theirs | EditSheet |
| `cards/signoff.json` | What will be sent, what submitting does, who prepared it, and Submit claim | SignOff |
| `cards/approval.json` | The approver's card: only they see Approve and Decline | ApprovalCard |
| `cards/status.json` | How it stands, updated in place as it moves, with Recall | Status |

How they work in Teams:

- Answers, Submit, Recall and the approver's decision are `Action.Execute`, so the app answers with the card updated in place (Universal Actions). The status and the approver's card refresh by themselves for the people named in `refresh.userIds`.
- "Change a line" and "Make a change" open a Teams dialog (`task/fetch`) with `change.json`.
- "Open as a page" opens the claim's page in Stageview, where it's Ocean's own look.
- The data is sample data. In an app, each card is a template, and the claim's data binds into it.

## a4a's cards

a4a's bot posts an issue's news to the channels people subscribe, and answers who asks it. Its cards are templates, bound by a4a's server with Adaptive Cards' templating: `${…}` for a value, `$when` to leave a part out, `$data` to repeat one for each item of a list.

| Card | What it is | The kit's piece |
| --- | --- | --- |
| `cards/a4a-change.json` | What changed: who did it, in what words, then the issue's line, its state and key fields. What a channel is posted | Status |
| `cards/a4a-issue.json` | An issue as one person sees it: its id, summary, state, key fields, and a line saying what their action did. Refreshed for them alone (`refresh.userIds`) | Status |
| `cards/a4a-new-issue.json` | A message made an issue: a dialog (`task/fetch`) asking for the project, a summary from the message's first line and a description from the message, saying whose message it is, whether it was cut, and that its files are linked; a refusal above the fields in `Attention` | EditSheet |

- **The actions** are `Action.Execute`: Assign to me, Move to… (the project's states) and Comment, done as the person who acts, with their own access. Each answers with the issue card updated in place, for that person; the channel's post stays as it was posted. Open in a4a is `Action.OpenUrl`.
- **The words** are a4a's, in the language of whoever reads the card: a person's card in theirs, a channel's post in the server's. A card holds none of its own. Its buttons and labels come in `words` (`refresh`, `assignToMe`, `moveTo`, `move`, `comment`, `commentLabel`, `commentNeeded`, `openInA4a`; the new issue's `project`, `chooseProject`, `projectNeeded`, `summary`, `summaryNeeded`, `description` and `create`), and the state's field by the name it was given, in `stateField`. The new issue's lines (`from`, `cut`, `files`, `error`) come worded whole.
- **A message made an issue** is a message action (a messaging extension whose `context` is `message`): its dialog is `a4a-new-issue.json`, and its answer the issue card, with nothing to act on in a dialog (`canAct` false) and a line saying it was made. What a dialog submits is `Action.Submit`, the dialog's own; the form a4a opened is named in its data (`draft`), so a form sent twice makes one issue.
- **The line no card crosses:** a channel's post says only what everyone who reads the project may see. What's limited to some people, a help desk's internal notes and a requester's address never reach a channel; a card for one person shows what they may see.
- **The grammar:** the state in a Badge, in Teams' tone for its meaning (resolved in `Good`, the rest `Subtle`); the result of an action in a line with its icon, a refusal in `Attention`.

What Teams decides, not Ocean: the font, the theme (light, dark, high contrast), the tones, the buttons' look, and the "AI generated" label beside the app's name, which Teams asks for on what a model wrote.

What a card keeps from Ocean:

- **The order:** exceptions first, the rest folded.
- **The words:** each value's source; what sending does; who prepared it, and what that agent can't do.
- **The grammar, in Teams' tones where one means the same:** waiting on someone in `warning`, with the clock; done in `good`, with the tick; a change or a failure in `attention`; the person's change in `accent`. Writes, reads, sends out and the product's own have no tone in Teams, so the words carry them alone.
- **The line no rung crosses:** what vouches for someone, or can't be taken back, is always the person's to send.
