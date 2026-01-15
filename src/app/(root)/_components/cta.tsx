import Link from "next/link";
import { ReactNode, CSSProperties } from "react";

interface MainCTAProps {
  title: string;
  buttonText: string;
  buttonLink: string;
  buttonIcon?: ReactNode;
  bgImage?: string;
  className?: string;
}

export default function MainCTA({
  title,
  buttonText,
  buttonLink,
  buttonIcon,
  bgImage,
  className = "",
}: MainCTAProps) {
  const backgroundStyle: CSSProperties | undefined = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : undefined;

  return (
    <section
      className={`relative overflow-hidden rounded-2xl md:rounded-full shadow-2xl max-w-7xl mx-auto ${className}`}
      style={backgroundStyle}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-10 text-center md:text-left">
        {/* Title */}
        <h2 className="text-xl md:text-3xl font-semibold text-white leading-tight">
          {title}
        </h2>

        {/* CTA Button */}
        <Link
          href={buttonLink}
          className="
            group relative inline-flex items-center gap-3
            rounded-full px-8 py-4
            text-base font-semibold text-white
            backdrop-blur-xl bg-white/10
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

          {/* Hover glow */}
          <span
            className="
              pointer-events-none absolute -inset-1 rounded-full
              bg-blue-500/30 blur-xl opacity-0
              transition group-hover:opacity-100
            "
          />

          {/* Button content */}
          <span className="relative z-10 flex items-center gap-3">
            {buttonText}
            {buttonIcon && (
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                {buttonIcon}
              </span>
            )}
          </span>
        </Link>
      </div>
    </section>
  );
}
