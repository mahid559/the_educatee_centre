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
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-[24px] p-6 sm:p-8 shadow-xl border border-slate-200/80 -mt-8 sm:-mt-12 relative z-30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {highlights.map((item, index) => (
               <div
                 key={item.id}
                 className={`highlight-item flex flex-col items-center text-center ${
                   index > 0 ? "pt-5 md:pt-0 md:pl-6" : ""
                 }`}
               >
                 <div className="w-12 h-12 rounded-full bg-[#FFF0F2] border border-[#E51937]/15 flex items-center justify-center mb-3 shadow-xs">
                   {getIcon(item.iconName)}
                 </div>
                <h3 className="font-extrabold text-[clamp(20px,1.8vw,26px)] text-[#1F2432] font-[var(--font-jost)] whitespace-nowrap">
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
