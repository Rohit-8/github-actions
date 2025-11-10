# Testing

General guidance

- Why tests: tests give confidence and prevent regressions. Unit tests exercise small pieces of logic; integration tests exercise HTTP endpoints and interactions; end-to-end (E2E) tests simulate user flows.
- Typical tools: Jest (Node), Vitest (Vite/modern frontends), Mocha, Jasmine for JS. For browser-driven E2E: Playwright, Cypress.
- Writing tests: keep them small, deterministic, and fast. Use fixtures/mocks/stubs for external dependencies. Aim to test behavior, not implementation details.

How to run tests locally

- Backend (Jest): run `npm --workspace packages/backend test`.
- Frontend (Vitest): run `npm --workspace packages/frontend test`.
- To run all workspace tests from the root: run `npm run test` (configured to run across workspaces).

Triggering tests in GitHub (or Bitbucket)

- Add a workflow that runs on `push` and `pull_request` (see `.github/workflows/ci.yml`).
- Steps: checkout code, setup Node, install dependencies, run `npm --workspace packages/backend test` and `npm --workspace packages/frontend test`.

Troubleshooting

- Tests use Node environment and may need `jsdom` for DOM APIs. If tests fail with "ReferenceError: test is not defined" or DOM errors, ensure Vitest is run with `--environment jsdom --globals` or configure `vitest.config.js`.
- If a dependency is missing, test runners sometimes prompt to install it. Install devDependencies manually (e.g., `npm install -D jsdom`).
- If tests hang, run them with verbose flags or in CI non-watch mode (Vitest `run` not `watch`).

How we did it in this project

- Backend: Jest + Supertest. Simple unit/integration test for `/api/health` in `packages/backend/test/app.test.js`.
- Frontend: Vitest + Testing Library. Single component test in `packages/frontend/test/App.test.jsx`. Vitest is configured to use `jsdom` and `globals` in `vitest.config.js`.
- CI: `ci.yml` runs both backend and frontend tests on push/PR.
