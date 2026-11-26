<!-- dark-draft: tangency-labs/solidcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: tangency-labs/solidcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/tangency-labs/solidcraft/issues/new
- **Stars:** 18258 · **Generated:** 2026-11-26T00:53:15.119Z
- Nothing in this file has been sent anywhere.

## Skipped: upstream already tracking

- Pages (`.github/workflows/pages.yml`): [issue #17903](https://github.com/tangency-labs/solidcraft/issues/17903) "solidcraft: the Preferences pages (Appearance, Layout, Graphics, Navigation) as kit pages"
- Kernel rig (`.github/workflows/kernel-rig.yml`): [issue #11647](https://github.com/tangency-labs/solidcraft/issues/11647) "Remove the kernel rig's transitional checks when the kernel cases run in solidcore", [issue #13820](https://github.com/tangency-labs/solidcraft/issues/13820) "CI: SolidCraft's kernel rig as solidcore's operation-level gate, by area, with per-area known-failing lists and the parity gap to the fork", [issue #13717](https://github.com/tangency-labs/solidcraft/issues/13717) "Kernel rig CI deadline: G2 boss-root fillet leaves 711 cases unrun", [issue #13715](https://github.com/tangency-labs/solidcraft/issues/13715) "Kernel rig: a traced miss before a malformed pick grades the case unsupported instead of failing"
- Lists (`.github/workflows/lists.yml`): [issue #22362](https://github.com/tangency-labs/solidcraft/issues/22362) "Main red: Lists check fails as two quarantined tests pass the 14-day limit (#14587, #15077)", [issue #9795](https://github.com/tangency-labs/solidcraft/issues/9795) "Weldments: round-tube bend lists with developed stations and bend-plane rotation", [issue #13859](https://github.com/tangency-labs/solidcraft/issues/13859) "SmPolyBrep::CombineCoincidentVertices lists a slit PolyFace twice; CheckForSqueezeVertices squeezes it through its deleted PolyBrep", [issue #3820](https://github.com/tangency-labs/solidcraft/issues/3820) "RFC Cut lists from the model: stock sizes, nesting onto boards and sheets, and build plans", [issue #4671](https://github.com/tangency-labs/solidcraft/issues/4671) "The drop-down command lists do not let the user choose his command at a glance - They need several graphic design tweaks"

These workflows are left out of the body below.

## Suggested title

<!-- BEGIN TITLE -->
CI: "CI" workflow failing on main since 2026-11-25
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **CI** workflow (`.github/workflows/ci.yml`) on `main` has been failing since 2026-11-25. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/tangency-labs/solidcraft/actions/runs/45728229377 — dark (conclusion: `failure`), 2026-11-26 00:22 UTC
- Dark since: 2026-11-25 18:00 UTC (first run of the current streak)
- Job / step: `Format and repository checks` → `Sorted lists`
- Likely cause: error: tests/QUARANTINED_TESTS: solidcraft-engine::cmd::features::patterns_tests::pattern_of_512_hole_cuts_finishes_in_reasonable_time has been quarantined 15 days (limit 14): fix the test (#14587) and remove the line, …

<details><summary>End of the job log</summary>

```
test ui_containers::tests::new_packages_examples_and_nested_modules_cannot_escape_the_gate ... ok
test ui_containers::tests::all_workspace_hosts_use_the_container ... ok
test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 211 filtered out; finished in 1.88s
    Finished `dev` profile [optimized + debuginfo] target(s) in 0.07s
     Running `target/debug/xtask lists`
error: tests/QUARANTINED_TESTS: solidcraft-engine::cmd::features::patterns_tests::pattern_of_512_hole_cuts_finishes_in_reasonable_time has been quarantined 15 days (limit 14): fix the test (#14587) and remove the line, …
  solidcraft-ui-egui::render_workspace::tests::native_preparation_disconnected_retirement_holds_unavailable_owner_across_document_reset has been quarantined 15 days (limit 14): fix the test (#15077) and remove the line,…
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining solidcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
