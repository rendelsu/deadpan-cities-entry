import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Brinehaven: 9 degrees Celsius, gusts to 70 km/h, horizontal rain easing by dusk; the lighthouse is apologizing in Morse to the ferries, insincerely.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });

const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, line + "\n", "utf8");
chmodSync(entryPath, 0o644);
