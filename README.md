# MERN GitHub Actions Example

This repository is a minimal MERN monorepo designed to demonstrate GitHub Actions for build, test, lint, coverage and SonarQube scans.

Structure
- packages/backend: Express API (simple health endpoint)
- packages/frontend: Vite + React minimal app


Quick start (locally)

1. Install dependencies from workspace root:

   ```powershell
   npm install
   ```

2. Run backend tests with coverage:

   ```powershell
   npm --workspace packages/backend test
   ```

3. Run frontend tests:

   ```powershell
   npm --workspace packages/frontend test
   ```

4. Run both (root scripts):

   ```powershell
   npm run lint
   npm run format
   npm run build
   ```

CI & Workflows

- `.github/workflows/ci.yml`: Installs dependencies, runs lint, tests, and uploads coverage artifacts.
- `.github/workflows/sonar.yml`: Performs SonarQube/SonarCloud analysis. Requires repository secrets `SONAR_TOKEN` and `SONAR_HOST_URL` to be set in GitHub Settings > Secrets.
- `.github/workflows/sonar.yml`: Performs SonarQube/SonarCloud analysis. For SonarCloud set `SONAR_TOKEN` and `SONAR_ORGANIZATION` (example: `rohit-8`) in GitHub Settings > Secrets. For self-hosted SonarQube set `SONAR_TOKEN` and `SONAR_HOST_URL`.

Pushing and enabling GitHub Actions

1. Create a new GitHub repository and push this project (from the workspace root):

   ```powershell
   git init
   git add .
   git commit -m "Initial commit: MERN GH Actions example"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. In GitHub repository Settings > Secrets, add `SONAR_TOKEN` and `SONAR_HOST_URL` if you plan to run Sonar scans.

3. After pushing, Actions will run automatically on `main` for the provided workflows.

