"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Testimonial } from "@/data/content";

export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "EC";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function FacebookBadge({ label = "Recommends" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#1877F2]/10 text-[#1877F2] text-[10px] font-semibold tracking-wide flex-shrink-0">
      <svg
        className="w-3 h-3 fill-current flex-shrink-0"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
      <span>{label}</span>
    </span>
  );
}

export const cardAccents = [
  {
    avatarGradient: "from-slate-900 to-slate-800",
    quoteColor: "text-slate-400",
    hoverBorder: "hover:border-slate-300",
    hoverGlow: "hover:shadow-lg",
  },
  {
    avatarGradient: "from-[#83121A] to-[#C81E2B]",
    quoteColor: "text-[#C81E2B]",
    hoverBorder: "hover:border-[#C81E2B]/40",
    hoverGlow: "hover:shadow-lg",
  },
  {
    avatarGradient: "from-slate-800 to-slate-700",
    quoteColor: "text-slate-400",
    hoverBorder: "hover:border-slate-300",
    hoverGlow: "hover:shadow-lg",
  },
  {
    avatarGradient: "from-[#991B1B] to-[#C81E2B]",
    quoteColor: "text-[#C81E2B]",
    hoverBorder: "hover:border-[#C81E2B]/40",
    hoverGlow: "hover:shadow-lg",
  },
];

interface TestimonialCardProps {
  item: Testimonial;
  index?: number;
  animate?: boolean;
}

export function TestimonialCard({
  item,
  index = 0,
  animate = true,
}: TestimonialCardProps) {
  const accent = cardAccents[index % cardAccents.length];
  const initials = getInitials(item.name);

  const cardContent = (
    <article
      className={`h-full flex flex-col justify-between bg-white text-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.06)] ${accent.hoverBorder} ${accent.hoverGlow} transition-all duration-300 relative overflow-hidden group`}
    >
      <div>
        {/* Top Header: Rating Stars & Facebook Badge */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <FacebookBadge label="Recommends on Facebook" />
        </div>

        {/* Testimonial Quote */}
        <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
          &ldquo;{item.text}&rdquo;
        </blockquote>
      </div>

      {/* Author Details Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${accent.avatarGradient} text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm`}
          aria-hidden="true"
        >
          {initials}
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-sm text-slate-900 truncate">
            {item.name}
          </h4>
          <p className="text-[11px] text-slate-500 truncate">
            {item.date} • Verified Learner
          </p>
        </div>
      </div>
    </article>
  );

  if (!animate) {
    return cardContent;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
      className="h-full"
    >
      {cardContent}
    </motion.div>
  );
}
