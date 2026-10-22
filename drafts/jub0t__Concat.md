<!-- dark-draft: jub0t/Concat -->
<!-- draft-state: ready -->
# Upstream issue draft: jub0t/Concat

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/jub0t/Concat/issues/new
- **Stars:** 10520 · **Generated:** 2026-10-22T01:10:56.398Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-21
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-21. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/jub0t/Concat/actions/runs/39600340126 — dark (conclusion: `failure`), 2026-10-21 12:31 UTC
- Dark since: 2026-10-21 11:12 UTC (first run of the current streak)
- Job / step: `Engine tests and lints` → `Run cargo fmt --check`
- Likely cause: No VM guests are running outdated hypervisor (qemu) binaries on this host.

<details><summary>End of the job log</summary>

```
-        | "svg" | "svgz" => {
-            Some(MediaKind::Image)
-        }
+        | "svg" | "svgz" => Some(MediaKind::Image),
         _ => None,
     }
 }
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining Concat!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
