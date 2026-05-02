import { Variants, motion } from 'framer-motion';
import Image from 'next/image';

interface ProfileSectionProps {
  variants: Variants;
}

export function ProfileSection({ variants }: ProfileSectionProps) {
  return (
    <motion.div
      variants={variants}
      className="flex flex-col items-center mb-16 w-full"
    >
      <div className="relative group p-4">
        <div className="absolute inset-0 border-2 border-[#0f0]/10 rounded-full z-20 pointer-events-none" />
        <div
          className="absolute inset-0 border-2 border-t-[#0f0] border-transparent rounded-full animate-spin z-30 pointer-events-none"
          style={{ animationDuration: '3s' }}
        />
        <div
          className="absolute inset-2 border border-dashed border-[#0f0]/20 rounded-full animate-spin-slow z-20 pointer-events-none"
          style={{ animationDuration: '12s' }}
        />

        <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-[#0f0]/20 z-10">
          <Image
            src="/about/profile.png"
            alt="Profile"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* Subtle glow behind photo */}
        <div className="absolute inset-4 bg-[#0f0] rounded-full opacity-5 group-hover:opacity-15 blur-2xl transition-opacity duration-700 pointer-events-none" />
      </div>

      {/* Metadata Bar (Centered & Minimal) */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 font-mono text-[10px] uppercase opacity-60 tracking-[0.2em]">
        <span className="text-white">[ID: 0xRaymond]</span>
        <span className="text-[#0f0] animate-pulse font-bold">
          [STATUS: ACTIVE]
        </span>
        <span className="text-white">[ROLE: STUDENT]</span>
      </div>
    </motion.div>
  );
}
