// v3: one-line joke about the demo, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "Agent passed tests; demo cannot reproduce.";
const OUT = "/output/entry.txt";

const points = [...JOKE];
if (!JOKE.trim()) throw new Error("joke is blank");
if (JOKE.includes("\n")) throw new Error("joke must be one line");
if (points.length < 1 || points.length > 280) {
  throw new Error("joke must be 1-280 code points");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, JOKE, "utf8");
console.log(`wrote ${points.length} code points to ${OUT}`);
