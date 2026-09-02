# Node.js Golden Path

## Platform prerequisites

`PLATFORM_GITOPS_TOKEN` is a GitHub organization-level Actions secret. Its visibility must be restricted to selected repositories, and the token itself must not be copied into generated repositories, Terraform state, or Backstage form values.

Each newly scaffolded service repository must be added to the organization secret's selected-repository allowlist. For the first golden-path test, a platform operator may perform this repository-selection step manually.

The generated release workflow skips cleanly until Terraform has populated `AWS_REGION`, `AWS_RELEASE_ROLE_ARN`, and `ECR_REPOSITORY`. After the infrastructure PR has been applied and the organization secret allowlist has been updated, a platform operator can start the first release through `workflow_dispatch` or a subsequent push to `main`.
