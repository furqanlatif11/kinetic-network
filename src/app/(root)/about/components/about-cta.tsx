"use client";

import { FC } from "react";
import Link from "next/link";

// Types
interface CTAConfig {
  href: string;
  label: string;
  description?: string;
}

interface QuoteFormCTAProps {
  config: CTAConfig;
}

// Custom Card Component
const CustomCard: FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className="border border-gray-200 bg-white shadow-sm hover:shadow-md transition duration-300 rounded-xl">
      {children}
    </div>
  );
};

// Component
const QuoteFormCTA: FC<QuoteFormCTAProps> = ({ config }) => {
  return (
    <CustomCard>
      <Link href={config.href} className="block">
        <div className="p-6 text-center cursor-pointer">
          <h3 className="text-xl font-semibold text-gray-900">
            {config.label}
          </h3>
          {config.description && (
            <p className="text-gray-600 text-sm mt-2">{config.description}</p>
          )}
        </div>
      </Link>
    </CustomCard>
  );
};

export default QuoteFormCTA;
