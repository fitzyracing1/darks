<!-- dark-draft: xerj-org/xerj -->
<!-- draft-state: ready -->
# Upstream issue draft: xerj-org/xerj

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xerj-org/xerj/issues/new
- **Stars:** 18918 · **Generated:** 2026-11-12T12:44:21.228Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- hub packs (`.github/workflows/hub-packs.yml`): [issue #2975](https://github.com/xerj-org/xerj/issues/2975) "bug: hub packs: every owner--repo pack fails "corpus index" with 0 records — corpus-hub builds xerj without the #1906 fix"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Release", "CI", "pack publish")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/42556641373 — dark (conclusion: `cancelled`), 2026-11-09 03:29 UTC
- Dark since: 2026-11-06 03:27 UTC (first run of the current streak)
- Job / step: `Build x86_64-apple-darwin`
- Likely cause: The configuration 'macos-14-arm64-us-default' is not supported

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/42529567939 — dark (conclusion: `failure`), 2026-11-08 22:18 UTC
- Dark since: 2026-11-07 06:22 UTC (first run of the current streak)
- Job / step: `Build + Test` → `Unit + integration tests`
- Likely cause: error: test failed, to rerun pass '-p xerj-autoindex --test field_report_surfaces'

<details><summary>End of the job log</summary>

```
thread 'homepage_prompt_defers_the_field_report_to_llms_txt' (68229) panicked at crates/xerj-autoindex/tests/field_report_surfaces.rs:145:5:
the homepage prompt a person reads must be the short llms.txt prompt
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
failures:
    homepage_prompt_defers_the_field_report_to_llms_txt
test result: FAILED. 3 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
error: test failed, to rerun pass `-p xerj-autoindex --test field_report_surfaces`
##[error]Process completed with exit code 101.
```

</details>

### pack publish (`.github/workflows/pack-publish.yml`)

- Latest run on `main`: https://github.com/xerj-org/xerj/actions/runs/42562030700 — dark (conclusion: `failure`), 2026-11-09 04:28 UTC
- Dark since: 2026-11-09 04:28 UTC (first run of the current streak)
- Job / step: `hubpack rust-vulns` → `Consumer end-to-end (pull, --def, one question)`
- Likely cause: estimate excludes: server-side indexing, embedding and merge time (autoindex cannot measure it without writing)

<details><summary>End of the job log</summary>

```
next: xerj code rust-vulns "<what you need>"
pack rust-vulns dc058bad 7262503 3 2916
built rust-vulns dc058bad: 7262503 bytes, 3 indices, 2916 definitions
signature verifies: /home/runner/work/_temp/pack-out/rust-vulns-dc058bad.hubpack.tar.zst
layout ok: 991 members
https://github.com/xerj-org/xerj/releases/tag/untagged-17d9af01f0130e8a6164
HTTP 500 (https://api.github.com/repos/xerj-org/xerj/releases/assets/726257115)
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xerj!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
