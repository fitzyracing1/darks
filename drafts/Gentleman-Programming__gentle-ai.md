<!-- dark-draft: Gentleman-Programming/gentle-ai -->
<!-- draft-state: ready -->
# Upstream issue draft: Gentleman-Programming/gentle-ai

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/Gentleman-Programming/gentle-ai/issues/new
- **Stars:** 7965 · **Generated:** 2026-10-24T01:10:25.058Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("Windows Full Suite", "Gentle Shell macOS qualification")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Windows Full Suite (`.github/workflows/windows-full-suite.yml`)

- Latest run on `main`: https://github.com/Gentleman-Programming/gentle-ai/actions/runs/40036442600 — dark (conclusion: `failure`), 2026-10-23 22:53 UTC
- Dark since: 2026-10-21 18:46 UTC (first run of the current streak)
- Job / step: `Windows Full Suite (rest)` → `Run shard`
- Likely cause: FAIL

<details><summary>End of the job log</summary>

```
ok  	github.com/gentleman-programming/gentle-ai/v4/internal/update/upgrade	8.153s
ok  	github.com/gentleman-programming/gentle-ai/v4/internal/verify	0.032s
ok  	github.com/gentleman-programming/gentle-ai/v4/internal/versions	0.036s
?   	github.com/gentleman-programming/gentle-ai/v4/scripts	[no test files]
ok  	github.com/gentleman-programming/gentle-ai/v4/scripts/crosslane	2.053s
?   	github.com/gentleman-programming/gentle-ai/v4/scripts/gen-sdd-agent-digests	[no test files]
FAIL
##[error]Process completed with exit code 1.
```

</details>

### Gentle Shell macOS qualification (`.github/workflows/shell-macos-qualification.yml`)

- Latest run on `main`: https://github.com/Gentleman-Programming/gentle-ai/actions/runs/40036442779 — dark (conclusion: `failure`), 2026-10-23 22:53 UTC
- Dark since: 2026-10-22 06:51 UTC (first run of the current streak)
- Job / step: `macOS installation and recovery qualification` → `Qualify native Separate, Shared and recovery`
- Likely cause: }

<details><summary>End of the job log</summary>

```
      "gentleShell": "1.3.0",
      "node": "v24.18.0",
      "pi": "1.3.0"
    }
  },
  "sourceSHA": "3489b6cdddf7f3593f177aa32354369395b457ed"
}
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining gentle-ai!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
