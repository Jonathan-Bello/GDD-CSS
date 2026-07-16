import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = path.resolve(import.meta.dirname, "..");
const imageRoot = path.join(root, "src", "assets", "imgs");
const removeOriginals = process.argv.includes("--remove-originals");

async function collectRasterFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectRasterFiles(entryPath);
    return /\.(png|jpe?g)$/i.test(entry.name) ? [entryPath] : [];
  }));
  return files.flat();
}

const rasterFiles = await collectRasterFiles(imageRoot);
for (const source of rasterFiles) {
  const target = source.replace(/\.(png|jpe?g)$/i, ".webp");
  await sharp(source).webp({ quality: 80, effort: 6 }).toFile(target);
  if (removeOriginals) await fs.unlink(source);
  console.log(`${path.relative(root, source)} -> ${path.relative(root, target)}`);
}

const faviconSource = path.join(root, "public", "favicon.svg");
const faviconDir = path.join(root, "tmp", "favicon");
await fs.mkdir(faviconDir, { recursive: true });
const faviconPngs = await Promise.all([16, 32, 48].map(async (size) => {
  const pngPath = path.join(faviconDir, `favicon-${size}.png`);
  await sharp(faviconSource).resize(size, size).png().toFile(pngPath);
  return pngPath;
}));
const ico = await pngToIco(faviconPngs);
await fs.writeFile(path.join(root, "public", "favicon.ico"), ico);
await fs.rm(faviconDir, { recursive: true, force: true });
