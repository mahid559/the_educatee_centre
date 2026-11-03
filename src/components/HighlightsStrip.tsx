"use client";

import React, { useRef, useEffect } from "react";
import { siteContent } from "@/data/content";
import { Calendar, Award, Users, TrendingUp } from "lucide-react";
import gsap from "gsap";

export function HighlightsStrip() {
  const { highlights } = siteContent;
  const stripRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!stripRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".highlight-item", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
      });
    }, stripRef);

    return () => ctx.revert();
  }, []);

  const getIcon = (name: string) => {
    switch (name) {
      case "calendar":
        return <Calendar className="w-5 h-5 text-[#E51937]" />;
      case "award":
        return <Award className="w-5 h-5 text-[#E51937]" />;
      case "users":
        return <Users className="w-5 h-5 text-[#E51937]" />;
      default:
        return <TrendingUp className="w-5 h-5 text-[#E51937]" />;
    }
  };

  return (
    <section ref={stripRef} className="bg-white pt-6 pb-14 sm:pb-16 relative z-20">
      <style>{`
        @media (max-width: 1023px) {
          .highlights-mobile-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px 12px;
            align-items: stretch;
            position: relative;
          }
          .highlights-mobile-grid::after {
            content: "";
            position: absolute;
            left: 8px;
            right: 8px;
            top: 50%;
            height: 1px;
            background-color: #f1f5f9;
            transform: translateY(-50%);
            pointer-events: none;
          }
          .highlight-item-mobile {
            min-width: 0;
            padding: 8px;
            overflow-wrap: break-word;
          }
          .highlight-title-mobile {
            font-size: clamp(15px, 4.4vw, 18px);
            line-height: 1.25;
            min-height: 2.5em;
            white-space: normal;
            overflow-wrap: break-word;
          }
        }
        @media (max-width: 359px) {
          .highlight-title-mobile {
            font-size: clamp(13.5px, 4.2vw, 15px);
          }
        }
      `}</style>
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-[24px] py-6 px-4 sm:p-8 shadow-xl border border-slate-200/80 -mt-8 sm:-mt-12 relative z-30">
          <div className="highlights-mobile-grid grid grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:items-center lg:divide-x lg:divide-slate-100">
            {highlights.map((item, index) => (
              <div
                key={item.id}
                className={`highlight-item highlight-item-mobile min-w-0 flex flex-col items-center text-center ${
                  index > 0 ? "lg:pl-6" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#FFF0F2] border border-[#E51937]/15 flex items-center justify-center mb-3 shadow-xs shrink-0">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="highlight-title-mobile font-extrabold lg:text-[clamp(18px,1.8vw,26px)] text-[#1F2432] font-[var(--font-jost)] lg:whitespace-nowrap">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
