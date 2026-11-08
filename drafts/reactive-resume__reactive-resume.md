<!-- dark-draft: reactive-resume/reactive-resume -->
<!-- draft-state: ready -->
# Upstream issue draft: reactive-resume/reactive-resume

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/reactive-resume/reactive-resume/issues/new
- **Stars:** 45474 · **Generated:** 2026-11-08T12:38:31.910Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Docker publish and deploy" workflow failing on main since 2026-11-08
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Docker publish and deploy** workflow (`.github/workflows/docker-publish.yml`) on `main` has been failing since 2026-11-08. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/reactive-resume/reactive-resume/actions/runs/42471687376 — dark (conclusion: `failure`), 2026-11-08 10:30 UTC
- Dark since: 2026-11-08 10:30 UTC (first run of the current streak)
- Job / step: `Publish images and deploy` → `Install Cosign`
- Likely cause: curl: (22) The requested URL returned error: 504

<details><summary>End of the job log</summary>

```
##[start-action display=Run #!/bin/bash;id=__sigstore_cosign-installer.__run]
INFO: Downloading bootstrap version 'v3.0.6' of cosign to verify version to be installed...
      https://github.com/sigstore/cosign/releases/download/v3.0.6/cosign-linux-amd64
curl: (22) The requested URL returned error: 504
curl: (22) The requested URL returned error: 504
curl: (22) The requested URL returned error: 504
curl: (56) Connection died, tried 5 times before giving up
##[error]Process completed with exit code 56.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining reactive-resume!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
