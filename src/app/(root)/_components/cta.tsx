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
          className="
    group relative inline-flex items-center gap-3
    rounded-full px-12 py-4
    text-lg font-semibold text-white
    backdrop-blur-xl
    bg-white/10
    border border-white/25
    shadow-[0_10px_35px_rgba(0,0,0,0.45)]
    transition-all duration-300 ease-out
    hover:bg-white/20
    hover:shadow-[0_15px_45px_rgba(0,0,0,0.6)]
    hover:-translate-y-0.5
    active:scale-[0.97]
  "
        >
          {/* Glass shine */}
          <span
            className="
      pointer-events-none absolute inset-0 rounded-full
      bg-gradient-to-b from-white/40 via-white/15 to-transparent
      opacity-60
    "
          />

          {/* Accent glow (subtle blue aura) */}
          <span
            className="
      pointer-events-none absolute -inset-1 rounded-full
      bg-blue-500/30 blur-xl opacity-0
      group-hover:opacity-100 transition
    "
          />

          {/* Content */}
          <span className="relative z-10 flex items-center gap-3">
            {buttonText}
            {buttonIcon && (
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                {buttonIcon}
              </span>
            )}
          </span>
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
