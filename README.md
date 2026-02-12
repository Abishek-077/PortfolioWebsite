# PortfolioWebsite

This repository contains a Next.js portfolio site.

## Local Development

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`.

## Production Build Check

```bash
npm run lint
npm run build
npm run start
```

## Deploy (Vercel)

1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Keep default build settings:
   - Framework: `Next.js`
   - Build Command: `npm run build`
   - Output: `.next`
4. Deploy.

No environment variables are required for the current version.
