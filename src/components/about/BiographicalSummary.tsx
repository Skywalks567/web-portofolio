import { Variants, motion } from 'framer-motion';

interface BiographicalSummaryProps {
  variants: Variants;
}

export function BiographicalSummary({ variants }: BiographicalSummaryProps) {
  return (
    <motion.section variants={variants} className="space-y-4">
      <h2 className="text-xl font-bold border-l-4 border-[#0f0] pl-3 uppercase tracking-wider">
        01. BIOGRAPHICAL_SUMMARY
      </h2>
      <div className="glass-card group bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-[#0f0]/50 p-8 rounded-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,0,0.1)]">
        <p className="leading-relaxed text-sm md:text-base lg:text-lg text-gray-400 group-hover:text-gray-300 transition-colors">
          I am a technology enthusiast with a deep focus on{' '}
          <span className="text-[#0f0] font-bold">Cybersecurity</span> and{' '}
          <span className="text-[#0f0] font-bold">Software Development</span>.
          My journey is driven by a strong curiosity about how systems break,
          how they can be secured, and how code can solve real-world problems.
          <br />
          <br />
          Currently, I spend my time building{' '}
          <span className="text-white">web applications</span>, diving into the
          mathematical elegance of{' '}
          <span className="text-white">cryptography</span>, and exploring the
          intricacies of network security, ethical hacking, and system
          architecture.
        </p>
      </div>
    </motion.section>
  );
}
