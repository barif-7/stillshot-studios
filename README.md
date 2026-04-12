# StillShot Studios

Photography portfolio site built with Next.js.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

- Push this repo to GitHub.
- Import the GitHub repo in Vercel.
- Use the default Next.js build settings.
- If you want to run the Instagram fetch script locally, set the env vars below.

## Instagram media fetch

Set these env vars:

```bash
IG_USER_ID=
META_ACCESS_TOKEN=
```

Then run:

```bash
npm run fetch:instagram
```

Output:
- `data/instagram/manifest.json`
- `data/instagram/<post-id>/meta.json`
- `data/instagram/<post-id>/01.jpg`
- `data/instagram/<post-id>/02.jpg`
```
