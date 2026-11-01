"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/content";
import gsap from "gsap";

export function AboutPreview() {
  const { aboutPreview } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".about-anim-image", {
        scale: 0.95,
        opacity: 0,
        duration: 0.85,
        ease: "power2.out",
      });
      gsap.from(".about-anim-content", {
        y: 24,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#03594E] text-white py-24 sm:py-32"
    >
      {/* Background Curved Arc Texture (Inspired by language-courses-128.webflow.io) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 select-none overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/images/about/bg_curve.png"
          alt=""
          fill
          className="object-cover object-bottom"
        />
      </div>

      {/* Subtle ambient light orbs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#F8C62F]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Floating Circular Badge (6 cols) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            <div className="about-anim-image relative w-full max-w-[560px]">
              {/* Main Photo with 24px rounded corners and shadow */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[24px] overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900">
                <Image
                  src={aboutPreview.image}
                  alt={aboutPreview.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                  className="object-cover object-[center_20%]"
                />
              </div>

              {/* Floating Circular Experience Badge (Exact match to language-courses-128 experience-img) */}
              <div className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:right-6 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center border-4 border-white text-center z-10 select-none">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#03594E] leading-none font-[var(--font-jost)]">
                  3+
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-[#1F2432] leading-tight mt-1 font-[var(--font-dm-sans)]">
                  Years of<br />Excellence
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Content in White Typography (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* White Heading */}
            <h2 className="about-anim-content text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.2] mb-5 font-[var(--font-jost)]">
              {aboutPreview.title}
            </h2>

            {/* Paragraph Large in White/90% */}
            <p className="about-anim-content text-base sm:text-lg text-white/90 leading-relaxed font-normal mb-6 font-[var(--font-dm-sans)]">
              {aboutPreview.lead}
            </p>

            {/* Bullet Highlights from authentic data */}
            <ul className="about-anim-content space-y-3 mb-8 text-sm sm:text-base text-white/90 font-[var(--font-dm-sans)] w-full">
              {aboutPreview.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F8C62F] mt-2 shrink-0" />
                  <span className="leading-relaxed font-medium">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Secondary Action Button (White button that inverts on hover, exactly like Webflow secondary-button) */}
            <div className="about-anim-content pt-2">
              <Link
                href="/about"
                className="inline-block bg-white text-[#1F2432] hover:bg-transparent hover:text-white border-2 border-white rounded-[10px] px-8 py-4 font-bold text-base sm:text-lg transition-all duration-300 shadow-xl font-[var(--font-jost)] text-center"
              >
                {aboutPreview.ctaText || "About Us"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
