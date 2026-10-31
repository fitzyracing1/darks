<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** resolved — lit again (2026-10-31); nothing to file
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 12497 · **Generated:** 2026-10-31T12:37:42.482Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Skipped: upstream already tracking

- Pages (`.github/workflows/pages.yml`): [issue #9863](https://github.com/tangency-labs/solidcraft/issues/9863) "Preferences redesign: 12 pages in four headings, profile switcher, new controls and illustrations", [issue #9875](https://github.com/tangency-labs/solidcraft/issues/9875) "Preferences redesign 3/11: twelve pages, headings, aliases and the profile card (controls move, no restyle)"
- Claim (`.github/workflows/claim.yml`): [issue #6739](https://github.com/tangency-labs/solidcraft/issues/6739) "Claim bot: a cross-reference blocks legitimate PRs, and the bot cannot post its own message", [issue #4405](https://github.com/tangency-labs/solidcraft/issues/4405) "Claim bot: some claim PRs fail with 403 "Resource not accessible by integration""

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Docker" workflow getting cancelled on main since 2026-10-30
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Docker** workflow (`.github/workflows/docker.yml`) on `main` has been getting cancelled since 2026-10-30. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/41200943437 — dark (conclusion: `cancelled`), 2026-10-31 12:24 UTC
- Dark since: 2026-10-30 12:22 UTC (first run of the current streak)
- Job / step: `image` → `Build the web app`
- Likely cause: Canceling since a higher priority waiting request for docker-refs/heads/main exists

<details><summary>End of the job log</summary>

```
14 | pub(super) struct Exported {
   |                   -------- field in this struct
...
21 |     pub bodies: Vec<String>,
   |         ^^^^^^
   |
   = note: `#[warn(dead_code)]` (part of `#[warn(unused)]`) on by default
##[error]The operation was canceled.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
