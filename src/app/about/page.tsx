'use client';

import { BiographicalSummary } from '@/components/about/BiographicalSummary';
import { ProfileSection } from '@/components/about/ProfileSection';
import { RecentChronicles } from '@/components/about/RecentChronicles';
import { TechnicalArsenal } from '@/components/about/TechnicalArsenal';
import { Variants, motion } from 'framer-motion';

export default function AboutPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-transparent font-mono text-[#0f0] p-6 md:p-12 lg:p-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#0f0]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#0f0]/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto relative z-10 flex flex-col items-start"
      >
        {/* Terminal Header */}
        <motion.div variants={itemVariants} className="mb-16 w-full space-y-6">
          <div className="flex items-center gap-3 pt-8">
            <span className="text-xl md:text-2xl text-white font-medium">
              $
            </span>
            <h1 className="text-xl md:text-2xl font-normal">
              <span className="text-[#0f0]">cat</span> about.me
            </h1>
            <motion.span
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                times: [0, 0.5, 0.5, 1],
              }}
              className="w-2.5 h-6 bg-[#0f0]"
            />
          </div>
          <div className="w-full h-[1px] bg-white/10" />
        </motion.div>

        {/* Profile Image & Status */}
        <ProfileSection variants={itemVariants} />

        {/* Content Sections */}
        <div className="w-full space-y-12">
          <BiographicalSummary variants={itemVariants} />
          <TechnicalArsenal variants={itemVariants} />
          <RecentChronicles variants={itemVariants} />
        </div>
      </motion.div>
    </div>
  );
}
