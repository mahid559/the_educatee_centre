"use client";

import React, { useRef, useState, useEffect } from "react";
import { siteContent } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";

export function WhyChooseUs() {
  const { whyChooseUs } = siteContent;

  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleMediaChange = () => setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 50px 0px" }
    );

    observer.observe(currentSection);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      id: "feature-01",
      title: whyChooseUs[0]?.title || "Fear-Free Adult Learning",
      description:
        whyChooseUs[0]?.description ||
        "Respectful, non-judgmental environment tailored for mature students, university aspirants, and jobholders.",
    },
    {
      id: "feature-02",
      title: whyChooseUs[1]?.title || "100% Practical & Lab Practice",
      description:
        whyChooseUs[1]?.description ||
        "Every student practices on their own workstation in our air-conditioned computer lab or interactive speaking circle.",
    },
    {
      id: "feature-03",
      title: whyChooseUs[2]?.title || "Direct Mentorship by Founder",
      description:
        whyChooseUs[2]?.description ||
        "Engr. Zahir Uddin Babar personally instructs key batches with diagnostic evaluations and mock interviews.",
    },
    {
      id: "feature-04",
      title: whyChooseUs[3]?.title || "Official Band Track Record",
      description:
        whyChooseUs[3]?.description ||
        "Consistent IELTS 6.0+ alumni success, certified computing programs, and post-course speaking clubs.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-24 md:py-28 lg:py-32 bg-[#FFFFFF] relative overflow-hidden group/section border-b border-[#E2E9EB]"
      aria-label="Why Choose Us"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ============================================================== */}
        {/* SECTION HEADING (STANDARDIZED & CENTER-ALIGNED)                */}
        {/* ============================================================== */}
        <SectionHeading
          tag="WHY CHOOSE US"
          title="Unlock Your True Potential with Our Expert-Led Training"
          subtext="We replace passive lecturing with interactive discussions, dedicated workstation practice, and personal career mentorship tailored for adult learners."
        />

        {/* ============================================================== */}
        {/* 2X2 FEATURE PILL CARDS IN ALTERNATING RED/DARK CHECKERBOARD   */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 items-stretch">
          {features.map((item, idx) => {
            // Checkerboard pattern:
            // Card 0: Red
            // Card 1: Black/Dark (#181D26 / #1F2432)
            // Card 2: Black/Dark (#181D26 / #1F2432)
            // Card 3: Red
            const isRed = idx === 0 || idx === 3;

            return (
              <div
                key={item.id}
                className="group relative h-full transition-all duration-500 ease-out"
                style={{
                  opacity: inView || isReducedMotion ? 1 : 0,
                  transform:
                    inView || isReducedMotion
                      ? "translateY(0)"
                      : "translateY(24px)",
                  transitionDelay: isReducedMotion
                    ? "0ms"
                    : `${150 + idx * 80}ms`,
                }}
              >
                {/* Straight Aligned Feature Card */}
                <article
                  className={`w-full h-full p-7 sm:p-9 rounded-2xl sm:rounded-3xl flex items-start gap-4 sm:gap-5 transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-sm hover:shadow-xl ${
                    isRed
                      ? "bg-[#E51937] text-white border border-[#E51937]/30 shadow-[#E51937]/15"
                      : "bg-[#181D26] text-white border border-white/10 shadow-slate-900/10"
                  }`}
                  style={{
                    backgroundImage: isRed
                      ? "linear-gradient(135deg, #EE2645 0%, #E51937 60%, #C8132C 100%)"
                      : "linear-gradient(135deg, #222834 0%, #181D26 100%)",
                  }}
                >
                  {/* Small Solid Dot (White on both red and dark cards) */}
                  <span
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full shrink-0 mt-2 sm:mt-2.5 transition-transform duration-300 group-hover:scale-125 bg-white"
                    aria-hidden="true"
                  />

                  {/* Inner Content */}
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl md:text-[22px] font-bold leading-snug tracking-tight m-0 font-[var(--font-jost)] text-white">
                      {item.title}
                    </h4>

                    {item.description && (
                      <p className="text-xs sm:text-sm md:text-[14px] leading-relaxed mt-2.5 font-[var(--font-dm-sans)] font-normal m-0 text-white/85">
                        {item.description}
                      </p>
                    )}
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
