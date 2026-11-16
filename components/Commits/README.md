# Commits

An issue's commits and pull requests: what in version control mentions it, newest first, each with who, where and when, and how it stands; and the command a commit gave the issue, applied or not, and why. Proposed.

- **A pull request** (or a merge request) reads by its title, linked to it, then its number in mono (`.code-ref`), then how it stands as a badge with its shape: open, waiting on review, `warn`; merged, `good`; closed without merging, `idle`. Under it, in `--muted`: its branch into its target in mono, who opened it, and where it lives (`.item-about`).
- **A commit** reads by its sha in mono, short and linked (`a.code-ref`), then its message's first line (`.code-title`). Under it: who wrote it, by their name in a4a when their verified email matched one, its branch, and when.
- **The command it gave** the issue (`.code-command`), as it was written ("BACK-12 #Fixed" gave `#Fixed`): applied as its author, as a `good` badge, with what it changed; or not applied, as a `bad` badge, with why in words: "a4a doesn’t know who wrote it", "Vera Viewer can’t change issues in BACK".
- Each item is a row, with a line between rows (`ul.code-list`). It sits in a card of its own on the issue's page, under the links, with where it comes from beside its title.
- When nothing mentions the issue, the card says how to: "Mention BACK-12 in a commit message or a pull request's title, branch or description."

**Takes:** `issue`, `pullRequests` (each `number`, `title`, `href`, `state`, `branch`, `target`, `by`, `repository`, `at`), `commits` (each `sha`, `title`, `href`, `by` and whether a4a knows them, `branch`, `at`, `command`, `applied`, `note`).

**Markup:**

```html
<section class="card" aria-labelledby="code-title">
  <div class="section-head"><h2 id="code-title">Commits and pull requests</h2><span class="note">From acme/backend</span></div>
  <ul class="code-list">
    <li>
      <p class="code-line"><a class="code-title" href="…">Throttle exports per account</a><span class="code-ref">#42</span><span class="badge good"><!-- tick -->merged</span></p>
      <p class="item-about"><span class="mono">feature/back-2-throttle</span> into <span class="mono">main</span> · opened by jmallach · acme/backend · 2 hours ago</p>
    </li>
    <li>
      <p class="code-line"><a class="code-ref" href="…">a1b2c3d</a><span class="code-title">Fix the SSO redirect loop on Safari</span></p>
      <p class="item-about">Anna Schmidt · on <span class="mono">main</span> · today at 09:10</p>
      <p class="code-command"><code>#Fixed</code><span class="badge good"><!-- tick -->applied</span><span>as Anna Schmidt: State: Open → Fixed</span></p>
    </li>
  </ul>
</section>
```

**In a4a:** an issue's page, under its links. The preview is a static rendition.
