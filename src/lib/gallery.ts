import { GalleryCategory, homeGalleryCaptions } from "@/data/content";
import manifestData from "@/data/gallery-manifest.json";

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  categoryLabel: string;
  filename: string;
  width: number;
  height: number;
  blurDataURL?: string;
  isFeatured?: boolean;
}

export interface CategoryData {
  id: GalleryCategory;
  label: string;
  captionLabel: string;
  tagline: string;
  count: number;
  photos: GalleryPhoto[];
  featuredPhoto: GalleryPhoto | null;
}

export interface FeaturedItem {
  category: GalleryCategory;
  categoryLabel: string;
  captionLabel: string;
  tagline: string;
  photo: GalleryPhoto | null;
}

export interface GalleryData {
  updatedAt: string;
  totalPhotos: number;
  categories: Record<GalleryCategory, CategoryData>;
  allPhotos: GalleryPhoto[];
  featuredPhotos: FeaturedItem[];
}

export const GALLERY_CATEGORIES: {
  id: GalleryCategory;
  label: string;
  captionLabel: string;
  tagline: string;
}[] = [
  {
    id: "graduation",
    label: "Graduation Day",
    captionLabel: homeGalleryCaptions.graduation.label,
    tagline: homeGalleryCaptions.graduation.tagline,
  },
  {
    id: "certificates",
    label: "Certificates",
    captionLabel: homeGalleryCaptions.certificates.label,
    tagline: homeGalleryCaptions.certificates.tagline,
  },
  {
    id: "awards",
    label: "Awards",
    captionLabel: homeGalleryCaptions.awards.label,
    tagline: homeGalleryCaptions.awards.tagline,
  },
  {
    id: "classroom",
    label: "Classroom",
    captionLabel: homeGalleryCaptions.classroom.label,
    tagline: homeGalleryCaptions.classroom.tagline,
  },
  {
    id: "outdoor",
    label: "Outdoor & Fun",
    captionLabel: homeGalleryCaptions.outdoor.label,
    tagline: homeGalleryCaptions.outdoor.tagline,
  },
];

export function getGalleryData(): GalleryData {
  return manifestData as unknown as GalleryData;
}
