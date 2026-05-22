# Legal document specifications

Source of truth for published legal pages on www.2key.app. Edit the Markdown files here, then regenerate HTML.

## Documents

| Spec | Published page |
|------|----------------|
| [privacy.md](privacy.md) | `docs/privacy.html` |
| [terms.md](terms.md) | `docs/terms.html` |
| [cookies.md](cookies.md) | `docs/cookies.html` |
| [acceptable-use.md](acceptable-use.md) | `docs/acceptable-use.html` |

## Shared settings

[_shared.json](_shared.json) — contact email, last updated date, disclaimers, canonical base URL, footer tagline.

Per-document YAML frontmatter (top of each `.md` file):

- `title` — page `<title>` and `<h1>`
- `output` — filename under `docs/`
- `description` — meta description
- `nav_label` — footer link text
- `disclaimer` — `full` or `short` (from `_shared.json`)

## Regenerate

From repository root:

```bash
node scripts/build-legal.mjs
```

Do not hand-edit generated `docs/*.html` legal pages; changes will be overwritten on the next build.
