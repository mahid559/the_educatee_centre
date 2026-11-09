"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export function FacilitiesGallery() {
  const shouldReduceMotion = useReducedMotion();

  const facilityCards = [
    {
      id: "spoken-studio",
      tag: "COMMUNICATION STUDIO",
      title: "Interactive Spoken English Hall",
      badge: "Max 16 / Cohort",
      description:
        "Designed specifically for dialogue circles, paired speech practice, and confidence-building debates in an acoustically treated space.",
      features: [
        "Circular seating layout for natural eye-contact & open dialogue",
        "Air-conditioned, quiet environment free from street noise",
        "Interactive audio-visual screen for phonetics and pronunciation drills",
        "Strict cap of maximum 16 candidates per batch for individual speaking time",
      ],
      linkText: "Explore Spoken Programs",
      linkUrl: "/programs/spoken-english-ssc-dakhil",
    },
    {
      id: "computer-lab",
      tag: "PRACTICAL IT WORKSPACE",
      title: "Dedicated Computer Training Lab",
      badge: "1 Student : 1 PC",
      description:
        "Every enrolled student works on their own dedicated high-speed PC workstation with direct instructor supervision. Zero sharing.",
      features: [
        "1 Student : 1 PC guaranteed during every single practical lecture",
        "High-speed fiber connectivity for live online tasks & software practice",
        "Full MS Office, Bangla/English typing, and digital tools configured",
        "Dedicated instructor screen for real-time live step-by-step demonstrations",
      ],
      linkText: "Explore IT Courses",
      linkUrl: "/programs/basic-computer-ms-office",
    },
    {
      id: "campus-environment",
      tag: "PREMIER CAMPUS LOCATION",
      title: "Appayan Afroz Tower (5th Floor)",
      badge: "100% Air-Conditioned",
      description:
        "Located in the commercial heart of Feni on College Road near Pourashava Gate — an elevated sanctuary designed for deep focus.",
      features: [
        "Modern elevator facility available directly to reception and classrooms",
        "Peaceful academic atmosphere elevated high above street-level commotion",
        "Bright natural light, spacious waiting area, and clean sanitized campus",
        "Reliable standby power backup for uninterrupted learning sessions",
      ],
      linkText: "View Campus Gallery",
      linkUrl: "/gallery",
    },
    {
      id: "girls-batch-hub",
      tag: "SAFE & RESPECTFUL SPACE",
      title: "Dedicated Female Batch Environment",
      badge: "Exclusive Cohorts",
      description:
        "A safe, supportive, and culturally respectful learning atmosphere with dedicated timings and female coordination.",
      features: [
        "Exclusive morning and afternoon cohorts for female candidates",
        "Friendly and encouraging atmosphere with female academic coordination",
        "Comfortable, judgment-free space to build fluent conversational practice",
        "Over 500+ female students graduated with confidence and fluency",
      ],
      linkText: "Explore Batch Schedules",
      linkUrl: "/admissions",
    },
  ];

  return (
    <section id="facilities" className="py-20 md:py-28 bg-[#FFFFFF] relative overflow-hidden border-b border-[#E2E9EB]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <SectionHeading
          tag="CAMPUS INFRASTRUCTURE & FACILITIES"
          title="World-Class Campus Facilities in Feni"
          subtext="Quality learning requires the right environment. We have invested in modern, quiet, and air-conditioned facilities on the 5th floor of Appayan Afroz Tower."
        />

        {/* 2x2 Infrastructure & Facility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {facilityCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full"
            >
              <article className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-[#E2E9EB] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group">
                <div>
                  {/* Meta: Tag & Badge */}
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E51937] font-[var(--font-jost)]">
                      {card.tag}
                    </span>
                    <span className="bg-[#FFF0F2] text-[#E51937] border border-[#E51937]/20 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full font-[var(--font-jost)]">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1F2432] font-[var(--font-jost)] group-hover:text-[#E51937] transition-colors mb-3 leading-snug">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-[15px] text-[#6C757D] leading-relaxed font-[var(--font-dm-sans)] mb-6">
                    {card.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-3 mb-8">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F2432] font-[var(--font-dm-sans)]">
                        <CheckCircle2
                          className="w-4 h-4 text-[#E51937] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="pt-5 border-t border-[#E2E9EB]">
                  <Link
                    href={card.linkUrl}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#E51937] hover:text-[#C8132C] group/link transition-colors font-[var(--font-jost)]"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
