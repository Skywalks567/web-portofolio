'use client';

import { isActive, navItems } from '@/data/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { ThemeToggle } from '../ThemeToggle';

export function MobileNav({ pathname }: { pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-400 hover:text-[#0f0] bg-black/50 border border-white/5 hover:border-[#0f0]/30 rounded-lg transition-all"
        aria-label="Open Menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed top-4 left-4 right-4 z-50"
            >
              <div className="glass-card bg-black/95 border border-[#0f0]/30 rounded-xl p-4 shadow-[0_0_30px_rgba(0,255,0,0.15)] flex flex-col space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-[#0f0] font-mono font-bold text-sm">
                    root@system:~/menu
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-400 hover:text-[#0f0] hover:bg-[#0f0]/10 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => {
                    const active = isActive(item.path, pathname);
                    return (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`font-mono py-3 px-4 rounded-lg transition-all flex items-center gap-3 ${
                          active
                            ? 'bg-[#0f0]/10 text-[#0f0] border border-[#0f0]/30'
                            : 'text-gray-400 hover:text-[#0f0] hover:bg-white/5 border border-transparent'
                        }`}
                      >
                        <span className="text-[#0f0] opacity-50">&gt;</span>
                        ./{item.name}
                      </Link>
                    );
                  })}
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between px-2">
                  <span className="text-gray-400 font-mono text-xs uppercase tracking-wider">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
