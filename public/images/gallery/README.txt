======================================================================
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
