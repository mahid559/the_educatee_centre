"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { Award, CheckCircle2, Quote } from "lucide-react";
import gsap from "gsap";

export function FounderSection() {
  const { founder } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".founder-anim-portrait", {
        scale: 0.96,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.from(".founder-anim-text", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="bg-[#1F2432] text-white rounded-[24px] p-8 sm:p-12 lg:p-16 border border-slate-800 relative overflow-hidden shadow-2xl">
          {/* Subtle Accent Glows */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 bg-[#03594E]/25 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#F8C62F]/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Left Column: Founder Executive Portrait (5 cols) */}
            <div className="lg:col-span-5 flex justify-center founder-anim-portrait">
              <div className="relative">
                {/* Executive Clean Portrait Frame */}
                <div className="relative w-72 h-88 sm:w-80 sm:h-96 md:w-92 md:h-[420px] rounded-[20px] overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-800 z-10">
                  <Image
                    src={founder.image}
                    alt={founder.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Verified Leadership Pill */}
                <div className="absolute -bottom-3.5 right-4 z-20 bg-[#03594E] text-white px-4 py-2 rounded-lg text-xs font-bold shadow-xl border border-white/20 inline-flex items-center gap-2 font-[var(--font-jost)]">
                  <Award className="w-4 h-4 text-[#F8C62F]" />
                  <span>Founder &amp; Chief Mentor</span>
                </div>
              </div>
            </div>

            {/* Right Column: Message & Credentials (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="founder-anim-text text-[#F8C62F] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2 font-[var(--font-jost)]">
                LEADERSHIP &amp; MENTORSHIP
              </span>

              <h2 className="founder-anim-text text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-[var(--font-jost)] mb-2">
                {founder.name}
              </h2>

              <p className="founder-anim-text text-sm sm:text-base font-semibold text-slate-300 mb-6 font-[var(--font-dm-sans)]">
                {founder.credentials}
              </p>

              {/* Personal Quote */}
              <div className="founder-anim-text relative pl-5 border-l-2 border-[#F8C62F] mb-6">
                <Quote className="w-5 h-5 text-[#F8C62F]/40 absolute -top-1 left-0 -translate-x-1/2 bg-[#1F2432]" />
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic font-[var(--font-dm-sans)]">
                  &ldquo;{founder.message}&rdquo;
                </p>
              </div>

              {/* Key Mentorship Highlights */}
              <div className="founder-anim-text grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-8 pt-2 font-[var(--font-dm-sans)]">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-white/5 p-3 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#F8C62F] flex-shrink-0" />
                  <span>Personal 1-on-1 Feedback</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-white/5 p-3 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#F8C62F] flex-shrink-0" />
                  <span>Adult &amp; Executive Focus</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-white/5 p-3 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#F8C62F] flex-shrink-0" />
                  <span>Official Band Score Strategy</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-white/5 p-3 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#F8C62F] flex-shrink-0" />
                  <span>Interactive Speaking Drills</span>
                </div>
              </div>

              {/* Action Consultation Button */}
              <div className="founder-anim-text flex flex-wrap gap-4">
                <Link
                  href="#free-demo"
                  className="inline-flex items-center justify-center bg-[#F8C62F] hover:bg-[#e6b422] text-[#1F2432] font-bold text-sm sm:text-base px-8 py-3.5 rounded-lg transition-all duration-300 shadow-md font-[var(--font-jost)]"
                >
                  <span>Book Mentorship Demo</span>
                </Link>
                <Link
                  href="/about#mentor"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-lg transition-all duration-300 border border-white/20 font-[var(--font-jost)]"
                >
                  <span>Read Full Bio</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
