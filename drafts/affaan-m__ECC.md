<!-- dark-draft: affaan-m/ECC -->
<!-- draft-state: ready -->
# Upstream issue draft: affaan-m/ECC

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/affaan-m/ECC/issues/new
- **Stars:** 284304 · **Generated:** 2026-10-20T06:59:15.323Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-10-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-10-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/affaan-m/ECC/actions/runs/39365432884 — dark (conclusion: `failure`), 2026-10-20 03:39 UTC
- Dark since: 2026-10-19 22:08 UTC (first run of the current streak)
- Job / step: `Test (windows-latest, Node 22.x, yarn)` → `Run tests`
- Likely cause: exited with status 1:   ✗ readStdinJson overflow drain still exits when the writer never closes stdin (tests/lib/utils.test.js)

<details><summary>End of the job log</summary>

```
  errno: -4095,
  code: 'EOF',
  syscall: 'write'
}
Node.js v22.23.3
[readStdinJson] stdin exceeded 100 bytes; input truncated and treated as empty
✗ lib/utils.test.js exited with status 1
##[error]exited with status 1:   ✗ readStdinJson overflow drain still exits when the writer never closes stdin
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining ECC!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
