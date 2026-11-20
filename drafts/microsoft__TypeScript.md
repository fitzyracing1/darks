<!-- dark-draft: microsoft/TypeScript -->
<!-- draft-state: ready -->
# Upstream issue draft: microsoft/TypeScript

- **Status:** ready to file — awaiting Joshua's OK (check its box in QUEUE.md)
- **Would be filed at:** https://github.com/microsoft/TypeScript/issues/new
- **Stars:** 111865 · **Generated:** 2026-11-20T06:46:04.904Z
- Nothing in this file has been sent anywhere.

## Suggested title

<!-- BEGIN TITLE -->
CI: "Close issues" workflow failing on main since 2026-11-19
<!-- END TITLE -->

## Body

<!-- BEGIN BODY -->
Hi! The **Close issues** workflow (`.github/workflows/close-issues.yml`) on `main` has been failing since 2026-11-19. Here is what I saw, in case it's useful:

- Latest run on `main`: https://github.com/microsoft/TypeScript/actions/runs/44651387195 — dark (conclusion: `failure`), 2026-11-20 01:08 UTC
- Dark since: 2026-11-19 01:08 UTC (first run of the current streak)
- Job / step: `close-issues` → `Run azure/login@a641126d1b8aa4d1fa005f4f92df94a3a4c4c906`
- Likely cause: Login failed with Error: The process '/usr/bin/az' failed with exit code 1. Double check if the 'auth-type' is correct. Refer to https://github.com/Azure/login#readme for more information.

<details><summary>End of the job log</summary>

```
Done setting cloud: "azurecloud"
Federated token details:
 issuer - https://token.actions.githubusercontent.com
 subject claim - repository_owner_id:6154722:repository_id:20929025:environment:azure
 audience - api://AzureADTokenExchange
 job_workflow_ref - microsoft/TypeScript/.github/workflows/close-issues.yml@refs/heads/main
Attempting Azure CLI login by using OIDC...
##[error]AADSTS53003: Access has been blocked by Conditional Access policies. The access policy does not allow token issuance. Trace ID: 5aa6ab86-01f7-4aee-9c3e-00efaea30400 Correlation ID: 095db07a-c252-407a-a128-2b993…
```

</details>

If this is already known or expected, feel free to close. Thanks for maintaining TypeScript!

---
<sub>Found by the [dark crawler](https://github.com/fitzyracing1/darks), which checks the latest default-branch run of each workflow in popular repos. Reviewed and filed by hand.</sub>
<!-- END BODY -->
