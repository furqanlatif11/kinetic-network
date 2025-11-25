import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kinetic Network - Advanced Security & Technical Solutions",
  description:
    "Leading provider of CCTV, Access Control, Alarm Systems, and Technical Services. Professional security solutions for residential and commercial properties.",
  keywords:
    "CCTV, security systems, access control, alarm systems, data cabling, fiber optics, internet technician",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {/* Background Effects */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Gradient Overlay */}

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>

        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
