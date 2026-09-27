# React Website (S3 + CloudFront)

## Platform prerequisites

The first push to `main` always runs Frontend CI. Publish to S3 and
CloudFront runs only when `STATIC_SITE_BUCKET` exists, which is after
the infrastructure PR is merged and applied.

Until then, Release shows CI green and the publish jobs skipped. That is
expected. After apply, open the website repo **Actions → Release → Run
workflow** if you need to publish the first build. Do not skip publish
once `STATIC_SITE_BUCKET` is set; missing AWS vars must still fail.

There is no Kubernetes, GitOps, or Dockerfile on this path. Teams add
browser tests in their own caller if they want them.
