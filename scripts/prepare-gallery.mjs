import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const galleryDir = path.join(rootDir, "public", "images", "gallery");
const manifestPath = path.join(rootDir, "src", "data", "gallery-manifest.json");

export const CATEGORIES = [
  {
    id: "graduation",
    label: "Graduation Day",
    captionLabel: "GRADUATION DAY",
    tagline: "Celebrating every milestone",
  },
  {
    id: "certificates",
    label: "Certificates",
    captionLabel: "CERTIFICATES",
    tagline: "Recognizing every effort",
  },
  {
    id: "awards",
    label: "Awards",
    captionLabel: "AWARDS",
    tagline: "Honoring excellence",
  },
  {
    id: "classroom",
    label: "Classroom",
    captionLabel: "CLASSROOM",
    tagline: "Where confidence begins",
  },
  {
    id: "outdoor",
    label: "Outdoor & Fun",
    captionLabel: "OUTDOOR FUN",
    tagline: "Learning and laughing together",
  },
];

const VALID_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function prepareGallery() {
  console.log("--------------------------------------------------");
  console.log("Rebuilding The Educatee Centre Gallery Data...");
  console.log("--------------------------------------------------");

  // 1. Ensure folders exist
  for (const cat of CATEGORIES) {
    const dir = path.join(galleryDir, cat.id);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  // 2. Ensure README.txt exists
  const readmePath = path.join(galleryDir, "README.txt");
  const readmeContent = `======================================================================
THE EDUCATEE CENTRE — PHOTO GALLERY DIRECTORY STRUCTURE & INSTRUCTIONS
======================================================================

Place your photos into the appropriate category folder below:

1. /public/images/gallery/graduation/
   - Graduation celebrations, convocation moments, and course completions.
   - Label on site: "Graduation Day"
   - Home Caption: GRADUATION DAY / Celebrating every milestone

2. /public/images/gallery/certificates/
   - Certificate presentations and students receiving official course completion awards.
   - Label on site: "Certificates"
   - Home Caption: CERTIFICATES / Recognizing every effort

3. /public/images/gallery/awards/
   - CEO Award recipients, special honors, medals, and achievement recognitions.
   - Label on site: "Awards"
   - Home Caption: AWARDS / Honoring excellence

4. /public/images/gallery/classroom/
   - Interactive speaking circles, computer lab sessions, student lectures, and mentorship.
   - Label on site: "Classroom"
   - Home Caption: CLASSROOM / Where confidence begins

5. /public/images/gallery/outdoor/
   - Outdoor events, study tours, restaurant gatherings, celebrations, and get-togethers.
   - Label on site: "Outdoor & Fun"
   - Home Caption: OUTDOOR FUN / Learning and laughing together

----------------------------------------------------------------------
HOW TO SET THE FEATURED PHOTO FOR THE HOME PAGE:
----------------------------------------------------------------------
To pick which photo appears on the Home "Life at Educatee" bento grid:
Name that photo "featured.jpg" (or "featured.png" / "featured.webp") in that folder.
If no file named "featured.*" exists, the site automatically picks the first photo alphabetically.

----------------------------------------------------------------------
EMPTY FOLDERS:
----------------------------------------------------------------------
If any folder is empty, the website displays a soft, elegant placeholder card.
It will never crash.

----------------------------------------------------------------------
IMAGE SPECS & AUTOMATIC PROCESSING:
----------------------------------------------------------------------
- Supported formats: .jpg, .jpeg, .png, .webp
- Recommended dimensions: 1200px to 2048px width (landscape or portrait).
- EXIF & GPS metadata: Automatically stripped during publishing for student privacy.
- Blur placeholders: Automatically generated at build time.

----------------------------------------------------------------------
HOW TO REBUILD THE GALLERY:
----------------------------------------------------------------------
Whenever you add, remove, or replace photos:
Run:
   npm run build
or:
   npm run gallery:build
This strips EXIF/GPS metadata, calculates image dimensions, generates blur placeholders, and updates the gallery.
`;
  fs.writeFileSync(readmePath, readmeContent, "utf8");

  // 3. Process each category folder
  const categoryResults = {};
  const featuredList = [];
  let totalPhotosCount = 0;
  let totalStrippedExif = 0;

  for (const cat of CATEGORIES) {
    const dir = path.join(galleryDir, cat.id);
    const allEntries = fs.readdirSync(dir);
    const imageFiles = allEntries
      .filter((file) => VALID_EXTS.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

    const photos = [];
    let featuredPhoto = null;

    for (const filename of imageFiles) {
      const filePath = path.join(dir, filename);
      let buffer = fs.readFileSync(filePath);

      // Inspect metadata
      let meta = await sharp(buffer).metadata();

      // Strip EXIF / GPS if present or auto-rotate if orientation is set
      if (meta.exif || (meta.orientation && meta.orientation > 1)) {
        buffer = await sharp(buffer).rotate().toBuffer();
        fs.writeFileSync(filePath, buffer);
        totalStrippedExif++;
        // Re-read metadata after rotation
        meta = await sharp(buffer).metadata();
      }

      const width = meta.width || 1200;
      const height = meta.height || 800;

      // Generate base64 blurDataURL
      const blurBuffer = await sharp(buffer)
        .resize(16, 16, { fit: "inside" })
        .toFormat("jpeg", { quality: 40 })
        .toBuffer();
      const blurDataURL = `data:image/jpeg;base64,${blurBuffer.toString("base64")}`;

      const isFeatured =
        path.parse(filename).name.toLowerCase() === "featured";

      const photoObj = {
        id: `${cat.id}-${path.parse(filename).name}`,
        src: `/images/gallery/${cat.id}/${filename}`,
        alt: `${cat.label} at The Educatee Centre`,
        category: cat.id,
        categoryLabel: cat.label,
        filename,
        width,
        height,
        blurDataURL,
        isFeatured,
      };

      photos.push(photoObj);

      if (isFeatured && !featuredPhoto) {
        featuredPhoto = photoObj;
      }
    }

    // If no explicit featured.jpg, pick the first image if available
    if (!featuredPhoto && photos.length > 0) {
      featuredPhoto = photos[0];
    }

    categoryResults[cat.id] = {
      id: cat.id,
      label: cat.label,
      captionLabel: cat.captionLabel,
      tagline: cat.tagline,
      count: photos.length,
      photos,
      featuredPhoto,
    };

    totalPhotosCount += photos.length;
    featuredList.push({
      category: cat.id,
      categoryLabel: cat.label,
      captionLabel: cat.captionLabel,
      tagline: cat.tagline,
      photo: featuredPhoto, // null if empty
    });

    console.log(
      `✓ [${cat.label}]: ${photos.length} photos (Featured: ${featuredPhoto ? featuredPhoto.filename : "None - empty"})`
    );
  }

  // 5. Interleave all photos for the "All" tab in stable order
  const interleavedAll = [];
  const maxCategoryLength = Math.max(
    ...Object.values(categoryResults).map((c) => c.photos.length)
  );

  for (let i = 0; i < maxCategoryLength; i++) {
    for (const cat of CATEGORIES) {
      const catPhotos = categoryResults[cat.id].photos;
      if (i < catPhotos.length) {
        interleavedAll.push(catPhotos[i]);
      }
    }
  }

  const outputManifest = {
    updatedAt: new Date().toISOString(),
    totalPhotos: totalPhotosCount,
    categories: categoryResults,
    allPhotos: interleavedAll,
    featuredPhotos: featuredList,
  };

  // Ensure src/data exists
  const dataDir = path.dirname(manifestPath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(manifestPath, JSON.stringify(outputManifest, null, 2), "utf8");

  console.log("--------------------------------------------------");
  console.log(`Manifest written to ${manifestPath}`);
  console.log(`Total photos indexed: ${totalPhotosCount}`);
  console.log(`EXIF/GPS metadata cleaned: ${totalStrippedExif} files`);
  console.log("Gallery build preparation completed successfully!");
  console.log("--------------------------------------------------");
}

prepareGallery().catch((err) => {
  console.error("Gallery preparation error:", err);
  process.exit(1);
});
