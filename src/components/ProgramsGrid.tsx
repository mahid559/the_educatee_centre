import React from "react";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { CourseCard } from "@/components/CourseCard";

const FEATURED_IDS = [
  "spoken-english-ssc-dakhil",
  "ielts-preparation",
  "basic-computer-ms-office",
];

export function ProgramsGrid() {
  const { programs } = siteContent;

  // Featured courses for the homepage
  const featuredPrograms = FEATURED_IDS.map((id) =>
    programs.find((p) => p.id === id)
  ).filter(Boolean) as typeof programs;

  return (
    <section id="courses" className="py-20 md:py-28 bg-[#F5F7F9] relative border-b border-[#E2E9EB]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#E51937] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2 font-[var(--font-jost)]">
              POPULAR COURSES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2432] tracking-tight mb-3 font-[var(--font-jost)] leading-tight">
              Explore Our Most Demanded Courses Today
            </h2>
            <p className="text-base sm:text-lg text-[#6C757D] leading-relaxed font-[var(--font-dm-sans)]">
              Designed for adult learners, working professionals, and university aspirants. Small intimate cohorts with dedicated mentors.
            </p>
          </div>

          {/* Top Right Action Button */}
          <div className="flex-shrink-0 self-start md:self-auto">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center bg-[#E51937] hover:bg-[#C8132C] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-lg transition-all duration-300 shadow-sm font-[var(--font-jost)]"
            >
              <span>View All Programs</span>
            </Link>
          </div>
        </div>

        {/* Featured Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {featuredPrograms.map((program, index) => (
            <div
              key={program.id}
              className="h-full flex flex-col"
            >
              <CourseCard course={program} index={index} ctaVariant="red" />
            </div>
          ))}
        </div>

        {/* Bottom helper info */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#6C757D] font-[var(--font-dm-sans)]">
            Looking for handwriting transformation, executive evening batches, or digital marketing?{" "}
            <Link
              href="/programs"
              className="font-bold text-[#E51937] hover:underline"
            >
              Explore all career tracks →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
