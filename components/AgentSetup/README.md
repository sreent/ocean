# AgentSetup

Connecting an agent, such as Claude Code, to a product over MCP: numbered steps, a secret shown once, words to copy into a terminal or a client's settings, and the tools the agent gets, each with what it does. Proposed.

- **The steps** (`ol.steps`) are numbered in `--accent` rings, each a third-level heading, then what to do: create a token, then add the product to the agent. A choice of clients is Ocean's `.modes`, which stacks on a phone.
- **A secret shown once** (`.secret`) sits on `--warn-bg` inside a `--warn` line, and says so first, in `--warn`: "Copy it now." The secret itself is on `--surface`, in mono, with Copy beside it and a way to say it's kept. It's a status, so a screen reader hears it arrive.
- **Words to copy** (`pre.snippet`) sit on `--sunken` in mono, wrapping; code keeps its lines and scrolls (`.snippet.code`), and the keyboard reaches it. Copy (`.copy`) says what it did beside it, where a screen reader hears it (`.copy-said`): "Copied the token." Where copying isn't allowed, it says to select the words instead.
- **The tools an agent gets** (`ul.tool-list`): each its name in mono, its title, what it does as a badge in the colour of what it does (`reads`, `changes`), and a chip for what's worth knowing, such as "can overwrite"; then a line about it in `--muted` (`.tool-head`).
- An agent never gets more than the person's role allows: the steps say so where the token's reach is chosen.

**Takes:** nothing of its own: these are classes, on Ocean's card, form, modes and badges.

**Markup:**

```html
<ol class="steps">
  <li><h3>Create a token for it</h3>
    <form class="form">…</form>
    <div class="secret" role="status">
      <p><strong>Copy it now.</strong> This is the only time it's shown.</p>
      <code>a4a_9Kd2…</code>
      <div class="cluster"><span class="copy"><button type="button">Copy the token</button><span class="copy-said" role="status"></span></span>
        <button type="button" class="link">I've kept it</button></div>
    </div></li>
  <li><h3>Add a4a to the agent</h3>
    <div class="modes" role="group" aria-label="Which agent">…</div>
    <p class="note">Run this in a terminal, in the folder you work in.</p>
    <div class="stack tight"><pre class="snippet">claude mcp add --transport http a4a …</pre><div class="cluster"><span class="copy">…</span></div></div></li>
</ol>

<ul class="tool-list">
  <li><div class="tool-head"><code>update_issue</code><strong>Update an issue</strong><span class="badge changes">changes</span><span class="chip">can overwrite</span></div>
    <p>Change an issue's summary, description or fields.</p></li>
</ul>
```

**In a4a:** Agents and tokens, and Webhooks' secret and its check in Node. The preview is a static rendition.
