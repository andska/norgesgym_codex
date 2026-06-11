# Norgesgym

Static Next.js site for Norgesgym.

## GitHub Pages deployment

This project is configured for GitHub Pages project deployment at `/norgesgym_codex`.

1. In GitHub, go to `Settings > Pages`.
2. Set `Source` to `GitHub Actions`.
3. Push to the `main` branch to deploy.

The workflow builds the static site with `npm run build`, uploads the `out` directory, and deploys it to GitHub Pages.

GitHub Actions sets `GITHUB_PAGES=true` during the build so assets are exported under `/norgesgym_codex`. Local `npm run dev` and `npm run build` use root-relative assets for local preview.

## Local development

Use `npm run dev` for local preview. The dev server writes to `.next-dev`, while production builds write to `.next`; this keeps CSS/Tailwind assets from breaking when `npm run build` is run while a dev server is open.
