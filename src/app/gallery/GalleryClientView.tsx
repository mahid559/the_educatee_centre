"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Maximize2, Camera, ArrowRight, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { getGalleryData, GalleryPhoto } from "@/lib/gallery";
import type { LightboxImage } from "@/components/Lightbox";

const Lightbox = dynamic(() => import("@/components/Lightbox").then((mod) => mod.Lightbox), {
  ssr: false,
});
import { GalleryCategory } from "@/data/content";
import { JustifiedGallery, JustifiedImageItem } from "@/components/JustifiedGallery";

type TabId = "all" | GalleryCategory;

interface TabItem {
  id: TabId;
  label: string;
}

const TABS: TabItem[] = [
  { id: "all", label: "All" },
  { id: "graduation", label: "Graduation Day" },
  { id: "certificates", label: "Certificates" },
  { id: "awards", label: "Awards" },
  { id: "classroom", label: "Classroom" },
  { id: "outdoor", label: "Outdoor & Fun" },
];

const VALID_CATEGORIES = new Set<string>([
  "graduation",
  "certificates",
  "awards",
  "classroom",
  "outdoor",
]);

export default function GalleryClientView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const shouldReduceMotion = useReducedMotion();
  const galleryData = getGalleryData();

  // Initialize active tab from URL query param ?category=...
  const categoryParam = searchParams.get("category");
  const initialTab: TabId =
    categoryParam && VALID_CATEGORIES.has(categoryParam)
      ? (categoryParam as GalleryCategory)
      : "all";

  const [activeTab, setActiveTab] = useState<TabId>(initialTab);
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const tabListRef = useRef<HTMLDivElement>(null);

  // Sync tab with URL parameter changes (e.g., browser back/forward)
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && VALID_CATEGORIES.has(cat)) {
      setActiveTab(cat as GalleryCategory);
    } else {
      setActiveTab("all");
    }
    setVisibleCount(12);
  }, [searchParams]);

  // Tab change handler updates state, resets visible count, and updates URL
  const handleTabSelect = (tabId: TabId) => {
    if (tabId === activeTab) return;
    setActiveTab(tabId);
    setVisibleCount(12);

    const params = new URLSearchParams(searchParams.toString());
    if (tabId === "all") {
      params.delete("category");
    } else {
      params.set("category", tabId);
    }

    const qs = params.toString();
    const nextUrl = qs ? `/gallery?${qs}` : "/gallery";
    router.replace(nextUrl, { scroll: false });
  };

  // Determine current photo list based on active tab
  // "All": interleaved stable order across all categories
  // Category tab: strictly that category's photos in file-name order
  const activePhotos: GalleryPhoto[] = useMemo(() => {
    if (activeTab === "all") {
      return galleryData.allPhotos;
    }
    return galleryData.categories[activeTab]?.photos || [];
  }, [activeTab, galleryData]);

  const visiblePhotos = activePhotos.slice(0, visibleCount);
  const hasMore = visibleCount < activePhotos.length;

  const justifiedPhotos: JustifiedImageItem[] = useMemo(() => {
    return visiblePhotos.map((photo) => ({
      id: photo.id,
      src: photo.src,
      alt: photo.alt,
      width: photo.width,
      height: photo.height,
      blurDataURL: photo.blurDataURL,
      categoryLabel: photo.categoryLabel,
      tagline: photo.filename,
    }));
  }, [visiblePhotos]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, activePhotos.length));
  };

  // Lightbox images strictly limited to the current active category list
  const lightboxImages: LightboxImage[] = useMemo(() => {
    return activePhotos.map((p) => ({
      src: p.src,
      alt: p.alt,
      width: p.width,
      height: p.height,
      blurDataURL: p.blurDataURL,
    }));
  }, [activePhotos]);

  const activeTabMeta = TABS.find((t) => t.id === activeTab) || TABS[0];

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="Gallery"
        title="Life at The Educatee Centre"
        subtext="Celebrating student journeys, course completions, awards, and collaborative classroom moments at Appayan Afroz Tower, Feni."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />

      {/* 2. Filter Tabs (Non-sticky, scrolls naturally with page) */}
      <nav
        aria-label="Gallery category filters"
        className="bg-white border-b border-[#E2E9EB]"
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div
            ref={tabListRef}
            role="tablist"
            className="flex items-center gap-1.5 sm:gap-2 py-4 overflow-x-auto scrollbar-none scroll-smooth -mx-1 px-1"
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  type="button"
                  onClick={() => handleTabSelect(tab.id)}
                  className={`relative shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 select-none flex items-center border focus:outline-none focus:ring-2 focus:ring-[#C81E2B]/40 ${
                    isActive
                      ? "bg-[#C81E2B] text-white border-[#C81E2B] shadow-md shadow-red-500/25"
                      : "bg-white border-[#E2E9EB] text-[#54595F] hover:border-[#C81E2B] hover:text-[#C81E2B] hover:bg-red-50/50"
                  }`}
                >
                  {/* Sliding Active Indicator via Framer Motion layoutId */}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterTab"
                      className="absolute inset-0 bg-[#C81E2B] rounded-full shadow-md shadow-red-500/25"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? "text-white" : ""}`}>
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* 3. Gallery Grid Section */}
      <section
        id={`panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="py-12 sm:py-16 md:py-20 bg-white min-h-[600px] relative"
      >
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {/* Header Status Bar (Without photo count numbers) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 sm:mb-10 pb-5 border-b border-[#E2E9EB]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E51937] block mb-1 font-[var(--font-jost)]">
                PHOTO ARCHIVE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2432] font-[var(--font-jost)]">
                {activeTabMeta.label}
              </h2>
            </div>

            <div className="text-xs sm:text-sm font-semibold text-[#54595F]/70">
              Click any photo to view full size
            </div>
          </div>

          {/* Empty State: Soft Friendly Message */}
          {activePhotos.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center justify-center max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#FEE2E2] flex items-center justify-center text-[#C81E2B] mb-4">
                <Camera className="w-8 h-8 opacity-60" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#1F2432] mb-2 font-[var(--font-jost)]">
                Photos coming soon
              </h3>
              <p className="text-sm text-[#54595F] mb-6 leading-relaxed">
                We are currently preparing photos for {activeTabMeta.label}. Check
                back soon or explore our complete campus archive.
              </p>
              <button
                type="button"
                onClick={() => handleTabSelect("all")}
                className="inline-flex items-center gap-2 bg-[#C81E2B] hover:bg-[#83121A] text-white font-extrabold text-sm px-6 py-3 rounded-full transition-all shadow-md shadow-red-500/20 active:scale-95"
              >
                <span>Back to All Photos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <>
              {/* Justified Rows Layout (Google Photos / Flickr style) - Perfectly Flat Bottom Edge */}
              <JustifiedGallery
                items={justifiedPhotos}
                gap={18}
                onItemClick={(idx) => setActiveLightboxIndex(idx)}
                priorityFirstRow={true}
              />

              {/* Load More Button */}
              {hasMore && (
                <div className="mt-12 sm:mt-16 text-center">
                  <button
                    type="button"
                    onClick={handleLoadMore}
                    className="inline-flex items-center gap-2.5 bg-[#C81E2B] hover:bg-[#83121A] text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-red-500/20 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Load More Photos</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* 4. Shared Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={activeLightboxIndex}
          onClose={() => setActiveLightboxIndex(null)}
          onNavigate={(newIdx) => setActiveLightboxIndex(newIdx)}
        />
      )}

      {/* 5. Bottom CTA Banner */}
      <CTABanner
        title="Experience The Educatee Campus in Person"
        subtext="Meet Engr. Zahir sir, take a tour of our classrooms, and join a free demo class at Appayan Afroz Tower, Feni."
        primaryCtaText="Book a Free Demo Class"
        primaryCtaLink="/admissions#free-demo"
        badge="JOIN OUR COMMUNITY"
      />
    </>
  );
}
