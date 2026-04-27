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
      repeatDelay: 1.5,
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
    <div className="flex-1 flex flex-col justify-center items-center bg-black font-mono px-4 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl flex flex-col items-center text-center space-y-8"
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
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  ease: 'steps(2)' as any,
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
          className="terminal-box max-w-xl w-full text-left"
        >
          <div className="flex items-center gap-2 mb-4 border-b border-[#0f0]/10 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-[#0f0]/50" />
            <span className="ml-2 text-[10px] text-[#0f0]/40">identity.sh</span>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-[#0f0]/90">
            <span className="font-bold mr-2 text-[#0f0]">
              root@portfolio:~$
            </span>
            whoami
            <br />
            <span className="text-white mt-2 inline-block align-content-center">
              {"I'm"} Raymond. Passionate about exploring the ever-evolving
              world of technology, particularly in cybersecurity and software
              development.
            </span>
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 pt-4"
        >
          <Link
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-[#0f0] text-[#0f0] hover:bg-[#0f0] hover:text-black transition-all duration-300 font-bold uppercase tracking-widest text-sm"
          >
            View_Resume
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border border-[#0f0]/30 text-[#0f0]/60 hover:border-[#0f0] hover:text-[#0f0] transition-all duration-300 font-bold uppercase tracking-widest text-sm"
          >
            Contact_Me
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
