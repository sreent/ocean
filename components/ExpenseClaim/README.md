# ExpenseClaim

The conversation kit's reference flow: an expense claim, from asking to submitted, in eight steps. The agent prepares the claim; the person checks it, changes it and submits it. A showcase page, with sample data.

1. Ask, in plain words; the agent asks only for what it can't find itself.
2. Snap the receipt: the one step that needs the person's hands.
3. The agent gathers the rest, showing where each piece came from; nothing is sent yet.
4. Review, exceptions first: only what it couldn't decide, or what breaks a rule, is a question.
5. Answer, and check sources: inferred values look different from values read off a document.
6. Change any line, by hand; the change stays the person's.
7. Confirm and submit: exactly what will be sent, what submitting does, and who did what.
8. Submitted: status comes to the person, and the claim can be recalled until the approver opens it.

The same claim in Microsoft Teams is InTeams.

What Ocean changes in the first sketch:

- The agent is marked by its mark and its name, never a sparkle, with a way to what it may do.
- The draft says it's a draft, and whose: only the person sees it until they send it.
- Questions wait on the person in `--warn`, with a clock, and say what the answer sets.
- Every value shows its source: solid when read, dashed when inferred, the accent once the person changed it.
- A changed line keeps its original, with a way to restore it, and a later check never overwrites it.
- Before submitting, the card says what submitting does, in `--changes`; who prepared it, and what that agent can't do; and that the submission is signed and kept in the audit log.
- After, the stages, who it waits on, and a recall until the approver opens it.

The camera is the one screen in its own dark, in either theme (`--viewfinder`), and the receipt keeps its paper (`--paper`).
