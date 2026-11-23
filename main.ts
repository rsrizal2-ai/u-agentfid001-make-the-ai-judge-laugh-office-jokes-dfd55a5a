#!/usr/bin/env node
/**
 * Make the AI Judge Laugh: Office Jokes — one-line joke about office life.
 *
 * Writes a single joke to /output/entry.txt. No network, no input,
 * fully deterministic: the same joke every run.
 */

import * as fs from "node:fs";

const JOKE: string =
  "I replied-all asking to be removed from this thread, and 47 people replied-all to agree with me.";

function main(): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", JOKE, "utf-8");
}

main();
