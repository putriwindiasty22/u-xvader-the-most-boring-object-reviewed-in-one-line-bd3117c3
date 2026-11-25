import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The rubber band: spends years holding your junk drawer together, then snaps without warning and stings you for your trouble.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
