<!-- dark-draft: koala73/worldmonitor -->
<!-- draft-state: resolved -->
# Upstream issue draft: koala73/worldmonitor

- **Status:** resolved — lit again (2026-11-02); nothing to file
- **Would be filed at:** https://github.com/koala73/worldmonitor/issues/new
- **Stars:** 89939 · **Generated:** 2026-11-01T18:34:58.241Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Test" workflow failing on main since 2026-11-01
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Test** workflow (`.github/workflows/test.yml`) on `main` has been failing since 2026-11-01. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/koala73/worldmonitor/actions/runs/41335666433 — dark (conclusion: `failure`), 2026-11-01 18:15 UTC
- Dark since: 2026-11-01 18:15 UTC (first run of the current streak)
- Job / step: `unit-shard (2)` → `Data tests without built output`
- Likely cause: desktop build env: src/ and shared/: no VITE_ property reads found — client env scan is empty

<details><summary>End of the job log</summary>

```
  ✔ never carries a YAML 1.1 boolean in place of a property name or enum value (69.071703ms)
  ✔ finds boolean names and enum values at any depth, and leaves boolean enums alone (0.776634ms)
✔ per-service OpenAPI JSON property names (70.229356ms)
▶ forecast field descriptions a client needs to read the numbers (#8867)
  ✔ says what paired_hit_rate is compared with (1.236291ms)
  ✔ keeps the simulation demotion threshold and adjustment ranges (0.819024ms)
✔ forecast field descriptions a client needs to read the numbers (#8867) (2.528897ms)
##[error]desktop build env: .github/workflows: no workflow files with tauri-apps/tauri-action steps found — discovery broken or workflow inventory empty
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining worldmonitor!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
