"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteContent } from "@/data/content";

export function Footer() {
  const { brand, contact, programs } = siteContent;
  const pathname = usePathname();

  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  };

  return (
    <footer className="bg-[#1F2432] border-t border-white/10 pt-16 pb-12 text-[#9BA4B5]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link
              href="/"
              onClick={handleHomeClick}
              className="inline-block"
              aria-label="The Educatee Centre Home"
            >
              <div className="relative w-[190px] h-[48px] flex items-center">
                <Image
                  src="/logo-white.png"
                  alt="The Educatee Centre Logo"
                  fill
                  unoptimized
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mt-1 text-[#C4CDD9] font-[var(--font-dm-sans)]">
              Established in {brand.establishedYear}. Feni&apos;s leading training
              institute empowering students and professionals to overcome their
              fear of English and gain practical IT skills in an encouraging,
              mentorship-driven atmosphere.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href={contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/10 text-white flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/10 text-white flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.908.536 3.69 1.468 5.215L2.094 22l4.908-1.342a9.99 9.99 0 005.029 1.373c5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm5.727 14.195c-.242.682-1.22 1.306-1.722 1.38-.475.07-1.077.103-3.414-.85-2.616-1.066-4.321-3.722-4.452-3.896-.13-.174-1.055-1.402-1.055-2.673 0-1.272.668-1.898.906-2.155.238-.256.52-.32.693-.32.174 0 .347.002.498.01.163.007.38-.062.593.45.22.528.749 1.828.815 1.96.065.132.109.288.022.463-.087.174-.13.282-.26.434-.13.152-.272.34-.389.456-.13.13-.265.27-.114.53.152.26.674 1.109 1.445 1.796.994.885 1.832 1.16 2.092 1.29.26.13.412.115.564-.06.152-.174.65-0.757.824-1.017.174-.26.347-.217.585-.13.238.087 1.517.715 1.777.845.26.13.434.195.498.304.065.108.065.628-.177 1.31z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-bold text-white text-base mb-1 font-[var(--font-jost)]">Navigation</h3>
            <Link
              href="/"
              onClick={handleHomeClick}
              className="text-sm text-[#9BA4B5] hover:text-white transition-colors font-[var(--font-dm-sans)]"
            >
              Home
            </Link>
            <Link href="/about" className="text-sm text-[#9BA4B5] hover:text-white transition-colors font-[var(--font-dm-sans)]">
              About Us
            </Link>
            <Link href="/programs" className="text-sm text-[#9BA4B5] hover:text-white transition-colors font-[var(--font-dm-sans)]">
              Programs &amp; Courses
            </Link>
            <Link href="/admissions" className="text-sm text-[#9BA4B5] hover:text-white transition-colors font-[var(--font-dm-sans)]">
              Admissions &amp; Fees
            </Link>
            <Link href="/gallery" className="text-sm text-[#9BA4B5] hover:text-white transition-colors font-[var(--font-dm-sans)]">
              Photo Gallery
            </Link>
            <Link href="/contact" className="text-sm text-[#9BA4B5] hover:text-white transition-colors font-[var(--font-dm-sans)]">
              Contact Us
            </Link>
          </div>

          {/* Col 3: Programs (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-bold text-white text-base mb-1 font-[var(--font-jost)]">Our Programs</h3>
            {programs.map((p) => (
              <Link
                key={p.id}
                href={`/programs/${p.slug}`}
                className="text-sm text-[#9BA4B5] hover:text-white transition-colors line-clamp-1 font-[var(--font-dm-sans)]"
              >
                {p.title}
              </Link>
            ))}
          </div>

          {/* Col 4: Campus Location & Contacts (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-bold text-white text-base mb-1 font-[var(--font-jost)]">Campus Location</h3>
            <div className="flex items-start gap-2.5 text-sm">
              <span className="text-[#9BA4B5] mt-0.5 flex-shrink-0">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </span>
              <div>
                <p className="font-medium text-[#C4CDD9] font-[var(--font-dm-sans)]">{contact.address}</p>
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-2 pt-2 border-t border-white/10 font-[var(--font-jost)]">
              <p className="text-xs font-bold uppercase tracking-wider text-[#9BA4B5]">
                Direct Desk:
              </p>
              <a
                href={`tel:${contact.primaryPhone.replace(/-/g, "")}`}
                className="text-sm font-semibold text-[#C4CDD9] hover:text-white hover:underline flex items-center gap-2 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#9BA4B5]" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>{contact.primaryPhone}</span>
              </a>
              <a
                href={`tel:${contact.secondaryPhone.replace(/-/g, "")}`}
                className="text-sm font-semibold text-[#9BA4B5] hover:text-white hover:underline flex items-center gap-2 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#9BA4B5]" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>{contact.secondaryPhone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9BA4B5] gap-4 font-[var(--font-dm-sans)]">
          <p className="text-center sm:text-left">
            © 2026 {brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[#9BA4B5]">
            <span>Developed By</span>
            <a
              href="https://www.stellarworm.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center opacity-80 hover:opacity-100 transition-opacity focus:outline-none focus:ring-1 focus:ring-white/30 rounded"
              aria-label="Stellar Worm website (opens in a new tab)"
            >
              <div className="relative w-[118px] h-[14px] flex items-center">
                <Image
                  src="/stellar-worm-logo.png"
                  alt="Stellar Worm"
                  fill
                  className="object-contain object-left"
                  unoptimized
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
