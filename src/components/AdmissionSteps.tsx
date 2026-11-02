"use client";

import React from "react";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { Lightbulb, Clock, Handshake, Target, ArrowRight } from "lucide-react";

export function AdmissionSteps() {
  const { admissionSteps } = siteContent;

  const stepMeta = [
    {
      stepNum: "01",
      color: "#E51937", // Brand Crimson Red
      shadowColor: "rgba(229, 25, 55, 0.35)",
      icon: <Lightbulb className="w-8 h-8 text-[#334155] stroke-[1.6]" />,
      title: admissionSteps[0]?.title || "Book a Free Demo Class",
      description:
        admissionSteps[0]?.description ||
        "Fill out the simple 30-second form on this page or WhatsApp us to reserve your free demo seat.",
    },
    {
      stepNum: "02",
      color: "#1F2432", // Executive Dark Charcoal
      shadowColor: "rgba(31, 36, 50, 0.35)",
      icon: <Clock className="w-8 h-8 text-[#334155] stroke-[1.6]" />,
      title: admissionSteps[1]?.title || "Attend the Live Demo",
      description:
        admissionSteps[1]?.description ||
        "Step into our quiet 5th-floor classrooms and experience our friendly, engaging teaching method.",
    },
    {
      stepNum: "03",
      color: "#C8132C", // Deep Crimson Tone
      shadowColor: "rgba(200, 19, 44, 0.35)",
      icon: <Handshake className="w-8 h-8 text-[#334155] stroke-[1.6]" />,
      title: admissionSteps[2]?.title || "Choose Your Batch",
      description:
        admissionSteps[2]?.description ||
        "Select the schedule that fits your life: regular, separate girls' batch, or evening professional batch.",
    },
    {
      stepNum: "04",
      color: "#2D3748", // Slate Charcoal
      shadowColor: "rgba(45, 55, 72, 0.35)",
      icon: <Target className="w-8 h-8 text-[#334155] stroke-[1.6]" />,
      title: admissionSteps[3]?.title || "Complete Admission at Campus",
      description:
        admissionSteps[3]?.description ||
        "Finalize your admission at our Feni office, collect your course handouts, and begin your journey.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] relative border-b border-[#E2E9EB] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-[#E51937] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2 font-[var(--font-jost)]">
            ADMISSION PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2432] tracking-tight mb-4 font-[var(--font-jost)] leading-tight">
            How Admission &amp; Enrollment Works
          </h2>
          <p className="text-base sm:text-lg text-[#6C757D] leading-relaxed max-w-2xl mx-auto font-[var(--font-dm-sans)]">
            Experience our classroom culture before paying any fees. We respect your time with a completely zero-pressure enrollment policy.
          </p>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP TIMELINE: Exact Match to Uploaded Reference Image     */}
        {/* ============================================================== */}
        <div className="hidden lg:block relative max-w-[1020px] mx-auto h-[860px]">
          {/* Central Serpentine S-Curve Dotted Line */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none select-none"
            viewBox="0 0 1000 860"
            fill="none"
            aria-hidden="true"
          >
            {/* Smooth S-curve path connecting top terminal, all 4 nodes, and bottom terminal */}
            <path
              d="M 500 25 C 530 25, 560 70, 560 130 C 560 230, 440 230, 440 330 C 440 430, 560 430, 560 530 C 560 630, 440 630, 440 730 C 440 790, 470 835, 500 835"
              stroke="#94A3B8"
              strokeWidth="2.5"
              strokeDasharray="4 6"
              strokeLinecap="round"
            />
            {/* Top Terminal Dot */}
            <circle cx="500" cy="25" r="6" fill="#8E9AA0" />
            {/* Bottom Terminal Dot */}
            <circle cx="500" cy="835" r="6" fill="#8E9AA0" />
          </svg>

          {/* STEP 01: Left Capsule, Right Node */}
          <div
            className="absolute w-full flex items-center"
            style={{ top: "60px", height: "140px" }}
          >
            {/* Left Capsule (Vibrant Teal) */}
            <div
              className="absolute right-[calc(50%+48px)] w-[410px] h-[106px] rounded-full flex items-center justify-between pl-7 pr-3 transition-transform duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: stepMeta[0].color,
                boxShadow: `0 12px 24px -6px ${stepMeta[0].shadowColor}`,
              }}
            >
              {/* Text */}
              <div className="flex-1 pr-3 text-left">
                <h4 className="text-white font-extrabold text-[15px] leading-tight font-[var(--font-jost)] uppercase tracking-wide">
                  {stepMeta[0].title}
                </h4>
                <p className="text-white/85 text-[12px] leading-snug mt-1 font-[var(--font-dm-sans)] line-clamp-2">
                  {stepMeta[0].description}
                </p>
              </div>

              {/* 3D Elevated White Circle Button */}
              <div
                className="w-[84px] h-[84px] rounded-full bg-white flex items-center justify-center shrink-0"
                style={{
                  boxShadow:
                    "0 6px 16px rgba(0,0,0,0.18), inset 0 2px 4px rgba(255,255,255,1), inset 0 -2px 4px rgba(0,0,0,0.06)",
                }}
              >
                {stepMeta[0].icon}
              </div>

              {/* Right Pointer Caret */}
              <div
                className="absolute -right-[9px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[8px] border-y-transparent border-l-[10px]"
                style={{ borderLeftColor: stepMeta[0].color }}
              />
            </div>

            {/* Concentric Circle Node at X = 560 */}
            <div
              className="absolute left-[calc(50%+46px)] w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-xs"
              style={{
                border: `2.5px solid ${stepMeta[0].color}`,
              }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: stepMeta[0].color }}
              />
            </div>

            {/* STEP 01 Label */}
            <div className="absolute left-[calc(50%+90px)] flex flex-col text-left select-none">
              <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#64748B]">
                STEP
              </span>
              <span
                className="text-5xl font-extrabold font-[var(--font-jost)] leading-none"
                style={{ color: stepMeta[0].color }}
              >
                01
              </span>
            </div>
          </div>

          {/* STEP 02: Left Node, Right Capsule */}
          <div
            className="absolute w-full flex items-center"
            style={{ top: "260px", height: "140px" }}
          >
            {/* STEP 02 Label */}
            <div className="absolute right-[calc(50%+90px)] flex flex-col text-right select-none">
              <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#64748B]">
                STEP
              </span>
              <span
                className="text-5xl font-extrabold font-[var(--font-jost)] leading-none"
                style={{ color: stepMeta[1].color }}
              >
                02
              </span>
            </div>

            {/* Concentric Circle Node at X = 440 */}
            <div
              className="absolute right-[calc(50%+46px)] w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-xs"
              style={{
                border: `2.5px solid ${stepMeta[1].color}`,
              }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: stepMeta[1].color }}
              />
            </div>

            {/* Right Capsule (Deep Ocean Blue) */}
            <div
              className="absolute left-[calc(50%+48px)] w-[410px] h-[106px] rounded-full flex items-center justify-between pl-3 pr-7 transition-transform duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: stepMeta[1].color,
                boxShadow: `0 12px 24px -6px ${stepMeta[1].shadowColor}`,
              }}
            >
              {/* Left Pointer Caret */}
              <div
                className="absolute -left-[9px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[8px] border-y-transparent border-r-[10px]"
                style={{ borderRightColor: stepMeta[1].color }}
              />

              {/* 3D Elevated White Circle Button */}
              <div
                className="w-[84px] h-[84px] rounded-full bg-white flex items-center justify-center shrink-0"
                style={{
                  boxShadow:
                    "0 6px 16px rgba(0,0,0,0.18), inset 0 2px 4px rgba(255,255,255,1), inset 0 -2px 4px rgba(0,0,0,0.06)",
                }}
              >
                {stepMeta[1].icon}
              </div>

              {/* Text */}
              <div className="flex-1 pl-3 text-left">
                <h4 className="text-white font-extrabold text-[15px] leading-tight font-[var(--font-jost)] uppercase tracking-wide">
                  {stepMeta[1].title}
                </h4>
                <p className="text-white/85 text-[12px] leading-snug mt-1 font-[var(--font-dm-sans)] line-clamp-2">
                  {stepMeta[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* STEP 03: Left Capsule, Right Node */}
          <div
            className="absolute w-full flex items-center"
            style={{ top: "460px", height: "140px" }}
          >
            {/* Left Capsule (Deep Forest Teal) */}
            <div
              className="absolute right-[calc(50%+48px)] w-[410px] h-[106px] rounded-full flex items-center justify-between pl-7 pr-3 transition-transform duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: stepMeta[2].color,
                boxShadow: `0 12px 24px -6px ${stepMeta[2].shadowColor}`,
              }}
            >
              {/* Text */}
              <div className="flex-1 pr-3 text-left">
                <h4 className="text-white font-extrabold text-[15px] leading-tight font-[var(--font-jost)] uppercase tracking-wide">
                  {stepMeta[2].title}
                </h4>
                <p className="text-white/85 text-[12px] leading-snug mt-1 font-[var(--font-dm-sans)] line-clamp-2">
                  {stepMeta[2].description}
                </p>
              </div>

              {/* 3D Elevated White Circle Button */}
              <div
                className="w-[84px] h-[84px] rounded-full bg-white flex items-center justify-center shrink-0"
                style={{
                  boxShadow:
                    "0 6px 16px rgba(0,0,0,0.18), inset 0 2px 4px rgba(255,255,255,1), inset 0 -2px 4px rgba(0,0,0,0.06)",
                }}
              >
                {stepMeta[2].icon}
              </div>

              {/* Right Pointer Caret */}
              <div
                className="absolute -right-[9px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[8px] border-y-transparent border-l-[10px]"
                style={{ borderLeftColor: stepMeta[2].color }}
              />
            </div>

            {/* Concentric Circle Node at X = 560 */}
            <div
              className="absolute left-[calc(50%+46px)] w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-xs"
              style={{
                border: `2.5px solid ${stepMeta[2].color}`,
              }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: stepMeta[2].color }}
              />
            </div>

            {/* STEP 03 Label */}
            <div className="absolute left-[calc(50%+90px)] flex flex-col text-left select-none">
              <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#64748B]">
                STEP
              </span>
              <span
                className="text-5xl font-extrabold font-[var(--font-jost)] leading-none"
                style={{ color: stepMeta[2].color }}
              >
                03
              </span>
            </div>
          </div>

          {/* STEP 04: Left Node, Right Capsule */}
          <div
            className="absolute w-full flex items-center"
            style={{ top: "660px", height: "140px" }}
          >
            {/* STEP 04 Label */}
            <div className="absolute right-[calc(50%+90px)] flex flex-col text-right select-none">
              <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#64748B]">
                STEP
              </span>
              <span
                className="text-5xl font-extrabold font-[var(--font-jost)] leading-none"
                style={{ color: stepMeta[3].color }}
              >
                04
              </span>
            </div>

            {/* Concentric Circle Node at X = 440 */}
            <div
              className="absolute right-[calc(50%+46px)] w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-xs"
              style={{
                border: `2.5px solid ${stepMeta[3].color}`,
              }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: stepMeta[3].color }}
              />
            </div>

            {/* Right Capsule (Slate Charcoal Indigo) */}
            <div
              className="absolute left-[calc(50%+48px)] w-[410px] h-[106px] rounded-full flex items-center justify-between pl-3 pr-7 transition-transform duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: stepMeta[3].color,
                boxShadow: `0 12px 24px -6px ${stepMeta[3].shadowColor}`,
              }}
            >
              {/* Left Pointer Caret */}
              <div
                className="absolute -left-[9px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[8px] border-y-transparent border-r-[10px]"
                style={{ borderRightColor: stepMeta[3].color }}
              />

              {/* 3D Elevated White Circle Button */}
              <div
                className="w-[84px] h-[84px] rounded-full bg-white flex items-center justify-center shrink-0"
                style={{
                  boxShadow:
                    "0 6px 16px rgba(0,0,0,0.18), inset 0 2px 4px rgba(255,255,255,1), inset 0 -2px 4px rgba(0,0,0,0.06)",
                }}
              >
                {stepMeta[3].icon}
              </div>

              {/* Text */}
              <div className="flex-1 pl-3 text-left">
                <h4 className="text-white font-extrabold text-[15px] leading-tight font-[var(--font-jost)] uppercase tracking-wide">
                  {stepMeta[3].title}
                </h4>
                <p className="text-white/85 text-[12px] leading-snug mt-1 font-[var(--font-dm-sans)] line-clamp-2">
                  {stepMeta[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE & TABLET LAYOUT: Fully Responsive Vertical Timeline     */}
        {/* ============================================================== */}
        <div className="lg:hidden flex flex-col gap-8 max-w-lg mx-auto relative">
          {/* Vertical dotted guide line */}
          <div
            className="absolute left-6 top-8 bottom-8 w-[2px] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #94A3B8 50%, rgba(255,255,255,0) 0%)",
              backgroundPosition: "left",
              backgroundSize: "2px 10px",
              backgroundRepeat: "repeat-y",
            }}
          />

          {stepMeta.map((step, idx) => (
            <div key={step.stepNum} className="relative pl-14 flex flex-col gap-3">
              {/* Concentric Node on the Left line */}
              <div
                className="absolute left-3 top-2 -translate-x-1/2 w-6 h-6 rounded-full bg-white flex items-center justify-center z-10 shadow-xs"
                style={{ border: `2.5px solid ${step.color}` }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: step.color }}
                />
              </div>

              {/* Step indicator header */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#64748B]">
                  STEP
                </span>
                <span
                  className="text-2xl font-extrabold font-[var(--font-jost)] leading-none"
                  style={{ color: step.color }}
                >
                  {step.stepNum}
                </span>
              </div>

              {/* Capsule Card */}
              <div
                className="w-full rounded-[28px] sm:rounded-full p-4 sm:p-5 flex items-center gap-4 transition-all"
                style={{
                  backgroundColor: step.color,
                  boxShadow: `0 10px 24px -4px ${step.shadowColor}`,
                }}
              >
                {/* 3D Elevated White Circle Button */}
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md"
                  style={{
                    boxShadow:
                      "0 4px 12px rgba(0,0,0,0.15), inset 0 2px 3px rgba(255,255,255,1), inset 0 -2px 3px rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="scale-75 sm:scale-90">{step.icon}</div>
                </div>

                {/* Text Content */}
                <div className="flex-1 text-left">
                  <h4 className="text-white font-extrabold text-sm sm:text-base leading-snug font-[var(--font-jost)] uppercase tracking-wide">
                    {step.title}
                  </h4>
                  <p className="text-white/85 text-xs sm:text-sm leading-relaxed mt-1 font-[var(--font-dm-sans)]">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 sm:mt-16 text-center">
          <Link
            href="#free-demo"
            className="inline-flex items-center gap-2 bg-[#E51937] hover:bg-[#C8132C] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-lg transition-all duration-300 shadow-md font-[var(--font-jost)] group"
          >
            <span>Book Your Free Demo Class</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
