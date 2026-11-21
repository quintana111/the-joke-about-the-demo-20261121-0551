import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside an AI coding agent.
// Written as a single line to the absolute path /output/entry.txt (UTF-8).
const JOKE =
  "It worked on my machine, in staging, in rehearsal — just never once during the demo.";

// Runtime guard: validate the joke before writing anything.
const CODE_POINTS = [...JOKE].length;
if (JOKE.length === 0 || JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("JOKE must be exactly one line");
}
if (CODE_POINTS < 1 || CODE_POINTS > 280) {
  throw new Error("JOKE must be 1-280 Unicode code points");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
