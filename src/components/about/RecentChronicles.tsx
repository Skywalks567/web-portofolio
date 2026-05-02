import { recentChronicles } from '@/data/about';
import { Variants, motion } from 'framer-motion';

interface RecentChroniclesProps {
  variants: Variants;
}

export function RecentChronicles({ variants }: RecentChroniclesProps) {
  return (
    <motion.section variants={variants} className="space-y-4">
      <h2 className="text-xl font-bold border-l-4 border-[#0f0] pl-3 uppercase tracking-wider">
        03. RECENT_CHRONICLES
      </h2>
      <div className="glass-card group bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-[#0f0]/50 p-8 rounded-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,0,0.1)] space-y-10">
        {recentChronicles.map((item, idx) => (
          <div
            key={idx}
            className="relative pl-8 border-l border-white/10 group-hover:border-[#0f0]/30 transition-colors"
          >
            <div
              className={`absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full ${
                item.active ? 'bg-[#0f0] shadow-[0_0_8px_#0f0]' : 'bg-[#0f0]/40'
              }`}
            />
            <h4
              className={`font-bold text-lg transition-colors ${
                item.active
                  ? 'text-white'
                  : 'text-[#0f0]/70 group-hover:text-[#0f0]/90'
              }`}
            >
              {item.title}
            </h4>
            <p
              className={`text-[10px] mb-3 ${
                item.active ? 'text-[#0f0]/50' : 'text-[#0f0]/40'
              }`}
            >
              {item.period}
            </p>
            <p
              className={`text-sm leading-relaxed transition-colors ${
                item.active
                  ? 'text-gray-400 group-hover:text-gray-300'
                  : 'text-gray-500 group-hover:text-gray-400'
              }`}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
