'use client';

import {
  Variants,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const welcomeText = 'WELCOME';
  const subText = 'Cybersecurity Enthusiast';

  const welcomeCount = useMotionValue(0);
  const subCount = useMotionValue(0);

  const welcomeRounded = useTransform(welcomeCount, (latest) =>
    Math.round(latest),
  );
  const subRounded = useTransform(subCount, (latest) => Math.round(latest));

  const displayWelcome = useTransform(welcomeRounded, (latest) =>
    welcomeText.slice(0, latest),
  );
  const displaySub = useTransform(subRounded, (latest) =>
    subText.slice(0, latest),
  );

  const [isWelcomeDone, setIsWelcomeDone] = useState(false);
  const [isSubStarted, setIsSubStarted] = useState(false);
  const [isSubDone, setIsSubDone] = useState(false);
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const welcomeControls = animate(welcomeCount, welcomeText.length, {
      type: 'tween',
      duration: 1.5,
      ease: 'easeInOut',
      onComplete: () => {
        setIsWelcomeDone(true);
        setTimeout(() => {
          setIsSubStarted(true);
        }, 500);
      },
    });

    return () => welcomeControls.stop();
  }, [welcomeCount, welcomeText.length]);

  useEffect(() => {
    if (isSubStarted) {
      const subControls = animate(subCount, subText.length, {
        type: 'tween',
        duration: 1.5,
        ease: 'easeInOut',
        onComplete: () => {
          setIsSubDone(true);
        },
      });
      return () => subControls.stop();
    }
  }, [isSubStarted, subCount, subText.length]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
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

  const finalRevealVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center bg-transparent font-mono px-4 overflow-hidden relative min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl flex flex-col items-center text-center space-y-6 z-10"
      >
        <div className="flex flex-col items-center w-full">
          <motion.p
            variants={itemVariants}
            className="text-[#0f0]/60 text-sm md:text-base mb-4 tracking-[0.2em] min-w-[300px]"
          >
            [SYSTEM_READY] INITIALIZING_PORTFOLIO{'.'.repeat(dotCount)}
          </motion.p>

          <div className="relative">
            <motion.h1 className="text-5xl md:text-8xl font-black text-[#0f0] tracking-tighter cyber-glow-text min-h-[1.2em]">
              <motion.span>{displayWelcome}</motion.span>
              {!isWelcomeDone && (
                <motion.span
                  animate={{ opacity: [1, 1, 0, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    times: [0, 0.5, 0.5, 1],
                  }}
                  className="inline-block w-[4px] md:w-[8px] h-[0.8em] bg-[#0f0] ml-1 align-middle"
                />
              )}
            </motion.h1>
          </div>
        </div>

        <motion.div
          variants={itemVariants}
          className="text-lg md:text-2xl flex items-center justify-center text-[#0f0]/80 h-10 -mt-2"
        >
          {isSubStarted && (
            <>
              <span className="mr-3 text-[#0f0]">&gt;</span>
              <motion.span>{displaySub}</motion.span>
              <motion.span
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  times: [0, 0.5, 0.5, 1],
                }}
                className="inline-block w-[2px] md:w-[4px] h-[0.8em] bg-[#0f0] ml-1 align-middle"
              />
            </>
          )}
        </motion.div>

        <motion.div
          variants={finalRevealVariants}
          initial="hidden"
          animate={isSubDone ? 'visible' : 'hidden'}
          className="w-full max-w-xl mx-auto font-mono text-xs md:text-base leading-relaxed bg-green-950/20 p-6 md:p-10 border border-green-900/50 rounded-sm space-y-10"
        >
          <div className="text-left space-y-6">
            <div className="w-full border-b border-[#0f0]/30 pb-2 flex items-center justify-between">
              <div>
                <span className="text-[#0f0] font-bold">root@portfolio:~$</span>{' '}
                <span className="text-white">whoami</span>
              </div>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
            </div>
            <p className="leading-relaxed text-gray-400">
              I&apos;m <span className="text-white font-bold">Raymond</span>, an
              Undergraduate Computer Science Student at{' '}
              <span className="text-[#0f0] font-bold">
                Universitas Padjadjaran
              </span>{' '}
              who passionate about cybersecurity.
            </p>
          </div>

          <motion.div
            variants={finalRevealVariants}
            className="flex flex-col md:flex-row gap-5 w-full pt-6 border-t border-green-900/30"
          >
            <motion.div variants={finalRevealVariants} className="flex-1">
              <Link
                href="/resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-8 py-4 border-2 border-[#0f0] text-[#0f0] hover:bg-[#0f0] hover:text-black transition-all duration-300 text-xs md:text-sm tracking-[0.2em] uppercase font-black flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,255,0,0.1)]"
              >
                View_Resume
              </Link>
            </motion.div>
            <motion.div variants={finalRevealVariants} className="flex-1">
              <Link
                href="/contact"
                className="w-full px-8 py-4 border-2 border-gray-600 text-white hover:border-white transition-all duration-300 text-xs md:text-sm tracking-[0.2em] uppercase font-black flex items-center justify-center gap-2"
              >
                Contact_Me
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
