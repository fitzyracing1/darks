<!-- dark-draft: vercel/next.js -->
<!-- draft-state: ready -->
# Upstream issue draft: vercel/next.js

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/vercel/next.js/issues/new
- **Stars:** 143685 · **Generated:** 2026-11-25T00:55:54.614Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Next Maintainer Auto Close" workflow failing on canary since 2026-11-24
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Next Maintainer Auto Close** workflow (`.github/workflows/next-maintainer-auto-close.yml`) on `canary` has been failing since 2026-11-24. Here is what I saw, in case it's useful:

- Latest run on `canary`: https://github.com/vercel/next.js/actions/runs/45516375209 — dark (conclusion: `failure`), 2026-11-25 00:13 UTC
- Dark since: 2026-11-24 22:05 UTC (first run of the current streak)
- Job / step: `close-one-verified-issue` → `Pull and deliver every released close`
- Likely cause: Unhandled error: Error: Queue returned 404: Not found

<details><summary>End of the job log</summary>

```
Removing credentials config '/home/runner/work/_temp/git-credentials-a993e3fe-feef-47f6-815d-ca6ac63f366b.config'
Error: Queue returned 404: Not found
    at queueRequest (/home/runner/work/next.js/next.js/.github/scripts/next-maintainer-auto-close.js:24:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)
    at async deliverVerifiedCloses (/home/runner/work/next.js/next.js/.github/scripts/next-maintainer-auto-close.js:160:19)
    at async eval (eval at callAsyncFunction (/home/runner/work/_actions/actions/github-script/3a2844b7e9c422d3c10d287c895573f7108da1b3/dist/index.js:64949:16), <anonymous>:4:1)
    at async main (/home/runner/work/_actions/actions/github-script/3a2844b7e9c422d3c10d287c895573f7108da1b3/dist/index.js:65100:20)
##[error]Unhandled error: Error: Queue returned 404: Not found
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining next.js!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
