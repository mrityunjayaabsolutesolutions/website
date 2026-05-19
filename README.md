# Mrityunjaya Absolute Solutions — Website

Lightweight marketing site for [mrityunjayaabsolutesolutions.com](https://mrityunjayaabsolutesolutions.com), built with **Astro** and **Tailwind CSS**, deployed to **GitHub Pages**.

## Local development

Run commands from **this repo root** (`website/`), not the parent folder:

```bash
cd website
npm install
cp .env.example .env   # optional: contact form
npm run dev
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321) (or the URL printed in the terminal).

**If the page does not load:**

```bash
rm -rf node_modules .astro dist
npm ci
npm run dev
```

Check nothing else is using port 4321. Use Node.js **22.12+** (`node -v`).

## Contact form (optional)

1. Sign up at [web3forms.com](https://web3forms.com) (free tier).
2. Copy your access key into `.env`:

   ```
   PUBLIC_WEB3FORMS_ACCESS_KEY=your_key
   ```

3. Restart the dev server or rebuild.

Without a key, the contact section shows a direct **mailto** link.

## Customize content

Edit `src/data/site.ts` for company name, tagline, services, email, and phone.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment**: Source = **GitHub Actions**.
3. (Optional) **Settings → Secrets → Actions**: add `PUBLIC_WEB3FORMS_ACCESS_KEY` for the contact form in production.
4. Push to `main` — the workflow builds and deploys automatically.

## Troubleshooting DNS / Pages errors

See **[docs/DNS_AND_DEPLOY.md](docs/DNS_AND_DEPLOY.md)** — includes fixing wrong A records and GoDaddy `www` conflicts.

## Logo

See **[docs/LOGO_PROMPT.md](docs/LOGO_PROMPT.md)** for AI image prompts and brand colors. Save output as `public/logo.svg`.

## Connect GoDaddy domain

In **GoDaddy DNS** for `mrityunjayaabsolutesolutions.com`:

| Type  | Name | Value                    |
|-------|------|--------------------------|
| A     | @    | 185.199.108.153          |
| A     | @    | 185.199.109.153          |
| A     | @    | 185.199.110.153          |
| A     | @    | 185.199.111.153          |
| CNAME | www  | `<your-username>.github.io` |

In the GitHub repo: **Settings → Pages → Custom domain** → enter `mrityunjayaabsolutesolutions.com`.

`public/CNAME` is included for GitHub Pages. Enable **Enforce HTTPS** after DNS propagates.

## Scripts

| Command        | Action              |
|----------------|---------------------|
| `npm run dev`  | Start dev server    |
| `npm run build`| Production build    |
| `npm run preview` | Preview build    |
