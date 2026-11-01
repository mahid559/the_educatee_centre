"use client";

import React from "react";
import { motion } from "framer-motion";
import { cardLiftProps } from "@/lib/motion";
import { CheckCircle2 } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  accent?: "blue" | "pink" | "teal" | "yellow";
  icon?: React.ReactNode;
  index?: number;
}

export function FeatureCard({
  title,
  description,
  accent = "blue",
  icon,
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      {...cardLiftProps}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(15,23,42,0.12)] hover:border-[#C81E2B]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full"
    >
      <div>
        {/* Icon Container */}
        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 group-hover:text-[#C81E2B] group-hover:border-[#C81E2B]/30 group-hover:bg-red-50/50 transition-colors mb-5 shadow-xs">
          {icon || <CheckCircle2 className="w-6 h-6 text-[#C81E2B]" />}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#C81E2B] transition-colors mb-2.5 font-[var(--font-ubuntu)] leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom Subtle Pill */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C81E2B]" />
        <span>Institutional Standard</span>
      </div>
    </motion.div>
  );
}
