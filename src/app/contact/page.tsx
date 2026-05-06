'use client';

import { ContactFormView } from '@/components/contact/ContactFormView';
import { SocialLinks } from '@/components/contact/SocialLinks';
import { Variants, motion } from 'framer-motion';

export default function ContactPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-transparent font-mono text-white flex items-center justify-center p-6 md:p-12 lg:p-24 relative overflow-hidden selection:bg-[#0f0] selection:text-black">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] bg-[#0f0]/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] bg-[#0f0]/5 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#0f0_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.03]"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center relative z-10"
      >
        {/* Left Column: Text & Social */}
        <div className="space-y-12 text-center lg:text-left">
          <div className="space-y-8">
            <div className="space-y-2">
              <motion.p
                variants={itemVariants}
                className="text-[#0f0]/60 text-sm md:text-base tracking-[0.2em] uppercase"
              >
                [TRANSMISSION_INITIATED]
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase cyber-glow-text"
              >
                ESTABLISH <br />
                <span className="text-[#0f0]">CONTACT</span>
              </motion.h1>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed border-l-2 border-[#0f0]/30 pl-6"
            >
              Have a project in mind? Reach out and let&apos;s discuss. I&apos;m
              currently available for freelance work and collaborations.
            </motion.p>
          </div>

          <motion.div variants={itemVariants}>
            <SocialLinks />
          </motion.div>
        </div>

        {/* Right Column: Contact Form */}
        <motion.div variants={itemVariants} className="relative">
          <div className="absolute -inset-0.5 bg-[#0f0]/20 rounded-sm blur opacity-20"></div>
          <div className="relative bg-[#050505]/90 backdrop-blur-xl border border-green-900/50 rounded-sm shadow-2xl overflow-hidden">
            <ContactFormView />
          </div>
        </motion.div>
      </motion.div>

      {/* Footer Decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 text-[10px] text-[#0f0]/50 uppercase tracking-[0.5em] hidden md:flex items-center gap-2"
      >
        <span>Waiting for your transmission</span>
        <span className="w-2 h-3 bg-[#0f0]/50 animate-[pulse_1s_steps(2)_infinite]" />
      </motion.div>
    </div>
  );
}
