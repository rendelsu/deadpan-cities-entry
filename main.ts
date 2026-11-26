import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const forecast =
  "Brinehaven: 9 degrees Celsius, gusts to 70 km/h, horizontal rain easing by dusk as the lighthouse Morse-codes an apology to the ferry.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, forecast + "\n", "utf8");
chmodSync(outFile, 0o644);
