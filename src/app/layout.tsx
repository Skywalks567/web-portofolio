import { Navbar } from '@/components/navbar';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Raymond Situmorang - Cybersecurity Portfolio',
  description: 'Cybersecurity Enthusiast and Software Developer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-green-500 selection:bg-green-500/30 selection:text-green-300">
        <Navbar />
        <main className="flex-1 flex flex-col relative z-10">{children}</main>
        <footer className="relative z-10 text-center py-4 text-xs font-mono opacity-50 text-gray-500">
          Raymond Situmorang &copy; 2026
        </footer>
      </body>
    </html>
  );
}
