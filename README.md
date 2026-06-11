# Norgesgym

Static Next.js site for Norgesgym.

## GitHub Pages deployment

This project is configured for GitHub Pages project deployment at `/norgesgym_codex`.

1. In GitHub, go to `Settings > Pages`.
2. Set `Source` to `GitHub Actions`.
3. Push to the `main` branch to deploy.

The workflow builds the static site with `npm run build`, uploads the `out` directory, and deploys it to GitHub Pages.
