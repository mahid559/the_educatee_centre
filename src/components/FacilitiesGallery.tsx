"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import "./FacilitiesGallery.css";

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
    <section className="fcSection py-20 md:py-28">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-[#E51937] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2 font-[var(--font-jost)]">
            CAMPUS INFRASTRUCTURE &amp; FACILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2432] tracking-tight mb-4 font-[var(--font-jost)] leading-tight">
            World-Class Campus Facilities in Feni
          </h2>
          <p className="text-base sm:text-lg text-[#6C757D] leading-relaxed max-w-2xl mx-auto font-[var(--font-dm-sans)]">
            Quality learning requires the right environment. We have invested in modern, quiet, and air-conditioned facilities on the 5th floor of Appayan Afroz Tower.
          </p>
        </div>

        {/* Stacked, angled facility banners filled with the Admission
            Process capsule colors (no visible 1-2-3-4 numbering) */}
        <div className="fcStack">
          {facilityCards.map((card, index) => (
            <motion.div
              key={card.id}
              className="fcReveal"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, x: index % 2 === 0 ? 60 : -60 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.55,
                delay: shouldReduceMotion ? 0 : index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Floating banner wrapper (shadow + dashed guide live here) */}
              <div className="fcCardWrap">
                <article className="fcCard">
                  <div className="fcContent">
                    <div className="fcMeta">
                      <span className="fcTag">{card.tag}</span>
                      <span className="fcBadge">{card.badge}</span>
                    </div>

                    <h3 className="fcTitle">{card.title}</h3>

                    <div className="fcDots" aria-hidden="true">
                      <span className="fcDot" />
                      <span className="fcDot" />
                      <span className="fcDot" />
                    </div>

                    <p className="fcDescription">{card.description}</p>

                    {/* Existing feature data, preserved as-is */}
                    <ul className="fcFeatures">
                      {card.features.map((feature, idx) => (
                        <li key={idx} className="fcFeature">
                          <CheckCircle2
                            className="fcCheck"
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href={card.linkUrl} className="fcLink">
                      <span>{card.linkText}</span>
                      <ArrowRight className="fcArrow" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
