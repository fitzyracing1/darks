<!-- dark-draft: l0ng-ai/openidea -->
<!-- draft-state: ready -->
# Upstream issue draft: l0ng-ai/openidea

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/l0ng-ai/openidea/issues/new
- **Stars:** 8911 · **Generated:** 2026-11-14T00:53:00.635Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Language smoke")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/43526389882 — dark (conclusion: `failure`), 2026-11-13 23:20 UTC
- Dark since: 2026-11-10 13:06 UTC (first run of the current streak)
- Job / step: `Plugins (SDK, official, fixtures)` → `Format, lint (host and wasm) and test each crate`
- Likely cause: _ => Err(Error::NotFound(id.into())),

<details><summary>End of the job log</summary>

```
-                )
-                .map(|()| None)
+                host::set_decorations(path, "fixture", &[item("typo", "typo message"), item("weak", "weak message")])
+                    .map(|()| None)
             }
             _ => Err(Error::NotFound(id.into())),
         }
##[error]Process completed with exit code 1.
```

</details>

### Language smoke (`.github/workflows/language-smoke.yml`)

- Latest run on `main`: https://github.com/l0ng-ai/openidea/actions/runs/43526389783 — dark (conclusion: `failure`), 2026-11-13 23:20 UTC
- Dark since: 2026-11-13 00:14 UTC (first run of the current streak)
- Job / step: `Language smoke (php)` → `Run pnpm smoke smoke/debug.test.ts -t "^php$"`
- Likely cause: Error: timed out waiting for Step Over (smoke/debug.test.ts:268)

<details><summary>End of the job log</summary>

```
   Duration  73.78s (tests 95%, transform 3%, environment 1%, import 1%)
    268|     if (Date.now() > end) throw new Error(`timed out waiting for ${wha…
       |                                 ^
    269|     await new Promise((r) => setTimeout(r, 200));
    270|   }
 ❯ smoke smoke/debug.test.ts:495:5
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
##[error]Error: timed out waiting for Step Over
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining openidea!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
