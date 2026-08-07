'use client';

import { usePathname } from 'next/navigation';

import { DesktopNav } from './navbar/DesktopNav';
import { MobileNav } from './navbar/MobileNav';
import { TerminalPrompt } from './navbar/TerminalPrompt';

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-5 font-mono text-xs md:text-sm border-b border-[#0f0]/10 bg-black/80 backdrop-blur-md">
      <TerminalPrompt pathname={pathname} />
      <DesktopNav pathname={pathname} />
      <MobileNav pathname={pathname} />
    </nav>
  );
}
