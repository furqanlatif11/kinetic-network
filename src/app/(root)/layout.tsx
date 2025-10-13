import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import './globals.scss';
import Navbar from './_components/navbar';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Kinetic Network - Advanced Security & Technical Solutions',
  description: 'Leading provider of CCTV, Access Control, Alarm Systems, and Technical Services. Professional security solutions for residential and commercial properties.',
  keywords: 'CCTV, security systems, access control, alarm systems, data cabling, fiber optics, internet technician',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased bg-slate-950 text-white`}>
        {/* Background Effects */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
          
          {/* Radial Gradient Spots */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <Navbar />
        
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}