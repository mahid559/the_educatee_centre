"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const TrustStats: React.FC = () => {
  const stats = [
    {
      value: "900+",
      label: "Learners since 2022",
      desc: "Trained across Spoken English & Skills",
    },
    {
      value: "92%",
      label: "Improve within one term",
      desc: "Measurable spoken confidence gain",
    },
    {
      value: "4.9/5",
      label: "Rating across 300+ reviews",
      desc: "Feni's trusted English sanctuary",
    },
    {
      value: "Max 16",
      label: "Strictly limited cohorts",
      desc: "Every learner speaks every session",
    },
  ];

  return (
    <section className="py-16 lg:py-20 border-y border-[#E8E3D7] bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Centered Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-3"
        >
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#121214] leading-tight">
            Building strong communicative foundations through personalized{" "}
            <span className="text-[#C81E2B]">learning experiences</span>
          </h3>
        </motion.div>

        {/* 4 Counter Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-1.5 text-center sm:text-left border-l-2 border-[#E8E3D7] pl-5 sm:pl-6"
            >
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-[#121214] tracking-tight">
                {stat.value}
              </div>
              <div className="font-heading font-bold text-sm text-[#121214]">
                {stat.label}
              </div>
              <p className="font-sans text-xs text-[#585552] leading-snug">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Proof Strip & Link */}
        <div className="pt-4 border-t border-[#E8E3D7] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[#585552] font-medium text-center sm:text-left">
            Trusted by families across Feni. Proven by student communicative success.
          </p>
          <Link
            href="/about"
            className="font-bold text-[#C81E2B] hover:text-[#A81520] flex items-center gap-1.5 transition-colors"
          >
            <span>Read Our Founding Story</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
