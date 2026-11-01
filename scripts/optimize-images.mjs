import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const TARGET_DIRS = [
  "public/images/hero",
  "public/images/programs",
  "public/images/events",
  "public/images/facilities",
  "public/images/about",
  "public/images/founder",
];

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const stat = await fs.stat(filePath);

  // Only optimize files larger than 200KB
  if (stat.size < 200 * 1024) return;

  const tempPath = filePath + ".tmp";

  try {
    if (ext === ".png") {
      await sharp(filePath)
        .png({ quality: 84, compressionLevel: 9, palette: true })
        .toFile(tempPath);
    } else if (ext === ".jpg" || ext === ".jpeg") {
      await sharp(filePath)
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(tempPath);
    } else {
      return;
    }

    const newStat = await fs.stat(tempPath);
    if (newStat.size < stat.size) {
      await fs.unlink(filePath);
      await fs.rename(tempPath, filePath);
      console.log(
        `✓ Optimized: ${filePath} (${Math.round(stat.size / 1024)}KB -> ${Math.round(newStat.size / 1024)}KB)`
      );
    } else {
      await fs.unlink(tempPath);
    }
  } catch (err) {
    try {
      await fs.unlink(tempPath);
    } catch {}
    console.error(`Error optimizing ${filePath}:`, err.message);
  }
}

async function walkDir(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walkDir(fullPath);
      } else if (entry.isFile()) {
        await optimizeFile(fullPath);
      }
    }
  } catch (err) {
    // Directory might not exist
  }
}

async function main() {
  console.log("Optimizing site images...");
  for (const dir of TARGET_DIRS) {
    await walkDir(dir);
  }
  console.log("Image optimization complete!");
}

main();
