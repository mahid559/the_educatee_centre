"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare, Phone } from "lucide-react";
import { faqs } from "@/data/faq";
import { siteConfig } from "@/data/siteConfig";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F7F5F0] border-t border-[#E8E3D7] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex justify-center">
            <div className="pill-badge !bg-white !border-[#E8E3D7] text-[#121214] shadow-xs">
              <HelpCircle className="w-3.5 h-3.5 text-[#C81E2B]" />
              <span>Questions & Answers</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121214] tracking-tight">
            Frequently asked questions
          </h2>

          <p className="text-[#585552] text-base leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our batch structures, campus location, elevator access, and the free demo process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bright-card overflow-hidden transition-all duration-200 ${
                  isOpen ? "bg-white border-[#D8D1C3] shadow-xs" : "bg-white hover:border-[#D8D1C3]"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-extrabold text-sm sm:text-base text-[#121214] pr-2">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 border border-[#E8E3D7] ${
                      isOpen
                        ? "bg-[#C81E2B] text-white border-[#C81E2B] rotate-180"
                        : "bg-[#F7F5F0] text-[#121214] hover:bg-[#EFEBE2]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-[#585552] font-sans text-xs sm:text-sm leading-relaxed border-t border-[#E8E3D7] animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="bright-card-warm p-7 sm:p-9 text-center space-y-3 border border-[#E8E3D7]">
          <p className="font-heading font-extrabold text-lg text-[#121214]">
            Have a question that isn’t answered here?
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#585552] max-w-md mx-auto">
            Our admissions counselors are available Saturday through Thursday to assist you with batch schedules, syllabus details, and directions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${siteConfig.phones[0].raw}`}
              className="pill-btn-outline !py-2.5 !text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#C81E2B]" />
              <span>Call: {siteConfig.phones[0].display}</span>
            </a>

            <a
              href={siteConfig.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn-primary !py-2.5 !text-xs !shadow-none"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
