<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 18773 · **Generated:** 2026-11-28T00:52:21.970Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** infra-class dark (runner/timeout/cancel) — lower value

## Skipped: upstream already tracking

- Pages (`.github/workflows/pages.yml`): [issue #17903](https://github.com/tangency-labs/solidcraft/issues/17903) "solidcraft: the Preferences pages (Appearance, Layout, Graphics, Navigation) as kit pages"
- Kernel rig (`.github/workflows/kernel-rig.yml`): [issue #11647](https://github.com/tangency-labs/solidcraft/issues/11647) "Remove the kernel rig's transitional checks when the kernel cases run in solidcore", [issue #13820](https://github.com/tangency-labs/solidcraft/issues/13820) "CI: SolidCraft's kernel rig as solidcore's operation-level gate, by area, with per-area known-failing lists and the parity gap to the fork", [issue #13717](https://github.com/tangency-labs/solidcraft/issues/13717) "Kernel rig CI deadline: G2 boss-root fillet leaves 711 cases unrun", [issue #13715](https://github.com/tangency-labs/solidcraft/issues/13715) "Kernel rig: a traced miss before a malformed pick grades the case unsupported instead of failing"
- Lists (`.github/workflows/lists.yml`): [issue #9795](https://github.com/tangency-labs/solidcraft/issues/9795) "Weldments: round-tube bend lists with developed stations and bend-plane rotation", [issue #13859](https://github.com/tangency-labs/solidcraft/issues/13859) "SmPolyBrep::CombineCoincidentVertices lists a slit PolyFace twice; CheckForSqueezeVertices squeezes it through its deleted PolyBrep", [issue #3820](https://github.com/tangency-labs/solidcraft/issues/3820) "RFC Cut lists from the model: stock sizes, nesting onto boards and sheets, and build plans", [issue #4671](https://github.com/tangency-labs/solidcraft/issues/4671) "The drop-down command lists do not let the user choose his command at a glance - They need several graphic design tweaks", [issue #12457](https://github.com/tangency-labs/solidcraft/issues/12457) "Boolean refused when a STEP part has edges a few micrometres off their faces ("the second operand already fails it"), inspect.interference lists the pair as unchecked"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("CI", "Fillet rig")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/46088052070 — dark (conclusion: `cancelled`), 2026-11-28 00:28 UTC
- Dark since: 2026-11-27 18:08 UTC (first run of the current streak)
- Likely cause: run cancelled

### Fillet rig (`.github/workflows/fillet-rig.yml`)

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/46088051854 — dark (conclusion: `cancelled`), 2026-11-28 00:28 UTC
- Dark since: 2026-11-28 00:28 UTC (first run of the current streak)
- Likely cause: run cancelled

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
