<!-- dark-draft: storytold/effectcraft -->
<!-- draft-state: ready -->
# Upstream issue draft: storytold/effectcraft

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/storytold/effectcraft/issues/new
- **Stars:** 8836 · **Generated:** 2026-11-16T00:59:22.034Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: 2 workflows dark on main ("SonarCloud", "FreeBSD")
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! A few workflows on `main` have been dark recently. Details below, in case they're useful:

### SonarCloud (`.github/workflows/sonarcloud.yml`)

- Latest run on `main`: https://github.com/storytold/effectcraft/actions/runs/43772695558 — dark (conclusion: `failure`), 2026-11-15 23:03 UTC
- Dark since: 2026-11-14 15:48 UTC (first run of the current streak)
- Job / step: `sonarcloud / SonarCloud Scan` → `Fail on Rust shard test failures`
- Likely cause: Coverage shard 1 tests failed (exit 100); analysis was still uploaded

<details><summary>End of the job log</summary>

```
00:14:56.453 INFO  ------------- Upload SCA dependency files
00:14:58.311 INFO  Successfully sent architecture data
00:15:01.479 INFO  Sensor cache published successfully
00:15:03.551 INFO  Analysis total time: 3:47.479 min
00:15:03.553 INFO  SonarScanner Engine completed successfully
00:15:03.952 INFO  EXECUTION SUCCESS
00:15:03.953 INFO  Total time: 3:54.103s
##[error]Coverage shard 1 tests failed (exit 100); analysis was still uploaded
```

</details>

### FreeBSD (`.github/workflows/freebsd.yml`)

- Latest run on `main`: https://github.com/storytold/effectcraft/actions/runs/43669689260 — dark (conclusion: `failure`), 2026-11-15 02:51 UTC
- Dark since: 2026-11-15 02:51 UTC (first run of the current streak)
- Job / step: `freebsd / FreeBSD 15 aarch64 (build + test)` → `Set up the aarch64 cross toolchain`
- Likely cause: 3.24.52

<details><summary>End of the job log</summary>

```
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: cairo-xlib refcount@0x1fb8cb411ba0: 0
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: cairo refcount@0x1fb8cb411c00: 0
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: epoxy refcount@0x1fb8cb411c60: 0
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: fribidi refcount@0x1fb8cb411cc0: 0
../libpkgconf/dependency.c:299 [void pkgconf_dependency_unref(pkgconf_client_t *, pkgconf_dependency_t *)]: gdk-3.0 refcount@0x1fb8cb411d20: 0
../libpkgconf/cache.c:227 [void pkgconf_cache_free(pkgconf_client_t *)]: cleared package cache
3.24.52
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining effectcraft!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
