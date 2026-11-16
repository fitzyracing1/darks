<!-- dark-draft: beenuar/AiSOC -->
<!-- draft-state: ready -->
# Upstream issue draft: beenuar/AiSOC

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/beenuar/AiSOC/issues/new
- **Stars:** 7952 · **Generated:** 2026-11-16T18:39:14.787Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Suggested title

<!-- BEGIN TITLE -->
CI: 6 workflows dark on main ("Publish Images", "Grading integrity", "Chaos", +3 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Publish Images (`.github/workflows/publish-images.yml`)

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/43927747149 — dark (conclusion: `cancelled`), 2026-11-16 18:20 UTC
- Dark since: 2026-11-16 12:03 UTC (first run of the current streak)
- Likely cause: run cancelled

### Grading integrity (`.github/workflows/grading-integrity.yml`)

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/43877431840 — dark (conclusion: `failure`), 2026-11-16 13:36 UTC
- Dark since: 2026-11-16 12:10 UTC (first run of the current streak)
- Job / step: `No run on main ended cancelled` → `Ask the Actions API what actually ran`
- Likely cause: the cancellation is correct, record it in that gate's EXCEPTIONS with the

<details><summary>End of the job log</summary>

```
Find out why it was cancelled. If a concurrency group did it,
scripts/check_workflow_concurrency.py explains the shape and the fix. If
the cancellation is correct, record it in that gate's EXCEPTIONS with the
reason and what is lost.
Re-run it rather than excusing it, and do so now: the window above is the
whole of what this gate can see, so once the run ages out of it this
report goes green with nothing fixed.
##[error]Process completed with exit code 1.
```

</details>

### Chaos (`.github/workflows/chaos.yml`)

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/43865919922 — dark (conclusion: `failure`), 2026-11-16 12:22 UTC
- Dark since: 2026-11-16 12:22 UTC (first run of the current streak)
- Job / step: `Store outages (live containers) (clickhouse, full, http://127.0.0.1:8003/readyz, fusion=http://12...` → `Bring the stack up`
- Likely cause: the stack did not come up; the outage below would grade nothing

<details><summary>End of the job log</summary>

```
 Container aisoc-qdrant Healthy
 Container aisoc-actions Healthy
 Container aisoc-clickhouse Healthy
 Container aisoc-kafka-ui Healthy
 Container aisoc-zookeeper Healthy
 Container aisoc-redis Healthy
container aisoc-ollama-pull exited (0)
##[error]the stack did not come up; the outage below would grade nothing
```

</details>

### Deploy Docs to GitHub Pages (`.github/workflows/deploy-docs.yml`)

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/43870187642 — dark (conclusion: `failure`), 2026-11-16 12:50 UTC
- Dark since: 2026-11-16 12:50 UTC (first run of the current streak)
- Job / step: `Build Docusaurus` → `Build docs`
- Likely cause: ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL  @aisoc/docs@0.0.1 build: 'docusaurus build'

<details><summary>End of the job log</summary>

```
  "reason": "Expected a closing tag for `<your>` (22:108-22:124) before the end of `tableData`",
  "ruleId": "end-tag-mismatch",
  "source": "mdast-util-mdx-jsx"
}
/home/runner/work/AiSOC/AiSOC/apps/docs:
 ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL  @aisoc/docs@0.0.1 build: `docusaurus build`
Exit status 1
##[error]Process completed with exit code 1.
```

</details>

### Installer Smoke (`.github/workflows/installer-smoke.yml`)

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/43890112650 — dark (conclusion: `failure`), 2026-11-16 14:51 UTC
- Dark since: 2026-11-16 14:51 UTC (first run of the current streak)
- Job / step: `--diagnose in clean archlinux` → `Run --diagnose in archlinux:latest`
- Likely cause: error: failed to prepare transaction (could not satisfy dependencies)

<details><summary>End of the job log</summary>

```
error: failed to prepare transaction (could not satisfy dependencies)
:: installing openssl (4.1.0-1) breaks dependency 'libcrypto.so=3-64' required by cryptsetup
:: installing openssl (4.1.0-1) breaks dependency 'libcrypto.so=3-64' required by libarchive
:: installing openssl (4.1.0-1) breaks dependency 'libcrypto.so=3-64' required by libldap
:: installing openssl (4.1.0-1) breaks dependency 'libssl.so=3-64' required by libngtcp2
:: installing openssl (4.1.0-1) breaks dependency 'libcrypto.so=3-64' required by libsasl
:: installing openssl (4.1.0-1) breaks dependency 'libcrypto.so=3-64' required by pacman
##[error]Process completed with exit code 1.
```

</details>

### Image availability (`.github/workflows/image-availability.yml`)

- Latest run on `main`: https://github.com/beenuar/AiSOC/actions/runs/43906862585 — dark (conclusion: `failure`), 2026-11-16 16:23 UTC
- Dark since: 2026-11-16 16:23 UTC (first run of the current streak)
- Job / step: `Every image the deployment files name exists` → `Every reference resolves, at the version and the commit the tree is on`
- Likely cause: not resolved (published by somebody else): apache/kafka:3.9.1, clickhouse/clickhouse-server:23.8, confluentinc/cp-kafka:7.5.0, confluentinc/cp-zookeeper:7.5.0, ghcr.io/berriai/litellm:v1.102.1, grafana/grafana:10.2.0, g…

<details><summary>End of the job log</summary>

```
  present    ghcr.io/beenuar/aisoc-ingest:v12.0.0       apps/docs/docs/deployment/kubernetes.md (prose)  holds 12.0.0
  present    ghcr.io/beenuar/aisoc-enrichment:v12.0.0   apps/docs/docs/deployment/kubernetes.md (prose)  holds 12.0.0
  present    ghcr.io/beenuar/aisoc-web:v12.0.0          apps/docs/docs/deployment/kubernetes.md (prose)  holds 12.0.0
  present    ghcr.io/beenuar/aisoc-devcontainer:latest  apps/docs/docs/operations/codespaces.md (prose)  holds 22.2.0
  present    ghcr.io/beenuar/aisoc-ueba:latest          docs/decisions/0011-behavioural-baselines-in-core.md (prose)  holds 23.4.0
  present    ghcr.io/beenuar/aisoc-web:latest           docs/operations/publishing.md (prose)  holds 23.4.0
  not resolved (published by somebody else): apache/kafka:3.9.1, clickhouse/clickhouse-server:23.8, confluentinc/cp-kafka:7.5.0, confluentinc/cp-zookeeper:7.5.0, ghcr.io/berriai/litellm:v1.102.1, grafana/grafana:10.2.0,…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining AiSOC!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
