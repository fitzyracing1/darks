<!-- dark-draft: NandhaKishorM/laya -->
<!-- draft-state: ready -->
# Upstream issue draft: NandhaKishorM/laya

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/NandhaKishorM/laya/issues/new
- **Stars:** 35088 · **Generated:** 2026-11-06T12:41:11.038Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Security" workflow failing on main since 2026-11-05
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Security** workflow (`.github/workflows/security.yml`) on `main` has been failing since 2026-11-05. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/NandhaKishorM/laya/actions/runs/42102872839 — dark (conclusion: `failure`), 2026-11-05 20:23 UTC
- Dark since: 2026-11-05 07:13 UTC (first run of the current streak)
- Job / step: `no unsafe deserialization` → `No shell-out or dynamic exec in the shipped package`
- Likely cause: shell-out or dynamic execution in the shipped package

<details><summary>End of the job log</summary>

```
Switched to a new branch 'main'
branch 'main' set up to track 'origin/main'.
3293116c89425c3d04b22aa4d9464fef82e2c858
OK: no unsafe deserialization in laya/ or laya-ts/scripts/
laya/video.py:68:    proc = subprocess.run(list(args), stdout=subprocess.PIPE, stderr=subprocess.PIPE)
laya/video.py:106:    proc = subprocess.run([shutil.which("ffmpeg"), "-i", path], stdout=subprocess.PIPE,
laya/video.py:107:                          stderr=subprocess.PIPE)
##[error]shell-out or dynamic execution in the shipped package
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining laya!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
