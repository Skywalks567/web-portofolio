'use client';

import { HeroSection } from '@/components/home/HeroSection';
import { TerminalSection } from '@/components/home/TerminalSection';
import { useHomeAnimation } from '@/hooks/use-home-animation';
import { Variants, motion } from 'framer-motion';

export default function Home() {
  const {
    displayWelcome,
    displaySub,
    isWelcomeDone,
    isSubStarted,
    isSubDone,
    dotCount,
  } = useHomeAnimation();

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
        <HeroSection
          displayWelcome={displayWelcome}
          displaySub={displaySub}
          isWelcomeDone={isWelcomeDone}
          isSubStarted={isSubStarted}
          dotCount={dotCount}
          itemVariants={itemVariants}
        />

        <TerminalSection isSubDone={isSubDone} variants={finalRevealVariants} />
      </motion.div>
    </div>
  );
}
