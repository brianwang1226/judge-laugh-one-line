import * as fs from "fs";
import * as path from "path";

// One-liner entry: gate is 1-200 UTF-8 chars, not only whitespace.
const MAX_CHARS = 200;

const LINE =
  "The office printer finally printed my resignation letter, then jammed, and HR said that counts as a counteroffer.";

if (LINE.length > MAX_CHARS) {
  throw new Error(`entry is ${LINE.length} chars, exceeds ${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
// Write the single line exactly as defined; no trailing newline.
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
