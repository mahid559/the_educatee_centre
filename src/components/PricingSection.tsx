"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Sparkles, ShieldCheck } from "lucide-react";

export const PricingSection: React.FC = () => {
  const plans = [
    {
      name: "Group Foundation",
      subtitle: "SSC & Dakhil Spoken English",
      badge: "Most Popular for Students",
      badgeClass: "pill-badge-crimson",
      features: [
        "Cohorts strictly capped at 16 students",
        "2–3 sessions per week with active speaking",
        "Overcoming speaking hesitation & stage fear",
        "Dedicated Girls Batches available",
        "Course completion certificate & graduation",
        "100% Free Demo Session prior to enrollment",
      ],
      isPopular: false,
    },
    {
      name: "IELTS Preparation",
      subtitle: "Target Band 6.0+ Preparation",
      badge: "High Success Track Record",
      badgeClass: "pill-badge-amber",
      features: [
        "Small batch mentorship (Max 16 learners)",
        "Comprehensive 4-module mastery (L, R, W, S)",
        "Regular full-length mock examinations",
        "One-on-one speaking interview evaluations",
        "Jamshed Hossain Band 6.0 proven study strategy",
        "Free diagnostic session before enrollment",
      ],
      isPopular: true,
    },
    {
      name: "Executive & Skills",
      subtitle: "Professionals & IT Workstation Lab",
      badge: "Evening Batch (8:00 PM)",
      badgeClass: "pill-badge-sage",
      features: [
        "Convenient evening schedule for job holders",
        "Corporate emails, meetings & presentation poise",
        "Hands-on workstation computing lab practice",
        "Social media freelancing & digital skills",
        "Individual guidance by senior mentors",
        "Free demo session before committing",
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#F7F5F0] border-t border-[#E8E3D7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex justify-center">
            <div className="pill-badge !bg-white !border-[#E8E3D7] text-[#121214] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C81E2B]" />
              <span>Transparent Admission</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121214] tracking-tight">
            Simple plans. No stress, no surprises
          </h2>

          <p className="text-[#585552] text-base leading-relaxed max-w-xl mx-auto">
            We believe in complete transparency. Every learner begins with a 100% Free Demo Class to experience the classroom before deciding.
          </p>
        </div>

        {/* 3 Pricing / Enrollment Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bright-card p-8 sm:p-9 flex flex-col justify-between space-y-8 ${
                plan.isPopular
                  ? "border-2 border-[#C81E2B] shadow-[0_12px_36px_-6px_rgba(200,30,43,0.18)] relative"
                  : ""
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className={`pill-badge ${plan.badgeClass} text-[11px] font-bold`}>
                    {plan.badge}
                  </span>
                  {plan.isPopular && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-white bg-[#C81E2B] px-2.5 py-0.5 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-[#121214]">
                    {plan.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#585552] mt-1">
                    {plan.subtitle}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-4 border-t border-[#E8E3D7]">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#121214]">
                      <Check className="w-4 h-4 text-[#C81E2B] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  href="/admissions#book-demo"
                  className={`w-full justify-center !py-3.5 !text-sm ${
                    plan.isPopular ? "pill-btn-primary" : "pill-btn-outline"
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>Reserve Free Demo Session</span>
                </Link>
                <div className="text-center text-[11px] text-[#A09D98] mt-2">
                  No credit card or upfront fee required
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Free First-Month / First-Session Promise Card */}
        <div className="bright-card-warm p-7 sm:p-9 text-center space-y-3 border border-[#E8E3D7] max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 pill-badge !bg-white text-xs font-bold text-[#121214]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C81E2B]" />
            <span>The First-Session Promise</span>
          </div>
          <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-[#121214]">
            Experience the Teaching Atmosphere at Appayan Afroz Tower
          </h4>
          <p className="font-sans text-xs sm:text-sm text-[#585552] leading-relaxed max-w-xl mx-auto">
            Not sure if the pace or environment is right for you? Attend a full session, meet Babar Sir and our mentors, and speak directly with enrolled students.
          </p>
        </div>

      </div>
    </section>
  );
};
