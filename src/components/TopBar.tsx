"use client";

import React from "react";
import { Phone, MapPin, Clock, Sparkles } from "lucide-react";
import { FacebookIcon } from "./Icons";
import { siteConfig } from "@/data/siteConfig";

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#121214] text-[#E0DDD5] text-xs py-2 px-4 border-b border-[#242428] hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Contact Phone Numbers */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#C81E2B]" />
            <span className="text-[#A09D98]">Call / WhatsApp:</span>
            <a
              href={`tel:${siteConfig.phones[0].raw}`}
              className="font-semibold text-white hover:text-[#C81E2B] transition-colors"
            >
              {siteConfig.phones[0].display}
            </a>
            <span className="text-[#454341]">|</span>
            <a
              href={`tel:${siteConfig.phones[1].raw}`}
              className="text-[#D0CBC0] hover:text-white transition-colors"
            >
              {siteConfig.phones[1].display}
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-[#A09D98]">
            <Clock className="w-3.5 h-3.5 text-[#C81E2B]" />
            <span>Sat – Thu: 9:00 AM – 8:00 PM</span>
          </div>
        </div>

        {/* Right: Location & Facebook Community */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1.5 text-[#D0CBC0]">
            <MapPin className="w-3.5 h-3.5 text-[#C81E2B]" />
            <span>Appayan Afroz Tower (Lift 4th Floor), College Rd, Feni</span>
          </div>

          <a
            href={siteConfig.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1C1C22] hover:bg-[#282830] text-white transition-colors border border-[#33333C]"
            title="Visit official Facebook Page"
          >
            <FacebookIcon className="w-3 h-3 text-[#1877F2]" />
            <span className="font-medium text-[11px]">10K+ Community</span>
          </a>

          <a
            href="#book-demo"
            className="flex items-center gap-1 text-[#FEE2E2] hover:text-white font-medium transition-colors"
          >
            <Sparkles className="w-3 h-3 text-[#C81E2B]" />
            <span>Free Demo Class</span>
          </a>
        </div>
      </div>
    </div>
  );
};
