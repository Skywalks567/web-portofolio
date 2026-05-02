import { MotionValue, Variants, motion } from 'framer-motion';

interface HeroSectionProps {
  displayWelcome: MotionValue<string>;
  displaySub: MotionValue<string>;
  isWelcomeDone: boolean;
  isSubStarted: boolean;
  dotCount: number;
  itemVariants: Variants;
}

export function HeroSection({
  displayWelcome,
  displaySub,
  isWelcomeDone,
  isSubStarted,
  dotCount,
  itemVariants,
}: HeroSectionProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <motion.p
        variants={itemVariants}
        className="text-[#0f0]/60 text-sm md:text-base mb-4 tracking-[0.2em] min-w-[300px]"
      >
        [SYSTEM_READY] INITIALIZING_PORTOFOLIO{'.'.repeat(dotCount)}
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
    </div>
  );
}
