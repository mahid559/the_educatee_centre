"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { siteContent } from "@/data/content";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollYRef = useRef(0);
  const pathname = usePathname();

  const { contact, programs } = siteContent;

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const prevScrollY = lastScrollYRef.current;

          // Track if page is scrolled past top
          setScrolled((prev) => {
            const next = currentScrollY > 20;
            return prev !== next ? next : prev;
          });

          // Always show navbar at the very top of the page
          if (currentScrollY <= 40) {
            setVisible(true);
          } else if (currentScrollY > prevScrollY + 10) {
            // Scrolling DOWN -> hide navbar to allow full screen view
            setVisible(false);
            setProgramsDropdownOpen(false);
            setMobileMenuOpen(false);
          } else if (currentScrollY < prevScrollY - 10) {
            // Scrolling UP -> reveal navbar smoothly
            setVisible(true);
          }

          lastScrollYRef.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";
  const demoLink = isHomePage ? "#free-demo" : "/admissions#free-demo";

  const handleHomeClick = (e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  };

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname?.startsWith(href)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 md:pt-5 px-3 sm:px-6 bg-transparent transition-transform duration-300 ease-in-out pointer-events-none ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1240px] mx-auto pointer-events-auto">
        <div
          className={`bg-white rounded-2xl md:rounded-full px-4 md:px-7 py-2.5 sm:py-3 flex items-center justify-between border border-[#E2E9EB]/90 transition-shadow duration-300 ${
            scrolled
              ? "shadow-[0_12px_36px_-6px_rgba(3,89,78,0.12)]"
              : "shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          }`}
        >
          {/* Authentic Logo (Transparent background) */}
          <Link
            href="/"
            onClick={handleHomeClick}
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#03594E] rounded-xl"
            aria-label="The Educatee Centre Home"
          >
            <div className="relative w-[170px] h-[42px] sm:w-[195px] sm:h-[46px] flex items-center">
              <Image
                src="/logo.png"
                alt="The Educatee Centre"
                fill
                priority
                unoptimized
                className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-7 xl:gap-8 text-sm font-semibold text-[#1F2432] font-[var(--font-jost)]"
            aria-label="Main Navigation"
          >
            <Link
              href="/"
              onClick={handleHomeClick}
              className={`transition-colors hover:text-[#03594E] py-1 relative ${
                isActive("/") ? "text-[#03594E] font-bold" : ""
              }`}
            >
              Home
              {isActive("/") && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#03594E] rounded-full" />
              )}
            </Link>

            <Link
              href="/about"
              className={`transition-colors hover:text-[#03594E] py-1 relative ${
                isActive("/about") ? "text-[#03594E] font-bold" : ""
              }`}
            >
              About
              {isActive("/about") && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#03594E] rounded-full" />
              )}
            </Link>

            {/* Programs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProgramsDropdownOpen(true)}
              onMouseLeave={() => setProgramsDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 transition-colors hover:text-[#03594E] py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#03594E] rounded-lg relative ${
                  pathname?.startsWith("/programs")
                    ? "text-[#03594E] font-bold"
                    : ""
                }`}
                aria-expanded={programsDropdownOpen}
                aria-haspopup="true"
              >
                <span>Programs</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    programsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                {pathname?.startsWith("/programs") && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#03594E] rounded-full" />
                )}
              </button>

              <AnimatePresence>
                {programsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className="absolute left-0 top-full mt-2 w-80 bg-white rounded-2xl border border-[#E2E9EB] p-2.5 z-50 shadow-2xl"
                  >
                    <Link
                      href="/programs"
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#03594E] bg-[#E7F3F1] hover:bg-[#d6ece8] transition-colors mb-1 font-[var(--font-jost)]"
                      onClick={() => setProgramsDropdownOpen(false)}
                    >
                      <span>All Programs Overview</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <div className="h-px bg-[#E2E9EB] my-1" />
                    {programs.map((program) => (
                      <Link
                        key={program.id}
                        href={`/programs/${program.slug}`}
                        className="flex flex-col px-3.5 py-2 rounded-xl hover:bg-[#F5F7F9] transition-colors group"
                        onClick={() => setProgramsDropdownOpen(false)}
                      >
                        <span className="text-sm font-semibold text-[#1F2432] group-hover:text-[#03594E] transition-colors font-[var(--font-jost)]">
                          {program.title}
                        </span>
                        <span className="text-xs text-[#6C757D] line-clamp-1 font-[var(--font-dm-sans)]">
                          {program.subtitle}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/admissions"
              className={`transition-colors hover:text-[#03594E] py-1 relative ${
                isActive("/admissions") ? "text-[#03594E] font-bold" : ""
              }`}
            >
              Admissions &amp; Fees
              {isActive("/admissions") && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#03594E] rounded-full" />
              )}
            </Link>

            <Link
              href="/gallery"
              className={`transition-colors hover:text-[#03594E] py-1 relative ${
                isActive("/gallery") ? "text-[#03594E] font-bold" : ""
              }`}
            >
              Gallery
              {isActive("/gallery") && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#03594E] rounded-full" />
              )}
            </Link>

            <Link
              href="/contact"
              className={`transition-colors hover:text-[#03594E] py-1 relative ${
                isActive("/contact") ? "text-[#03594E] font-bold" : ""
              }`}
            >
              Contact
              {isActive("/contact") && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#03594E] rounded-full" />
              )}
            </Link>
          </nav>

          {/* Right Action: Phone & Demo CTA */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${contact.primaryPhone.replace(/-/g, "")}`}
              className="hidden xl:flex items-center gap-2 text-xs font-bold text-[#1F2432] hover:text-[#03594E] transition-colors px-2 py-1 font-[var(--font-jost)]"
              aria-label={`Call ${contact.primaryPhone}`}
            >
              <span className="w-7 h-7 rounded-full bg-[#E7F3F1] text-[#03594E] flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <span>{contact.primaryPhone}</span>
            </a>

            <Link
              href={demoLink}
              className="hidden sm:inline-flex items-center justify-center bg-[#03594E] hover:bg-[#023E37] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-[#03594E]/20 hover:scale-[1.02] active:scale-[0.98] font-[var(--font-jost)]"
            >
              Book Free Demo
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#1F2432] hover:bg-[#E7F3F1] focus:outline-none focus:ring-2 focus:ring-[#03594E]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer (Floating pill card) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden bg-white rounded-2xl shadow-2xl border border-[#E2E9EB] max-h-[82vh] overflow-y-auto overscroll-contain mt-2 p-5 font-[var(--font-jost)]"
            >
              <div className="flex flex-col gap-3">
                <Link
                  href="/"
                  className={`py-2 text-base font-bold transition-colors ${
                    isActive("/")
                      ? "text-[#03594E]"
                      : "text-[#1F2432] hover:text-[#03594E]"
                  }`}
                  onClick={handleHomeClick}
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className={`py-2 text-base font-bold transition-colors ${
                    isActive("/about")
                      ? "text-[#03594E]"
                      : "text-[#1F2432] hover:text-[#03594E]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>

                <div className="py-1">
                  <Link
                    href="/programs"
                    className="block text-base font-bold text-[#03594E]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Programs (All Courses)
                  </Link>
                  <div className="pl-3 mt-2 flex flex-col gap-2 border-l-2 border-[#E7F3F1]">
                    {programs.map((p) => (
                      <Link
                        key={p.id}
                        href={`/programs/${p.slug}`}
                        className="text-sm text-[#6C757D] hover:text-[#03594E] py-0.5"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {p.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/admissions"
                  className={`py-2 text-base font-bold transition-colors ${
                    isActive("/admissions")
                      ? "text-[#03594E]"
                      : "text-[#1F2432] hover:text-[#03594E]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Admissions &amp; Fees
                </Link>

                <Link
                  href="/gallery"
                  className={`py-2 text-base font-bold transition-colors ${
                    isActive("/gallery")
                      ? "text-[#03594E]"
                      : "text-[#1F2432] hover:text-[#03594E]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </Link>

                <Link
                  href="/contact"
                  className={`py-2 text-base font-bold transition-colors ${
                    isActive("/contact")
                      ? "text-[#03594E]"
                      : "text-[#1F2432] hover:text-[#03594E]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="pt-3 border-t border-[#E2E9EB] flex flex-col gap-3 font-[var(--font-jost)]">
                  <a
                    href={`tel:${contact.primaryPhone.replace(/-/g, "")}`}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#E7F3F1] text-[#03594E] font-bold text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {contact.primaryPhone}</span>
                  </a>
                  <Link
                    href={demoLink}
                    className="flex items-center justify-center py-3 rounded-full bg-[#03594E] hover:bg-[#023E37] text-white font-bold text-sm shadow-md shadow-[#03594E]/20"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book a Free Demo Class
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
