<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11395 · **Generated:** 2026-11-05T18:40:12.982Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "FreeBSD")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/42081150985 — dark (conclusion: `cancelled`), 2026-11-05 18:07 UTC
- Dark since: 2026-11-01 09:55 UTC (first run of the current streak)
- Likely cause: run cancelled

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/41967376982 — dark (conclusion: `failure`), 2026-11-05 04:22 UTC
- Dark since: 2026-11-05 04:22 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 x86_64 (build + test)` → `Build and test`
- Likely cause: error: test failed, to rerun pass '-p vectorcraft-engine --lib'

<details><summary>End of the job log</summary>

```
assertion `left == right` failed: the vowel sign is drawn first, in Ka's cluster (Noto Sans Devanagari or Matratest Sans)
  left: [(545, 0), (56, 0)]
 right: [(32, 0), (56, 0)]
failures:
    tests::textedit::the_fallback_glyph_of_a_consonant_after_its_vowel_sign_is_reported
test result: FAILED. 4246 passed; 1 failed; 2 ignored; 0 measured; 0 filtered out; finished in 53.44s
error: test failed, to rerun pass `-p vectorcraft-engine --lib`
##[error]Process completed with exit code 101.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
