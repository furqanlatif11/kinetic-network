import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.scss';
import Navbar from './_components/navbar';
import Footer from './_components/footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-monserrat',
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
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased text-white`}>
        {/* Background Effects */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Gradient Overlay */}
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
          
   
        </div>

        <Navbar />
        
        <main className="relative">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}