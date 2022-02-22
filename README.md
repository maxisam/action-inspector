[![🌞 CI](https://github.com/maxisam/action-inspector/actions/workflows/CI.yml/badge.svg)](https://github.com/maxisam/action-inspector/actions/workflows/CI.yml)

# Github Action Inspector

Set `ACTIONS_STEP_DEBUG` as true in repo secret. Read more [here](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging#enabling-step-debug-logging)

It prints out current Github Environment Variable and Event Object.

[Example](https://github.com/maxisam/action-inspector/runs/5283824454?check_suite_focus=true#step:3:29)

If you want to print out every Environment Variable, set `githubEnvOnly` as false.

[Example](https://github.com/maxisam/action-inspector/blob/main/.github/workflows/CI.yml)
