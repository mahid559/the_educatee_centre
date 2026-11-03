"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { Lightbulb, Clock, Handshake, Target, ArrowRight } from "lucide-react";

const DESKTOP_THRESHOLDS = [0.14, 0.42, 0.7, 0.96] as const;
const MOBILE_SEGMENTS = [
  { start: 0.12, end: 0.42 },
  { start: 0.42, end: 0.7 },
  { start: 0.7, end: 0.96 },
] as const;

const SERPENTINE_PATH =
  "M 500 25 C 530 25, 560 70, 560 130 C 560 230, 440 230, 440 330 C 440 430, 560 430, 560 530 C 560 630, 440 630, 440 730";

export function AdmissionSteps() {
  const { admissionSteps } = siteContent;

  const sectionRef = useRef<HTMLElement>(null);
  const maskPathRef = useRef<SVGPathElement>(null);
  const desktopNode04Ref = useRef<HTMLDivElement>(null);
  const mobileNode04Ref = useRef<HTMLDivElement>(null);
  const mobileLineRefs = useRef<(HTMLDivElement | null)[]>([]);

  // By default (SSR / before JS init / reduced-motion), everything is visible.
  const [jsReady, setJsReady] = useState(false);
  const [revealed, setRevealed] = useState<[boolean, boolean, boolean, boolean]>([
    true,
    true,
    true,
    true,
  ]);
  const [step04Pulse, setStep04Pulse] = useState(false);
  const revealedRef = useRef<[boolean, boolean, boolean, boolean]>([
    true,
    true,
    true,
    true,
  ]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (reducedMotionQuery.matches) {
      // Respect prefers-reduced-motion: keep full line and all steps visible immediately
      if (maskPathRef.current) {
        maskPathRef.current.style.strokeDasharray = "none";
        maskPathRef.current.style.strokeDashoffset = "0";
      }
      mobileLineRefs.current.forEach((el) => {
        if (el) el.style.transform = "scaleY(1)";
      });
      return;
    }

    const maskPath = maskPathRef.current;
    const pathLen = maskPath ? maskPath.getTotalLength() : 860;
    if (maskPath) {
      maskPath.style.strokeDasharray = `${pathLen}`;
      maskPath.style.strokeDashoffset = `${pathLen}`;
    }

    let initialized = false;
    let rafId: number | null = null;

    const computeAndApply = () => {
      rafId = null;
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      const isDesktop = window.innerWidth >= 1024;
      const markerEl = isDesktop
        ? desktopNode04Ref.current
        : mobileNode04Ref.current;

      const vh = window.innerHeight || 1;
      const sectionRect = sectionEl.getBoundingClientRect();
      const startTriggerY = vh * 0.7;
      const endTriggerY = vh * 0.5;

      let offsetToStep04 = sectionRect.height * 0.75;
      if (markerEl) {
        const markerRect = markerEl.getBoundingClientRect();
        const markerCenterY = markerRect.top + markerRect.height / 2;
        offsetToStep04 = markerCenterY - sectionRect.top;
      }

      const totalTravel = Math.max(
        1,
        startTriggerY - endTriggerY + offsetToStep04
      );
      const rawProgress = (startTriggerY - sectionRect.top) / totalTravel;
      const progress = Math.max(0, Math.min(1, rawProgress));

      // 1. Update SVG mask dashoffset on desktop
      if (maskPath) {
        const offset = pathLen * (1 - progress);
        maskPath.style.strokeDashoffset = `${offset}`;
      }

      // 2. Update vertical dashed segments on mobile/tablet
      mobileLineRefs.current.forEach((lineEl, idx) => {
        if (!lineEl) return;
        const seg = MOBILE_SEGMENTS[idx];
        if (!seg) return;
        const segProgress = Math.max(
          0,
          Math.min(1, (progress - seg.start) / (seg.end - seg.start))
        );
        lineEl.style.transform = `scaleY(${segProgress})`;
      });

      // 3. Reveal steps once reached (stay visible once revealed)
      if (!initialized) {
        initialized = true;
        const initRevealed: [boolean, boolean, boolean, boolean] = [
          progress >= DESKTOP_THRESHOLDS[0],
          progress >= DESKTOP_THRESHOLDS[1],
          progress >= DESKTOP_THRESHOLDS[2],
          progress >= DESKTOP_THRESHOLDS[3],
        ];
        revealedRef.current = initRevealed;
        setRevealed(initRevealed);
        setJsReady(true);
        if (initRevealed[3]) {
          setStep04Pulse(true);
        }
        return;
      }

      const cur = revealedRef.current;
      let changed = false;
      const next: [boolean, boolean, boolean, boolean] = [
        cur[0],
        cur[1],
        cur[2],
        cur[3],
      ];
      for (let i = 0; i < 4; i++) {
        if (!next[i] && progress >= DESKTOP_THRESHOLDS[i]) {
          next[i] = true;
          changed = true;
          if (i === 3) {
            setStep04Pulse(true);
          }
        }
      }
      if (changed) {
        revealedRef.current = next;
        setRevealed(next);
      }
    };

    const scheduleUpdate = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(computeAndApply);
    };

    // Initial synchronous measurement via rAF
    computeAndApply();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

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

  const getDotStyle = (idx: number): React.CSSProperties => {
    const isShown = !jsReady || revealed[idx];
    return {
      opacity: isShown ? 1 : 0,
      transform: isShown ? "scale(1)" : "scale(0.6)",
      transition: jsReady
        ? "opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
        : undefined,
      willChange: "transform, opacity",
    };
  };

  const getLabelStyle = (idx: number): React.CSSProperties => {
    const isShown = !jsReady || revealed[idx];
    return {
      opacity: isShown ? 1 : 0,
      transition: jsReady ? "opacity 0.4s ease-out" : undefined,
      willChange: "opacity",
    };
  };

  const getCardStyle = (
    idx: number,
    side: "left" | "right",
    baseStyle: React.CSSProperties
  ): React.CSSProperties => {
    const isShown = !jsReady || revealed[idx];
    const offsetX = side === "left" ? -40 : 40;
    return {
      ...baseStyle,
      opacity: isShown ? 1 : 0,
      transform: isShown ? "translate3d(0, 0, 0)" : `translate3d(${offsetX}px, 0, 0)`,
      transition: jsReady
        ? "opacity 0.6s ease-out, transform 0.6s ease-out"
        : undefined,
      willChange: "transform, opacity",
    };
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#FFFFFF] relative border-b border-[#E2E9EB] overflow-hidden"
    >
      <style>{`
        @keyframes step04MarkerGlow {
          0% {
            box-shadow: 0 0 0 0 rgba(45, 55, 72, 0.55), 0 0 0 0 rgba(229, 25, 55, 0.35);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(45, 55, 72, 0), 0 0 18px 6px rgba(229, 25, 55, 0.25);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(45, 55, 72, 0), 0 0 0 0 rgba(229, 25, 55, 0);
          }
        }
        .step04-glow-once {
          animation: step04MarkerGlow 0.9s ease-out 1;
        }
      `}</style>

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
        <div className="hidden lg:block relative max-w-[1020px] mx-auto h-[800px]">
          {/* Central Serpentine S-Curve Dotted Line */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none select-none"
            viewBox="0 0 1000 800"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <mask
                id="admission-timeline-mask"
                maskUnits="userSpaceOnUse"
                x="-20"
                y="-20"
                width="1040"
                height="840"
              >
                <path
                  ref={maskPathRef}
                  d={SERPENTINE_PATH}
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="14"
                  strokeLinecap="round"
                  style={{ willChange: "stroke-dashoffset" }}
                />
              </mask>
            </defs>

            {/* Smooth S-curve path from the top terminal through all 4 nodes,
                ending exactly at the center of the Step 04 node (440, 730) */}
            <g mask="url(#admission-timeline-mask)">
              <path
                d={SERPENTINE_PATH}
                stroke="#94A3B8"
                strokeWidth="2.5"
                strokeDasharray="4 6"
                strokeLinecap="round"
              />
            </g>

            {/* Top Terminal Dot */}
            <circle cx="500" cy="25" r="6" fill="#8E9AA0" />
          </svg>

          {/* STEP 01: Left Capsule, Right Node */}
          <div
            className="absolute w-full flex items-center"
            style={{ top: "60px", height: "140px" }}
          >
            {/* Left Capsule (Vibrant Teal) */}
            <div
              className="absolute right-[calc(50%+48px)] w-[410px] h-[106px] rounded-full flex items-center justify-between pl-7 pr-3 hover:scale-[1.02]"
              style={getCardStyle(0, "left", {
                backgroundColor: stepMeta[0].color,
                boxShadow: `0 12px 24px -6px ${stepMeta[0].shadowColor}`,
              })}
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
                ...getDotStyle(0),
              }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: stepMeta[0].color }}
              />
            </div>

            {/* STEP 01 Label */}
            <div
              className="absolute left-[calc(50%+90px)] flex flex-col text-left select-none"
              style={getLabelStyle(0)}
            >
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
            <div
              className="absolute right-[calc(50%+90px)] flex flex-col text-right select-none"
              style={getLabelStyle(1)}
            >
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
                ...getDotStyle(1),
              }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: stepMeta[1].color }}
              />
            </div>

            {/* Right Capsule (Deep Ocean Blue) */}
            <div
              className="absolute left-[calc(50%+48px)] w-[410px] h-[106px] rounded-full flex items-center justify-between pl-3 pr-7 hover:scale-[1.02]"
              style={getCardStyle(1, "right", {
                backgroundColor: stepMeta[1].color,
                boxShadow: `0 12px 24px -6px ${stepMeta[1].shadowColor}`,
              })}
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
              className="absolute right-[calc(50%+48px)] w-[410px] h-[106px] rounded-full flex items-center justify-between pl-7 pr-3 hover:scale-[1.02]"
              style={getCardStyle(2, "left", {
                backgroundColor: stepMeta[2].color,
                boxShadow: `0 12px 24px -6px ${stepMeta[2].shadowColor}`,
              })}
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
                ...getDotStyle(2),
              }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: stepMeta[2].color }}
              />
            </div>

            {/* STEP 03 Label */}
            <div
              className="absolute left-[calc(50%+90px)] flex flex-col text-left select-none"
              style={getLabelStyle(2)}
            >
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
            <div
              className="absolute right-[calc(50%+90px)] flex flex-col text-right select-none"
              style={getLabelStyle(3)}
            >
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
              ref={desktopNode04Ref}
              className={`absolute right-[calc(50%+46px)] w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-xs ${
                step04Pulse ? "step04-glow-once" : ""
              }`}
              style={{
                border: `2.5px solid ${stepMeta[3].color}`,
                ...getDotStyle(3),
              }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: stepMeta[3].color }}
              />
            </div>

            {/* Right Capsule (Slate Charcoal Indigo) */}
            <div
              className="absolute left-[calc(50%+48px)] w-[410px] h-[106px] rounded-full flex items-center justify-between pl-3 pr-7 hover:scale-[1.02]"
              style={getCardStyle(3, "right", {
                backgroundColor: stepMeta[3].color,
                boxShadow: `0 12px 24px -6px ${stepMeta[3].shadowColor}`,
              })}
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
          {stepMeta.map((step, idx) => (
            <div key={step.stepNum} className="relative pl-14 flex flex-col gap-3">
              {/* Vertical dotted guide line segment: runs from this node's
                  center (top 20px) to the next node's center (item bottom +
                  32px gap + 20px). Omitted after the last step so the line
                  ends exactly at the Step 04 node. */}
              {idx < stepMeta.length - 1 && (
                <div
                  ref={(el) => {
                    mobileLineRefs.current[idx] = el;
                  }}
                  className="absolute left-3 -translate-x-1/2 top-5 -bottom-[52px] w-[2px] pointer-events-none origin-top"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #94A3B8 50%, rgba(255,255,255,0) 0%)",
                    backgroundPosition: "left",
                    backgroundSize: "2px 10px",
                    backgroundRepeat: "repeat-y",
                    willChange: "transform",
                  }}
                />
              )}

              {/* Concentric Node on the Left line */}
              <div
                ref={idx === 3 ? mobileNode04Ref : undefined}
                className={`absolute left-3 top-2 -translate-x-1/2 w-6 h-6 rounded-full bg-white flex items-center justify-center z-10 shadow-xs ${
                  idx === 3 && step04Pulse ? "step04-glow-once" : ""
                }`}
                style={{
                  border: `2.5px solid ${step.color}`,
                  ...getDotStyle(idx),
                }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: step.color }}
                />
              </div>

              {/* Step indicator header */}
              <div
                className="flex items-center gap-2"
                style={getLabelStyle(idx)}
              >
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
                className="w-full rounded-[28px] sm:rounded-full p-4 sm:p-5 flex items-center gap-4"
                style={getCardStyle(idx, "right", {
                  backgroundColor: step.color,
                  boxShadow: `0 10px 24px -4px ${step.shadowColor}`,
                })}
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
