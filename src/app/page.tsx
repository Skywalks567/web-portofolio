'use client';

import {
  Variants,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  const welcomeText = 'WELCOME';
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    welcomeText.slice(0, latest),
  );

  useEffect(() => {
    const controls = animate(count, welcomeText.length, {
      type: 'tween',
      duration: 1.5,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
    });
    return controls.stop;
  }, [count, welcomeText.length]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center bg-transparent font-mono px-4 overflow-hidden relative min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl flex flex-col items-center text-center space-y-8 z-10"
      >
        <div className="flex flex-col items-center w-full">
          <motion.p
            variants={itemVariants}
            className="text-[#0f0]/60 text-sm md:text-base mb-4 tracking-[0.2em]"
          >
            [SYSTEM_READY] INITIALIZING_PORTFOLIO...
          </motion.p>

          <div className="relative">
            <motion.h1 className="text-6xl md:text-9xl font-black text-[#0f0] tracking-tighter cyber-glow-text min-h-[1.2em]">
              <motion.span>{displayText}</motion.span>
              <motion.span
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  times: [0, 0.5, 0.5, 1],
                }}
                className="inline-block w-[4px] md:w-[8px] h-[0.8em] bg-[#0f0] ml-1 align-middle"
              />
            </motion.h1>
          </div>
        </div>

        <motion.div
          variants={itemVariants}
          className="text-xl md:text-3xl flex items-center justify-center text-[#0f0]/80"
        >
          <span className="mr-3 animate-pulse">&gt;</span>
          <span>Cybersecurity Enthusiast</span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-6 pt-8 w-full justify-center"
        >
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-[#0f0] text-[#0f0] hover:bg-[#0f0] hover:text-black transition-all duration-300 text-sm tracking-widest uppercase font-bold group flex items-center justify-center gap-2"
          >
            <span className="group-hover:translate-x-1 transition-transform">
              &gt;
            </span>{' '}
            Contact_Me
          </Link>
          <Link
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#0f0]/10 border-2 border-[#0f0]/50 text-[#0f0] hover:bg-[#0f0] hover:text-black hover:border-[#0f0] transition-all duration-300 text-sm tracking-widest uppercase font-bold flex items-center justify-center gap-2"
          >
            View_Resume
          </Link>
        </motion.div>

        {/* System log simulation */}
        <motion.div
          variants={itemVariants}
          className="pt-12 text-[10px] md:text-xs text-[#0f0]/40 font-mono text-left w-full max-w-md mx-auto overflow-hidden opacity-50"
        >
          <div className="flex justify-between border-b border-[#0f0]/20 pb-1 mb-2">
            <span>TERMINAL_ID: 0x567</span>
            <span>Uptime: 99.9%</span>
          </div>
          <div className="space-y-1">
            <p className="animate-pulse">
              [INFO] Establishing secure connection...
            </p>
            <p>[INFO] Accessing encrypted directories...</p>
            <p>[INFO] Data transmission active.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
