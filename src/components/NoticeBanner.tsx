"use client";

import React, { useState } from "react";
import { Sparkles, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const NoticeBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || !siteConfig.bannerNotice.isActive) return null;

  return (
    <div className="bg-gradient-to-r from-[#C81E2B] via-[#D3232F] to-[#C81E2B] text-white text-xs py-2 px-4 relative z-40 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1 justify-center sm:justify-start">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="font-semibold tracking-wide flex items-center gap-1.5 text-center sm:text-left">
            <Sparkles className="w-3.5 h-3.5 inline text-[#E51937] shrink-0" />
            <span>{siteConfig.bannerNotice.text}</span>
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={siteConfig.bannerNotice.ctaLink}
            className="hidden sm:inline-flex items-center gap-1 bg-white text-[#121214] font-bold px-3 py-1 rounded-full text-[11px] hover:bg-[#F7F5F0] transition-transform active:scale-95 shadow-xs"
          >
            <span>{siteConfig.bannerNotice.ctaText}</span>
            <ArrowRight className="w-3 h-3" />
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="text-white/80 hover:text-white p-1 rounded-sm transition-colors cursor-pointer"
            aria-label="Dismiss announcement"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
