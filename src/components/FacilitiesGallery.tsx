import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mic, Monitor, Building2 } from "lucide-react";

export function FacilitiesGallery() {
  const facilityCards = [
    {
      id: "spoken-studio",
      tag: "COMMUNICATION STUDIO",
      title: "Interactive Spoken English Hall",
      description:
        "Designed specifically for dialogue circles, paired speech practice, and confidence-building debates in an acoustically treated space.",
      image: "/images/facilities/spoken-room.jpg",
      icon: <Mic className="w-5 h-5 text-[#03594E]" />,
      features: [
        "Circle seating for open conversational eye-contact",
        "Air-conditioned distraction-free environment",
        "Interactive AV screen for phonetics & drills",
        "Strict cap of max 16 students per batch",
      ],
      linkText: "Explore Spoken Batches",
      linkUrl: "/programs/spoken-english-ssc-dakhil",
    },
    {
      id: "computer-lab",
      tag: "PRACTICAL IT WORKSPACE",
      title: "Dedicated Computer Training Lab",
      description:
        "Every enrolled student works on their own dedicated high-speed PC workstation with direct instructor supervision.",
      image: "/images/facilities/computer-room.jpg",
      icon: <Monitor className="w-5 h-5 text-[#03594E]" />,
      features: [
        "1 Student : 1 PC guaranteed (No sharing)",
        "High-speed fiber connectivity for live tasks",
        "Full MS Office, typing & internet applications setup",
        "Projector screen for real-time live demonstrations",
      ],
      linkText: "Explore IT Programs",
      linkUrl: "/programs/basic-computer-ms-office",
    },
    {
      id: "campus-environment",
      tag: "PREMIER CAMPUS LOCATION",
      title: "Appayan Afroz Tower (5th Floor)",
      description:
        "Located in the heart of Feni near Pourashava Gate, providing a quiet, safe, and respectable sanctuary for adult learners.",
      image: "/images/about/about-community.jpg",
      icon: <Building2 className="w-5 h-5 text-[#03594E]" />,
      features: [
        "Elevator facility (Press Lift 4th floor button)",
        "Peaceful atmosphere elevated from street noise",
        "Dedicated separate batches for female students",
        "Comfortable waiting lounge and library corner",
      ],
      linkText: "View Campus Gallery",
      linkUrl: "/gallery",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F5F7F9] relative border-b border-[#E2E9EB]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#03594E] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2 font-[var(--font-jost)]">
            CAMPUS INFRASTRUCTURE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2432] tracking-tight mb-4 font-[var(--font-jost)] leading-tight">
            World-Class Campus Facilities in Feni
          </h2>
          <p className="text-base sm:text-lg text-[#6C757D] leading-relaxed max-w-2xl mx-auto font-[var(--font-dm-sans)]">
            Quality learning requires the right environment. We have invested in modern, comfortable facilities to support focused adult education.
          </p>
        </div>

        {/* 3 Facility Cards Grid in Educeet Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilityCards.map((card) => (
            <article
              key={card.id}
              className="bg-white rounded-[20px] p-5 border border-[#03594E]/10 shadow-xs hover:shadow-[0_20px_30px_0_rgba(1,6,20,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo Thumbnail */}
                <div className="relative w-full aspect-[16/10] rounded-[12px] overflow-hidden bg-slate-100 mb-5">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Tag & Title */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#03594E] block mb-2 font-[var(--font-jost)]">
                  {card.tag}
                </span>

                <h3 className="text-xl font-bold text-[#1F2432] group-hover:text-[#03594E] transition-colors mb-2.5 font-[var(--font-jost)]">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6C757D] leading-relaxed mb-5 font-[var(--font-dm-sans)]">
                  {card.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 pt-3 border-t border-slate-100 font-[var(--font-dm-sans)] mb-5">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#1F2432]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#03594E] mt-1.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="pt-3 border-t border-slate-100">
                <Link
                  href={card.linkUrl}
                  className="w-full block text-center py-2.5 px-4 rounded-lg bg-[#F5F7F9] hover:bg-[#03594E] text-[#1F2432] hover:text-white font-bold text-xs font-[var(--font-jost)] transition-all duration-300"
                >
                  {card.linkText}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
