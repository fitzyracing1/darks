# Queued for Joshua's approval

Upstream actions (issues, PRs, comments on other people's repos) are **never sent** by the crawler. They wait here until Joshua approves and sends them himself.

| dark | light now | proposed action | note | added |
|---|---|---|---|---|
| nukeop/nuclear#.github/workflows/ci.yml | ● lit | PR: chore: sync pnpm-lock.yaml with eslint-plugin-storybook 10.6.1 | CI dark: lockfile out of sync (ERR_PNPM_OUTDATED_LOCKFILE). Patch: patches/nukeop-nuclear-0001-sync-pnpm-lock.patch. Not sent; waits for Joshua. | 2026-10-13 |

Edit `queued.json` to add entries: `[{"key": "owner/repo#.github/workflows/ci.yml", "action": "PR: fix flaky test", "note": "...", "addedAt": "2026-10-13"}]`.

<!-- drafts:start -->
## Drafted upstream issues — awaiting Joshua's OK

Drafted after each crawl by `scripts/draft-upstream.mjs`, one per repo with dark workflows. **Nothing here is sent.** To approve one, change its `[ ]` to `[x]`; it is filed only when Joshua runs the manual **file-approved** workflow (typing the confirm word). Unchecked lines are never filed.

- [ ] public-apis/public-apis — CI: 3 workflows dark on master ("Tests of push & pull", "Validate links", "Tests of validate package") — drafts/public-apis__public-apis.md
- [ ] morluto/rea — CI: "Mutation sweep" workflow getting cancelled on main since 2026-11-13 — drafts/morluto__rea.md — note: infra-class dark (runner/timeout/cancel) — lower value
- [ ] NousResearch/hermes-agent — CI: "Docker Build, Test, and Publish" workflow getting cancelled on main since 2026-11-08 — drafts/NousResearch__hermes-agent.md — note: infra-class dark (runner/timeout/cancel) — lower value
- [ ] react/react — CI: 2 workflows dark on main ("(DevTools) Regression Tests", "(Compiler) Playground") — drafts/react__react.md
- [ ] n8n-io/n8n — CI: 2 workflows dark on master ("Security: Sync from Public", "Security: Sync Bundle Branches") — drafts/n8n-io__n8n.md
- [ ] tensorflow/tensorflow — CI: "Creates a GitHub Issue when a PR Rolled back via Commit to Master" workflow not completing (runs skipped) on master since 2026-10-13 — drafts/tensorflow__tensorflow.md — note: latest run was skipped, not failed — probably not worth filing
- [ ] huggingface/transformers — CI: 6 workflows dark on main ("Self-hosted runner (nightly-past-ci-caller)", "Self-hosted runner (Intel Gaudi3 scheduled CI caller)", "Doctests", +3 more) — drafts/huggingface__transformers.md
- [ ] langgenius/dify — CI: "Build and Push API & Web" workflow failing on main since 2026-11-13 — drafts/langgenius__dify.md
- [ ] langflow-ai/langflow — CI: 2 workflows dark on main ("Deploy Storybook to GitHub Pages", "Cross-Bundle Test") — drafts/langflow-ai__langflow.md
- [ ] langchain-ai/langchain — CI: "⏰ Integration Tests" workflow failing on master since 2026-10-09 — drafts/langchain-ai__langchain.md
- [ ] nextlevelbuilder/ui-ux-pro-max-skill — CI: 3 workflows dark on main ("Release", "Refresh upstream catalogs", "Check asset sync") — drafts/nextlevelbuilder__ui-ux-pro-max-skill.md
- [ ] vercel/next.js — CI: 2 workflows dark on canary ("Rspack Next.js production integration tests", "Rspack Next.js development integration tests") — drafts/vercel__next.js.md
- [ ] google-gemini/gemini-cli — CI: 3 workflows dark on main ("📋 Gemini Scheduled Issue Triage", "Testing: CI", "Performance Tests: Nightly") — drafts/google-gemini__gemini-cli.md
- [ ] ruvnet/ruflo — CI: 3 workflows dark on main ("CI/CD Pipeline", "no-metaharness-smoke", "all-plugins-smoke") — drafts/ruvnet__ruflo.md
- [ ] headroomlabs-ai/headroom — CI: "PR Governance" workflow getting cancelled on main since 2026-11-09 — drafts/headroomlabs-ai__headroom.md — note: infra-class dark (runner/timeout/cancel) — lower value
- [ ] storytold/photocraft — CI: 4 workflows dark on main ("FreeBSD", "Perf (nightly)", "SonarCloud", +1 more) — drafts/storytold__photocraft.md
- [ ] socketio/socket.io — CI: "Build examples" workflow failing on main since 2026-09-27 — drafts/socketio__socket.io.md
- [ ] iamkun/dayjs — CI: "Lint & Unit Test" workflow failing on dev since 2026-11-06 — drafts/iamkun__dayjs.md
- [ ] DeusData/codebase-memory-mcp — CI: 2 workflows dark on main ("Nightly Soak", "test-impact-artifact") — drafts/DeusData__codebase-memory-mcp.md
- [ ] DayuanJiang/next-ai-draw-io — CI: "Publish DSH plugin" workflow failing on main since 2026-10-31 — drafts/DayuanJiang__next-ai-draw-io.md
- [ ] yetone/magpie — CI: "Test" workflow getting cancelled on main since 2026-11-08 — drafts/yetone__magpie.md — note: infra-class dark (runner/timeout/cancel) — lower value
- [ ] mksglu/context-mode — CI: 2 workflows dark on main ("readme-stats", "weekly") — drafts/mksglu__context-mode.md
- [ ] ReactiveX/rxjs — CI: 2 workflows dark on master ("OSV vulnerability policy", "Extended property fuzzing") — drafts/ReactiveX__rxjs.md
- [ ] oraios/serena — CI: "Tests" workflow failing on main since 2026-11-09 — drafts/oraios__serena.md
- [ ] storytold/craft-anything — CI: 2 workflows dark on main ("FreeBSD", "CI") — drafts/storytold__craft-anything.md
- [ ] sequelize/sequelize — CI: "auto-update PRs & label conflicts" workflow failing on main since 2026-10-31 — drafts/sequelize__sequelize.md
- [ ] t8y2/dbx — CI: "CI" workflow getting cancelled on main since 2026-11-13 — drafts/t8y2__dbx.md — note: cancelled by a concurrency group — likely noise
- [ ] activepieces/activepieces — CI: 2 workflows dark on main ("Chat Evals", "Benchmark") — drafts/activepieces__activepieces.md
- [ ] 1Panel-dev/MaxKB — CI: "sync2gitee" workflow failing on v2 since 2026-09-14 — drafts/1Panel-dev__MaxKB.md
- [ ] storytold/pdfcraft — CI: 2 workflows dark on main ("Nightly macOS", "CI") — drafts/storytold__pdfcraft.md
- [ ] xerj-org/xerj — CI: 3 workflows dark on main ("Release", "CI", "pack publish") — drafts/xerj-org__xerj.md
- [ ] storytold/filmcraft — CI: "SonarCloud" workflow failing on main since 2026-11-13 — drafts/storytold__filmcraft.md
- [ ] googleapis/mcp-toolbox — CI: "CF: Deploy Dev Docs" workflow failing on main since 2026-09-28 — drafts/googleapis__mcp-toolbox.md
- [ ] triggerdotdev/trigger.dev — CI: "🛡️ E2E Tests: Webapp Auth (full)" workflow failing on main since 2026-11-11 — drafts/triggerdotdev__trigger.dev.md
- [ ] tangency-labs/solidcraft — CI: "CI" workflow getting cancelled on main since 2026-11-13 — drafts/tangency-labs__solidcraft.md — note: infra-class dark (runner/timeout/cancel) — lower value
- [ ] storytold/lightcraft — CI: "SonarCloud" workflow failing on main since 2026-11-12 — drafts/storytold__lightcraft.md
- [ ] open-metadata/OpenMetadata — CI: 5 workflows dark on main ("Merge Queue Dequeue Report", "monitor-slack-link", "Integration Tests - MySQL + Elasticsearch", +2 more) — drafts/open-metadata__OpenMetadata.md
- [ ] liketrek/TREK — CI: "Tests & SonarQube" workflow getting cancelled on main since 2026-11-12 — drafts/liketrek__TREK.md — note: infra-class dark (runner/timeout/cancel) — lower value
- [ ] seedds/nxnative — CI: 3 workflows dark on main ("fuzz", "lint-c", "tests") — drafts/seedds__nxnative.md
- [ ] storytold/vectorcraft — CI: 2 workflows dark on main ("SonarCloud", "FreeBSD") — drafts/storytold__vectorcraft.md
- [ ] xberg-io/xberg — CI: 4 workflows dark on main ("CI Rust", "CI E2E", "CI Integrations", +1 more) — drafts/xberg-io__xberg.md
- [ ] horizon-rust/horizon — CI: 2 workflows dark on main ("mojang republish", "release") — drafts/horizon-rust__horizon.md
- [ ] l0ng-ai/openidea — CI: 2 workflows dark on main ("CI", "Language smoke") — drafts/l0ng-ai__openidea.md — note: cancelled by a concurrency group — likely noise
- [ ] Gentleman-Programming/engram — CI: "Stable release gap audit" workflow failing on main since 2026-11-09 — drafts/Gentleman-Programming__engram.md
- [ ] webiny/webiny-js — CI: 4 workflows dark on next ("Cloud infrastructure Cleanup", "Rebuild Global Cache ("dev" branch)", "Record E2E replay steps", +1 more) — drafts/webiny__webiny-js.md
- [ ] modelcontextprotocol/php-sdk — CI: "conformance-weekly" workflow failing on main since 2026-10-05 — drafts/modelcontextprotocol__php-sdk.md

### Not queued — upstream already has an open issue/PR

- microsoft/PowerToys — drafts/microsoft__PowerToys.md — open upstream: https://github.com/microsoft/PowerToys/issues/51817
- zylon-ai/private-gpt — drafts/zylon-ai__private-gpt.md — open upstream: https://github.com/zylon-ai/private-gpt/issues/2441
- jestjs/jest — drafts/jestjs__jest.md — open upstream: https://github.com/jestjs/jest/issues/16382
- PrefectHQ/fastmcp — drafts/PrefectHQ__fastmcp.md — open upstream: https://github.com/PrefectHQ/fastmcp/issues/6443

<details><summary>Resolved — lit again (77; drafts in drafts/resolved/, kept as history)</summary>

- ~~freeCodeCamp/freeCodeCamp — CI: "i18n - Build Validation" workflow failing on main since 2026-11-06~~ — drafts/resolved/freeCodeCamp__freeCodeCamp.md — resolved 2026-11-10 (lit again)
- ~~openclaw/openclaw — CI: "Docs" workflow not completing (runs skipped) on main since 2026-11-10~~ — drafts/resolved/openclaw__openclaw.md — resolved 2026-11-11 (lit again)
- ~~affaan-m/ECC — CI: "Supply-Chain Watch" workflow failing on main since 2026-11-08~~ — drafts/resolved/affaan-m__ECC.md — resolved 2026-11-08 (lit again)
- ~~anomalyco/opencode — CI: 2 workflows dark on dev ("release", "check-test")~~ — drafts/resolved/anomalyco__opencode.md — resolved 2026-11-13 (lit again)
- ~~TheAlgorithms/Python — CI: "hacktoberfest_prep" workflow failing on master since 2026-10-01~~ — drafts/resolved/TheAlgorithms__Python.md — resolved 2026-10-31 (lit again)
- ~~yt-dlp/yt-dlp — CI: "Core Tests" workflow not completing (runs skipped) on master since 2026-10-26~~ — drafts/resolved/yt-dlp__yt-dlp.md — resolved 2026-10-30 (lit again)
- ~~firecrawl/firecrawl — CI: "Audit NPM Packages" workflow failing on main since 2026-11-11~~ — drafts/resolved/firecrawl__firecrawl.md — resolved 2026-11-12 (lit again)
- ~~microsoft/vscode — CI: 2 workflows dark on main ("CodeQL", "Code OSS (workspace images)")~~ — drafts/resolved/microsoft__vscode.md — resolved 2026-11-12 (lit again)
- ~~avelino/awesome-go — CI: "Check For Stale Repositories" workflow failing on main since 2026-11-08~~ — drafts/resolved/avelino__awesome-go.md — resolved 2026-11-12 (lit again)
- ~~Significant-Gravitas/AutoGPT — CI: "Security - Public advisory sync" workflow failing on master since 2026-11-11~~ — drafts/resolved/Significant-Gravitas__AutoGPT.md — resolved 2026-11-12 (lit again)
- ~~flutter/flutter — CI: "No Response" workflow failing on the default branch since 2026-10-14~~ — drafts/resolved/flutter__flutter.md — resolved 2026-11-12 (lit again)
- ~~f/prompts.chat — CI: "Build and Publish Docker Image" workflow failing on main since 2026-11-01~~ — drafts/resolved/f__prompts.chat.md — resolved 2026-11-02 (lit again)
- ~~twbs/bootstrap — CI: "Linkinator" workflow failing on main since 2026-11-01~~ — drafts/resolved/twbs__bootstrap.md — resolved 2026-11-05 (lit again)
- ~~clash-verge-rev/clash-verge-rev — CI: "Auto Build" workflow failing on dev since 2026-11-08~~ — drafts/resolved/clash-verge-rev__clash-verge-rev.md — resolved 2026-11-09 (lit again)
- ~~open-webui/open-webui — CI: "Release to PyPI" workflow failing on the default branch since 2026-10-10~~ — drafts/resolved/open-webui__open-webui.md — resolved 2026-10-14 (lit again 2026-10-14: https://github.com/open-webui/open-webui/actions/runs/38595211615; backfilled from past crawls)
- ~~anthropics/claude-code — (all dark workflows already tracked upstream)~~ — drafts/resolved/anthropics__claude-code.md — resolved 2026-11-08 (lit again)
- ~~farion1231/cc-switch — CI: "CI" workflow failing on main since 2026-11-07~~ — drafts/resolved/farion1231__cc-switch.md — resolved 2026-11-08 (lit again)
- ~~github/spec-kit — CI: "Deploy Documentation to Pages" workflow failing on main since 2026-11-09~~ — drafts/resolved/github__spec-kit.md — resolved 2026-11-10 (lit again)
- ~~Comfy-Org/ComfyUI — CI: "Generate Pydantic Stubs from api.comfy.org" workflow failing on master since 2026-11-09~~ — drafts/resolved/Comfy-Org__ComfyUI.md — resolved 2026-11-12 (lit again)
- ~~microsoft/TypeScript — CI: "CI" workflow failing on main since 2026-11-04~~ — drafts/resolved/microsoft__TypeScript.md — resolved 2026-11-04 (lit again)
- ~~tailwindlabs/tailwindcss — CI: "Release" workflow failing on main since 2026-11-05~~ — drafts/resolved/tailwindlabs__tailwindcss.md — resolved 2026-11-06 (lit again)
- ~~koala73/worldmonitor — CI: "Railway Native Deploy Health" workflow failing on main since 2026-11-11~~ — drafts/resolved/koala73__worldmonitor.md — resolved 2026-11-12 (lit again)
- ~~vitejs/vite — CI: "CI" workflow failing on main since 2026-11-06~~ — drafts/resolved/vitejs__vite.md — resolved 2026-11-09 (lit again)
- ~~webpack/webpack — CI: "Benchmarks" workflow failing on main since 2026-11-12~~ — drafts/resolved/webpack__webpack.md — resolved 2026-11-13 (lit again)
- ~~upstash/context7 — CI: "Test" workflow getting cancelled on master since 2026-11-10~~ — drafts/resolved/upstash__context7.md — resolved 2026-11-11 (lit again)
- ~~vuejs/core — CI: "ci" workflow failing on main since 2026-10-29~~ — drafts/resolved/vuejs__core.md — resolved 2026-11-02 (lit again)
- ~~ChromeDevTools/chrome-devtools-mcp — CI: "Compile and run tests" workflow failing on the default branch since 2026-10-14~~ — drafts/resolved/ChromeDevTools__chrome-devtools-mcp.md — resolved 2026-10-15 (lit again 2026-10-15: https://github.com/ChromeDevTools/chrome-devtools-mcp/actions/runs/38693637676; backfilled from past crawls)
- ~~prettier/prettier — CI: 2 workflows dark on main ("Prod", "Dev")~~ — drafts/resolved/prettier__prettier.md — resolved 2026-11-10 (lit again)
- ~~reactive-resume/reactive-resume — CI: 2 workflows dark on main ("CI", "autofix.ci")~~ — drafts/resolved/reactive-resume__reactive-resume.md — resolved 2026-11-11 (lit again)
- ~~Ebony-Vinyl/dsh-our-free-model — CI: "test" workflow failing on main since 2026-10-26~~ — drafts/resolved/Ebony-Vinyl__dsh-our-free-model.md — resolved 2026-10-26 (lit again)
- ~~colinhacks/zod — CI: "Refresh the ISO 4217 currency list" workflow failing on main since 2026-11-02~~ — drafts/resolved/colinhacks__zod.md — resolved 2026-11-09 (lit again)
- ~~Niko1221/Strata — CI: "Checks" workflow failing on main since 2026-11-09~~ — drafts/resolved/Niko1221__Strata.md — resolved 2026-11-10 (lit again)
- ~~bytedance/UI-TARS-desktop — CI: "Scorecard supply-chain security" workflow failing on main since 2026-09-14~~ — drafts/resolved/bytedance__UI-TARS-desktop.md — resolved 2026-11-09 (lit again)
- ~~microsoft/playwright-mcp — CI: "CI" workflow failing on main since 2026-11-10~~ — drafts/resolved/microsoft__playwright-mcp.md — resolved 2026-11-11 (lit again)
- ~~NandhaKishorM/laya — CI: "Security" workflow failing on main since 2026-11-05~~ — drafts/resolved/NandhaKishorM__laya.md — resolved 2026-11-06 (lit again)
- ~~eslint/eslint — CI: "Test Ecosystem Plugins" workflow failing on main since 2026-10-30~~ — drafts/resolved/eslint__eslint.md — resolved 2026-10-30 (lit again)
- ~~Automattic/mongoose — CI: 2 workflows dark on master ("Encryption Tests", "Test")~~ — drafts/resolved/Automattic__mongoose.md — resolved 2026-10-21 (lit again)
- ~~rollup/rollup — CI: "CI" workflow failing on master since 2026-11-08~~ — drafts/resolved/rollup__rollup.md — resolved 2026-11-09 (lit again)
- ~~KnifeLemon/Filee — CI: "CI" workflow getting cancelled on main since 2026-11-10~~ — drafts/resolved/KnifeLemon__Filee.md — resolved 2026-11-12 (lit again)
- ~~pascalorg/editor — CI: "CI" workflow failing on main since 2026-11-04~~ — drafts/resolved/pascalorg__editor.md — resolved 2026-11-05 (lit again)
- ~~czlonkowski/n8n-mcp — CI: "Test Suite" workflow failing on main since 2026-10-24~~ — drafts/resolved/czlonkowski__n8n-mcp.md — resolved 2026-10-28 (lit again)
- ~~mochajs/mocha — CI: 2 workflows dark on main ("Reusable npm script runner", "Tests")~~ — drafts/resolved/mochajs__mocha.md — resolved 2026-11-04 (lit again)
- ~~nukeop/nuclear — CI: "CI" workflow failing on master since 2026-11-03~~ — drafts/resolved/nukeop__nuclear.md — resolved 2026-11-04 (lit again)
- ~~ccch1mneyyy/dsh-Go — CI: "CI" workflow failing on main since 2026-11-10~~ — drafts/resolved/ccch1mneyyy__dsh-Go.md — resolved 2026-11-11 (lit again)
- ~~Droid-Deck/DroidDeck — CI: "Build APK" workflow getting cancelled on main since 2026-11-06~~ — drafts/resolved/Droid-Deck__DroidDeck.md — resolved 2026-11-07 (lit again)
- ~~robbietilton/Compositor — CI: "Verify" workflow failing on main since 2026-10-24~~ — drafts/resolved/robbietilton__Compositor.md — resolved 2026-10-26 (lit again)
- ~~storytold/wordcraft — CI: "CI" workflow failing on main since 2026-10-26~~ — drafts/resolved/storytold__wordcraft.md — resolved 2026-11-12 (lit again)
- ~~apify/apify-mcp-server — CI: "CI (master evals)" workflow failing on master since 2026-11-12~~ — drafts/resolved/apify__apify-mcp-server.md — resolved 2026-11-13 (lit again)
- ~~modelcontextprotocol/typescript-sdk — CI: "Release" workflow failing on main since 2026-10-22~~ — drafts/resolved/modelcontextprotocol__typescript-sdk.md — resolved 2026-10-23 (lit again)
- ~~OpenByteInc/QuantDinger — CI: "Backend CI" workflow failing on main since 2026-10-26~~ — drafts/resolved/OpenByteInc__QuantDinger.md — resolved 2026-10-27 (lit again)
- ~~shihabal3amri/DiPlay — CI: "Android checks" workflow failing on main since 2026-10-24~~ — drafts/resolved/shihabal3amri__DiPlay.md — resolved 2026-10-27 (lit again)
- ~~0xJacky/nginx-ui — CI: "E2E ACME" workflow failing on the default branch since 2026-10-15~~ — drafts/resolved/0xJacky__nginx-ui.md — resolved 2026-10-16 (lit again 2026-10-16: https://github.com/0xJacky/nginx-ui/actions/runs/38956900281; backfilled from past crawls)
- ~~modelcontextprotocol/inspector — CI: "SDK Watch" workflow failing on main since 2026-11-05~~ — drafts/resolved/modelcontextprotocol__inspector.md — resolved 2026-11-06 (lit again)
- ~~jub0t/Concat — CI: "CI" workflow failing on main since 2026-10-21~~ — drafts/resolved/jub0t__Concat.md — resolved 2026-10-24 (lit again)
- ~~mcp-use/mcp-use — CI: "CI" workflow failing on the default branch since 2026-10-14~~ — drafts/resolved/mcp-use__mcp-use.md — resolved 2026-10-17 (lit again 2026-10-17: https://github.com/mcp-use/mcp-use/actions/runs/38986854028; backfilled from past crawls)
- ~~mobile-next/mobile-mcp — CI: "Build" workflow failing on main since 2026-11-07~~ — drafts/resolved/mobile-next__mobile-mcp.md — resolved 2026-11-11 (lit again)
- ~~CursorTouch/Windows-MCP — CI: "Tests" workflow failing on main since 2026-10-25~~ — drafts/resolved/CursorTouch__Windows-MCP.md — resolved 2026-10-26 (lit again)
- ~~wonderwhy-er/DesktopCommanderMCP — CI: "Codespell" workflow failing on main since 2026-11-03~~ — drafts/resolved/wonderwhy-er__DesktopCommanderMCP.md — resolved 2026-11-05 (lit again)
- ~~awslabs/mcp — CI: "Check License Header" workflow failing on main since 2026-10-13~~ — drafts/resolved/awslabs__mcp.md — resolved 2026-10-30 (lit again)
- ~~modelcontextprotocol/modelcontextprotocol — CI: "Publish spec release" workflow not completing (runs skipped) on main since 2026-09-28~~ — drafts/resolved/modelcontextprotocol__modelcontextprotocol.md — resolved 2026-11-08 (lit again)
- ~~homarr-labs/dashboard-icons — CI: "Main CI" workflow failing on main since 2026-11-04~~ — drafts/resolved/homarr-labs__dashboard-icons.md — resolved 2026-11-09 (lit again)
- ~~zortos293/Lichii — CI: "build-check" workflow getting cancelled on nx2 since 2026-11-12~~ — drafts/resolved/zortos293__Lichii.md — resolved 2026-11-13 (lit again)
- ~~isaacs/node-glob — CI: "typedoc" workflow failing on main since 2026-10-05~~ — drafts/resolved/isaacs__node-glob.md — resolved 2026-10-28 (lit again)
- ~~storytold/effectcraft — CI: 2 workflows dark on main ("CI (macOS)", "SonarCloud")~~ — drafts/resolved/storytold__effectcraft.md — resolved 2026-11-11 (lit again)
- ~~Gentleman-Programming/gentle-ai — CI: "Windows Full Suite" workflow failing on main since 2026-11-06~~ — drafts/resolved/Gentleman-Programming__gentle-ai.md — resolved 2026-11-07 (lit again)
- ~~crmne/spotifast — CI: 2 workflows dark on the default branch ("CI", "Docs")~~ — drafts/resolved/crmne__spotifast.md — resolved 2026-10-14 (lit again 2026-10-14: https://github.com/crmne/spotifast/actions/runs/38514072197; backfilled from past crawls)
- ~~storytold/cadcraft — CI: "CI" workflow failing on main since 2026-11-08~~ — drafts/resolved/storytold__cadcraft.md — resolved 2026-11-11 (lit again)
- ~~firecrawl/firecrawl-mcp-server — CI: 2 workflows dark on main ("Publish Package", "Deploy Images to GHCR")~~ — drafts/resolved/firecrawl__firecrawl-mcp-server.md — resolved 2026-10-28 (lit again)
- ~~beenuar/AiSOC — CI: "Grading integrity" workflow failing on main since 2026-11-04~~ — drafts/resolved/beenuar__AiSOC.md — resolved 2026-11-05 (lit again)
- ~~BrowserMCP/mcp — CI: "CI" workflow failing on main since 2026-10-27~~ — drafts/resolved/BrowserMCP__mcp.md — resolved 2026-10-29 (lit again)
- ~~qingjian-team/qingjian — CI: "ci" workflow failing on main since 2026-10-20~~ — drafts/resolved/qingjian-team__qingjian.md — resolved 2026-10-21 (lit again)
- ~~kucherenko/jscpd — CI: "Nightly audit" workflow failing on the default branch since 2026-10-17~~ — drafts/resolved/kucherenko__jscpd.md — resolved 2026-10-18 (lit again 2026-10-18: https://github.com/kucherenko/jscpd/actions/runs/39103608037; backfilled from past crawls)
- ~~amagine-ai/Amagine3D — CI: "CI" workflow failing on the default branch since 2026-10-14~~ — drafts/resolved/amagine-ai__Amagine3D.md — resolved 2026-10-15 (lit again 2026-10-15: https://github.com/amagine-ai/Amagine3D/actions/runs/38678072831; backfilled from past crawls)
- ~~expressjs/body-parser — CI: "ci" workflow getting cancelled on master since 2026-10-28~~ — drafts/resolved/expressjs__body-parser.md — resolved 2026-11-02 (lit again)
- ~~modelcontextprotocol/rust-sdk — CI: "Triage" workflow not completing (runs skipped) on main since 2026-09-15~~ — drafts/resolved/modelcontextprotocol__rust-sdk.md — resolved 2026-10-27 (lit again)
- ~~prisma/prisma-cli — CI: 2 workflows dark on main ("Publish to npm", "End-to-end (real API)")~~ — drafts/resolved/prisma__prisma-cli.md — resolved 2026-10-22 (lit again)
- ~~fitzyracing1/darks-relit-demo — CI: "light" workflow failing on the default branch since 2026-10-13~~ — drafts/resolved/fitzyracing1__darks-relit-demo.md — resolved 2026-10-13 (lit again 2026-10-13: https://github.com/fitzyracing1/darks-relit-demo/actions/runs/38477851629; backfilled from past crawls)

</details>
<!-- drafts:end -->
