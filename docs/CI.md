# Continuous Integration (CI)

General guidance

- CI runs automated checks on each commit/PR: lint, tests, coverage, security scans, build.
- Choose a CI provider: GitHub Actions, Bitbucket Pipelines, GitLab CI, CircleCI, etc. Use configuration files in the repo to define steps.

Common CI steps

1. Checkout code
2. Setup runtime (Node version)
3. Install dependencies
4. Run linting (fail fast)
5. Run tests (unit/integration)
6. Collect and upload coverage
7. Run static analysis (Sonar, security scanners)
8. Build artifacts and deploy if needed

Triggering CI

- For GitHub Actions: add workflows under `.github/workflows/` and they run on configured events (push,pull_request).

Troubleshooting

- Failures in CI often come from missing environment variables, inconsistent Node versions, or caching issues. Reproduce failing CI steps locally with the same Node version and environment.
- Use `actions/upload-artifact` to persist logs or reports from the job for debugging.

How we did it in this project

- `ci.yml` runs on push and PR to `main`. It checks out the code, sets Node 18, installs dependencies, runs lint (strict), runs backend tests (Jest), runs frontend tests with coverage (Vitest + c8), and uploads coverage artifacts.
- `sonar.yml` will run Sonar analysis when `SONAR_TOKEN` is present as a secret.
