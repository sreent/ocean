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

What Teams decides, not Ocean: the font, the theme (light, dark, high contrast), the tones, the buttons' look, and the "AI generated" label beside the app's name, which Teams asks for on what a model wrote.

What a card keeps from Ocean:

- **The order:** exceptions first, the rest folded.
- **The words:** each value's source; what sending does; who prepared it, and what that agent can't do.
- **The grammar, in Teams' tones where one means the same:** waiting on someone in `warning`, with the clock; done in `good`, with the tick; a change or a failure in `attention`; the person's change in `accent`. Writes, reads, sends out and the product's own have no tone in Teams, so the words carry them alone.
- **The line no rung crosses:** what vouches for someone, or can't be taken back, is always the person's to send.
