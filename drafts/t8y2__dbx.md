<!-- dark-draft: t8y2/dbx -->
<!-- draft-state: ready -->
# Upstream issue draft: t8y2/dbx

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/t8y2/dbx/issues/new
- **Stars:** 27353 · **Generated:** 2026-10-20T12:54:49.577Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-20
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-20. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/t8y2/dbx/actions/runs/39422661420 — dark (conclusion: `failure`), 2026-10-20 12:29 UTC
- Dark since: 2026-10-20 06:40 UTC (first run of the current streak)
- Job / step: `frontend-test (2/2)` → `Run frontend test shard`
- Likely cause: AssertionError: Add a search result or localized keyword on the owning management entry; exclude only transient UI with a reason.: expected [ 'connection.httpTunnelProtocol' ] to deeply equal [] (apps/desktop/src/lib/settings/__tests__/settingsSearchCoverage.spec.ts:152)

<details><summary>End of the job log</summary>

```
    153|     });
    154|   }
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 956 passed (957)
      Tests  1 failed | 12074 passed (12075)
   Start at  12:31:11
   Duration  349.77s (transform 82.17s, setup 0ms, import 475.62s, tests 502.03s, environment 157.89s)
##[error]AssertionError: Add a search result or localized keyword on the owning management entry; exclude only transient UI with a reason.: expected [ 'connection.httpTunnelProtocol' ] to deeply equal []
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining dbx!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
