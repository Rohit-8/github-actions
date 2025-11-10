# Code Coverage

General guidance

- Coverage tools measure which lines/branches of code are exercised by tests. Common tools: istanbul/nyc (Node), c8, Jest built-in coverage, vitest coverage.
- Common reporters: text, lcov (for CI and tools integration), HTML (for local inspection).

How to collect coverage locally

- Backend (Jest): Jest has built-in coverage: `jest --coverage`.
- Frontend (Vitest): use `vitest --coverage` or wrap with `c8` for compatibility: `c8 vitest run --coverage` or use `c8 vitest run` with vitest configured.

Triggering coverage in CI

- Run tests with coverage flags and persist the `coverage/` folders as build artifacts. For GitHub Actions, use `actions/upload-artifact` to upload coverage.
- Use `lcov.info` and integrate with tools (Coveralls, Codecov) to display coverage reports and PR comments.

Troubleshooting

- Missing coverage provider: some test runners expect a coverage provider package (Vitest tries to auto-install `@vitest/coverage-c8`). If auto-install fails, install a compatible provider or use `c8` manually.
- Coverage not counting: ensure the code is instrumented (the chosen provider or runner supports your setup). For transpiled code (TypeScript or Babel), ensure source maps are correct.

How we did it in this project

- Backend: `jest --coverage` (configured via backend package `test` script) produces `packages/backend/coverage`.
- Frontend: we used `c8` as a wrapper for Vitest to generate `lcov` and HTML reports. The script `npm --workspace packages/frontend run test:coverage` generates `packages/frontend/coverage/lcov.info` and an HTML report. CI uploads both coverage folders as artifacts.
