<!-- dark-draft: activepieces/activepieces -->
<!-- draft-state: ready -->
# Upstream issue draft: activepieces/activepieces

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/activepieces/activepieces/issues/new
- **Stars:** 25456 · **Generated:** 2026-11-10T06:45:56.660Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 3 workflows dark on main ("Chat Evals", "Benchmark", "Continuous Delivery — Staging")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Chat Evals (`.github/workflows/agent-evals.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/42767089500 — dark (conclusion: `failure`), 2026-11-10 06:13 UTC
- Dark since: 2026-10-13 06:26 UTC (first run of the current streak)
- Job / step: `Live judge gate` → `Run live chat evals (scope=regression)`
- Likely cause: Error: Hook timed out in 540000ms. (packages/server/worker/test/lib/agent-eval/agent-eval.test.ts:20)

<details><summary>End of the job log</summary>

```
     21|         const fixtures = evalFixtures.load().filter((fixture) => SCOPE…
     22|         const [fixtureResults, agreement] = await Promise.all([
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
 Test Files  1 failed | 12 passed (13)
      Tests  89 passed | 1 skipped (90)
   Start at  06:19:02
   Duration  546.87s (tests 97%, import 2%, transform 1%)
##[error]Error: Hook timed out in 540000ms.
```

</details>

### Benchmark (`.github/workflows/benchmark.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/42747110700 — dark (conclusion: `failure`), 2026-11-10 03:05 UTC
- Dark since: 2026-10-30 03:06 UTC (first run of the current streak)
- Job / step: `benchmark (shared, 1, 28, 0.5, 1G, 1, 768, false, 28)` → `Detect regression against trailing 14 runs (scheduled runs only)`
- Likely cause: </div><!-- /.error-footer -->

<details><summary>End of the job log</summary>

```
    </p>
    <script>(function(){function d(){var b=a.getElementById("cf-footer-item-ip"),c=a.getElementById("cf-footer-ip-reveal");b&&"classList"in b&&(b.classList.remove("hidden"),c.addEventListener("click",function(){c.classL…
  </div><!-- /.error-footer -->
    </div>
</div>
</body>
</html>
##[error]Process completed with exit code 1.
```

</details>

### Continuous Delivery — Staging (`.github/workflows/continuous-delivery-stg.yml`)

- Latest run on `main`: https://github.com/activepieces/activepieces/actions/runs/42767595597 — dark (conclusion: `failure`), 2026-11-10 06:18 UTC
- Dark since: 2026-11-09 14:53 UTC (first run of the current streak)
- Job / step: `deploy-staging-app` → `Deploy to staging`
- Likely cause: ERROR (RuntimeError): Exception while executing on host 46.224.204.156: Could not find secret AP_OPENROUTER_PROVISION_KEY

<details><summary>End of the job log</summary>

```
Agent pid 3043140
Identity added: /***/.ssh/id_rsa (***@vmi1434038)
Pull app image...
  Finished all in 0.0 seconds
  ERROR (RuntimeError): Exception while executing on host 46.224.204.156: Could not find secret AP_OPENROUTER_PROVISION_KEY
exit
Connection to *** closed.
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining activepieces!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
