import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside an AI coding agent.
// Written as a single line to the absolute path /output/entry.txt (UTF-8).
const JOKE =
  "My coding agent finished the feature in four minutes, and I've spent four hours reading its code just to pretend I reviewed it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
