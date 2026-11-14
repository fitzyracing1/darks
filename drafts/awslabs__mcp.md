<!-- dark-draft: awslabs/mcp -->
<!-- draft-state: ready -->
# Upstream issue draft: awslabs/mcp

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/awslabs/mcp/issues/new
- **Stars:** 9917 · **Generated:** 2026-11-14T06:41:55.262Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "pre-commit" workflow failing on main since 2026-11-13
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **pre-commit** workflow (`.github/workflows/pre-commit.yml`) on `main` has been failing since 2026-11-13. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/awslabs/mcp/actions/runs/43516436049 — dark (conclusion: `failure`), 2026-11-13 22:06 UTC
- Dark since: 2026-11-13 22:06 UTC (first run of the current streak)
- Job / step: `Precommit .` → `Run SKIP="$SKIP" pre-commit run --show-diff-on-failure --color=always --all-files`
- Likely cause: mixed line ending........................................................Failed

<details><summary>End of the job log</summary>

```
@@ -18,7 +18,7 @@ NOTICE                                                         @awslabs/mcp-admi
 ## Alphabetical listing of MCP servers
-/src/amazon-bedrock-agentcore-mcp-server                       @awslabs/mcp-admins @awslabs/mcp-maintainers  @divekarshubham @AlexanderRichey @sundargthb @jariy17 @Sudip2403
+/src/amazon-bedrock-agentcore-mcp-server                       @awslabs/mcp-admins @awslabs/mcp-maintainers  @divekarshubham @AlexanderRichey @sundargthb @jariy17 @Sudip2403
 /src/amazon-kendra-index-mcp-server                            @awslabs/mcp-admins @awslabs/mcp-maintainers  @tomron-aws
 /src/amazon-keyspaces-mcp-server                               @awslabs/mcp-admins @awslabs/mcp-maintainers  @jcshepherd
 /src/amazon-mq-mcp-server                                      @awslabs/mcp-admins @awslabs/mcp-maintainers  @hashimsharkh @BenAtAmazon
##[error]Process completed with exit code 1.
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining mcp!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
