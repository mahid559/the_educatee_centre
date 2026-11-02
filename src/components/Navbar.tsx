"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  BookOpen,
  GraduationCap,
  Monitor,
  PenTool,
  ArrowRight,
  Phone,
  Sparkles,
} from "lucide-react";
import { Logo } from "./Logo";
import { courses } from "@/data/courses";
import { siteConfig } from "@/data/siteConfig";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "py-2.5" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between px-5 sm:px-7 py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-[#F7F5F0]/95 backdrop-blur-md shadow-[0_8px_30px_rgba(18,18,20,0.06)] border border-[#E8E3D7]"
              : "bg-[#F7F5F0]/85 backdrop-blur-sm border border-[#E8E3D7]"
          }`}
        >
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5">
            <Link
              href="/"
              className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-colors ${
                pathname === "/"
                  ? "text-[#C81E2B] font-bold"
                  : "text-[#121214] hover:text-[#C81E2B] hover:bg-[#E8E3D7]/50"
              }`}
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-colors cursor-pointer ${
                  pathname.startsWith("/courses")
                    ? "text-[#C81E2B] font-bold"
                    : "text-[#121214] hover:text-[#C81E2B] hover:bg-[#E8E3D7]/50"
                }`}
                aria-expanded={coursesDropdownOpen}
              >
                <span>Programs</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    coursesDropdownOpen ? "rotate-180 text-[#C81E2B]" : "text-[#585552]"
                  }`}
                />
              </button>

              {coursesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 rounded-[1.75rem] bg-white border border-[#E8E3D7] shadow-[0_12px_32px_-4px_rgba(18,18,20,0.12)] p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-[#E8E3D7] mb-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#585552]">
                      Verified Training Programs • Feni Campus
                    </p>
                  </div>

                  <div className="space-y-1">
                    {courses.map((course) => {
                      let IconComponent = BookOpen;
                      if (course.category === "Test Preparation") IconComponent = GraduationCap;
                      if (course.category === "Digital Skills / IT") IconComponent = Monitor;
                      if (course.category === "Skill Development") IconComponent = PenTool;

                      return (
                        <Link
                          key={course.slug}
                          href={`/courses/${course.slug}`}
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-[#F7F5F0] transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-xl bg-[#FEE2E2] text-[#991B1B] flex items-center justify-center shrink-0 mt-0.5">
                            <IconComponent className="w-4 h-4 text-[#C81E2B]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-xs text-[#121214] group-hover:text-[#C81E2B] transition-colors truncate">
                                {course.title}
                              </span>
                              {course.badge && (
                                <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-[#C81E2B] text-white">
                                  {course.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#585552] truncate mt-0.5">
                              {course.shortDescription}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-2 pt-2 border-t border-[#E8E3D7] px-2 flex justify-between items-center text-xs">
                    <Link
                      href="/courses"
                      className="font-bold text-[#C81E2B] hover:underline flex items-center gap-1"
                    >
                      <span>View All Programs</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <span className="text-[10px] text-[#585552]">Max 16 Per Batch</span>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-colors ${
                pathname === "/about"
                  ? "text-[#C81E2B] font-bold"
                  : "text-[#121214] hover:text-[#C81E2B] hover:bg-[#E8E3D7]/50"
              }`}
            >
              About
            </Link>

            <Link
              href="/facilities"
              className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-colors ${
                pathname === "/facilities"
                  ? "text-[#C81E2B] font-bold"
                  : "text-[#121214] hover:text-[#C81E2B] hover:bg-[#E8E3D7]/50"
              }`}
            >
              Facilities
            </Link>

            <Link
              href="/success-stories"
              className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-colors ${
                pathname === "/success-stories"
                  ? "text-[#C81E2B] font-bold"
                  : "text-[#121214] hover:text-[#C81E2B] hover:bg-[#E8E3D7]/50"
              }`}
            >
              Stories
            </Link>

            <Link
              href="/events"
              className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-colors ${
                pathname === "/events"
                  ? "text-[#C81E2B] font-bold"
                  : "text-[#121214] hover:text-[#C81E2B] hover:bg-[#E8E3D7]/50"
              }`}
            >
              Life & Events
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-colors ${
                pathname === "/contact"
                  ? "text-[#C81E2B] font-bold"
                  : "text-[#121214] hover:text-[#C81E2B] hover:bg-[#E8E3D7]/50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action: Primary Crimson Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/admissions#book-demo"
              className="pill-btn-primary !py-2.5 !px-5 !text-xs xl:!text-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Get started</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[#121214] hover:bg-[#E8E3D7] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-5 rounded-[2rem] bg-[#F7F5F0] border border-[#E8E3D7] shadow-xl space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-1.5">
              <Link
                href="/"
                className="px-4 py-2.5 rounded-full font-bold text-sm text-[#121214] hover:bg-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/courses"
                className="px-4 py-2.5 rounded-full font-bold text-sm text-[#121214] hover:bg-white transition-colors"
              >
                All Courses & Programs
              </Link>
              <Link
                href="/about"
                className="px-4 py-2.5 rounded-full font-bold text-sm text-[#121214] hover:bg-white transition-colors"
              >
                About & Founder Story
              </Link>
              <Link
                href="/facilities"
                className="px-4 py-2.5 rounded-full font-bold text-sm text-[#121214] hover:bg-white transition-colors"
              >
                Campus & Elevator Directions
              </Link>
              <Link
                href="/success-stories"
                className="px-4 py-2.5 rounded-full font-bold text-sm text-[#121214] hover:bg-white transition-colors"
              >
                Student Success Stories
              </Link>
              <Link
                href="/events"
                className="px-4 py-2.5 rounded-full font-bold text-sm text-[#121214] hover:bg-white transition-colors"
              >
                Events & Graduation
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2.5 rounded-full font-bold text-sm text-[#121214] hover:bg-white transition-colors"
              >
                Contact & Location
              </Link>
            </nav>

            <div className="pt-3 border-t border-[#E8E3D7] space-y-2.5">
              <Link
                href="/admissions#book-demo"
                className="pill-btn-primary w-full justify-center !py-3 !text-sm"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Get started • Free Demo</span>
              </Link>
              <a
                href={`tel:${siteConfig.phones[0].raw}`}
                className="pill-btn-outline w-full justify-center !py-2.5 !text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#C81E2B]" />
                <span>Call {siteConfig.phones[0].display}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
