# Talk

The conversation itself: the agent who answers, marked as an agent by its mark and its name, what's said, the quick answers, and the composer.

- The head names the agent, in the agent colour, never a sparkle, with what it serves and a way to what it may do.
- What the person says sits on `--you`, at the end; what the agent says on `--agent`, at the start. The agent's cards (a draft, a question, what will be sent) sit in the talk, a phone's width at most.
- The product's own word sits on `--own-message`, by its shield, in the middle: what the product, not the agent, says, such as what the agent may read for this.
- Quick answers are buttons in a row; the one most people will take is the primary.
- Send stays a plain button until there's something to send, so a screen keeps one primary.
- The composer takes words, a photo or a file, in any order: an outcome can start from any of them.

It belongs to the conversation kit (docs/conversation.md), for any capability, not one kind of app.

**In a4a:** the assistant's page, where the conversation sits on the page beside your other conversations (`.talk.on-page`): framed as a card, its lines 44rem wide at most and what's said 34rem, centred where the page is wide; the agent's cards at their full width from the start; and the composer a text area that grows with what's typed (`.talk-foot` holding a `textarea`).

- What the person typed keeps the lines they broke it into.
- While it works, the agent's own short notes sit by its mark, quieter than what it says (`.talk-note`), a turning mark beside the one still going; before it has words, it says it's working (`.talk-working`).
- What the person said that didn't go is quieter, in `--muted`, and says so under it in `--bad` (`.say.you.unsent` with `.say-unsent`). What failed is the product's own word with a cross in `--bad` (`.say.own.bad`).
- "What it may do" opens the agent's facts over the conversation, under its head (`.agent-facts.talk-facts`); Escape closes them.

```html
<section class="talk on-page" aria-label="A conversation with assistant">
  <header class="talk-head">…</header>
  <div class="talk-body">
    <p class="say you">Take BACK-6 and start on it</p>
    <div class="talk-note"><svg class="icon" aria-hidden="true"><!-- agent --></svg><p><span class="hidden">assistant's note: </span>Reading BACK-6 first.</p></div>
    <p class="talk-working" role="status"><span class="spin" aria-hidden="true"></span>assistant is working on it</p>
    <p class="say you unsent">And the same for BACK-7<span class="say-unsent">Not sent</span></p>
    <p class="say own bad" role="alert"><svg class="icon" aria-hidden="true"><!-- cross --></svg><span>The assistant is off on this server.</span></p>
  </div>
  <form class="talk-foot"><textarea rows="1" aria-label="Your message"></textarea><button type="submit" class="round" aria-label="Send">…</button></form>
</section>
```

The preview's second talk draws a4a's notes, what didn't go, and what failed.
