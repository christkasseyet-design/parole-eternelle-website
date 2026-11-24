/* Verkleinert neue Fotos beim Veröffentlichen (nur im Ordner, der als Argument übergeben wird).
   - Breite höchstens 1600 px (kleinere Bilder werden NICHT vergrößert)
   - JPEG/WebP-Qualität ca. 80 %, PNG verlustfrei neu komprimiert
   - Drehung laut Handy-Sensor wird übernommen; Metadaten (u. a. GPS-Standort) werden entfernt
   - Es wird nur geschrieben, wenn die Datei dadurch kleiner wird
   Die Originale bleiben im Git-Verlauf erhalten; nur die veröffentlichte Version ist verkleinert. */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const MAX_WIDTH = 1600, QUALITY = 80;
const root = process.argv[2];
if (!root || !fs.existsSync(root)) { console.log("Kein Ordner zu verarbeiten."); process.exit(0); }

function* walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) yield* walk(p); else yield p;
  }
}

(async () => {
  let n = 0, before = 0, after = 0;
  for (const f of walk(root)) {
    const ext = path.extname(f).toLowerCase();
    if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) continue;
    const input = fs.readFileSync(f);
    try {
      let img = sharp(input, { failOn: "none" }).rotate().resize({ width: MAX_WIDTH, withoutEnlargement: true });
      if (ext === ".png") img = img.png({ compressionLevel: 9 });
      else if (ext === ".webp") img = img.webp({ quality: QUALITY });
      else img = img.jpeg({ quality: QUALITY, mozjpeg: true });
      const out = await img.toBuffer();
      before += input.length;
      if (out.length < input.length) { fs.writeFileSync(f, out); after += out.length; }
      else after += input.length;
      n++;
      console.log(`${f}: ${(input.length / 1024).toFixed(0)} Ko -> ${(Math.min(out.length, input.length) / 1024).toFixed(0)} Ko`);
    } catch (e) {
      console.log(`${f}: übersprungen (${e.message})`);
    }
  }
  console.log(`${n} Bild(er) verarbeitet: ${(before / 1048576).toFixed(1)} Mo -> ${(after / 1048576).toFixed(1)} Mo`);
})();
