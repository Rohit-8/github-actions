# Build

General guidance

- Builds produce optimized artifacts for production. For Node backends, build may be a noop or a transpile step (Babel, TypeScript). For frontends, bundlers like Vite/Rollup/Webpack produce static assets.
- Typical steps: install dependencies, run lint/tests, run the build command, deploy the output folder.

How to build locally

- Frontend (Vite): `npm --workspace packages/frontend build` — output goes to `dist/` by default.
- Backend: if using plain Node, there may be no build step. If using TypeScript, run `tsc` or `npm run build` for transpilation.

Triggering build in GitHub Actions

- Add a step in CI to run `npm --workspace packages/frontend build` and any backend build/transpile commands before packaging/deployment.

Troubleshooting

- Build fails with module errors: check Node version and package versions. Ensure `actions/setup-node` in workflow uses a matching Node version.
- Missing environment variables: some builds require env vars (e.g., API keys). Use GitHub Secrets for CI.

How we did it in this project

- Frontend has `npm --workspace packages/frontend build` implemented by Vite (see `packages/frontend/package.json`).
- Backend has no build step (plain Node). The root `build` script delegates to workspace builds.
