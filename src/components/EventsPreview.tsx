"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteContent, homeGalleryCaptions, GalleryCategory } from "@/data/content";
import dynamic from "next/dynamic";
import { getGalleryData, FeaturedItem } from "@/lib/gallery";
import type { LightboxImage } from "@/components/Lightbox";
import { SectionHeading } from "@/components/SectionHeading";
import { JustifiedGallery, JustifiedImageItem } from "@/components/JustifiedGallery";

const Lightbox = dynamic(() => import("@/components/Lightbox").then((mod) => mod.Lightbox), {
  ssr: false,
});

export function EventsPreview() {
  const { gallery } = siteContent;
  const galleryData = getGalleryData();

  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // The 5 featured items in the exact category order
  const featuredList: FeaturedItem[] = galleryData.featuredPhotos;

  // Convert valid featured photos into lightbox images & justified items
  const validPhotos = useMemo(() => {
    return featuredList
      .map((item) => item.photo)
      .filter((p): p is NonNullable<typeof p> => p !== null);
  }, [featuredList]);

  const lightboxImages: LightboxImage[] = useMemo(() => {
    return validPhotos.map((p) => ({
      src: p.src,
      alt: p.alt,
      width: p.width,
      height: p.height,
      blurDataURL: p.blurDataURL,
    }));
  }, [validPhotos]);

  const justifiedItems: JustifiedImageItem[] = useMemo(() => {
    return featuredList
      .filter((item): item is FeaturedItem & { photo: NonNullable<FeaturedItem["photo"]> } => item.photo !== null)
      .map((item) => {
        const caption = homeGalleryCaptions[item.category];
        return {
          id: item.category,
          src: item.photo.src,
          alt: item.photo.alt,
          width: item.photo.width,
          height: item.photo.height,
          blurDataURL: item.photo.blurDataURL,
          categoryLabel: caption.label,
          tagline: caption.tagline,
        };
      });
  }, [featuredList]);

  return (
    <section className="py-20 md:py-28 bg-[#F5F7F9] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <SectionHeading
          tag="PHOTO GALLERY & CAMPUS MOMENTS"
          title={gallery.title}
          subtext={gallery.subtext}
          actionButton={
            <div className="hidden md:block">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 bg-[#E51937] hover:bg-[#C8132C] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-[#E51937]/25 hover:scale-[1.02] active:scale-[0.98] group font-[var(--font-jost)]"
              >
                <span>View Full Gallery</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          }
        />

        {/* Justified Rows Layout (Google Photos / Flickr style) - Perfectly Flat Bottom Edge */}
        <JustifiedGallery
          items={justifiedItems}
          gap={18}
          onItemClick={(idx) => setActiveLightboxIndex(idx)}
          priorityFirstRow={true}
        />

        {/* Mobile Bottom CTA (Visible on mobile only; desktop button is in the header) */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-[#E51937] hover:bg-[#C8132C] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md shadow-[#E51937]/25 font-[var(--font-jost)]"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={activeLightboxIndex}
          onClose={() => setActiveLightboxIndex(null)}
          onNavigate={(newIdx) => setActiveLightboxIndex(newIdx)}
        />
      )}
    </section>
  );
}
