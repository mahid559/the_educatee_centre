"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { siteContent, testimonials, Testimonial } from "@/data/content";
import {
  getInitials,
  cardAccents,
} from "@/components/TestimonialCard";

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function SuccessStories() {
  const { successStories } = siteContent;
  const shouldReduceMotion = useReducedMotion();

  // All 10 real Facebook recommendations in the carousel
  const featuredReviews: Testimonial[] = testimonials;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate featured testimonial every 6 seconds, pauses on hover
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % featuredReviews.length);
  }, [featuredReviews.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + featuredReviews.length) % featuredReviews.length
    );
  }, [featuredReviews.length]);

  const goToSlide = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;
    const interval = setInterval(() => {
      if (!document.hidden) {
        nextSlide();
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, shouldReduceMotion]);

  const activeReview = featuredReviews[currentIndex] || featuredReviews[0];
  const activeInitials = getInitials(activeReview.name);
  const activeAccent = cardAccents[currentIndex % cardAccents.length];

  // Framer Motion variants for smooth crossfade & slight horizontal slide
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 24 : -24,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 320, damping: 32 },
        opacity: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 24 : -24,
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 320, damping: 32 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <section className="py-20 md:py-28 bg-white text-[#1F2432] relative overflow-hidden border-t border-[#E2E9EB]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header - Educeet Style */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-[#E7F3F1] border border-[#03594E]/20 rounded-full px-4 py-1.5 mb-3 text-xs font-bold tracking-wider uppercase text-[#03594E] font-[var(--font-jost)]">
            <span>STUDENT OUTCOMES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2432] tracking-tight mb-3 font-[var(--font-jost)]">
            Trusted by Professionals &amp; Learners Across Feni
          </h2>

          <p className="text-base sm:text-lg text-[#6C757D] font-[var(--font-dm-sans)]">
            Verified authentic recommendations and reviews from our students on Facebook.
          </p>
        </div>

        {/* HIGHLIGHT STRIP: 3 compact chips built strictly from reviews */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 font-[var(--font-jost)]">
          <div className="inline-flex items-center bg-[#F5F7F9] border border-[#E2E9EB] text-[#1F2432] text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
            <span>Skilled &amp; Passionate Mentors</span>
          </div>
          <div className="inline-flex items-center bg-[#F5F7F9] border border-[#E2E9EB] text-[#1F2432] text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
            <span>Engaging, Practical Sessions</span>
          </div>
          <div className="inline-flex items-center bg-[#F5F7F9] border border-[#E2E9EB] text-[#1F2432] text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
            <span>Continuous Individual Care</span>
          </div>
        </div>

        {/* FEATURED TESTIMONIAL CARD - Educeet Style */}
        <div
          className="max-w-2xl sm:max-w-3xl mx-auto mb-8 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-[#F5F7F9] text-[#1F2432] rounded-[28px] sm:rounded-[36px] p-7 sm:p-10 md:p-12 shadow-[0_16px_50px_-12px_rgba(3,89,78,0.06)] border border-[#E2E9EB] relative overflow-hidden">
            {/* Background decorative quote watermark */}
            <div
              className="absolute -top-3 -right-3 text-[#03594E]/10 pointer-events-none select-none"
              aria-hidden="true"
            >
              <Quote className="w-32 h-32 rotate-180" />
            </div>

            {/* Top row: Quote icon + Facebook badge */}
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div
                className="w-11 h-11 rounded-2xl bg-[#E7F3F1] text-[#03594E] flex items-center justify-center shadow-sm"
              >
                <Quote className="w-5 h-5 fill-current/20" />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1877F2]/10 border border-[#1877F2]/20 text-[#1877F2] text-xs font-semibold font-[var(--font-jost)]">
                <FacebookIcon className="w-3.5 h-3.5" />
                <span>Recommends on Facebook</span>
              </div>
            </div>

            {/* Animated Quote Text & Author info */}
            <div className="min-h-[120px] sm:min-h-[110px] relative z-10">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeReview.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-col justify-between"
                >
                  <blockquote className="font-serif text-base sm:text-xl md:text-[23px] text-[#1F2432] leading-relaxed tracking-tight italic mb-7">
                    &ldquo;{activeReview.text}&rdquo;
                  </blockquote>

                  {/* Reviewer Details */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-[#E2E9EB]">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${activeAccent.avatarGradient} flex items-center justify-center text-white font-bold text-sm tracking-wide shadow-md flex-shrink-0 font-[var(--font-jost)]`}
                      aria-hidden="true"
                    >
                      {activeInitials}
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-[#1F2432] leading-tight font-[var(--font-jost)]">
                        {activeReview.name}
                      </h3>
                      <p className="text-xs text-[#6C757D] font-medium mt-0.5 font-[var(--font-dm-sans)]">
                        {activeReview.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls (10 Dots & Prev/Next Arrows) */}
            <div className="mt-8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 border-t border-[#E2E9EB]">
              {/* Dots */}
              <div
                className="flex items-center gap-1.5 flex-wrap justify-center"
                role="tablist"
                aria-label="Recommendation slides"
              >
                {featuredReviews.map((item, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => goToSlide(idx)}
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Go to recommendation ${idx + 1}: ${item.name}`}
                      className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-[#03594E] ${
                        isActive
                          ? "w-7 bg-[#03594E]"
                          : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  );
                })}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  aria-label="Previous recommendation"
                  className="w-10 h-10 rounded-full border border-slate-300 hover:border-[#03594E] hover:text-[#03594E] text-[#1F2432] flex items-center justify-center transition-all duration-200 active:scale-95 bg-white shadow-xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next recommendation"
                  className="w-10 h-10 rounded-full border border-slate-300 hover:border-[#03594E] hover:text-[#03594E] text-[#1F2432] flex items-center justify-center transition-all duration-200 active:scale-95 bg-white shadow-xs"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA BUTTON: Read more reviews on Facebook */}
        <div className="text-center mt-6 mb-16">
          <a
            href="https://www.facebook.com/TheEducatee.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#1877F2] hover:bg-[#166FE5] text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group font-[var(--font-jost)]"
          >
            <FacebookIcon className="w-4 h-4 text-white" />
            <span>Read more reviews on Facebook</span>
            <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
