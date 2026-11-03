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
      className="relative overflow-hidden bg-white text-[#1F2432] py-24 sm:py-32"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Photo (6 cols, fills the row height) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            <div className="about-anim-image relative w-full max-w-[500px]">

              {/* Main Photo: fills its stretched column on desktop,
                  fixed height on mobile (no extra min-height forcing) */}
              <div className="group relative w-full h-full min-h-[340px] sm:min-h-[380px] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-2xl border-2 border-white/25 bg-slate-900">
                <Image
                  src={aboutPreview.image}
                  alt={aboutPreview.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                  className="object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content in White Typography (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Main heading, darkened for white background contrast */}
            <h2 className="about-anim-content text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#1F2432] tracking-tight leading-[1.2] mb-5 font-[var(--font-jost)]">
              {aboutPreview.title}
            </h2>

            {/* Paragraph Large in White/90% */}
            <p className="about-anim-content text-base sm:text-lg text-[#6C757D] leading-relaxed font-normal mb-6 font-[var(--font-dm-sans)]">
              {aboutPreview.lead}
            </p>

            {/* Bullet Highlights from authentic data */}
            <ul className="about-anim-content space-y-3 mb-8 text-sm sm:text-base text-[#6C757D] font-[var(--font-dm-sans)] w-full">
              {aboutPreview.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F8C62F] mt-2 shrink-0" />
                  <span className="leading-relaxed font-medium">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Action Button (red, matching the course card CTAs) */}
            <div className="about-anim-content pt-2">
              <Link
                href="/about"
                className="inline-block bg-[#DC2626] text-white hover:bg-[#B91C1C] border-2 border-transparent rounded-[10px] px-8 py-4 font-bold text-base sm:text-lg transition-all duration-300 shadow-xl font-[var(--font-jost)] text-center"
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
