"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { ArrowRight, ShieldCheck, Monitor, GraduationCap, Award } from "lucide-react";

export function WhyChooseUs() {
  const { whyChooseUs } = siteContent;

  const features = [
    {
      id: "pillar-01",
      number: "01",
      position: "left",
      color: "#E51937", // Brand Crimson Red
      icon: <ShieldCheck className="w-4 h-4 text-[#E51937] shrink-0" />,
      title: whyChooseUs[0]?.title || "Fear-Free Adult Learning",
      description:
        whyChooseUs[0]?.description ||
        "Respectful, non-judgmental environment tailored for mature students, university aspirants, and jobholders.",
    },
    {
      id: "pillar-02",
      number: "02",
      position: "right",
      color: "#1F2432", // Executive Dark Charcoal
      icon: <Monitor className="w-4 h-4 text-[#1F2432] shrink-0" />,
      title: whyChooseUs[1]?.title || "100% Practical & Lab Practice",
      description:
        whyChooseUs[1]?.description ||
        "Every student practices on their own workstation in our air-conditioned computer lab or interactive speaking circle.",
    },
    {
      id: "pillar-03",
      number: "03",
      position: "left",
      color: "#E51937", // Brand Crimson Red
      icon: <GraduationCap className="w-4 h-4 text-[#E51937] shrink-0" />,
      title: whyChooseUs[2]?.title || "Direct Mentorship by Founder",
      description:
        whyChooseUs[2]?.description ||
        "Engr. Zahir Uddin Babar personally instructs key batches with diagnostic evaluations and mock interviews.",
    },
    {
      id: "pillar-04",
      number: "04",
      position: "right",
      color: "#2D3748", // Slate Charcoal
      icon: <Award className="w-4 h-4 text-[#2D3748] shrink-0" />,
      title: whyChooseUs[3]?.title || "Official Band Track Record",
      description:
        whyChooseUs[3]?.description ||
        "Consistent IELTS 6.0+ alumni success, certified computing programs, and post-course speaking clubs.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] relative border-b border-[#E2E9EB] overflow-hidden">
      {/* Top Right Decorative Dot Matrix Grid (7x3 matching brand crimson) */}
      <div
        className="absolute top-8 right-6 sm:right-12 lg:right-20 grid grid-cols-7 gap-2.5 sm:gap-3 pointer-events-none select-none opacity-40"
        aria-hidden="true"
      >
        {Array.from({ length: 21 }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#E51937]"
          />
        ))}
      </div>

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 relative z-10">
        {/* ============================================================== */}
        {/* TOP HERO: Typographic Treatment in Brand Palette               */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          {/* Left Column: Big Typographic Treatment */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Stylized Big Headline */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#E51937] tracking-tight font-[var(--font-jost)] leading-[1.02] uppercase select-none">
              WHY
              <br />
              CHOOSE
              <br />
              <span className="inline-flex items-center gap-3 mt-1 text-[#1F2432]">
                <span className="inline-flex items-center justify-center bg-[#E51937] text-white w-14 sm:w-16 h-10 sm:h-12 rounded-xl shadow-md">
                  <ArrowRight className="w-6 sm:w-7 h-6 sm:h-7 stroke-[2.5]" />
                </span>
                <span>US</span>
              </span>
            </h2>

            {/* Subtitle & Lead Paragraph */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#1F2432] font-[var(--font-jost)] mt-6 mb-3 leading-snug">
              Unlock Your True Potential with Our Expert-Led Training
            </h3>
            <p className="text-sm sm:text-base text-[#6C757D] leading-relaxed max-w-xl mx-auto lg:mx-0 font-[var(--font-dm-sans)]">
              We replace passive lecturing with interactive discussions, dedicated workstation practice,
              and personal career mentorship tailored for adult learners.
            </p>
          </div>

          {/* Right Column: 3D Stippled Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 select-none">
              <Image
                src="/images/why-choose/question-mark.png"
                alt="Why Choose Us"
                width={360}
                height={360}
                className="w-full h-full object-contain select-none transition-transform duration-500 hover:scale-[1.02] drop-shadow-[0_15px_30px_rgba(229,25,55,0.12)]"
                priority
              />
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2X2 RIBBON CARDS                                               */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-8 sm:gap-y-10 max-w-4xl mx-auto">
          {features.map((item) => {
            const isLeft = item.position === "left";

            return (
              <div
                key={item.id}
                className="relative group transition-transform duration-300 hover:-translate-y-1"
              >
                {/* 3D Folded Ribbon Base Layer */}
                <div
                  className={`absolute -bottom-2.5 h-8 rounded-b-xl z-0 transition-all duration-300 ${
                    isLeft
                      ? "-left-3 right-6 -skew-x-[15deg] rounded-bl-2xl"
                      : "-right-3 left-6 skew-x-[15deg] rounded-br-2xl"
                  }`}
                  style={{ backgroundColor: item.color }}
                />

                {/* White Elevated Front Card Panel */}
                <div
                  className={`relative z-10 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)] flex items-center gap-4 sm:gap-5 transition-shadow duration-300 hover:shadow-[0_16px_32px_-6px_rgba(0,0,0,0.12)] ${
                    isLeft
                      ? "flex-col sm:flex-row text-center sm:text-left justify-between"
                      : "flex-col sm:flex-row-reverse text-center sm:text-left justify-between"
                  }`}
                >
                  {/* Text Content — full card width now that the number
                      circle is removed (titles use nowrap to stay on one line) */}
                  <div className={`flex-1 ${isLeft ? "sm:pr-2" : "sm:pl-2"}`}>
                    <h4 className="text-base sm:text-lg font-bold text-[#1F2432] group-hover:text-[#E51937] transition-colors font-[var(--font-jost)] leading-snug flex items-center justify-center sm:justify-start gap-2 mb-1.5 whitespace-nowrap">
                      {item.icon}
                      <span>{item.title}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#6C757D] leading-relaxed font-[var(--font-dm-sans)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
