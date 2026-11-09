"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, HelpCircle, Phone } from "lucide-react";
import { siteContent } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { FilterTabs } from "@/components/FilterTabs";
import { CourseCard } from "@/components/CourseCard";
import { CTABanner } from "@/components/CTABanner";
import { SectionHeading } from "@/components/SectionHeading";

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
          <SectionHeading
            tag="SELECT A SPECIALIZATION"
            title="Browse by Category"
            actionButton={
              <FilterTabs
                categories={categories}
                activeCategory={activeCategory}
                onChange={setActiveCategory}
                layoutId="programsFilterActive"
              />
            }
          />

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
          <div className="w-14 h-14 rounded-2xl bg-[#FFF0F2] text-[#E51937] flex items-center justify-center mx-auto mb-5 shadow-sm border border-[#E51937]/15">
            <HelpCircle className="w-7 h-7" />
          </div>

          <SectionHeading
            tag="FREE ACADEMIC COUNSELING"
            title="Not Sure Which Program is Right for You?"
            subtext="Tell us about your background (working professional, job seeker, SSC/Dakhil, or university aspirant) and your goals. Our senior mentors will recommend the ideal batch and schedule."
          />

          <div className="flex flex-wrap items-center justify-center gap-4 font-[var(--font-jost)]">
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#E51937] hover:bg-[#C8132C] text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all shadow-md group"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Ask Us on WhatsApp</span>
            </a>

            <a
              href={`tel:${contact.primaryPhone.replace(/-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#1F2432] border border-[#E2E9EB] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#E51937]" />
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
