'use client';

import { Variants, motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

export default function ContactPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-transparent font-mono text-[#0f0] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full text-center space-y-12 relative z-10"
      >
        {/* Top Label */}
        <motion.p
          variants={itemVariants}
          className="text-xs md:text-sm tracking-[0.4em] uppercase font-bold"
        >
          LET&apos;S CONNECT
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-8xl font-black text-white leading-tight"
        >
          Let&apos;s Build <br />
          Something <span className="text-[#0f0] cyber-glow-text">Great</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-sans"
        >
          Have a project in mind? Reach out and let&apos;s discuss.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 pt-8"
        >
          <Link
            href="https://github.com/Skywalks567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 border-2 border-[#0f0] rounded-full text-[#0f0] hover:bg-[#0f0] hover:text-black transition-all duration-300 font-bold group"
          >
            GitHub{' '}
            <FaGithub className="size-5 group-hover:scale-110 transition-transform" />
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 px-8 py-4 border-2 border-[#0f0] rounded-full text-[#0f0] hover:bg-[#0f0] hover:text-black transition-all duration-300 font-bold group"
          >
            Email{' '}
            <IoMail className="size-5 group-hover:scale-110 transition-transform" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/raymond-situmorang"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 border-2 border-[#0f0] rounded-full text-[#0f0] hover:bg-[#0f0] hover:text-black transition-all duration-300 font-bold group"
          >
            LinkedIn{' '}
            <FaLinkedin className="size-5 group-hover:scale-110 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative footer text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 text-[10px] text-[#0f0]/20 uppercase tracking-[0.5em]"
      >
        Waiting for your transmission...
      </motion.div>
    </div>
  );
}
