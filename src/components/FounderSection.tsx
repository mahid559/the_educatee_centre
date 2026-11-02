"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { Award, ArrowRight, Quote, MessageCircle } from "lucide-react";

export function FounderSection() {
  const { founder } = siteContent;

  return (
    <section className="py-20 md:py-28 bg-[#F5F7F9] relative border-b border-[#E2E9EB] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E2E9EB] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column (5 cols): Clean Founder Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                {/* Executive Clean Portrait Frame */}
                <div className="relative w-72 h-88 sm:w-80 sm:h-96 md:w-92 md:h-[420px] rounded-2xl overflow-hidden border border-[#E2E9EB] shadow-xl bg-slate-900 z-10">
                  <Image
                    src={founder.image}
                    alt={founder.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Verified Leadership Pill */}
                <div className="absolute -bottom-3.5 right-4 z-20 bg-[#1F2432] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xl border border-white/10 inline-flex items-center gap-2 font-[var(--font-jost)]">
                  <Award className="w-4 h-4 text-[#E51937]" />
                  <span>Founder &amp; Chief Mentor</span>
                </div>
              </div>
            </div>

            {/* Right Column (7 cols): Founder Direct Message & Details */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="text-[#E51937] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 font-[var(--font-jost)]">
                DIRECT MENTORSHIP BY FOUNDER
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2432] tracking-tight font-[var(--font-jost)] mb-2">
                {founder.name}
              </h2>

              <p className="text-sm sm:text-base font-bold text-[#E51937] mb-1 font-[var(--font-jost)]">
                {founder.title}
              </p>

              <p className="text-xs sm:text-sm font-medium text-[#6C757D] mb-6 font-[var(--font-dm-sans)]">
                {founder.credentials}
              </p>

              {/* Founder Personal Quote Box */}
              <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-[#E2E9EB] relative mb-6 shadow-xs w-full">
                <Quote className="w-6 h-6 text-[#E51937]/30 mb-2" />
                <p className="text-sm sm:text-base text-[#1F2432] leading-relaxed italic font-[var(--font-dm-sans)]">
                  &ldquo;{founder.message}&rdquo;
                </p>
              </div>

              {/* Teaching Style & Mentorship Overview */}
              <p className="text-sm text-[#6C757D] leading-relaxed mb-8 font-[var(--font-dm-sans)]">
                {founder.teachingStyle}
              </p>

              {/* Clean Action Buttons */}
              <div className="flex flex-wrap gap-4 font-[var(--font-jost)]">
                <Link
                  href="#free-demo"
                  className="inline-flex items-center justify-center gap-2 bg-[#E51937] hover:bg-[#C8132C] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Book Free Demo Class</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href={siteContent.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#1F2432] border border-[#E2E9EB] font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all duration-300 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Ask Zahir Sir on WhatsApp</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
