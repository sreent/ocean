# ArticleTree

A project's knowledge base as a tree, on [NavList](../NavList/README.md): each article a link, the articles under it indented beneath it along a line, and folded until opened. Proposed.

- It sits beside the article that's open, in a card padded less (`.card.side-card.nav-card`), headed by whose knowledge base it is. On a phone the article comes first and the tree after it, as NavList's lists do.
- Each article is a NavList link: its title at 500, and under it its id as people quote it, in Plex Mono (`BACK-A-3`). The open one has `aria-current="page"`, on `--accent-soft` in `--accent`.
- What's under an article hangs beneath it, indented along a line in `--line`, so how deep it is reads without counting.
- An article with articles under it has a chevron before it, a real button (`.tree-toggle`) with `aria-expanded` and a name that says what it does: "Show what's under Runbooks". Folded, the chevron points at the article and what's under it is `hidden`; opened, it points down. The open article's own branch starts opened. An article with nothing under it has an empty place where the chevron would be, so the titles line up.
- From the keyboard it's a list of links and buttons in reading order: Tab goes through them, Enter opens an article or folds a branch. It's navigation, not a `role="tree"` widget, so nothing needs arrow keys to learn.

**Takes:** `label`, `articles` (each `id`, `title`, `href`, `children`, `open`), `current`, `onToggle`.

**Markup:**

```html
<nav class="card side-card nav-card" aria-label="Backend platform's knowledge base">
  <h2>Backend platform</h2>
  <ul class="nav-list tree">
    <li>
      <div class="tree-row">
        <button type="button" class="tree-toggle" aria-expanded="true" aria-controls="under-a1" aria-label="Hide what's under Runbooks"><svg class="icon" aria-hidden="true"><!-- chevron --></svg></button>
        <a href="/articles/BACK-A-1"><span class="nav-list-name">Runbooks</span><span class="nav-list-about"><span class="issue-id">BACK-A-1</span></span></a>
      </div>
      <ul id="under-a1">
        <li><div class="tree-row"><span aria-hidden="true"></span>
          <a href="/articles/BACK-A-4" aria-current="page"><span class="nav-list-name">Database failover</span><span class="nav-list-about"><span class="issue-id">BACK-A-4</span></span></a></div></li>
      </ul>
    </li>
  </ul>
</nav>
```

**In a4a:** the knowledge base, beside the article that's open and beside a search. The preview is a static rendition.
