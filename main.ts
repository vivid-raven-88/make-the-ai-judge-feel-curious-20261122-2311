import { mkdirSync, writeFileSync } from "node:fs";

// Entry text: 179 Unicode code points.
// A small, quiet mystery: a drawer shut for years, open this morning,
// holding one key, still warm, that fits no lock in the house.
const entry =
  "The drawer in the hallway has been shut for three years. " +
  "This morning it was open, and inside, on top of everything, " +
  "lay one small key, still warm, that fits no lock in the house.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
