"use client";

import React, { useRef, useState, useEffect } from "react";
import { siteContent } from "@/data/content";

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
      className="py-20 sm:py-24 md:py-28 lg:py-32 bg-[#FFFFFF] relative overflow-hidden select-none group/section border-b border-[#E2E9EB]"
      aria-label="Why Choose Us"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ============================================================== */}
        {/* TOP HEADING BLOCK WITH LARGE QUESTION MARK                     */}
        {/* ============================================================== */}
        <div className="relative flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8 mb-14 sm:mb-16 md:mb-20">
          {/* Left Column: Stacked 3-line Heading */}
          <div className="w-full md:max-w-[620px] lg:max-w-[680px] z-10">
            <h2
              className="font-[var(--font-jost)] font-[900] uppercase tracking-tight text-left m-0 flex flex-col leading-[0.94] text-[clamp(44px,7.5vw,94px)]"
              style={{
                fontFamily:
                  "var(--font-jost), var(--font-ubuntu), -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              {/* Line 1: WHY */}
              <span
                className="text-[#1F2432] block transition-all duration-700 ease-out"
                style={{
                  opacity: inView || isReducedMotion ? 1 : 0,
                  transform:
                    inView || isReducedMotion
                      ? "translateY(0)"
                      : "translateY(28px)",
                  transitionDelay: isReducedMotion ? "0ms" : "0ms",
                }}
              >
                WHY
              </span>

              {/* Line 2: CHOOSE */}
              <span
                className="text-[#E51937] block transition-all duration-700 ease-out mt-1 sm:mt-1.5"
                style={{
                  opacity: inView || isReducedMotion ? 1 : 0,
                  transform:
                    inView || isReducedMotion
                      ? "translateY(0)"
                      : "translateY(28px)",
                  transitionDelay: isReducedMotion ? "0ms" : "100ms",
                }}
              >
                CHOOSE
              </span>

              {/* Line 3: Arrow Button + US */}
              <span
                className="text-[#1F2432] inline-flex items-center gap-3 sm:gap-4 lg:gap-5 mt-1 sm:mt-2 transition-all duration-700 ease-out"
                style={{
                  opacity: inView || isReducedMotion ? 1 : 0,
                  transform:
                    inView || isReducedMotion
                      ? "translateY(0)"
                      : "translateY(28px)",
                  transitionDelay: isReducedMotion ? "0ms" : "200ms",
                }}
              >
                {/* Small circular red button containing right-pointing arrow */}
                <span
                  className="w-[46px] h-[46px] sm:w-[56px] sm:h-[56px] md:w-[66px] md:h-[66px] lg:w-[74px] lg:h-[74px] rounded-full bg-[#E51937] text-white flex items-center justify-center shrink-0 shadow-[0_8px_20px_rgba(229,25,55,0.35)] transition-transform duration-300 group-hover/section:scale-105"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-transform duration-300 group-hover/section:translate-x-1.5"
                  >
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <polyline points="13 5 20 12 13 19" />
                  </svg>
                </span>

                {/* Word: US */}
                <span>US</span>
              </span>
            </h2>

            {/* Existing Subheading and Lead Paragraph */}
            <div
              className="mt-6 sm:mt-7 text-left max-w-xl transition-all duration-700 ease-out"
              style={{
                opacity: inView || isReducedMotion ? 1 : 0,
                transform:
                  inView || isReducedMotion
                    ? "translateY(0)"
                    : "translateY(20px)",
                transitionDelay: isReducedMotion ? "0ms" : "250ms",
              }}
            >
              <h3
                className="text-base sm:text-lg md:text-xl font-bold text-[#1F2432] font-[var(--font-jost)] mb-2 leading-snug"
                style={{
                  fontFamily:
                    "var(--font-jost), var(--font-ubuntu), -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                Unlock Your True Potential with Our Expert-Led Training
              </h3>
              <p
                className="text-xs sm:text-sm md:text-[15px] text-[#6C757D] leading-relaxed font-[var(--font-dm-sans)] m-0"
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                We replace passive lecturing with interactive discussions,
                dedicated workstation practice, and personal career mentorship
                tailored for adult learners.
              </p>
            </div>
          </div>

          {/* Right Column: Giant Decorative Question Mark Glyph (Dark color for light bg) */}
          <div
            className="hidden sm:block self-center md:self-auto md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 lg:right-6 pointer-events-none select-none transition-all duration-700 ease-out"
            style={{
              opacity: inView || isReducedMotion ? 1 : 0,
              transform:
                inView || isReducedMotion
                  ? "rotate(0deg) scale(1)"
                  : "rotate(-12deg) scale(0.85)",
              transitionDelay: isReducedMotion ? "0ms" : "150ms",
            }}
            aria-hidden="true"
          >
            <span
              className="block font-[var(--font-jost)] font-[900] text-[#1F2432] leading-none tracking-tighter"
              style={{
                fontSize: "clamp(120px, 22vw, 290px)",
                filter: "drop-shadow(0 15px 30px rgba(31, 36, 50, 0.12))",
                fontFamily:
                  "var(--font-jost), var(--font-ubuntu), -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              ?
            </span>
          </div>
        </div>

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
            const isLeftColumn = idx % 2 === 0;

            const desktopTilt = isLeftColumn ? -1.5 : 1.5;

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
                {/* Slanted Pill Outer Container */}
                <div
                  className="w-full h-full min-h-[96px] sm:min-h-[104px] p-6 sm:p-7 md:p-8 flex items-start gap-4 sm:gap-5 transition-all duration-300 ease-out group-hover:-translate-y-1.5"
                  style={{
                    backgroundColor: isRed ? "#E51937" : "#181D26",
                    backgroundImage: isRed
                      ? "linear-gradient(135deg, #EE2645 0%, #E51937 60%, #C8132C 100%)"
                      : "linear-gradient(135deg, #222834 0%, #181D26 100%)",
                    borderRadius: "44px 18px 44px 18px",
                    boxShadow: isRed
                      ? "0 16px 28px -6px rgba(229, 25, 55, 0.3), 0 6px 14px -4px rgba(229, 25, 55, 0.2)"
                      : "0 16px 28px -6px rgba(24, 29, 38, 0.28), 0 6px 14px -4px rgba(24, 29, 38, 0.18)",
                    transform: `rotate(var(--why-tilt, ${desktopTilt}deg))`,
                  }}
                >
                  {/* Small Solid Dot (White on both red and dark cards) */}
                  <span
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full shrink-0 mt-2 sm:mt-2.5 transition-transform duration-300 group-hover:scale-125 bg-white"
                    aria-hidden="true"
                  />

                  {/* Inner Content - Counter-rotated slightly so text stays straight and ultra-readable */}
                  <div
                    className="flex-1 select-text"
                    style={{
                      transform: `rotate(calc(var(--why-tilt, ${desktopTilt}deg) * -1))`,
                    }}
                  >
                    <h4
                      className="text-lg sm:text-xl md:text-[22px] font-bold leading-snug tracking-tight m-0 font-[var(--font-jost)] text-white"
                      style={{
                        fontFamily:
                          "var(--font-jost), var(--font-ubuntu), -apple-system, BlinkMacSystemFont, sans-serif",
                      }}
                    >
                      {item.title}
                    </h4>

                    {item.description && (
                      <p
                        className="text-xs sm:text-sm md:text-[14px] leading-relaxed mt-2 font-[var(--font-dm-sans)] font-normal m-0 text-white/85"
                        style={{
                          fontFamily:
                            "var(--font-dm-sans), 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif",
                        }}
                      >
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scoped CSS for responsive tilt & reduced motion */}
      <style jsx>{`
        @media (max-width: 640px) {
          :global(.group) {
            --why-tilt: 0.8deg;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.group) {
            --why-tilt: 0deg !important;
          }
        }
      `}</style>
    </section>
  );
}
