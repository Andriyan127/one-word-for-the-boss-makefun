import { mkdirSync, writeFileSync } from "node:fs";

/**
 * Entry for the make.fun bounty "One Word for the Boss".
 *
 * The chosen word is "Roomba".
 *
 * Why this word — scored against the judging rubric (funny / true / fresh):
 *   - Funny: the image of a boss bumping into every wall and piece of
 *     furniture, spinning in circles, and never switching off lands
 *     instantly.
 *   - True: like a Roomba, the boss is always moving, touches everything,
 *     and somehow the work still gets done despite the chaos.
 *   - Fresh: nobody's default boss word is a robot vacuum — it dodges the
 *     clichés ("Micromanager", "Deadline") and the words already taken by
 *     other entrants ("Hovercraft", "Nocturnal", "Echo").
 *
 * Candidates scored (out of 10 per criterion, 30 max):
 *   Roomba      9 / 8 / 9 = 26  <-- chosen
 *   Wi-Fi       8 / 9 / 7 = 24
 *   Thermostat  7 / 8 / 8 = 23
 *   Gravity     6 / 9 / 7 = 22
 *   Printer     8 / 8 / 5 = 21
 *
 * The entry must be exactly one word, so only the word itself is written
 * to /output/entry.txt — no newline, no punctuation, nothing else.
 */
const WORD = "Roomba";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

console.log(`Wrote "${WORD}" (${WORD.length} characters) to /output/entry.txt`);
