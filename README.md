# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```shell
npm install
```

## Local development

```shell
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```shell
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```shell
npm run deploy
```

This builds the site and publishes the `build` directory to the `gh-pages` branch. GitHub credentials must be configured before deployment.

## Adding a page

- Concept explainers go in `docs/concepts/`, device and deployment guides in `docs/deployment/`. Use lowercase, hyphenated file names, since they become the page URL.
- Start each page with frontmatter (`title`, `description`, `sidebar_position`).
- Put images in `static/img/<page-name>/` and reference them as `![Descriptive alt text](/img/<page-name>/file.webp)`. Don't link to `raw.githubusercontent.com`.
- Prefer WebP for screenshots, and keep them no wider than 1600px.
- If you rename or move a page, add a redirect in `docusaurus.config.js` so old links keep working.
