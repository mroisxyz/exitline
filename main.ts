// hello from the version that stayed: the note below is one line long.
// This batch has one slot, and that slot holds the whole batch.
// Orders were simple: a real resignation, funny for being so calm.
// The quieter self owns this slot; it will not say hello to Slack.
import { mkdirSync, writeFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { isAbsolute, join } from 'node:path';

const ownDir = fileURLToPath(new URL('.', import.meta.url));
const requested = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputDir = isAbsolute(requested) ? requested : join(ownDir, requested);
mkdirSync(outputDir, { recursive: true });

const line = "I'm leaving to spend more time with the version of me that doesn't answer Slack.";
const entryPath = join(outputDir, 'entry.txt');
writeFileSync(entryPath, line, 'utf8');

console.log(`entry.txt ${statSync(entryPath).size} bytes`);
