# 2key.app marketing site

Static marketing site for [www.2key.app](https://www.2key.app), published via GitHub Pages.

**Brand:** **2key** = *to get* the **license key**—software activation and subscription billing for vendors, not a “two keys” physical-key metaphor.

Product specifications and internal notes live outside the published folder and are **not** deployed to the live site.

## Repository layout

| Path | Purpose |
|------|---------|
| `docs/` | **Published** — GitHub Pages serves only this folder |
| `specs/` | Product specs (not published) |
| `specs/legal/` | **Source** for legal pages — edit `.md` files here |
| `scripts/build-legal.mjs` | Regenerates `docs/*.html` legal pages from `specs/legal/` |
| `internal/` | Wireframes, copy drafts, brand notes (not published) |

## GitHub Pages setup

Deployment is automated by [`.github/workflows/pages.yml`](.github/workflows/pages.yml) on every push to `main` (and via **Actions → Deploy GitHub Pages → Run workflow**).

1. Open **Settings → Pages → Build and deployment**.
2. Source: **GitHub Actions** (not “Deploy from a branch”).
3. After the first successful workflow run, the site is at [https://2keyapp.github.io/](https://2keyapp.github.io/) until the custom domain is active.

The workflow builds legal HTML from `specs/legal/` with `node scripts/build-legal.mjs`, then publishes only the `docs/` folder.

## Custom domain (www.2key.app)

`docs/CNAME` contains `www.2key.app`. After enabling Pages:

1. In **Settings → Pages → Custom domain**, enter `www.2key.app`.
2. At your DNS provider, add the records GitHub shows (typically a `CNAME` from `www` to `2keyapp.github.io`).
3. Wait for DNS and the TLS certificate; enable **Enforce HTTPS**.

## Local preview

From the repo root:

```bash
npx --yes serve docs
```

Then open the URL shown (usually `http://localhost:3000`). Or use VS Code Live Server with `docs/` as the root.

## Publish boundary

Only files under `docs/` are served. Paths such as `/specs/specs.md` or `/README.md` must **not** appear on the live site. If they do, confirm Pages is set to publish from `/docs`, not the repository root.

## Merchant signup and setup payment

The signup form is in the **Get started** section (`#signup`) on [`docs/index.html`](docs/index.html). Merchants enter business name and email, then pay the US$25 setup fee via Stripe or PayPal.

### Replace payment URLs

Edit [`docs/assets/js/signup.js`](docs/assets/js/signup.js):

| Constant | Replace with |
|----------|----------------|
| `STRIPE_SETUP_URL` | Stripe Dashboard → Payment Links → $25 one-time setup product |
| `PAYPAL_SETUP_URL` | PayPal hosted checkout / pay link for $25 |

Stripe supports `prefilled_email` and `client_reference_id` query parameters on Payment Links. PayPal parameter support varies by link type; verify after creating your link.

### Future full signup app

`https://signup.2key.app` may host the full merchant onboarding app later. Marketing CTAs currently scroll to `#signup` on the static site.

## Legal documents

1. Edit specs in [`specs/legal/`](specs/legal/) (and [`specs/legal/_shared.json`](specs/legal/_shared.json) for dates, contact, disclaimers).
2. Regenerate published pages:

```bash
node scripts/build-legal.mjs
```

See [`specs/legal/README.md`](specs/legal/README.md) for per-document frontmatter.

## Related

- Product spec: [specs/specs.md](specs/specs.md)
