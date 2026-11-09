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
      className="relative overflow-hidden bg-[#181D26] text-white pt-32 pb-0 md:pt-36 lg:pt-40 z-10"
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
            <span className="hero-anim-item inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-[#E51937] mb-3 font-[var(--font-jost)]">
              {hero.tag || "Feni's Premier Language & IT Academy"}
            </span>

            {/* Main Headline in Jost */}
            <h1 className="hero-anim-item text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.12] tracking-tight text-white mb-5 font-[var(--font-jost)]">
              <span>{hero.headlineLine1} </span>
              <span className="text-[#E51937] block sm:inline">
                {hero.headlineLine2}
              </span>
            </h1>

            {/* Subtext */}
            <p className="hero-anim-item text-base sm:text-lg text-white/85 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0 mb-8 font-[var(--font-dm-sans)]">
              {hero.subtext}
            </p>

            {/* Action Buttons: Red Primary CTA + White Secondary CTA */}
            <div className="hero-anim-item flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Red Primary Action Button */}
              <Link
                href="#free-demo"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#E51937] hover:bg-[#C8132C] text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-lg font-[var(--font-jost)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Free Demo Class</span>
              </Link>

              {/* Clean Secondary Button: Explore Programs */}
              <Link
                href="/programs"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white hover:text-[#181D26] text-white border border-white/30 font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-md font-[var(--font-jost)]"
              >
                <span>Explore Programs</span>
              </Link>
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
