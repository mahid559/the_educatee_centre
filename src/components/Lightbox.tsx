"use client";

import React, { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const currentImage = images[currentIndex];
  const shouldReduceMotion = useReducedMotion();
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handlePrev = useCallback(() => {
    if (images.length <= 1) return;
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (images.length <= 1) return;
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  // Focus management & Trap
  useEffect(() => {
    const prevActiveElement = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
        return;
      }

      // Focus trap for Tab
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      prevActiveElement?.focus();
    };
  }, [onClose, handlePrev, handleNext]);

  // Swipe gesture handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Only trigger if horizontal swipe is prominent
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  if (!currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: shouldReduceMotion ? 0.05 : 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 select-none"
        role="dialog"
        aria-modal="true"
        aria-label="Photo gallery fullscreen preview"
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Controls Bar */}
        <div
          className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-20 pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Counter Badge */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide">
            <span>{currentIndex + 1}</span>
            <span className="text-white/50 mx-1.5">/</span>
            <span className="text-white/80">{images.length}</span>
          </div>

          {/* Close Button */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-95"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all z-20 shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-95"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all z-20 shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-95"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Center Modal Image Container */}
        <motion.div
          key={currentIndex}
          initial={{
            opacity: 0,
            scale: shouldReduceMotion ? 1 : 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: shouldReduceMotion ? 1 : 0.95,
          }}
          transition={{
            duration: shouldReduceMotion ? 0.05 : 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              sizes="(max-width: 1280px) 95vw, 1200px"
              className="object-contain"
              priority
              placeholder={currentImage.blurDataURL ? "blur" : "empty"}
              blurDataURL={currentImage.blurDataURL}
            />
          </div>

          {/* Optional Caption */}
          {(currentImage.title || currentImage.caption) && (
            <div className="mt-3 text-center max-w-xl px-4 text-white">
              {currentImage.title && (
                <h4 className="text-base font-bold text-white font-[var(--font-nunito)]">
                  {currentImage.title}
                </h4>
              )}
              {currentImage.caption && (
                <p className="text-xs sm:text-sm text-white/80 mt-0.5">
                  {currentImage.caption}
                </p>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
