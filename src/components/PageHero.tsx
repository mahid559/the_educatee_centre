"use client";

import React from "react";
import { motion } from "framer-motion";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";
import { fadeInUp, defaultTransition } from "@/lib/motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  accentText?: string;
  subtext: string;
  breadcrumbs: BreadcrumbItem[];
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  accentText,
  subtext,
  breadcrumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#12161E] via-[#181D26] to-[#1F2432] text-white pt-28 pb-14 sm:pt-32 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24">
      {/* Background Decorative Accents */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#E51937]/25 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#E51937]/15 blur-3xl" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={defaultTransition}
          className="max-w-3xl flex flex-col items-start"
        >
          {/* Breadcrumbs */}
          <Breadcrumb items={breadcrumbs} variant="light" />

          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-4 text-xs font-bold tracking-wider uppercase text-[#F8C62F] shadow-sm font-[var(--font-jost)]">
            <span className="w-2 h-2 rounded-full bg-[#F8C62F] animate-pulse" />
            <span>{eyebrow}</span>
          </div>

          {/* Large Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight !text-white mb-4 font-[var(--font-jost)]">
            <span className="text-white">{title} </span>
            {accentText && (
              <span className="text-[#F8C62F]">
                {accentText}
              </span>
            )}
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-normal font-[var(--font-dm-sans)]">
            {subtext}
          </p>

          {/* Optional actions or pills */}
          {children && <div className="mt-6 w-full">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
