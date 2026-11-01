"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/content";
import gsap from "gsap";

export function Hero() {
  const { hero } = siteContent;
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim-item", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });
      gsap.from(".hero-cutout-img", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        delay: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative overflow-hidden bg-[#03594E] text-white pt-32 pb-0 md:pt-36 lg:pt-40 z-10"
    >
      {/* Decorative corner shapes from Educeet Theme */}
      <div className="absolute left-4 sm:left-10 top-24 pointer-events-none opacity-40 select-none" aria-hidden="true">
        <Image
          src="/images/educeet/hero-5-1-1.png"
          alt=""
          width={80}
          height={80}
          className="w-16 sm:w-20 object-contain"
        />
      </div>
      <div className="absolute right-8 sm:right-16 top-24 pointer-events-none opacity-30 hidden lg:block select-none" aria-hidden="true">
        <Image
          src="/images/educeet/hero-5-3.png"
          alt=""
          width={90}
          height={90}
          className="w-20 object-contain"
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          {/* Left Column: Content (7 cols) */}
          <div className="lg:col-span-7 pb-12 sm:pb-16 lg:pb-24 text-center lg:text-left">
            {/* Category Subtitle */}
            <span className="hero-anim-item inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-[#F8C62F] mb-3 font-[var(--font-jost)]">
              {hero.tag || "Feni's Premier Language & IT Academy"}
            </span>

            {/* Main Headline in Jost */}
            <h1 className="hero-anim-item text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.12] tracking-tight text-white mb-5 font-[var(--font-jost)]">
              <span>{hero.headlineLine1} </span>
              <span className="text-[#F8C62F] block sm:inline">
                {hero.headlineLine2}
              </span>
            </h1>

            {/* Subtext */}
            <p className="hero-anim-item text-base sm:text-lg text-white/85 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0 mb-8 font-[var(--font-dm-sans)]">
              {hero.subtext}
            </p>

            {/* Action Buttons & Rating Box (Side by Side) */}
            <div className="hero-anim-item flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              {/* Yellow Primary Action Button */}
              <Link
                href={hero.primaryCtaLink || "#courses"}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#F8C62F] hover:bg-[#e6b422] text-[#1F2432] font-bold text-base px-8 py-4 rounded-lg transition-all duration-300 shadow-md font-[var(--font-jost)]"
              >
                <span>{hero.primaryCtaText || "Explore All Courses"}</span>
              </Link>

              {/* Rating & Social Proof Box */}
              <div className="flex items-center gap-3.5 text-left">
                <Image
                  src="/images/educeet/ratting.png"
                  alt="Students Community"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain flex-shrink-0"
                />
                <div>
                  <span className="block text-xs sm:text-sm font-bold text-white font-[var(--font-jost)] leading-tight">
                    10,000+ Enrolled Students &amp; Community
                  </span>
                  <div className="flex items-center gap-1 mt-1 text-[#F8C62F]">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3.5 h-3.5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    <span className="text-xs text-white/80 font-semibold ml-1 font-[var(--font-dm-sans)]">
                      4.9 (500+ Reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Natural Cutout Baseline Image (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end relative">
            <div className="hero-cutout-img relative w-full max-w-[380px] sm:max-w-[430px] lg:max-w-[470px] flex items-end justify-center">
              <Image
                src="/images/educeet/hero-5-1.png"
                alt="The Educatee Centre Student"
                width={470}
                height={560}
                priority
                className="object-contain object-bottom select-none drop-shadow-2xl max-h-[460px] sm:max-h-[520px] lg:max-h-[580px] w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
