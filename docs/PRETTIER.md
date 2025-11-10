# Prettier (Formatting)

General guidance

- Prettier enforces consistent code formatting. It is an opinionated formatter that reduces bikeshedding.
- Typical command: `prettier --write "**/*.{js,jsx,ts,tsx,json,md,css}"`.

How to run locally

- Run `npm run format` from root (runs prettier across the repo per `package.json`).

Triggering formatting in CI or on PRs

- Best practice: run `prettier --check` in CI to fail the job if formatting is off, and provide an auto-fix action or pre-commit hook to apply formatting.

Troubleshooting

- Different Prettier versions can create churn. Pin Prettier version in `package.json` and your dev environment.

How we did it in this project

- Added `.prettierrc` and a root `format` script that runs Prettier across the repo.
