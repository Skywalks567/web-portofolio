'use client';

import { motion } from 'framer-motion';

export function TerminalPrompt({ pathname }: { pathname: string }) {
  return (
    <div className="flex items-center space-x-2 whitespace-nowrap">
      <span className="text-[#0f0] font-bold flex items-center gap-1.5">
        <motion.span
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-2 h-2 rounded-full bg-[#0f0] shadow-[0_0_8px_#0f0]"
        />
        <span className="hidden sm:inline">root@portofolio:~/</span>
        <span className="sm:hidden">~/</span>
      </span>
      <span className="text-white">
        {pathname === '/' ? 'home' : pathname.replace('/', '')}
      </span>
    </div>
  );
}
