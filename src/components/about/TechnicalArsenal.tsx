import { technicalSkills } from '@/data/about';
import { Variants, motion } from 'framer-motion';

interface TechnicalArsenalProps {
  variants: Variants;
}

export function TechnicalArsenal({ variants }: TechnicalArsenalProps) {
  return (
    <motion.section variants={variants} className="space-y-4">
      <h2 className="text-xl font-bold border-l-4 border-[#0f0] pl-3 uppercase tracking-wider">
        02. TECHNICAL_ARSENAL
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {technicalSkills.map((cat, idx) => (
          <div
            key={idx}
            className="glass-card group bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-[#0f0]/50 p-6 rounded-xl transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,255,0,0.1)]"
          >
            <h3 className="text-[10px] text-[#0f0]/50 group-hover:text-[#0f0] mb-4 uppercase tracking-[0.2em] font-bold transition-colors">
              {cat.title}
            </h3>
            <ul className="text-[11px] space-y-3 text-gray-400 group-hover:text-gray-300 transition-colors">
              {cat.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-[#0f0] rounded-full shadow-[0_0_5px_#0f0]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
