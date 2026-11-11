<!-- dark-draft: ruvnet/ruflo -->
<!-- draft-state: resolved -->
# Upstream issue draft: ruvnet/ruflo

- **Status:** resolved — lit again (2026-11-11); nothing to file
- **Would be filed at:** https://github.com/ruvnet/ruflo/issues/new
- **Stars:** 81436 · **Generated:** 2026-11-11T00:55:00.458Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "metaharness-ci" workflow failing on main since 2026-11-10
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **metaharness-ci** workflow (`.github/workflows/metaharness-ci.yml`) on `main` has been failing since 2026-11-10. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/ruvnet/ruflo/actions/runs/42913003390 — dark (conclusion: `failure`), 2026-11-10 22:16 UTC
- Dark since: 2026-11-10 22:14 UTC (first run of the current streak)
- Job / step: `clean-install` → `Pin declaration contract (fails on undeclared / peer-only / stale)`
- Likely cause: bump MH_DARWIN_PIN if darwin moved, and the *_PIN_VERSION constants in plugins/ruflo-metaharness/scripts/), then re-run.

<details><summary>End of the job log</summary>

```
| MH_DARWIN_PIN (distill-oracle.ts) | =0.13.0 (vs ~0.13.0) | — | — | in-range |
| METAHARNESS_PIN_VERSION (plugins/ruflo-metaharness/scripts/_harness.mjs) | ~0.4.20 (vs ^0.4.20) | plugin | — | covers |
| DARWIN_PIN_VERSION (plugins/ruflo-metaharness/scripts/_darwin.mjs) | ~0.13.0 (vs ~0.13.0) | plugin | — | covers |
| REDBLUE_PIN_VERSION (plugins/ruflo-metaharness/scripts/_redblue.mjs) | ~0.1.4 | plugin | 0.1.7 | current |
⚠ **Pin drift detected.** A metaharness pin is stale, undeclared, declared peer-only, or a plugin helper pin no longer covers it (or is not a `~X.Y.Z` range).
Fix the declaration in v3/@claude-flow/cli/package.json (installable pins belong in optionalDependencies;
bump MH_DARWIN_PIN if darwin moved, and the *_PIN_VERSION constants in plugins/ruflo-metaharness/scripts/), then re-run.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining ruflo!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
