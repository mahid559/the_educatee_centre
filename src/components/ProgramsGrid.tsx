import React from "react";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { CourseCard } from "@/components/CourseCard";
import { SectionHeading } from "@/components/SectionHeading";

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
        <SectionHeading
          tag="POPULAR COURSES"
          title="Explore Our Most Demanded Courses Today"
          subtext="Designed for adult learners, working professionals, and university aspirants. Small intimate cohorts with dedicated mentors."
        />

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

        {/* View All Programs CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href="/programs"
            className="inline-flex items-center justify-center bg-[#E51937] hover:bg-[#C8132C] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 shadow-md shadow-[#E51937]/20 hover:scale-[1.02] active:scale-[0.98] font-[var(--font-jost)]"
          >
            <span>View All Programs</span>
          </Link>
        </div>

        {/* Bottom helper info */}
        <div className="mt-6 text-center">
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
