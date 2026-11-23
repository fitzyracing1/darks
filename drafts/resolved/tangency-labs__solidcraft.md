<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: resolved -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** resolved — lit again (2026-11-23); nothing to file
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 17807 · **Generated:** 2026-11-23T06:58:02.022Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- Docker (`.github/workflows/docker.yml`): [issue #14063](https://github.com/tangency-labs/solidcraft/issues/14063) "Native server-side project storage for Docker / self-hosted installations", [issue #20820](https://github.com/tangency-labs/solidcraft/issues/20820) "Publish a Docker/web image variant with the optional bundled-render-library texture/HDR pack"
- Pages (`.github/workflows/pages.yml`): [issue #17903](https://github.com/tangency-labs/solidcraft/issues/17903) "solidcraft: the Preferences pages (Appearance, Layout, Graphics, Navigation) as kit pages"
- Kernel rig (`.github/workflows/kernel-rig.yml`): [issue #11647](https://github.com/tangency-labs/solidcraft/issues/11647) "Remove the kernel rig's transitional checks when the kernel cases run in solidcore", [issue #13820](https://github.com/tangency-labs/solidcraft/issues/13820) "CI: SolidCraft's kernel rig as solidcore's operation-level gate, by area, with per-area known-failing lists and the parity gap to the fork", [issue #13717](https://github.com/tangency-labs/solidcraft/issues/13717) "Kernel rig CI deadline: G2 boss-root fillet leaves 711 cases unrun", [issue #13715](https://github.com/tangency-labs/solidcraft/issues/13715) "Kernel rig: a traced miss before a malformed pick grades the case unsupported instead of failing"
- Claim (`.github/workflows/claim.yml`): [issue #6739](https://github.com/tangency-labs/solidcraft/issues/6739) "Claim bot: a cross-reference blocks legitimate PRs, and the bot cannot post its own message", [issue #4405](https://github.com/tangency-labs/solidcraft/issues/4405) "Claim bot: some claim PRs fail with 403 "Resource not accessible by integration""

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow getting cancelled on main since 2026-11-22
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been getting cancelled since 2026-11-22. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/45125145476 — dark (conclusion: `cancelled`), 2026-11-23 06:35 UTC
- Dark since: 2026-11-22 18:19 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
