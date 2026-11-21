// Entry: a one-line joke about the demo that only breaks during the demo.
// Writes the joke to /output/entry.txt with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "Cannot reproduce: it worked until the demo started.";
const OUT = "/output/entry.txt";

if (JOKE.split("\n").length !== 1) {
  throw new Error("joke must be exactly one line");
}
if ([...JOKE].length < 1 || [...JOKE].length > 280) {
  throw new Error("joke must be 1-280 code points");
}
if (JOKE.trim().length === 0) {
  throw new Error("joke must not be empty");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, JOKE, "utf8");
