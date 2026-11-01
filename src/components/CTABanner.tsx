"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { siteContent } from "@/data/content";

interface CTABannerProps {
  title?: string;
  subtext?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  badge?: string;
}

export function CTABanner({
  title = "Ready to Speak English with Absolute Confidence?",
  subtext = "Reserve your seat for our upcoming free demo session at Appayan Afroz Tower, Feni. Experience structured mentorship with zero pressure.",
  primaryCtaText = "Book a Free Demo Class",
  primaryCtaLink = "/admissions#free-demo",
  badge = "PROFESSIONAL EXCELLENCE",
}: CTABannerProps) {
  const { contact } = siteContent;

  return (
    <section className="py-16 md:py-20 bg-white relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#03594E] text-white rounded-[24px] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden text-center md:text-left"
        >
          {/* Subtle Ambient Accents */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#F8C62F]/15 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 flex flex-col items-center md:items-start">
              <span className="text-[#F8C62F] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2 font-[var(--font-jost)]">
                {badge}
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold !text-white tracking-tight leading-tight mb-4 font-[var(--font-jost)]">
                {title}
              </h2>

              <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl font-[var(--font-dm-sans)]">
                {subtext}
              </p>
            </div>

            {/* Right Buttons (4 cols) */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center lg:items-end gap-3.5 w-full">
              <Link
                href={primaryCtaLink}
                className="w-full sm:w-auto lg:w-full inline-flex items-center justify-center bg-[#F8C62F] hover:bg-[#e0b020] text-[#1F2432] font-bold text-sm sm:text-base px-8 py-3.5 rounded-lg transition-all duration-300 shadow-md font-[var(--font-jost)] text-center"
              >
                <span>{primaryCtaText}</span>
              </Link>

              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm px-6 py-3.5 rounded-lg transition-all duration-300 font-[var(--font-jost)]"
              >
                <MessageCircle className="w-4 h-4 text-[#F8C62F]" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${contact.primaryPhone.replace(/-/g, "")}`}
                className="text-xs text-white/75 hover:text-white flex items-center gap-1.5 transition-colors pt-1 font-[var(--font-jost)]"
              >
                <Phone className="w-3.5 h-3.5 text-[#F8C62F]" />
                <span>Direct Desk: {contact.primaryPhone}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
