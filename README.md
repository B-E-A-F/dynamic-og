# Dynamic OG Image Playground

Reference-only project for generating Open Graph (OG) images programmatically across future projects.

## Purpose

Central scratchpad to:

- Prototype OG layouts (HTML/CSS/JS)
- Capture consistent screenshots with Playwright
- Manually upload rendered images to a CDN
- Reuse final image URLs in other repositories

Not intended as a publishable package or service.

## How It Works

1. Write a minimal HTML template (focus on body contents).
2. Run the Playwright capture script to screenshot the rendered body.
3. Review outputs (PNG/WebP).
4. Manually upload chosen assets to your CDN.
5. Reference the hosted URLs in target project meta tags.

## Tech

- Node.js + Playwright
- Simple build/watch (optional)
- No server component

## Example Meta Tag (Usage in Other Projects)

```html
<meta property="og:image" content="https://cdn.example.com/og/my-latest.png" />
<meta name="twitter:image" content="https://cdn.example.com/og/my-latest.png" />
```

## Workflow

```bash
# Install deps
npm install

# Dev (adjust template, styles)
npm run dev   # if configured (e.g. live server / build)

# Generate screenshots
npm run capture   # wraps a Playwright script
```

## Conventions

- Viewport: 1200x630 (standard OG)
- Prefer system fonts or self-hosted for determinism
- Avoid external network dependencies during render

## CDN Upload

Manually drag selected images to CDN bucket (e.g. R2, S3, Cloudflare Images) and note final public URL.

## Notes

- No automation for upload (intentional)
- Keep repo uncluttered; prune stale outputs
- Treat as disposable experimentation space

## License

Unlicensed reference sandbox (internal use).

Done.
