"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export const LevelsSection: React.FC = () => {
  const levels = [
    {
      tag: "Level 01",
      badgeClass: "pill-badge-crimson",
      title: "Just starting",
      subtitle: "New to spoken English, we build the basics first.",
      points: [
        "Phonics & accurate pronunciation",
        "Overcoming initial speaking anxiety",
        "Essential vocabulary for daily life",
      ],
    },
    {
      tag: "Level 02",
      badgeClass: "pill-badge-crimson",
      title: "Catching up",
      subtitle: "Fill the gaps and get back on track.",
      points: [
        "Practical grammar without dry rules",
        "Sentence formation & hesitation removal",
        "Active pair conversations every class",
      ],
    },
    {
      tag: "Level 03",
      badgeClass: "pill-badge-sage",
      title: "Keeping pace",
      subtitle: "Weekly practice and real conversation circles.",
      points: [
        "Spontaneous speaking on topical issues",
        "Debates & public presentation poise",
        "Writing & structured communication",
      ],
    },
    {
      tag: "Level 04",
      badgeClass: "pill-badge-slate",
      title: "Racing ahead",
      subtitle: "Advanced learning & IELTS band 6.0+ prep.",
      points: [
        "IELTS 4-module mastery (L, R, W, S)",
        "Executive & corporate presentation skills",
        "Free full-length mock examinations",
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F5F0] border-t border-[#E8E3D7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="pill-badge !bg-white !border-[#E8E3D7] text-[#121214] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C81E2B]" />
              <span>Levels</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121214] tracking-tight leading-tight">
              Start where you are
            </h2>
            <p className="text-[#585552] text-base leading-relaxed">
              Every learner is different. In the free first session we find the right starting point then move at a pace that fits.
            </p>
          </div>

          <Link
            href="/admissions#book-demo"
            className="pill-btn-outline shrink-0"
          >
            <span>Assess Your Level Free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Levels Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((lvl, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bright-card p-7 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className={`pill-badge ${lvl.badgeClass} text-[10px] font-bold`}>
                  {lvl.tag}
                </span>

                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-[#121214]">
                    {lvl.title}
                  </h3>
                  <p className="font-sans text-xs text-[#585552] mt-1.5 leading-relaxed">
                    {lvl.subtitle}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-[#E8E3D7]">
                  {lvl.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-[#121214]">
                      <Check className="w-3.5 h-3.5 text-[#C81E2B] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/admissions#book-demo"
                className="pill-btn-outline !py-2.5 !px-4 !text-xs justify-center w-full"
              >
                <span>Select Level</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
