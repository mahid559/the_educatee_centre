import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Users } from "lucide-react";
import { Course } from "@/data/content";

interface CourseCardProps {
  course: Course;
  index?: number;
  /**
   * CTA button color scheme. "red" is the shared default so every
   * course card (COURSES section, full courses page, course detail)
   * uses the same #DC2626 button. "gold" keeps the legacy look.
   */
  ctaVariant?: "red" | "gold";
}

export function CourseCard({ course, ctaVariant = "red" }: CourseCardProps) {
  const ctaClasses =
    ctaVariant === "gold"
      ? "bg-[#DC2626] group-hover:bg-[#B91C1C] text-white group-hover:text-white"
      : "bg-[#DC2626] group-hover:bg-[#B91C1C] text-white group-hover:text-white";
  return (
    <article className="group relative bg-white rounded-[20px] p-5 border border-[#E51937]/15 transition-all duration-300 hover:shadow-[0_20px_30px_0_rgba(229,25,55,0.08)] hover:-translate-y-1 flex flex-col h-full">
      {/* 1. Course Photo Thumbnail with 12px rounded corners inside the 20px padded card */}
      <div className="relative w-full aspect-[16/10] rounded-[12px] overflow-hidden bg-slate-100 flex-shrink-0 mb-4">
        <Link href={`/programs/${course.slug}`} className="block w-full h-full relative">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
          />
        </Link>
      </div>

      {/* 2. Main Course Information (Clean, centered, zero clutter) */}
      <div className="text-center flex-1 flex flex-col justify-between pt-1">
        <div>
          {/* Category Eyebrow in Crimson Red */}
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#E51937] block mb-2 font-[var(--font-jost)]">
            {course.category}
          </span>

          {/* Course Title in Jost */}
          <Link href={`/programs/${course.slug}`}>
            <h3 className="text-lg sm:text-xl font-bold text-[#1F2432] group-hover:text-[#E51937] transition-colors leading-snug line-clamp-2 min-h-[3.25rem] font-[var(--font-jost)] mb-3">
              {course.title}
            </h3>
          </Link>

          {/* Minimal Meta Line (Only 2 clean stats: Sessions & Cohort) */}
          <div className="flex items-center justify-center gap-5 text-xs text-[#6C757D] font-[var(--font-dm-sans)] mb-5">
            <span className="inline-flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#6C757D]" />
              <span>{course.duration || "24+ Sessions"}</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-[#6C757D]/40" />
            <span className="inline-flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#6C757D]" />
              <span>{course.badge || "Max 16 / Cohort"}</span>
            </span>
          </div>
        </div>

        {/* 3. Action Button (gold by default; red variant for the Courses section) */}
        <div className="w-full pt-3 border-t border-slate-100">
          <Link
            href={`/programs/${course.slug}`}
            className={`w-full block text-center py-3 px-4 rounded-lg ${ctaClasses} font-bold text-xs sm:text-sm font-[var(--font-jost)] transition-all duration-300 shadow-sm`}
          >
            Preview This Course
          </Link>
        </div>
      </div>
    </article>
  );
}
