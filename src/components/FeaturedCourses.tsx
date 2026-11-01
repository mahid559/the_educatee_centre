"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Monitor,
  PenTool,
  Users,
  Check,
  ArrowRight,
} from "lucide-react";
import { courses } from "@/data/courses";

export const FeaturedCourses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "English Proficiency",
    "Test Preparation",
    "Digital Skills / IT",
    "Skill Development",
  ];

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
    <section id="courses" className="py-20 lg:py-28 border-t border-[#E8E3D7] bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex justify-center">
            <div className="pill-badge !bg-white !border-[#E8E3D7] text-[#121214] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C81E2B]" />
              <span>All programs</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121214] tracking-tight">
            Pick a program
          </h2>

          <p className="text-[#585552] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every program at The Educatee Centre is practical, application-focused, and strictly capped at 16 students for genuine speaking growth.
          </p>

          {/* Filter Pill Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#121214] text-white shadow-xs"
                    : "bg-white text-[#121214] hover:bg-[#EFEBE2] border border-[#E8E3D7]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            let IconComponent = BookOpen;
            let badgeClass = "pill-badge-crimson";
            if (course.category === "Test Preparation") {
              IconComponent = GraduationCap;
              badgeClass = "pill-badge-amber";
            } else if (course.category === "Digital Skills / IT") {
              IconComponent = Monitor;
              badgeClass = "pill-badge-sage";
            } else if (course.category === "Skill Development") {
              IconComponent = PenTool;
              badgeClass = "pill-badge-slate";
            }

            return (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bright-card p-6 sm:p-7 flex flex-col justify-between space-y-5"
              >
                {/* Media Image */}
                <div className="relative h-56 w-full rounded-[1.5rem] overflow-hidden bg-[#121214]">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/75 via-transparent to-transparent" />

                  {/* Category Pill Tag */}
                  <div className={`absolute top-4 left-4 pill-badge ${badgeClass} text-[11px] font-bold shadow-xs flex items-center gap-1.5`}>
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{course.category}</span>
                  </div>

                  {course.badge && (
                    <div className="absolute top-4 right-4 bg-[#C81E2B] text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-xs">
                      {course.badge}
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-xs font-medium">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-amber-300" />
                      <span>{course.classSize}</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-xl text-[#121214] hover:text-[#C81E2B] transition-colors leading-tight">
                      <Link href={`/courses/${course.slug}`}>{course.title}</Link>
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#585552] leading-relaxed line-clamp-3">
                      {course.shortDescription}
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5 pt-3 border-t border-[#E8E3D7]">
                    {course.keyFeatures.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#121214]">
                        <Check className="w-3.5 h-3.5 text-[#C81E2B] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="grid grid-cols-2 gap-2.5 pt-3">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="pill-btn-outline !py-2.5 !px-3 !text-xs justify-center"
                    >
                      <span>Syllabus</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href={`/admissions?course=${course.slug}#book-demo`}
                      className="pill-btn-primary !py-2.5 !px-3 !text-xs justify-center !shadow-none"
                    >
                      <span>Book Demo</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View all courses footer CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/courses"
            className="pill-btn-outline inline-flex items-center gap-2"
          >
            <span>View All Programs & Full Syllabi</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
