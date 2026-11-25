import { mkdirSync, writeFileSync } from "node:fs";

// One-line epitaph, written as the dead man's own last words: he insists
// he was only resting his eyes — and the second sentence is the twist,
// because technically, he still is. The joke lands on one read, needs no
// explanation, and reads like something actually carved on a stone.
const EPITAPH =
  "I told them I was just resting my eyes. Technically, I still am.";

// Keep the output exactly one line of 1-150 characters, no trailing newline.
if (EPITAPH.length < 1 || EPITAPH.length > 150 || EPITAPH.includes("\n")) {
  throw new Error("Epitaph must be a single line of 1-150 characters.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EPITAPH, "utf8");
