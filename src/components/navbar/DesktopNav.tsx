'use client';

import { isActive, navItems } from '@/data/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { ThemeToggle } from '../ThemeToggle';

export function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => {
        const active = isActive(item.path, pathname);
        return (
          <Link
            key={item.path}
            href={item.path}
            className={`group relative transition-all duration-300 py-1 ${
              active
                ? 'text-[#0f0] cyber-glow-text'
                : 'text-gray-500 hover:text-[#0f0]'
            }`}
          >
            ./{item.name}
            {active && (
              <motion.span
                layoutId="nav-underline"
                className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0f0]"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
      <ThemeToggle />
    </div>
  );
}
