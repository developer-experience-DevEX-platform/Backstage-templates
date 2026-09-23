# Go REST API (Kubernetes)

## Platform prerequisites

`PLATFORM_GITOPS_TOKEN` is a GitHub organization-level Actions secret. Its visibility must be restricted to selected repositories, and the token itself must not be copied into generated repositories, Terraform state, or Backstage form values.

Each newly scaffolded service repository must be added to the organization secret's selected-repository allowlist. For the first golden-path test, a platform operator may perform this repository-selection step manually.

The first push to `main` always runs CI. Publish to ECR and staging GitOps run only when `ECR_REPOSITORY` exists, which is after the infrastructure PR is merged and applied.

Until then, Release shows CI green and the publish jobs skipped. That is expected. After apply, add the new repo to the `PLATFORM_GITOPS_TOKEN` allowlist, open the service repo **Actions → Release → Run workflow**, and start the first publish. Do not skip publish once `ECR_REPOSITORY` is set; missing AWS vars must still fail.
