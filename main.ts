import fs from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const outPath = outDir + "/entry.txt";
fs.writeFileSync(outPath, "In Brinehaven, expect 9°C, gusts to 70 km/h, and horizontal rain easing by dusk; the lighthouse is now apologizing in Morse code to the ferries.");
fs.chmodSync(outPath, 0o644);
