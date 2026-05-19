# Google Search Console setup

Site: **https://mrityunjayaabsolutesolutions.com**

## What we added in code

- **Sitemap** — auto-generated at `/sitemap-index.xml` (linked from `robots.txt`)
- **robots.txt** — allows crawlers and points to the sitemap
- **Organization schema** (JSON-LD) — helps Google understand your business
- **Verification meta tag** — optional, via `PUBLIC_GOOGLE_SITE_VERIFICATION` in `.env`

---

## Step 1 — Create Search Console property

1. Open [Google Search Console](https://search.google.com/search-console)
2. Sign in with a Google account you use for the business
3. Click **Add property**
4. Choose **URL prefix** and enter:
   ```
   https://mrityunjayaabsolutesolutions.com
   ```
5. Click **Continue**

---

## Step 2 — Verify ownership (pick one method)

### Option A — HTML meta tag (recommended, matches this project)

1. In Search Console, choose **HTML tag**
2. Copy only the **content** value, e.g. if the tag is:
   ```html
   <meta name="google-site-verification" content="AbCdEf123..." />
   ```
   copy `AbCdEf123...`
3. On your machine, in the project folder:
   ```bash
   cp .env.example .env
   ```
   Add to `.env`:
   ```
   PUBLIC_GOOGLE_SITE_VERIFICATION=AbCdEf123...
   ```
4. For production, add the same name/value in GitHub:
   **Settings → Environments → Forms → Secrets**  
   (or Repository secrets) as `PUBLIC_GOOGLE_SITE_VERIFICATION`
5. Push to `main` and wait for the deploy workflow to finish
6. In Search Console, click **Verify**

### Option B — DNS TXT record (no code deploy)

1. Choose **Domain name provider** in Search Console
2. Add the TXT record GoDaddy shows (host `@` or as instructed)
3. Wait 5–30 minutes, then click **Verify**

### Option C — HTML file upload

1. Download the file Google provides (e.g. `google123.html`)
2. Place it in `public/` in this repo
3. Push and deploy, then verify

---

## Step 3 — Submit sitemap

After verification:

1. Search Console → **Sitemaps** (left menu)
2. Enter: `sitemap-index.xml`
3. Click **Submit**

Full URL: `https://mrityunjayaabsolutesolutions.com/sitemap-index.xml`

Confirm it opens in a browser before submitting.

---

## Step 4 — Request indexing (homepage)

1. Top search bar: paste `https://mrityunjayaabsolutesolutions.com`
2. Click **Request indexing** (if offered)
3. Repeat later for important sections if you add separate pages

Indexing can take days to weeks for a new domain. That is normal.

---

## Step 5 — Ongoing checks (monthly)

| Report | Why |
|--------|-----|
| **Pages** | Indexed vs not indexed |
| **Performance** | Queries and clicks from Google Search |
| **Core Web Vitals** | Speed / UX signals |
| **HTTPS** | Should show no issues |

---

## Deploy checklist

```bash
git add astro.config.mjs package.json package-lock.json src/layouts/Layout.astro .env.example docs/GOOGLE_SEARCH_CONSOLE.md
git commit -m "Add sitemap and Google Search Console verification support"
git push origin main
```

After deploy, test:

- https://mrityunjayaabsolutesolutions.com/robots.txt
- https://mrityunjayaabsolutesolutions.com/sitemap-index.xml

---

## Optional next steps (later)

- [Google Business Profile](https://business.google.com) for local visibility
- Blog or case-study pages (more URLs in sitemap)
- Bing Webmaster Tools (similar process)
