<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 18609 · **Generated:** 2026-11-27T06:46:20.331Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- Pages (`.github/workflows/pages.yml`): [issue #17903](https://github.com/tangency-labs/solidcraft/issues/17903) "solidcraft: the Preferences pages (Appearance, Layout, Graphics, Navigation) as kit pages"
- Claim (`.github/workflows/claim.yml`): [issue #6739](https://github.com/tangency-labs/solidcraft/issues/6739) "Claim bot: a cross-reference blocks legitimate PRs, and the bot cannot post its own message", [issue #22986](https://github.com/tangency-labs/solidcraft/issues/22986) "Claim bot: a claimant it couldn't assign is told their own claim belongs to someone else", [issue #4405](https://github.com/tangency-labs/solidcraft/issues/4405) "Claim bot: some claim PRs fail with 403 "Resource not accessible by integration""
- Docker (`.github/workflows/docker.yml`): [issue #14063](https://github.com/tangency-labs/solidcraft/issues/14063) "Native server-side project storage for Docker / self-hosted installations", [issue #20820](https://github.com/tangency-labs/solidcraft/issues/20820) "Publish a Docker/web image variant with the optional bundled-render-library texture/HDR pack"
- Kernel rig (`.github/workflows/kernel-rig.yml`): [issue #11647](https://github.com/tangency-labs/solidcraft/issues/11647) "Remove the kernel rig's transitional checks when the kernel cases run in solidcore", [issue #13820](https://github.com/tangency-labs/solidcraft/issues/13820) "CI: SolidCraft's kernel rig as solidcore's operation-level gate, by area, with per-area known-failing lists and the parity gap to the fork", [issue #13717](https://github.com/tangency-labs/solidcraft/issues/13717) "Kernel rig CI deadline: G2 boss-root fillet leaves 711 cases unrun", [issue #13715](https://github.com/tangency-labs/solidcraft/issues/13715) "Kernel rig: a traced miss before a malformed pick grades the case unsupported instead of failing"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-27
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-27. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/45951908914 — dark (conclusion: `cancelled`), 2026-11-27 06:26 UTC
- Dark since: 2026-11-27 06:18 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
