"use client";

import React from "react";
import { motion } from "framer-motion";

interface FilterTabsProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
  layoutId?: string;
}

export function FilterTabs({
  categories,
  activeCategory,
  onChange,
  layoutId = "activeFilterPill",
}: FilterTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter programs by category"
      className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#F5F7F9] rounded-xl border border-[#E2E9EB] font-[var(--font-jost)]"
    >
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            type="button"
            onClick={() => onChange(category)}
            className={`relative px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E51937] ${
              isActive
                ? "text-white shadow-sm"
                : "text-[#6C757D] hover:text-[#1F2432] hover:bg-white/80"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId={layoutId}
                className="absolute inset-0 bg-[#E51937] rounded-lg shadow-sm z-0"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
}
