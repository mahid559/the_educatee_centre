import React from "react";

interface SectionHeadingProps {
  tag: string;
  tagColor?: "red" | "pink" | "blue" | "teal" | "yellow";
  title: string;
  subtext?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  subtext,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 sm:mb-16 ${
        isCenter ? "text-center max-w-3xl mx-auto" : "text-left max-w-2xl"
      } ${className}`}
    >
      <span
        className="text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2 font-[var(--font-jost)] text-[#E51937]"
      >
        {tag}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2432] tracking-tight mb-4 font-[var(--font-jost)] leading-tight">
        {title}
      </h2>
      {subtext && (
        <p className="text-base sm:text-lg text-[#6C757D] leading-relaxed font-[var(--font-dm-sans)]">
          {subtext}
        </p>
      )}
    </div>
  );
}
