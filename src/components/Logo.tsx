"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "default" | "light" | "footer";
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "default",
  size = "md",
}) => {
  const isDarkBg = variant === "light" || variant === "footer";

  const sizeDimensions = {
    sm: { width: 140, height: 35 },
    md: { width: 175, height: 44 },
    lg: { width: 220, height: 55 },
  };

  const dim = sizeDimensions[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center transition-transform hover:opacity-95 active:scale-[0.99] ${className}`}
      aria-label="The Educatee Centre Homepage"
    >
      <div className="relative flex items-center">
        <Image
          src={
            isDarkBg
              ? "/images/educatee-logo-dark-transparent.png"
              : "/images/educatee-logo-horizontal.png"
          }
          alt="The Educatee Centre, Feni"
          width={dim.width}
          height={dim.height}
          className="object-contain h-auto"
          priority
        />
      </div>
    </Link>
  );
};
