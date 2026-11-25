# ArticlePage

An article in a knowledge base: its words as prose to read, where it sits, what's under it and what mentions it; its editor, the Markdown beside how it will read; its versions, each change a line; and what a search found. Proposed. It builds on [Layout](../Layout/README.md)'s prose, [NavList](../NavList/README.md), [Directory](../Directory/README.md), [IssueLinks](../IssueLinks/README.md)' list and [AttachmentList](../AttachmentList/README.md).

- **Its head** is the page's: the way back through the articles it sits under (`.crumbs`), its title as the page's heading, its id beside it in Plex Mono, and a line of who changed it last, when, and which version it's at.
- **Its words** are prose (`.prose.article-body`), at a reading width (46rem at most) and a little more leading than a description's. Its headings start a level under the page's own (a `#` in its Markdown is an `h2`), so the page keeps one first-level heading. Ids written in it (BACK-12, BACK-A-3) are links, in Plex Mono.
- **What's under it** is a Directory: each title that opens it, and its id.
- **What mentions it** is IssueLinks' list: each issue's id, its summary as a link and how it stands, or each article's id and title. Only what the reader may see is listed.
- **Its files** are an AttachmentList.
- **Editing**: the title, then the Markdown in Plex Mono beside how it will read, on `--page` so the two are told apart (`.article-editor`). Where there isn't room for both, one shows at a time, chosen with modes, Write or Preview (`data-show="write"` or `"read"`). Saving says what happened; if someone saved a newer version meanwhile, it says so and keeps what was written.
- **Its versions** are a NavList, newest first: the version, who saved it, when, and through what (an agent says so, by its id). A version opened shows its lines against the one before (`.diff`): each with its sign, so it reads without colour; added, on `--changes-bg` with a `+` in `--changes`; removed, struck through in `--muted` with a `−`; the same, in `--muted`, and long runs of them folded into one line that says how many. Bringing a version back saves it as a new one, so nothing in between is lost.
- **What a search found** (`.article-results`): each article's title, where it sits and its id, then its words around what matched, the matches marked on `--accent-soft`.

**Takes:** `id`, `title`, `path`, `meta`, `body`, `children`, `mentionedIn`, `editing` (`title`, `markdown`, `preview`, `show`), `version` (`label`, `lines`); and ArticleResults' `results` (each `id`, `title`, `href`, `path`, `when`, `snippet`).

**Markup:**

```html
<div class="page-head">
  <nav class="crumbs" aria-label="Where this is"><a href="/articles">Knowledge base</a> / <a href="/articles?project=BACK">Backend platform</a> / <a href="/articles/BACK-A-1">Runbooks</a></nav>
  <div class="title-row"><h1>Database failover</h1><span class="issue-id">BACK-A-4</span><div class="grow cluster end"><a class="button" href="…/edit">Edit</a></div></div>
  <div class="meta"><span>Changed by Anna Schmidt <time datetime="2026-11-09T10:02">Mon 9 Nov</time></span><span>Version 4</span></div>
</div>
<article class="card stack" aria-label="Database failover">
  <div class="prose article-body"><p>When the primary fails…</p><h2>Promote the replica</h2>…</div>
</article>

<form class="card article-editor" data-show="write">
  <div class="form-field"><label for="t">Title</label><input id="t" value="Database failover"></div>
  <div class="modes" role="group" aria-label="Show"><button type="button" aria-pressed="true">Write</button><button type="button" aria-pressed="false">Preview</button></div>
  <div class="article-editor-panes">
    <div class="form-field article-editor-write"><label for="b">Markdown</label><textarea id="b">…</textarea></div>
    <div class="article-preview prose article-body" aria-label="How it will read">…</div>
  </div>
  <div class="cluster end"><button type="button">Cancel</button><button type="submit" class="primary">Save version 5</button></div>
</form>

<ol class="diff" aria-label="Version 4 against version 3">
  <li class="same"><span class="diff-sign" aria-hidden="true"> </span><span class="diff-text">When the primary fails, promote the replica.</span></li>
  <li class="del"><span class="diff-sign" aria-hidden="true">−</span><del class="diff-text"><span class="hidden">Removed: </span>Repoint the app.</del></li>
  <li class="add"><span class="diff-sign" aria-hidden="true">+</span><ins class="diff-text"><span class="hidden">Added: </span>Repoint the pooler, then the app.</ins></li>
  <li class="gap"><span class="diff-sign" aria-hidden="true">⋯</span><span class="diff-text">12 lines the same</span></li>
</ol>

<ul class="article-results">
  <li><a href="/articles/BACK-A-4">Database failover</a>
    <span class="article-meta"><span>Runbooks</span><span class="issue-id">BACK-A-4</span><time datetime="…">Mon 9 Nov</time></span>
    <p>When the primary <mark>fails</mark>, promote the replica…</p></li>
</ul>
```

**In a4a:** the knowledge base under Work: an article, its editor and its history, beside the project's ArticleTree; and the search. The preview is a static rendition.
