import * as core from '@actions/core';
import {readFileSync} from 'fs';
import {inspect} from 'util';

async function run(): Promise<void> {
  const GITHUB_ENV = Object.entries(process.env)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .filter(([key]) => key.startsWith('GITHUB'))
    .map(([key, value]) => `${key}: ${value}`);
  core.debug(`💥Github ENV VARIABLE: ${inspect(GITHUB_ENV)}`);
  const EVENT_STR = readFileSync(process.env['GITHUB_EVENT_PATH'] as string, 'utf8');
  core.debug(`💥Github EVENT: ${inspect(JSON.parse(EVENT_STR))}`);
}

run();
