<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: ready -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 90836 · **Generated:** 2026-11-17T18:39:49.297Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Security Audit" workflow failing on main since 2026-11-17
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Security Audit** workflow (`.github/workflows/security-audit.yml`) on `main` has been failing since 2026-11-17. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/44144145056 — dark (conclusion: `failure`), 2026-11-17 18:05 UTC
- Dark since: 2026-11-17 18:05 UTC (first run of the current streak)
- Job / step: `audit-lockfile` → `Audit package-lock.json`
- Likely cause: high GHSA-fc5q-39xc-vjpf picomatch: picomatch vulnerable to ReDoS through single-branch repeated extglobs (https://github.com/advisories/GHSA-fc5q-39xc-vjpf) — published 2026-10-19, grace ended 2026-10-26.

<details><summary>End of the job log</summary>

```
branch 'main' set up to track 'origin/main'.
b0517712725fbc19f2be21563633461851c26b56
Found in cache @ /opt/hostedtoolcache/node/24.22.2/x64
node: v24.22.2
npm: 11.19.1
yarn: 1.22.22
Production audit FAILED for package-lock.json: 1 blocking advisory/advisories.
##[error]high GHSA-fc5q-39xc-vjpf picomatch: picomatch vulnerable to ReDoS through single-branch repeated extglobs (https://github.com/advisories/GHSA-fc5q-39xc-vjpf) — published 2026-10-19, grace ended 2026-10-26.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
