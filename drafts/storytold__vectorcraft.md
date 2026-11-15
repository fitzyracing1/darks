<!-- dark-draft: storytold/vectorcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/vectorcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/vectorcraft/issues/new
- **Stars:** 11758 · **Generated:** 2026-11-15T12:40:30.415Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 4 workflows dark on main ("Release", "SonarCloud", "Affinity 3 corpus", +1 more)
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### Release (`.github/workflows/release.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/43669894127 — dark (conclusion: `failure`), 2026-11-15 02:54 UTC
- Dark since: 2026-11-15 02:54 UTC (first run of the current streak)
- Job / step: `release / FreeBSD aarch64` → `Set up the aarch64 cross toolchain`
- Likely cause: ../libpkgconf/cache.c:227 [void pkgconf_cache_free(pkgconf_client_t *)]: cleared package cache

<details><summary>End of the job log</summary>

```
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: wayland-egl refcount@0x121014411b40: 0
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: cairo-xlib refcount@0x121014411ba0: 0
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: cairo refcount@0x121014411c00: 0
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: epoxy refcount@0x121014411c60: 0
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: fribidi refcount@0x121014411cc0: 0
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: gdk-3.0 refcount@0x121014411d20: 0
../libpkgconf/cache.c:227 [void pkgconf_cache_free(pkgconf_client_t *)]: cleared package cache
##[error]Process completed with exit code 1.
```

</details>

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/43704477869 — dark (conclusion: `failure`), 2026-11-15 10:31 UTC
- Dark since: 2026-11-15 05:37 UTC (first run of the current streak)
- Job / step: `sonarcloud / Build instrumented test archive` → `Build instrumented test archive`
- Likely cause: help: consider removing the dependency on 'thiserror'

<details><summary>End of the job log</summary>

```
14 | thiserror = { workspace = true }
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `cargo::unused_dependencies` is set to `warn` by default
help: consider removing the dependency on `thiserror`
warning: `vectorcraft-geom` (manifest) generated 1 warning
error: command `/home/runner/.rustup/toolchains/stable-x86_64-unknown-linux-gnu/bin/cargo '--color=always' test --no-run '--message-format=json-render-diagnostics' --workspace` exited with code 101
##[error]Process completed with exit code 101.
```

</details>

### Affinity 3 corpus (`.github/workflows/affinity-corpus.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/43704477746 — dark (conclusion: `failure`), 2026-11-15 10:31 UTC
- Dark since: 2026-11-15 10:30 UTC (first run of the current streak)
- Job / step: `affinity3 / gate (ubuntu-24.04)` → `Gate`
- Likely cause: warning: build failed, waiting for other jobs to finish...

<details><summary>End of the job log</summary>

```
help: call `Into::into` on this expression to convert `Anchors` into `Vec<Anchor>`
    |
 87 |                 runs.push(SubPath::new(sp.anchors.clone().into(), true));
    |                                                          +++++++
For more information about this error, try `rustc --explain E0308`.
error: could not compile `vectorcraft-trace` (lib) due to 1 previous error
warning: build failed, waiting for other jobs to finish...
##[error]Process completed with exit code 101.
```

</details>

### CI (`.github/workflows/ci.yml`)

- Latest run on `main`: https://github.com/storytold/vectorcraft/actions/runs/43704477789 — dark (conclusion: `failure`), 2026-11-15 10:31 UTC
- Dark since: 2026-11-15 10:31 UTC (first run of the current streak)
- Job / step: `gate / gate (ubuntu-24.04)` → `Gate`
- Likely cause: FAIL  clippy: cargo clippy --workspace --all-targets --keep-going -- -D warnings: exited with exit status: 101

<details><summary>End of the job log</summary>

```
  skip  assets
  skip  brands
  skip  cursors
  skip  i18n-report
  skip  ui-commands
  skip  layers
  skip  wasm
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining vectorcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
