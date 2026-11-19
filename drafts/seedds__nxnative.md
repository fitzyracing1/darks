<!-- dark-draft: seedds/nxnative -->
<!-- draft-state: ready -->
# Upstream issue draft: seedds/nxnative

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/seedds/nxnative/issues/new
- **Stars:** 16215 · **Generated:** 2026-11-19T12:43:24.149Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("fuzz", "tests")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### fuzz (`.github/workflows/fuzz.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/44516219765 — dark (conclusion: `cancelled`), 2026-11-19 11:35 UTC
- Dark since: 2026-11-02 10:59 UTC (first run of the current streak)
- Job / step: `Fuzz the file parsers` → `Run each harness`
- Likely cause: Canceling since a higher priority waiting request for fuzz-refs/heads/main exists

<details><summary>End of the job log</summary>

```
==3158== ERROR: libFuzzer: fuzz target exited
SUMMARY: libFuzzer: fuzz target exited
MS: 4 PersAutoDict-InsertByte-CrossOver-EraseBytes- DE: "+\005\000\000"-; base unit: b307e01c0081a138a5581f802a4ba22951e35430
0x50,0x41,0x43,0x78,0x34,0x30,0x33,0x4c,0x2e,0x6e,0x6e,0x6e,0x3d,0x6e,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,
PACx403L.nnn=n\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000\000
artifact_prefix='findings/shader_split/'; Test unit written to findings/shader_split/crash-2b166a0a23c82f1cb4e03db9e4f477d493cde4ad
Base64: UEFDeDQwM0wubm5uPW4AAAAAAAAAAAAAAAAAAAAAAAAAAAA=
##[error]shader_split: ==finding== struct.error@shader_split.py:scan_blob>pacx4_parts
```

</details>

### tests (`.github/workflows/tests.yml`)

- Latest run on `main`: https://github.com/seedds/nxnative/actions/runs/44516888710 — dark (conclusion: `failure`), 2026-11-19 11:40 UTC
- Dark since: 2026-11-06 01:42 UTC (first run of the current streak)
- Job / step: `Sanitizers (ASan, UBSan and TSan over the host and CPU texture tests)` → `ASan and UBSan, every host unit test (dm/host/tests)`
- Likely cause: windowless role: task role 0 -> 7, USER_INTERACTIVE base priority 20 -> 20 (7 checks, 1 failed)

<details><summary>End of the job log</summary>

```
haptics: player 1 controller unknown, rumble through the DualShock 4 effects report (Bluetooth, product 0x09cc)
Apple haptics: channels, pulses, idle release, startup handlers, engine replacement, backoff, stale callbacks, plain players, Joy-Con recovery and lifetime, the DualSense's handles, level cutoff and the DualShock 4 rout…
build/asan/t_front_role
FAIL: the default application role lifts the interactive QoS ceiling (line 27)
windowless role: task role 0 -> 7, USER_INTERACTIVE base priority 20 -> 20 (7 checks, 1 failed)
make[1]: *** [run] Error 1
make: *** [asan] Error 2
##[error]Process completed with exit code 2.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining nxnative!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
