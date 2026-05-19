# GitHub Pages URLs for this repo

Repo name: **`website`** (not `mrityunjayaabsolutesolutions.github.io`)

## Where the site actually lives

| URL | Works? |
|-----|--------|
| `https://mrityunjayaabsolutesolutions.github.io/` | **No** — root is only for a repo named `mrityunjayaabsolutesolutions.github.io` |
| `https://mrityunjayaabsolutesolutions.github.io/website/` | **Yes** — default project Pages URL (after deploy) |
| `https://mrityunjayaabsolutesolutions.com` | **Yes** — after DNS + custom domain + successful deploy |

## Why root `github.io` is empty

GitHub uses two models:

1. **User/org site** — repository must be named exactly `USERNAME.github.io` → serves at `https://USERNAME.github.io/`
2. **Project site** — any other repo (e.g. `website`) → serves at `https://USERNAME.github.io/REPO_NAME/`

Your repo is a **project site**, so the path includes `/website/`.

## To use root `github.io` without `/website/`

Create a **second** repository named:

`mrityunjayaabsolutesolutions.github.io`

and put the same site code there (or make it the only deploy target).

## Deploy checklist

1. `.github/workflows/deploy.yml` exists in this repo (required)
2. **Settings → Pages → Source:** GitHub Actions
3. Push to `main` → **Actions** tab → green deploy
4. Open the URL shown under **Settings → Pages**
