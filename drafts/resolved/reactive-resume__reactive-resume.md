<!-- dark-draft: reactive-resume/reactive-resume -->
<!-- draft-state: resolved -->
# Upstream issue draft: reactive-resume/reactive-resume

- **Status:** resolved — lit again (2026-10-20); nothing to file
- **Would be filed at:** https://github.com/reactive-resume/reactive-resume/issues/new
- **Stars:** 44574 · **Generated:** 2026-10-20T06:59:15.323Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Publish Docker Image", "E2E Tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Publish Docker Image (`.github/workflows/docker-build.yml`)

- Latest run on `main`: https://github.com/reactive-resume/reactive-resume/actions/runs/39285069730 — dark (conclusion: `failure`), 2026-10-19 16:23 UTC
- Dark since: 2026-10-19 16:23 UTC (first run of the current streak)
- Job / step: `mobile-update` → `Typecheck mobile app`
- Likely cause: Property 'deleteApiKey' does not exist on type 'InferAPI<Prettify<{ readonly ok: StrictEndpoint<"/ok", { method: "GET"; metadata: { openapi: { description: string; responses: { "200": { description: string; content: { "application/json": { 

<details><summary>End of the job log</summary>

```
+ react-dom 19.3.0
+ turbo 2.11.9
+ typescript 7.0.2
+ vitest 5.0.5
+ wrangler 4.151.1
Done in 1.6s using pnpm v12.14.0
$ tsgo --noEmit
##[error]../../packages/api/src/context.ts(59,33): error TS2339: Property 'verifyApiKey' does not exist on type 'InferAPI<Prettify<{ readonly ok: StrictEndpoint<"/ok", { method: "GET"; metadata: { openapi: { description…
```

</details>

### E2E Tests (`.github/workflows/e2e.yml`)

- Latest run on `main`: https://github.com/reactive-resume/reactive-resume/actions/runs/39285069760 — dark (conclusion: `failure`), 2026-10-19 16:23 UTC
- Dark since: 2026-10-19 16:23 UTC (first run of the current streak)
- Job / step: `e2e` → `Typecheck Affected Packages`
- Likely cause: command (/home/runner/_work/reactive-resume/reactive-resume/packages/auth) /home/runner/setup-pnpm/node_modules/.bin/bin/pnpm run typecheck exited (1)

<details><summary>End of the job log</summary>

```
cache miss, executing 51c41abdba864f30
$ tsgo --noEmit
cache miss, executing dba8fee6304b478c
$ tsgo --noEmit
@reactive-resume/auth:typecheck
cache miss, executing 78579d4294b56b90
$ tsgo --noEmit
##[error]src/config.ts(50,78): error TS2339: Property 'getJwks' does not exist on type 'InferAPI<Prettify<{ readonly ok: StrictEndpoint<"/ok", { method: "GET"; metadata: { openapi: { description: string; responses: { "2…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining reactive-resume!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
