import { Variants, motion } from 'framer-motion';
import Link from 'next/link';

interface TerminalSectionProps {
  isSubDone: boolean;
  variants: Variants;
}

export function TerminalSection({ isSubDone, variants }: TerminalSectionProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={isSubDone ? 'visible' : 'hidden'}
      className="w-full max-w-xl mx-auto font-mono text-xs md:text-base leading-relaxed bg-green-950/20 p-6 md:p-10 border border-green-900/50 rounded-sm space-y-10"
    >
      <div className="text-left space-y-6">
        <div className="w-full border-b border-[#0f0]/30 pb-2 flex items-center justify-between">
          <div>
            <span className="text-[#0f0] font-bold">root@portofolio:~$</span>{' '}
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
          <span className="text-[#0f0] font-bold">Universitas Padjadjaran</span>{' '}
          who passionate about cybersecurity.
        </p>
      </div>

      <motion.div
        variants={variants}
        className="flex flex-col md:flex-row gap-5 w-full pt-6 border-t border-green-900/30"
      >
        <motion.div variants={variants} className="flex-1">
          <Link
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-8 py-4 border-2 border-[#0f0] text-[#0f0] hover:bg-[#0f0] hover:text-black transition-all duration-300 text-xs md:text-sm tracking-[0.2em] uppercase font-black flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,255,0,0.1)]"
          >
            View_Resume
          </Link>
        </motion.div>
        <motion.div variants={variants} className="flex-1">
          <Link
            href="/contact"
            className="w-full px-8 py-4 border-2 border-gray-600 text-white hover:border-white transition-all duration-300 text-xs md:text-sm tracking-[0.2em] uppercase font-black flex items-center justify-center gap-2"
          >
            Contact_Me
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
