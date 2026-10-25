<!-- dark-draft: Gentleman-Programming/engram -->
<!-- draft-state: resolved -->
# Upstream issue draft: Gentleman-Programming/engram

- **Status:** resolved — lit again (2026-10-25); nothing to file
- **Would be filed at:** https://github.com/Gentleman-Programming/engram/issues/new
- **Stars:** 7588 · **Generated:** 2026-10-24T18:43:51.300Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-24. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/Gentleman-Programming/engram/actions/runs/40117626227 — dark (conclusion: `failure`), 2026-10-24 17:46 UTC
- Dark since: 2026-10-24 07:29 UTC (first run of the current streak)
- Job / step: `Go Vulnerability Check` → `Scan Linux production packages`
- Likely cause: remote.MutationTransport.PushMutations calls http.Header.Set

<details><summary>End of the job log</summary>

```
Vulnerability #1: GO-2026-6809
    Distrust compromised intermediate certificates in crypto/x509
  More info: https://pkg.go.dev/vuln/GO-2026-6809
  Standard library
    Found in: crypto/x509@go1.25.10
    Fixed in: crypto/x509@go1.26.10
    Example traces found:
##[error]      #1: plugin/pi/test/support/real-server/main.go:28:16: real.main calls io.Copy, which eventually calls x509.Certificate.Verify
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining engram!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
