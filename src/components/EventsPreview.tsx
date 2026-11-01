"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Maximize2, ImageOff } from "lucide-react";
import { siteContent, homeGalleryCaptions, GalleryCategory } from "@/data/content";
import dynamic from "next/dynamic";
import { getGalleryData, FeaturedItem } from "@/lib/gallery";
import type { LightboxImage } from "@/components/Lightbox";

const Lightbox = dynamic(() => import("@/components/Lightbox").then((mod) => mod.Lightbox), {
  ssr: false,
});

export function EventsPreview() {
  const { gallery } = siteContent;
  const galleryData = getGalleryData();
  const shouldReduceMotion = useReducedMotion();

  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [mobileSlideIndex, setMobileSlideIndex] = useState<number>(0);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

  // The 5 featured items in the exact category order
  const featuredList: FeaturedItem[] = galleryData.featuredPhotos;

  // Track carousel scroll position on mobile for active dot
  useEffect(() => {
    const el = mobileCarouselRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const width = el.offsetWidth;
      const idx = Math.round(scrollLeft / (width * 0.8));
      setMobileSlideIndex(Math.min(Math.max(idx, 0), featuredList.length - 1));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [featuredList.length]);

  const scrollToSlide = (idx: number) => {
    const el = mobileCarouselRef.current;
    if (!el) return;
    const targetItem = el.children[idx] as HTMLElement;
    if (targetItem) {
      targetItem.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
    setMobileSlideIndex(idx);
  };

  // Convert valid featured photos into lightbox images
  const validPhotos = featuredList
    .map((item) => item.photo)
    .filter((p): p is NonNullable<typeof p> => p !== null);

  const lightboxImages: LightboxImage[] = validPhotos.map((p) => ({
    src: p.src,
    alt: p.alt,
    width: p.width,
    height: p.height,
    blurDataURL: p.blurDataURL,
  }));

  const handleTileClick = (photoSrc?: string) => {
    if (!photoSrc) return;
    const idx = validPhotos.findIndex((p) => p.src === photoSrc);
    if (idx !== -1) {
      setActiveLightboxIndex(idx);
    }
  };

  // Grid placement mapping for desktop Bento grid
  // graduation -> large 2x2 tile on left
  // certificates, awards -> row 1 right
  // classroom, outdoor -> row 2 right
  const getBentoClasses = (cat: GalleryCategory) => {
    switch (cat) {
      case "graduation":
        return "md:col-span-2 md:row-span-2 min-h-[360px] md:min-h-[500px]";
      case "certificates":
        return "md:col-span-1 md:row-span-1 min-h-[240px]";
      case "awards":
        return "md:col-span-1 md:row-span-1 min-h-[240px]";
      case "classroom":
        return "md:col-span-1 md:row-span-1 min-h-[240px]";
      case "outdoor":
        return "md:col-span-1 md:row-span-1 min-h-[240px]";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#F5F7F9] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#03594E] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2 font-[var(--font-jost)]">
              PHOTO GALLERY &amp; CAMPUS MOMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2432] tracking-tight font-[var(--font-jost)] leading-tight mb-3">
              {gallery.title}
            </h2>
            <p className="text-base sm:text-lg text-[#6C757D] leading-relaxed font-[var(--font-dm-sans)]">
              {gallery.subtext}
            </p>
          </div>

          {/* Top Right "View Full Gallery" Button */}
          <div className="flex-shrink-0 self-start md:self-auto">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-[#03594E] hover:bg-[#023E37] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-[#03594E]/20 hover:scale-[1.02] active:scale-[0.98] group font-[var(--font-jost)]"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 1. Desktop Bento Grid (Graduation as large tile) */}
        <div className="hidden md:grid md:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-5 h-[560px] lg:h-[620px]">
          {featuredList.map((item, index) => {
            const caption = homeGalleryCaptions[item.category];
            const photo = item.photo;
            const bentoClasses = getBentoClasses(item.category);

            if (!photo) {
              // Soft placeholder tile if folder is empty
              return (
                <div
                  key={item.category}
                  className={`${bentoClasses} relative rounded-2xl lg:rounded-3xl overflow-hidden border border-dashed border-[#E2E9EB] bg-white p-6 flex flex-col justify-between`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#6C757D] uppercase tracking-wider bg-[#F5F7F9] px-3 py-1 rounded-full border border-slate-200 font-[var(--font-jost)]">
                      {caption.label}
                    </span>
                    <ImageOff className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1F2432] font-[var(--font-jost)]">
                      {caption.tagline}
                    </p>
                    <span className="text-xs text-[#6C757D] mt-1 block">
                      Photos coming soon
                    </span>
                  </div>
                </div>
              );
            }

            return (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0.05 : 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                onClick={() => handleTileClick(photo.src)}
                className={`${bentoClasses} relative rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-2xl transition-all duration-300 border border-[#E2E9EB]/90 bg-slate-900`}
              >
                {/* Background Photo */}
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  placeholder={photo.blurDataURL ? "blur" : "empty"}
                  blurDataURL={photo.blurDataURL}
                  sizes={
                    item.category === "graduation"
                      ? "(max-width: 1024px) 60vw, 620px"
                      : "(max-width: 1024px) 30vw, 320px"
                  }
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Soft Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                {/* Glassmorphic Enlarge Button on Hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                {/* Caption Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 text-left flex flex-col justify-end pointer-events-none">
                  <span className="text-[#F8C62F] text-xs font-bold tracking-wider uppercase mb-1 drop-shadow-sm font-[var(--font-jost)]">
                    {caption.label}
                  </span>
                  <p className="text-white text-base lg:text-lg font-bold leading-snug drop-shadow-sm font-[var(--font-jost)]">
                    {caption.tagline}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 2. Mobile Swipeable Carousel */}
        <div className="md:hidden">
          <div
            ref={mobileCarouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-3 -mx-4 px-4 touch-pan-x"
          >
            {featuredList.map((item) => {
              const caption = homeGalleryCaptions[item.category];
              const photo = item.photo;

              if (!photo) {
                return (
                  <div
                    key={item.category}
                    className="snap-center shrink-0 w-[84vw] max-w-[340px] aspect-[4/5] relative rounded-2xl overflow-hidden border border-dashed border-[#E2E9EB] bg-white p-6 flex flex-col justify-between"
                  >
                    <span className="text-xs font-bold text-[#6C757D] uppercase tracking-wider font-[var(--font-jost)]">
                      {caption.label}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#1F2432] font-[var(--font-jost)]">
                        {caption.tagline}
                      </p>
                      <span className="text-xs text-[#6C757D] mt-1 block">
                        Photos coming soon
                      </span>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={item.category}
                  onClick={() => handleTileClick(photo.src)}
                  className="snap-center shrink-0 w-[84vw] max-w-[340px] aspect-[4/5] relative rounded-2xl overflow-hidden shadow-md cursor-pointer border border-[#E2E9EB] bg-slate-900 group"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    placeholder={photo.blurDataURL ? "blur" : "empty"}
                    blurDataURL={photo.blurDataURL}
                    sizes="84vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Soft Dark Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                  {/* Caption Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-left flex flex-col justify-end pointer-events-none">
                    <span className="text-[#F8C62F] text-xs font-bold tracking-wider uppercase mb-1 drop-shadow-sm font-[var(--font-jost)]">
                      {caption.label}
                    </span>
                    <p className="text-white text-base font-bold leading-snug drop-shadow-sm font-[var(--font-jost)]">
                      {caption.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {featuredList.map((item, idx) => (
              <button
                key={item.category}
                type="button"
                onClick={() => scrollToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}: ${item.categoryLabel}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  mobileSlideIndex === idx
                    ? "w-7 bg-[#03594E]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Mobile Bottom CTA */}
          <div className="mt-8 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-[#03594E] hover:bg-[#023E37] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md shadow-[#03594E]/20 font-[var(--font-jost)]"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
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
