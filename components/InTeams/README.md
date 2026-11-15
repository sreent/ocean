# InTeams

The conversation kit in Microsoft Teams: the expense claim from ExpenseClaim, in the Expenses app's chat, drawn from the cards in `teams/cards`. A showcase page, and a schematic: Teams draws the real thing.

Teams draws its cards itself, in its own font and theme, with a few fixed tones, and Ocean can't style inside them. So what carries over is the kit's rules, words and order:

- The agent is the app: its icon is the agent's mark, and its name is the agent's. Teams adds its "AI generated" label beside the name, in words, on what the model wrote; an approval request the app sends has none.
- The draft is one card, updated in place as Ben answers. Its questions come first, in Teams' warning style with the clock, and each value filled in says where it came from.
- Quick answers become Teams' suggested actions, at most three pills above the compose box. The card's own buttons answer its questions.
- Changing a line opens a Teams dialog with the line's form, each field saying its source.
- Signing off is a card: what will be sent, what submitting does, who prepared it, and Submit claim.
- Priya gets her own card, and only she sees Approve and Decline.
- After, the same card updates as the claim moves, with Recall until Priya opens it.

Where Teams shows a page of ours, a tab, Stageview, or a dialog with a web page, it's Ocean's own look, in Teams' theme: "Open as a page" opens the claim in Stageview, and "My claims" is a tab.

The reference flow's eight steps, in Teams:

| Step | In Teams |
| --- | --- |
| 1. Ask | A message to the app, in Teams' own compose box |
| 2. Snap the receipt | Teams' own camera or attach; the app receives the photo |
| 3. The agent gathers the rest | Teams' informative updates while it works ("Checking the travel policy…"); where each value came from moves into the card |
| 4. Review, exceptions first | The draft card |
| 5. Answer, and check sources | The same card, updated in place; "Add a reason" opens a field in the card |
| 6. Change any line | A Teams dialog |
| 7. Confirm and submit | The sign-off card |
| 8. Submitted | The same card again, updated as the claim moves, and a line in Teams' activity feed |
