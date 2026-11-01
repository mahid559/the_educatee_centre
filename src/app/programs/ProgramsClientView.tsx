"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, HelpCircle, Phone } from "lucide-react";
import { siteContent } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { FilterTabs } from "@/components/FilterTabs";
import { CourseCard } from "@/components/CourseCard";
import { CTABanner } from "@/components/CTABanner";

export default function ProgramsClientView() {
  const { programs, contact } = siteContent;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "English", "IELTS", "IT & Digital Skills"];

  const filteredPrograms =
    activeCategory === "All"
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="TARGETED CURRICULUM"
        title="Our Programs"
        accentText="&amp; Courses"
        subtext="Conquer your fear of speaking, reach your target IELTS band in small batches of 16, and gain hands-on IT proficiency on your own individual computer."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programs" },
        ]}
      />

      {/* 2. Programs Catalog & Filter Tabs */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          {/* Top Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 sm:mb-16 border-b border-[#E2E9EB] pb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#03594E] block mb-1 font-[var(--font-jost)]">
                SELECT A SPECIALIZATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2432] font-[var(--font-jost)]">
                Browse by Category
              </h2>
            </div>

            {/* Sliding Pill Filter Tabs */}
            <FilterTabs
              categories={categories}
              activeCategory={activeCategory}
              onChange={setActiveCategory}
              layoutId="programsFilterActive"
            />
          </div>

          {/* Programs Grid with Layout Animation */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredPrograms.map((course, index) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 3. "Not sure which course is right for you?" Section */}
      <section className="py-16 md:py-20 bg-[#F5F7F9] relative border-y border-[#E2E9EB]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-white text-[#03594E] flex items-center justify-center mx-auto mb-5 shadow-sm border border-[#E2E9EB]">
            <HelpCircle className="w-7 h-7" />
          </div>

          <div className="inline-flex items-center gap-1.5 bg-[#E7F3F1] border border-[#03594E]/20 text-[#03594E] text-xs font-bold px-3.5 py-1 rounded-full mb-3 font-[var(--font-jost)]">
            <span>Free Academic Counseling</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1F2432] font-[var(--font-jost)] mb-3">
            Not Sure Which Program is Right for You?
          </h2>

          <p className="text-base sm:text-lg text-[#6C757D] leading-relaxed max-w-2xl mx-auto mb-8 font-[var(--font-dm-sans)]">
            Tell us about your background (working professional, job seeker, SSC/Dakhil, or university aspirant) and your goals. Our senior mentors will recommend the ideal batch and schedule.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 font-[var(--font-jost)]">
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#03594E] hover:bg-[#023E37] text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all shadow-md group"
            >
              <MessageCircle className="w-5 h-5 text-[#F8C62F]" />
              <span>Ask Us on WhatsApp</span>
            </a>

            <a
              href={`tel:${contact.primaryPhone.replace(/-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#1F2432] border border-[#E2E9EB] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#03594E]" />
              <span>Call Admissions: {contact.primaryPhone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. CTA Banner */}
      <CTABanner
        title="Experience Any Course in a Free Demo Class"
        subtext="Meet the instructor, walk through the classroom, and test the waters before enrolling. Zero cost and zero pressure."
        primaryCtaText="Book Free Demo Class"
        primaryCtaLink="/admissions#free-demo"
        badge="ZERO OBLIGATION TRIAL"
      />
    </>
  );
}
