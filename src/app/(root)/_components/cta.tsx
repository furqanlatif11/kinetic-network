import Link from "next/link";
import { ReactNode } from "react";

interface ReusableCTAProps {
  subtitle?: string;
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  buttonIcon?: ReactNode;
  bgImage?: string; // URL of background image
  className?: string; // for margin/padding overrides
}

export default function MainCTA({
  subtitle,
  title,
  description,
  buttonText,
  buttonLink,
  buttonIcon,
  bgImage,
  className = "",
}: ReusableCTAProps) {
  return (
    <section
      className={`relative rounded-3xl overflow-hidden shadow-2xl ${className}`}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/10 "></div>

      <div className="relative max-w-4xl mx-auto px-8 py-10 text-center flex flex-col items-center justify-center">
        {/* Subtitle */}
        {subtitle && (
          <span className="text-sm md:text-base font-semibold tracking-wide text-blue-200 uppercase mb-4">
            {subtitle}
          </span>
        )}

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-10">
          {title}
        </h2>
        <Link
          href={buttonLink}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg transition-transform transform hover:scale-105"
        >
          {buttonText}
          {buttonIcon && buttonIcon}
        </Link>
        {/* Description */}
        {description && (
          <p className="text-lg md:text-xl text-blue-100 mt-10 max-w-3xl">
            {description}
          </p>
        )}

        {/* CTA Button */}
      </div>
    </section>
  );
}
