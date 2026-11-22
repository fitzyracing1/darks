<!-- dark-draft: reactive-resume/reactive-resume -->
<!-- draft-state: ready -->
# Upstream issue draft: reactive-resume/reactive-resume

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/reactive-resume/reactive-resume/issues/new
- **Stars:** 45972 · **Generated:** 2026-11-22T06:43:27.919Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Mobile release" workflow failing on main since 2026-11-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Mobile release** workflow (`.github/workflows/mobile-release.yml`) on `main` has been failing since 2026-11-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/reactive-resume/reactive-resume/actions/runs/44622489405 — dark (conclusion: `failure`), 2026-11-19 21:48 UTC
- Dark since: 2026-11-19 03:19 UTC (first run of the current streak)
- Job / step: `Build ios` → `Set up Ruby and gems`
- Likely cause: The process '/Users/runner/hostedtoolcache/Ruby/3.3.14/arm64/bin/gem' failed with exit code 1

<details><summary>End of the job log</summary>

```
	/Users/runner/hostedtoolcache/Ruby/3.3.14/arm64/lib/ruby/3.3.0/rubygems/command.rb:326:in `invoke_with_build_args'
	/Users/runner/hostedtoolcache/Ruby/3.3.14/arm64/lib/ruby/3.3.0/rubygems/command_manager.rb:253:in `invoke_command'
	/Users/runner/hostedtoolcache/Ruby/3.3.14/arm64/lib/ruby/3.3.0/rubygems/command_manager.rb:194:in `process_args'
	/Users/runner/hostedtoolcache/Ruby/3.3.14/arm64/lib/ruby/3.3.0/rubygems/command_manager.rb:152:in `run'
	/Users/runner/hostedtoolcache/Ruby/3.3.14/arm64/lib/ruby/3.3.0/rubygems/gem_runner.rb:56:in `run'
	/Users/runner/hostedtoolcache/Ruby/3.3.14/arm64/bin/gem:12:in `<main>'
Took   0.07 seconds
##[error]The process '/Users/runner/hostedtoolcache/Ruby/3.3.14/arm64/bin/gem' failed with exit code 1
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining reactive-resume!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
