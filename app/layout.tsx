import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Bilisa Assefa | Developer & Creator',
  description: 'Premium futuristic digital experience and portfolio.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} dark`}>
      <body className="bg-[#050505] text-[#e5e7eb] font-sans antialiased selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
