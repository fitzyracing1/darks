// written-issue — issue bodies for fitzyracing1/darks that explain the problem in plain sentences.
// Layout: hidden dark-key comment, What's broken, The error, Why, How to fix, then the facts table under Details.
// Words: lit / dark only.
import { logTail, isGenericCause, darkVerb, redact } from './drafts.mjs';

const esc = (s) => String(s ?? '').replace(/\|/g, '\\|');
const tick = (s) => String(s ?? '').replace(/`/g, "'");
const et = (t) => (t ? new Date(t).toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short' }) + ' ET' : '—');
const day = (t) => (t ? new Date(t).toLocaleDateString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium' }) : null);

/** Up to `max` relevant lines from a raw job log (secrets redacted, timestamps/ANSI stripped). */
export function errorLines(text, { max = 20 } = {}) {
  if (!text) return [];
  const lines = logTail(text, { max: max * 4, width: 240 }).tail.map((l) => redact(l).replace(/```/g, "'''"));
  // collapse runs of near-identical lines (same text once the first token is dropped, e.g. one line per advisory id)
  const shape = (l) => l.trim().replace(/^\S+\s*/, '').replace(/\d+/g, '#');
  const out = [];
  for (let i = 0; i < lines.length;) {
    let j = i + 1;
    while (j < lines.length && shape(lines[j]) === shape(lines[i]) && shape(lines[i]).length > 10) j++;
    out.push(lines[i]);
    if (j - i > 2) out.push(`… ${j - i - 1} more similar lines`); else if (j - i === 2) out.push(lines[i + 1]);
    i = j;
  }
  return out.slice(-max);
}

const CLASS_WHY = {
  infra: 'This looks like a CI infrastructure problem (runner, time limit, cancellation or a skipped/blocked run) rather than a bug in the code.',
  external: 'This looks like an outside dependency problem: a network service, registry, credential/secret, or a deprecated tool the workflow relies on.',
  flaky: 'This looks flaky: a timeout or intermittent failure that may pass on a re-run.',
  'code bug': 'This looks like a real problem in the repo itself (code, tests, config or lockfile), not the CI machinery.',
};

/** Suggested fix by specific pattern first, then by cause class. null = nothing proven or suggested. */
export function suggestedFix(cause = '', cls = '', conclusion = '') {
  const c = String(cause).toLowerCase();
  if (/err_pnpm_outdated_lockfile|lockfile.*(out of (date|sync)|outdated)|frozen-lockfile|npm ci.*in sync/.test(c)) return 'Regenerate the lockfile (e.g. `pnpm install` / `npm install`) and commit it so it matches package.json.';
  if (/no space left|disk quota/.test(c)) return 'Free disk space on the runner (remove unused toolchains/caches early in the job) or use a larger runner.';
  if (/rate limit|429|toomanyrequests/.test(c)) return 'Authenticate the request or add a retry/backoff; re-run once the rate limit resets.';
  if (/bad credentials|unauthorized|401|403|forbidden|secret|token|api key/.test(c)) return 'Check that the secret/token the workflow uses exists, has not expired, and has the needed permissions.';
  if (/deprecated|no longer supported/.test(c)) return 'Update the deprecated action or tool to its current supported version.';
  if (conclusion === 'skipped') return 'Nothing is necessarily broken: the latest run was skipped. Check the workflow\'s `if:` conditions or trigger if the run is expected to happen.';
  if (conclusion === 'action_required') return 'A maintainer needs to approve the run in the Actions tab.';
  if (conclusion === 'cancelled') return 'Check whether a newer run or a concurrency group cancelled it; if it keeps getting cancelled, raise `timeout-minutes` or fix the concurrency setup.';
  if (conclusion === 'timed_out') return 'Raise the job\'s `timeout-minutes` or find the step that hangs.';
  if (cls === 'flaky') return 'Re-run the workflow; if it goes dark again, make the slow/intermittent test or step more robust (longer timeout, retry).';
  if (cls === 'infra') return 'Re-run the workflow; if it stays dark, look at the runner setup (time limits, disk, runner availability).';
  return null;
}

/**
 * Plain-English issue body.
 * e: darks.json entry. info: { job, step, branch, errorLines:[], logError, fix:{branchUrl,runUrl}, queued:{action,note} }
 */
export function writtenIssueBody(e, info = {}) {
  const where = info.branch ? `the \`${info.branch}\` branch` : 'the default branch';
  const isDark = e.light === 'dark';
  const out = [`<!-- dark-key: ${e.key} -->`, "## What's broken", ''];
  if (isDark) {
    let s = `The **${e.workflow}** workflow (\`${e.path}\`) in [${e.repo}](https://github.com/${e.repo}) is dark: its latest run on ${where} is ${darkVerb(e.conclusion)}`;
    s += info.job ? ` in the **${tick(info.job)}** job${info.step ? `, at the **${tick(info.step)}** step` : ''}.` : '.';
    if (e.darkSince) s += ` It has been dark since ${day(e.darkSince)}.`;
    out.push(s);
  } else {
    out.push(`The **${e.workflow}** workflow (\`${e.path}\`) in [${e.repo}](https://github.com/${e.repo}) was dark and is now lit again${e.relitAt ? ` (since ${day(e.relitAt)})` : ''}.`);
  }
  out.push('', '## The error', '');
  if (info.noJobs) out.push(`The run went dark before any job started (it has no jobs), so there is no job log. See [the run](${e.run}); GitHub shows the reason at the top of that page.`);
  else if (info.errorLines?.length) out.push(`From the job log of [the latest dark run](${e.run}):`, '', '```', ...info.errorLines, '```');
  else if (!isGenericCause(e.cause)) out.push(`The job log could not be read${info.logError ? ` (${info.logError})` : ''}; the run's error annotation says:`, '', '```', redact(e.cause), '```');
  else out.push(`The job log could not be read${info.logError ? ` (${info.logError})` : ''}${e.conclusion && e.conclusion !== 'failure' ? `, and the run ended as \`${e.conclusion}\` without an error message` : ''}. See [the run](${e.run}).`);
  out.push('', '## Why', '');
  const specific = !isGenericCause(e.cause);
  const conclusionInfra = ['cancelled', 'timed_out', 'startup_failure', 'skipped', 'action_required'].includes(e.conclusion);
  if (info.noJobs) out.push('Likely the workflow file itself is invalid: on GitHub a run that ends dark with no jobs usually means the file could not be parsed or a job could not be set up.');
  else if (specific || conclusionInfra) {
    out.push(`${CLASS_WHY[e.class] || 'Not yet diagnosed.'}${specific ? ` The key message is: ${tick(e.cause)}` : ''}`);
  } else out.push('Not yet diagnosed. The crawler only knows which step exited with an error; the log above is the best lead.');
  out.push('', '## How to fix', '');
  if (info.fix?.branchUrl) out.push(`A proven fix exists: [${info.fix.branch || 'fix branch'}](${info.fix.branchUrl}) makes this workflow lit on a fork${info.fix.runUrl ? ` ([lit run](${info.fix.runUrl}))` : ''}.`);
  else if (info.queued) out.push(`A fix is queued for Joshua's approval in [QUEUE.md](https://github.com/fitzyracing1/darks/blob/main/QUEUE.md): ${tick(info.queued.action)}${info.queued.note ? ` — ${tick(info.queued.note)}` : ''}`);
  else {
    const sug = info.noJobs ? 'Open the run page to see the workflow-file error GitHub reports, fix that line in the workflow YAML, and push.' : (specific || conclusionInfra) ? suggestedFix(e.cause, e.class, e.conclusion) : null;
    out.push(sug ? `Suggested (not yet tried): ${sug}` : 'Needs investigation.');
  }
  out.push('', '## Details', '', '| field | value |', '|---|---|',
    `| repo | [${e.repo}](https://github.com/${e.repo}) (${e.stars ?? '?'} ★) |`,
    `| workflow | \`${e.path}\` (${esc(e.workflow)}) |`,
    `| light | ${isDark ? '○ dark' : '● lit (relit)'} |`,
    `| dark since | ${et(e.darkSince)} |`,
    `| cause | ${esc(e.cause)} |`,
    `| class | ${e.class} |`,
    `| run | ${e.run} |`,
    `| status | ${e.status} |`);
  if (e.relitAt) out.push(`| relit | ${et(e.relitAt)}${e.relitRun ? ` — ${e.relitRun}` : ''} |`);
  out.push('', 'Found by the [dark crawler](https://github.com/fitzyracing1/darks) with the strict rule: latest completed push/schedule run on the default branch within 30 days, per workflow; success = lit, anything else = dark.',
    '', `_This issue lives only in fitzyracing1/darks. Nothing is posted to ${e.repo}; any upstream action waits in the approval queue._`);
  return out.join('\n');
}
