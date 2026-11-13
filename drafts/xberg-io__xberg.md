<!-- dark-draft: xberg-io/xberg -->
<!-- draft-state: ready -->
# Upstream issue draft: xberg-io/xberg

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/xberg-io/xberg/issues/new
- **Stars:** 9581 · **Generated:** 2026-11-13T06:46:32.203Z
- Nothing in this file has been sent anywhere.
- **Note for Joshua:** cancelled by a concurrency group — likely noise

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("CI Rust", "CI E2E", "CI Integrations", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### CI Rust (`.github/workflows/ci-rust.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43375096155 — dark (conclusion: `cancelled`), 2026-11-13 05:54 UTC
- Dark since: 2026-10-25 18:30 UTC (first run of the current streak)
- Job / step: `Rust tract-only (no-ORT)` → `Run no-ORT tract tests`
- Likely cause: Canceling since a higher priority waiting request for ci-rust-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling dirs v7.0.0
   Compiling codepage v0.1.3
   Compiling fs2 v0.4.3
   Compiling jpeg-encoder v0.7.1
   Compiling hex v0.4.3
   Compiling dotenvy v0.15.7
   Compiling jotdown v0.10.0
##[error]The operation was canceled.
```

</details>

### CI E2E (`.github/workflows/ci-e2e.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43375096123 — dark (conclusion: `cancelled`), 2026-11-13 05:54 UTC
- Dark since: 2026-11-03 17:32 UTC (first run of the current streak)
- Job / step: `Build FFI (aarch64-unknown-linux-gnu)` → `Build FFI library`
- Likely cause: Canceling since a higher priority waiting request for ci-e2e-refs/heads/main exists

<details><summary>End of the job log</summary>

```
[xberg-libwpd 1.4.0] cargo:warning=/home/runner/work/xberg/xberg/target/release/build/xberg-libwpd-7186226230dcd48e/out/boost/boost/proto/transform/impl.hpp:255:9:   required from 'typename boost::proto::detail::apply_t…
[xberg-libwpd 1.4.0] cargo:warning=/home/runner/work/xberg/xberg/target/release/build/xberg-libwpd-7186226230dcd48e/out/boost/boost/spirit/home/support/make_component.hpp:248:51:   [ skipping 6 instantiation contexts, u…
[xberg-libwpd 1.4.0] cargo:warning=/home/runner/work/xberg/xberg/target/release/build/xberg-libwpd-7186226230dcd48e/out/boost/boost/proto/transform/impl.hpp:255:9:   required from 'typename boost::proto::detail::apply_t…
[xberg-libwpd 1.4.0] cargo:warning=/home/runner/work/xberg/xberg/target/release/build/xberg-libwpd-7186226230dcd48e/out/boost/boost/spirit/home/support/meta_compiler.hpp:243:32:   required from 'static typename boost::s…
[xberg-libwpd 1.4.0] cargo:warning=/home/runner/work/xberg/xberg/target/release/build/xberg-libwpd-7186226230dcd48e/out/boost/boost/spirit/home/support/meta_compiler.hpp:264:49:   required from 'typename boost::spirit::…
[xberg-libwpd 1.4.0] cargo:warning=/home/runner/work/xberg/xberg/target/release/build/xberg-libwpd-7186226230dcd48e/out/boost/boost/spirit/home/qi/parse_attr.hpp:117:33:   required from 'bool boost::spirit::qi::phrase_p…
[xberg-libwpd 1.4.0] cargo:warning=/home/runner/work/xberg/xberg/target/release/build/xberg-libwpd-7186226230dcd48e/out/boost/boost/spirit/home/qi/parse_attr.hpp:153:32:   required from 'bool boost::spirit::qi::phrase_p…
##[error]The operation was canceled.
```

</details>

### CI Integrations (`.github/workflows/ci-integrations.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43375096217 — dark (conclusion: `cancelled`), 2026-11-13 05:54 UTC
- Dark since: 2026-11-12 03:46 UTC (first run of the current streak)
- Job / step: `Build local integration bindings` → `Build abi3 Python wheel`
- Likely cause: Canceling since a higher priority waiting request for ci-integrations-refs/heads/main exists

<details><summary>End of the job log</summary>

```
   Compiling thin-vec v0.2.21
   Compiling html-escape v0.3.1
   Compiling micromap v0.3.0
   Compiling bytecount v0.6.9
   Compiling streaming-iterator v0.1.9
   Compiling semver v1.0.28
   Compiling tap v1.0.1
##[error]The operation was canceled.
```

</details>

### CI Lint (`.github/workflows/ci-lint.yaml`)

- Latest run on `main`: https://github.com/xberg-io/xberg/actions/runs/43376475463 — dark (conclusion: `failure`), 2026-11-13 06:07 UTC
- Dark since: 2026-11-12 05:22 UTC (first run of the current streak)
- Job / step: `validate / Validate (poly)` → `Lint`
- Likely cause: warning: build failed, waiting for other jobs to finish...

<details><summary>End of the job log</summary>

```
         = help: to override `-D warnings` add `#[allow(clippy::chunks_exact_to_as_chunks)]`
      error: could not compile `xberg-native-pdf` (test "overprint_separation_black") due to 1 previous error
      warning: build failed, waiting for other jobs to finish...
  ✓ checkstyle
  ✓ credo
  ✓ golangci-lint
  ✓ pyrefly
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining xberg!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
