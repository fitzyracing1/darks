# Queued for Joshua's approval

Upstream actions (issues, PRs, comments on other people's repos) are **never sent** by the crawler. They wait here until Joshua approves and sends them himself.

| dark | light now | proposed action | note | added |
|---|---|---|---|---|
| nukeop/nuclear#.github/workflows/ci.yml | ? | PR: chore: sync pnpm-lock.yaml with eslint-plugin-storybook 10.6.1 | CI dark: lockfile out of sync (ERR_PNPM_OUTDATED_LOCKFILE). Patch: patches/nukeop-nuclear-0001-sync-pnpm-lock.patch. Not sent; waits for Joshua. | 2026-10-13 |

Edit `queued.json` to add entries: `[{"key": "owner/repo#.github/workflows/ci.yml", "action": "PR: fix flaky test", "note": "...", "addedAt": "2026-10-13"}]`.

<!-- drafts:start -->
## Drafted upstream issues — awaiting Joshua's OK

Drafted after each crawl by `scripts/draft-upstream.mjs`, one per repo with dark workflows. **Nothing here is sent.** To approve one, change its `[ ]` to `[x]`; it is filed only when Joshua runs the manual **file-approved** workflow (typing the confirm word). Unchecked lines are never filed.

- [ ] public-apis/public-apis — CI: 2 workflows dark on master ("Tests of push & pull", "Validate links") — drafts/public-apis__public-apis.md
- [ ] morluto/rea — CI: "CI" workflow failing on main since 2026-10-29 — drafts/morluto__rea.md
- [ ] react/react — CI: "(DevTools) Regression Tests" workflow failing on main since 2026-10-11 — drafts/react__react.md
- [ ] TheAlgorithms/Python — CI: "hacktoberfest_prep" workflow failing on master since 2026-10-01 — drafts/TheAlgorithms__Python.md
- [ ] n8n-io/n8n — CI: "Security: Sync from Public" workflow not completing (runs skipped) on master since 2026-10-13 — drafts/n8n-io__n8n.md — note: latest run was skipped, not failed — probably not worth filing
- [ ] yt-dlp/yt-dlp — CI: "Core Tests" workflow not completing (runs skipped) on master since 2026-10-26 — drafts/yt-dlp__yt-dlp.md — note: latest run was skipped, not failed — probably not worth filing
- [ ] tensorflow/tensorflow — CI: "Creates a GitHub Issue when a PR Rolled back via Commit to Master" workflow not completing (runs skipped) on master since 2026-10-13 — drafts/tensorflow__tensorflow.md — note: latest run was skipped, not failed — probably not worth filing
- [ ] avelino/awesome-go — CI: "Check For Stale Repositories" workflow failing on main since 2026-10-25 — drafts/avelino__awesome-go.md
- [ ] f/prompts.chat — CI: "Build and Publish Docker Image" workflow failing on main since 2026-10-29 — drafts/f__prompts.chat.md
- [ ] langflow-ai/langflow — CI: 3 workflows dark on main ("Deploy Storybook to GitHub Pages", "Mend", "Cross-Bundle Test") — drafts/langflow-ai__langflow.md
- [ ] farion1231/cc-switch — CI: "WSL2 Nightly" workflow failing on main since 2026-10-22 — drafts/farion1231__cc-switch.md
- [ ] langchain-ai/langchain — CI: "⏰ Integration Tests" workflow failing on master since 2026-10-09 — drafts/langchain-ai__langchain.md
- [ ] microsoft/PowerToys — CI: "Publish Dev Docs Website" workflow failing on main since 2026-10-06 — drafts/microsoft__PowerToys.md
- [ ] google-gemini/gemini-cli — CI: "📋 Gemini Scheduled Issue Triage" workflow failing on main since 2026-10-29 — drafts/google-gemini__gemini-cli.md
- [ ] koala73/worldmonitor — CI: "Seed Freshness Monitor" workflow failing on main since 2026-10-29 — drafts/koala73__worldmonitor.md
- [ ] vitejs/vite — CI: "CI" workflow failing on main since 2026-10-27 — drafts/vitejs__vite.md
- [ ] headroomlabs-ai/headroom — CI: 2 workflows dark on main ("CI", "PR Governance") — drafts/headroomlabs-ai__headroom.md
- [ ] socketio/socket.io — CI: "Build examples" workflow failing on main since 2026-09-27 — drafts/socketio__socket.io.md
- [ ] zylon-ai/private-gpt — CI: "update-claude-specs" workflow failing on main since 2026-09-14 — drafts/zylon-ai__private-gpt.md
- [ ] vuejs/core — CI: "ci" workflow failing on main since 2026-10-29 — drafts/vuejs__core.md
- [ ] prettier/prettier — CI: "Prod" workflow getting cancelled on main since 2026-10-29 — drafts/prettier__prettier.md — note: infra-class dark (runner/timeout/cancel) — lower value
- [ ] bytedance/UI-TARS-desktop — CI: 3 workflows dark on main ("Scorecard supply-chain security", "UI-TARS E2E Test", "secretlint") — drafts/bytedance__UI-TARS-desktop.md
- [ ] ReactiveX/rxjs — CI: 2 workflows dark on master ("OSV vulnerability policy", "Extended property fuzzing") — drafts/ReactiveX__rxjs.md
- [ ] t8y2/dbx — CI: "CI" workflow failing on main since 2026-10-29 — drafts/t8y2__dbx.md
- [ ] yetone/magpie — CI: "Test" workflow getting cancelled on main since 2026-10-25 — drafts/yetone__magpie.md — note: infra-class dark (runner/timeout/cancel) — lower value
- [ ] activepieces/activepieces — CI: "Chat Evals" workflow failing on main since 2026-10-13 — drafts/activepieces__activepieces.md
- [ ] 1Panel-dev/MaxKB — CI: "sync2gitee" workflow failing on v2 since 2026-09-14 — drafts/1Panel-dev__MaxKB.md
- [ ] mochajs/mocha — CI: 2 workflows dark on main ("Reusable npm script runner", "Tests") — drafts/mochajs__mocha.md
- [ ] xerj-org/xerj — CI: "CI" workflow getting cancelled on main since 2026-10-29 — drafts/xerj-org__xerj.md — note: infra-class dark (runner/timeout/cancel) — lower value
- [ ] googleapis/mcp-toolbox — CI: "CF: Deploy Dev Docs" workflow failing on main since 2026-09-28 — drafts/googleapis__mcp-toolbox.md
- [ ] triggerdotdev/trigger.dev — CI: 2 workflows dark on main ("🛡️ E2E Tests: Webapp Auth (full)", "🗺️ Observability Map") — drafts/triggerdotdev__trigger.dev.md
- [ ] tangency-labs/solidcraft — CI: 3 workflows dark on main ("Docker", "Pages", "CI") — drafts/tangency-labs__solidcraft.md
- [ ] modelcontextprotocol/inspector — CI: "SDK Watch" workflow failing on main since 2026-10-28 — drafts/modelcontextprotocol__inspector.md
- [ ] storytold/vectorcraft — CI: 2 workflows dark on main ("SonarCloud", "Affinity 3 corpus") — drafts/storytold__vectorcraft.md
- [ ] awslabs/mcp — CI: "Check License Header" workflow failing on main since 2026-10-13 — drafts/awslabs__mcp.md
- [ ] modelcontextprotocol/modelcontextprotocol — CI: "Publish spec release" workflow not completing (runs skipped) on main since 2026-09-28 — drafts/modelcontextprotocol__modelcontextprotocol.md — note: latest run was skipped, not failed — probably not worth filing
- [ ] seedds/nxnative — CI: "fuzz" workflow failing on main since 2026-10-29 — drafts/seedds__nxnative.md
- [ ] xberg-io/xberg — CI: 5 workflows dark on main ("CI Rust", "CI Integrations", "CI E2E", +2 more) — drafts/xberg-io__xberg.md
- [ ] Gentleman-Programming/gentle-ai — CI: "Windows Full Suite" workflow failing on main since 2026-10-29 — drafts/Gentleman-Programming__gentle-ai.md
- [ ] webiny/webiny-js — CI: 2 workflows dark on next ("Cloud infrastructure Cleanup", "Rebuild Global Cache ("dev" branch)") — drafts/webiny__webiny-js.md
- [ ] Gentleman-Programming/engram — CI: 2 workflows dark on main ("Stable release gap audit", "CI") — drafts/Gentleman-Programming__engram.md
- [ ] expressjs/body-parser — CI: "ci" workflow getting cancelled on master since 2026-10-28 — drafts/expressjs__body-parser.md — note: infra-class dark (runner/timeout/cancel) — lower value
- [ ] modelcontextprotocol/php-sdk — CI: "conformance-weekly" workflow failing on main since 2026-10-05 — drafts/modelcontextprotocol__php-sdk.md

### Not queued — upstream already has an open issue/PR

- jestjs/jest — drafts/jestjs__jest.md — open upstream: https://github.com/jestjs/jest/issues/16382

<details><summary>Resolved — lit again (65; drafts in drafts/resolved/, kept as history)</summary>

- ~~freeCodeCamp/freeCodeCamp — CI: "CI - Node.js" workflow failing on main since 2026-10-28~~ — drafts/resolved/freeCodeCamp__freeCodeCamp.md — resolved 2026-10-28 (lit again)
- ~~openclaw/openclaw — CI: 3 workflows dark on main ("CodeQL", "CI", "ClawSweeper Dispatch")~~ — drafts/resolved/openclaw__openclaw.md — resolved 2026-10-29 (lit again)
- ~~affaan-m/ECC — CI: "CI" workflow failing on main since 2026-10-19~~ — drafts/resolved/affaan-m__ECC.md — resolved 2026-10-20 (lit again)
- ~~NousResearch/hermes-agent — CI: "Docker Build, Test, and Publish" workflow failing on main since 2026-10-28~~ — drafts/resolved/NousResearch__hermes-agent.md — resolved 2026-10-28 (lit again)
- ~~anomalyco/opencode — CI: "release" workflow getting cancelled on dev since 2026-10-28~~ — drafts/resolved/anomalyco__opencode.md — resolved 2026-10-29 (lit again)
- ~~firecrawl/firecrawl — CI: 2 workflows dark on main ("Publish PHP SDK", "Deploy Images to GHCR")~~ — drafts/resolved/firecrawl__firecrawl.md — resolved 2026-10-28 (lit again)
- ~~microsoft/vscode — CI: "CodeQL" workflow getting cancelled on main since 2026-10-28~~ — drafts/resolved/microsoft__vscode.md — resolved 2026-10-29 (lit again)
- ~~flutter/flutter — CI: "No Response" workflow failing on the default branch since 2026-10-14~~ — drafts/resolved/flutter__flutter.md — resolved 2026-10-14 (lit again 2026-10-14: https://github.com/flutter/flutter/actions/runs/38522431001; backfilled from past crawls)
- ~~huggingface/transformers — CI: "Self-hosted runner (nightly-past-ci-caller)" workflow failing to start on main since 2026-10-28~~ — drafts/resolved/huggingface__transformers.md — resolved 2026-10-29 (lit again)
- ~~langgenius/dify — CI: "Build and Push API & Web" workflow getting cancelled on main since 2026-10-28~~ — drafts/resolved/langgenius__dify.md — resolved 2026-10-29 (lit again)
- ~~open-webui/open-webui — CI: "Release to PyPI" workflow failing on the default branch since 2026-10-10~~ — drafts/resolved/open-webui__open-webui.md — resolved 2026-10-14 (lit again 2026-10-14: https://github.com/open-webui/open-webui/actions/runs/38595211615; backfilled from past crawls)
- ~~Comfy-Org/ComfyUI — CI: "Generate Pydantic Stubs from api.comfy.org" workflow failing on master since 2026-10-26~~ — drafts/resolved/Comfy-Org__ComfyUI.md — resolved 2026-10-29 (lit again)
- ~~vercel/next.js — CI: 2 workflows dark on canary ("Rspack Next.js production integration tests", "Rspack Next.js development integration tests")~~ — drafts/resolved/vercel__next.js.md — resolved 2026-10-29 (lit again)
- ~~github/spec-kit — CI: "Deploy Documentation to Pages" workflow getting cancelled on main since 2026-10-16~~ — drafts/resolved/github__spec-kit.md — resolved 2026-10-21 (lit again)
- ~~microsoft/TypeScript — CI: "CI" workflow failing on the default branch since 2026-10-16~~ — drafts/resolved/microsoft__TypeScript.md — resolved 2026-10-16 (lit again 2026-10-16: https://github.com/microsoft/TypeScript/actions/runs/38980809207; backfilled from past crawls)
- ~~tailwindlabs/tailwindcss — CI: "Integration Tests" workflow failing on main since 2026-10-19~~ — drafts/resolved/tailwindlabs__tailwindcss.md — resolved 2026-10-22 (lit again)
- ~~ruvnet/ruflo — (all dark workflows already tracked upstream)~~ — drafts/resolved/ruvnet__ruflo.md — resolved 2026-10-29 (lit again)
- ~~storytold/photocraft — CI: "CI" workflow failing on main since 2026-10-27~~ — drafts/resolved/storytold__photocraft.md — resolved 2026-10-28 (lit again)
- ~~webpack/webpack — CI: "Github Actions" workflow failing on main since 2026-10-27~~ — drafts/resolved/webpack__webpack.md — resolved 2026-10-28 (lit again)
- ~~ChromeDevTools/chrome-devtools-mcp — CI: "Compile and run tests" workflow failing on the default branch since 2026-10-14~~ — drafts/resolved/ChromeDevTools__chrome-devtools-mcp.md — resolved 2026-10-15 (lit again 2026-10-15: https://github.com/ChromeDevTools/chrome-devtools-mcp/actions/runs/38693637676; backfilled from past crawls)
- ~~DeusData/codebase-memory-mcp — CI: "CodeQL SAST" workflow getting cancelled on main since 2026-10-29~~ — drafts/resolved/DeusData__codebase-memory-mcp.md — resolved 2026-10-29 (lit again)
- ~~reactive-resume/reactive-resume — CI: 2 workflows dark on main ("Publish Docker Image", "E2E Tests")~~ — drafts/resolved/reactive-resume__reactive-resume.md — resolved 2026-10-20 (lit again)
- ~~Ebony-Vinyl/dsh-our-free-model — CI: "test" workflow failing on main since 2026-10-26~~ — drafts/resolved/Ebony-Vinyl__dsh-our-free-model.md — resolved 2026-10-26 (lit again)
- ~~colinhacks/zod — CI: "Release on npm" workflow getting cancelled on main since 2026-09-21~~ — drafts/resolved/colinhacks__zod.md — resolved 2026-10-21 (lit again)
- ~~DayuanJiang/next-ai-draw-io — CI: "Test" workflow failing on the default branch since 2026-10-17~~ — drafts/resolved/DayuanJiang__next-ai-draw-io.md — resolved 2026-10-17 (lit again 2026-10-17: https://github.com/DayuanJiang/next-ai-draw-io/actions/runs/39028375561; backfilled from past crawls)
- ~~NandhaKishorM/laya — CI: ".NET" workflow getting cancelled on main since 2026-10-25~~ — drafts/resolved/NandhaKishorM__laya.md — resolved 2026-10-26 (lit again)
- ~~Niko1221/Strata — CI: "Minimal serving runtime" workflow failing on main since 2026-10-23~~ — drafts/resolved/Niko1221__Strata.md — resolved 2026-10-24 (lit again)
- ~~oraios/serena — CI: "Tests" workflow failing on main since 2026-10-19~~ — drafts/resolved/oraios__serena.md — resolved 2026-10-20 (lit again)
- ~~sequelize/sequelize — CI: "Stale issue handler" workflow failing on main since 2026-09-25~~ — drafts/resolved/sequelize__sequelize.md — resolved 2026-10-26 (lit again)
- ~~PrefectHQ/fastmcp — CI: "Tests" workflow failing on main since 2026-10-27~~ — drafts/resolved/PrefectHQ__fastmcp.md — resolved 2026-10-29 (lit again)
- ~~eslint/eslint — CI: "Update Test Ecosystem Plugins" workflow failing on the default branch since 2026-10-12~~ — drafts/resolved/eslint__eslint.md — resolved 2026-10-12 (lit again 2026-10-12: https://github.com/eslint/eslint/actions/runs/38187322244; backfilled from past crawls)
- ~~Automattic/mongoose — CI: 2 workflows dark on master ("Encryption Tests", "Test")~~ — drafts/resolved/Automattic__mongoose.md — resolved 2026-10-21 (lit again)
- ~~rollup/rollup — CI: "CI" workflow getting cancelled on master since 2026-10-28~~ — drafts/resolved/rollup__rollup.md — resolved 2026-10-28 (lit again)
- ~~pascalorg/editor — CI: "CI" workflow failing on main since 2026-10-23~~ — drafts/resolved/pascalorg__editor.md — resolved 2026-10-23 (lit again)
- ~~czlonkowski/n8n-mcp — CI: "Test Suite" workflow failing on main since 2026-10-24~~ — drafts/resolved/czlonkowski__n8n-mcp.md — resolved 2026-10-28 (lit again)
- ~~nukeop/nuclear — CI: "CI" workflow failing on the default branch since 2026-10-12~~ — drafts/resolved/nukeop__nuclear.md — resolved 2026-10-13 (lit again 2026-10-13: https://github.com/nukeop/nuclear/actions/runs/38485681034; backfilled from past crawls)
- ~~storytold/pdfcraft — CI: "FreeBSD" workflow failing on main since 2026-10-28~~ — drafts/resolved/storytold__pdfcraft.md — resolved 2026-10-29 (lit again)
- ~~robbietilton/Compositor — CI: "Verify" workflow failing on main since 2026-10-24~~ — drafts/resolved/robbietilton__Compositor.md — resolved 2026-10-26 (lit again)
- ~~KnifeLemon/Filee — CI: "CI" workflow getting cancelled on main since 2026-10-29~~ — drafts/resolved/KnifeLemon__Filee.md — resolved 2026-10-29 (lit again)
- ~~storytold/wordcraft — CI: "CI" workflow failing on main since 2026-10-26~~ — drafts/resolved/storytold__wordcraft.md — resolved 2026-10-28 (lit again)
- ~~Droid-Deck/DroidDeck — CI: "Build APK" workflow failing on main since 2026-10-29~~ — drafts/resolved/Droid-Deck__DroidDeck.md — resolved 2026-10-29 (lit again)
- ~~storytold/filmcraft — CI: "SonarCloud" workflow getting cancelled on main since 2026-10-23~~ — drafts/resolved/storytold__filmcraft.md — resolved 2026-10-24 (lit again)
- ~~open-metadata/OpenMetadata — CI: 3 workflows dark on main ("Maven Collate Tests", "Integration Tests - MySQL + Elasticsearch", "SonarCloud UI Nightly")~~ — drafts/resolved/open-metadata__OpenMetadata.md — resolved 2026-10-29 (lit again)
- ~~storytold/lightcraft — CI: "SonarCloud" workflow getting cancelled on main since 2026-10-23~~ — drafts/resolved/storytold__lightcraft.md — resolved 2026-10-26 (lit again)
- ~~modelcontextprotocol/typescript-sdk — CI: "Release" workflow failing on main since 2026-10-22~~ — drafts/resolved/modelcontextprotocol__typescript-sdk.md — resolved 2026-10-23 (lit again)
- ~~OpenByteInc/QuantDinger — CI: "Backend CI" workflow failing on main since 2026-10-26~~ — drafts/resolved/OpenByteInc__QuantDinger.md — resolved 2026-10-27 (lit again)
- ~~shihabal3amri/DiPlay — CI: "Android checks" workflow failing on main since 2026-10-24~~ — drafts/resolved/shihabal3amri__DiPlay.md — resolved 2026-10-27 (lit again)
- ~~0xJacky/nginx-ui — CI: "E2E ACME" workflow failing on the default branch since 2026-10-15~~ — drafts/resolved/0xJacky__nginx-ui.md — resolved 2026-10-16 (lit again 2026-10-16: https://github.com/0xJacky/nginx-ui/actions/runs/38956900281; backfilled from past crawls)
- ~~apify/apify-mcp-server — CI: 2 workflows dark on the default branch ("CI (master)", "CI (master evals)")~~ — drafts/resolved/apify__apify-mcp-server.md — resolved 2026-10-15 (lit again 2026-10-15: https://github.com/apify/apify-mcp-server/actions/runs/38733212683; backfilled from past crawls)
- ~~jub0t/Concat — CI: "CI" workflow failing on main since 2026-10-21~~ — drafts/resolved/jub0t__Concat.md — resolved 2026-10-24 (lit again)
- ~~mcp-use/mcp-use — CI: "CI" workflow failing on the default branch since 2026-10-14~~ — drafts/resolved/mcp-use__mcp-use.md — resolved 2026-10-17 (lit again 2026-10-17: https://github.com/mcp-use/mcp-use/actions/runs/38986854028; backfilled from past crawls)
- ~~CursorTouch/Windows-MCP — CI: "Tests" workflow failing on main since 2026-10-25~~ — drafts/resolved/CursorTouch__Windows-MCP.md — resolved 2026-10-26 (lit again)
- ~~homarr-labs/dashboard-icons — CI: "Add Icon to Collection" workflow failing on main since 2026-09-20~~ — drafts/resolved/homarr-labs__dashboard-icons.md — resolved 2026-10-21 (lit again)
- ~~isaacs/node-glob — CI: "typedoc" workflow failing on main since 2026-10-05~~ — drafts/resolved/isaacs__node-glob.md — resolved 2026-10-28 (lit again)
- ~~crmne/spotifast — CI: 2 workflows dark on the default branch ("CI", "Docs")~~ — drafts/resolved/crmne__spotifast.md — resolved 2026-10-14 (lit again 2026-10-14: https://github.com/crmne/spotifast/actions/runs/38514072197; backfilled from past crawls)
- ~~storytold/effectcraft — CI: "FreeBSD" workflow getting cancelled on main since 2026-10-19~~ — drafts/resolved/storytold__effectcraft.md — resolved 2026-10-23 (lit again)
- ~~firecrawl/firecrawl-mcp-server — CI: 2 workflows dark on main ("Publish Package", "Deploy Images to GHCR")~~ — drafts/resolved/firecrawl__firecrawl-mcp-server.md — resolved 2026-10-28 (lit again)
- ~~BrowserMCP/mcp — CI: "CI" workflow failing on main since 2026-10-27~~ — drafts/resolved/BrowserMCP__mcp.md — resolved 2026-10-29 (lit again)
- ~~qingjian-team/qingjian — CI: "ci" workflow failing on main since 2026-10-20~~ — drafts/resolved/qingjian-team__qingjian.md — resolved 2026-10-21 (lit again)
- ~~storytold/cadcraft — CI: "Release" workflow failing on main since 2026-10-07~~ — drafts/resolved/storytold__cadcraft.md — resolved 2026-10-25 (lit again)
- ~~kucherenko/jscpd — CI: "Nightly audit" workflow failing on the default branch since 2026-10-17~~ — drafts/resolved/kucherenko__jscpd.md — resolved 2026-10-18 (lit again 2026-10-18: https://github.com/kucherenko/jscpd/actions/runs/39103608037; backfilled from past crawls)
- ~~amagine-ai/Amagine3D — CI: "CI" workflow failing on the default branch since 2026-10-14~~ — drafts/resolved/amagine-ai__Amagine3D.md — resolved 2026-10-15 (lit again 2026-10-15: https://github.com/amagine-ai/Amagine3D/actions/runs/38678072831; backfilled from past crawls)
- ~~modelcontextprotocol/rust-sdk — CI: "Triage" workflow not completing (runs skipped) on main since 2026-09-15~~ — drafts/resolved/modelcontextprotocol__rust-sdk.md — resolved 2026-10-27 (lit again)
- ~~prisma/prisma-cli — CI: 2 workflows dark on main ("Publish to npm", "End-to-end (real API)")~~ — drafts/resolved/prisma__prisma-cli.md — resolved 2026-10-22 (lit again)
- ~~fitzyracing1/darks-relit-demo — CI: "light" workflow failing on the default branch since 2026-10-13~~ — drafts/resolved/fitzyracing1__darks-relit-demo.md — resolved 2026-10-13 (lit again 2026-10-13: https://github.com/fitzyracing1/darks-relit-demo/actions/runs/38477851629; backfilled from past crawls)

</details>
<!-- drafts:end -->
