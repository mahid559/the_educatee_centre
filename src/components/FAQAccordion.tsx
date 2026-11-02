"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/content";

export function FAQAccordion() {
  const { faqs } = siteContent;
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#E51937] text-xs sm:text-sm font-extrabold uppercase tracking-widest block mb-2 font-[var(--font-jost)]">
            GOT QUESTIONS?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2432] tracking-tight mb-4 font-[var(--font-jost)]">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#6C757D] font-[var(--font-dm-sans)]">
            Everything you need to know about our demo classes, batch structures,
            fees, and Feni campus location.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-2 border-[#E51937] bg-white shadow-md" : "border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E51937]"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 font-[var(--font-jost)]">
                    {faq.question}
                  </span>
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#E51937] text-white rotate-45"
                        : "bg-white text-slate-700 border border-slate-200"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 fill-none stroke-current stroke-2"
                      viewBox="0 0 24 24"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4 font-normal font-[var(--font-dm-sans)]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions note */}
        <div className="mt-12 text-center p-6 bg-slate-50 rounded-2xl border border-slate-200">
          <p className="text-sm text-slate-700 font-medium font-[var(--font-dm-sans)]">
            Have a question not listed here? Call our admissions desk directly at{" "}
            <a
              href="tel:01874232272"
              className="font-bold text-[#E51937] hover:underline"
            >
              01874-232272
            </a>{" "}
            or message us on{" "}
            <a
              href="https://wa.me/8801874232272"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-600 hover:underline"
            >
              WhatsApp
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
