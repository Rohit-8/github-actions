# SonarQube / SonarCloud

General guidance

- SonarQube/SonarCloud provides static analysis for bugs, code smells, and security vulnerabilities and displays quality gates.
- SonarCloud is Sonar's hosted offering; SonarQube is self-hosted.

How to run scans

- SonarCloud: create an organization/project on sonarcloud.io, get a token, and add it as `SONAR_TOKEN` secret in GitHub.
- SonarQube (self-hosted): install server, create a token, and set `SONAR_HOST_URL` to your server URL and `SONAR_TOKEN` secret in GitHub.

Triggering Sonar in CI

- Add a workflow using `sonarsource/sonarcloud-github-action` or run `sonar-scanner` CLI with the token and host URL.

Troubleshooting

- 401/permission errors: check that token is valid, and the project exists on Sonar.
- Scanner can't find sources: ensure `sonar.sources` is set correctly or the scanner is run from repo root.

How we did it in this project

- We added `.github/workflows/sonar.yml` that runs Sonar action if `SONAR_TOKEN` and `SONAR_HOST_URL` are present in secrets. The action passes the token and host at runtime.
