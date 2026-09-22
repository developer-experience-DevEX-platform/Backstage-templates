# ${{ values.name }}

${{ values.description }}

Owner: `${{ values.owner }}`

This page is the TechDocs home for the service. GitHub still uses the
repository README. Add any other page as a `.md` file under `docs/`;
MkDocs includes it automatically. Keep `index.md` as the homepage.

## Local environment

Copy `.env.example` to `.env`. A pre-commit hook rejects `.env` files; `.env.example` is allowed.

- `PORT` (`3000`): same port the process listens on in Compose.
- `NODE_ENV` (`development`): production image sets `production`.
- `DATABASE_URL` (`postgres://app:app@localhost:5432/app`): host-side URL. Compose sets `postgres://app:app@postgres:5432/app` in the app container.
- `AWS_ENDPOINT_URL` (unset): set only for LocalStack. Leave unset in production.

`npm run dev` and Compose use these names. The process already defaults `PORT` to `3000` if `.env` is missing.

## Docker Compose

Postgres is the local database. Integration tests still start their own
containers with Testcontainers. Do not change `.github/workflows/ci.yml` to
add a dependency.

```bash
# Database only, then run the app on the host
docker compose up postgres
cp .env.example .env
npm install
npm run dev

# App image and Postgres together
docker compose up --build
```

Health check: `curl http://localhost:3000/health`

## Verify

`npm run verify` runs the same local checks as Node.js CI, in the same order:
format, lint, typecheck, then unit tests.

```bash
npm run verify
npm test
npm run test:integration
```

The first GitHub Release run after scaffold only proves CI. Publish waits until
`ECR_REPOSITORY` exists. Then use **Actions → Release → Run workflow**.

## Platform

- Service repository: https://github.com/developer-experience-DevEX-platform/${{ values.name }}
- Staging GitOps: https://github.com/developer-experience-DevEX-platform/platform-gitops/tree/main/environments/staging/${{ values.name }}
- Production GitOps: https://github.com/developer-experience-DevEX-platform/platform-gitops/tree/main/environments/production/${{ values.name }}
- Infrastructure stack: https://github.com/developer-experience-DevEX-platform/platform-infrastructure/tree/main/services/${{ values.name }}
