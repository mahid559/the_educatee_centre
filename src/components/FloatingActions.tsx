"use client";

import React, { useState } from "react";
import { MessageSquare, Sparkles, X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const FloatingActions: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Tooltip on WhatsApp button */}
      {showTooltip && (
        <div className="pointer-events-auto bg-[#121214] text-[#F7F5F0] text-xs py-2 px-3.5 rounded-2xl shadow-xl flex items-center gap-2 border border-[#242428] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Have questions about batches? <b>Chat with us</b></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#A09D98] hover:text-white p-0.5 ml-1 cursor-pointer"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <div className="flex items-center gap-3 pointer-events-auto">
        {/* Floating Demo CTA */}
        <a
          href="/admissions#book-demo"
          className="hidden sm:inline-flex items-center gap-2 bg-white text-[#121214] border border-[#E8E3D7] hover:border-[#D8D1C3] text-xs font-bold py-3 px-5 rounded-full shadow-[0_4px_20px_rgba(18,18,20,0.08)] hover:-translate-y-0.5 transition-all group"
        >
          <Sparkles className="w-4 h-4 text-[#C81E2B] group-hover:rotate-12 transition-transform" />
          <span>Book Free Demo</span>
        </a>

        {/* WhatsApp Chat Floating Button */}
        <a
          href={siteConfig.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all relative group"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C81E2B] rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">
            1
          </span>
        </a>
      </div>
    </div>
  );
};
