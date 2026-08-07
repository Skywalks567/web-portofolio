'use client';

import { Experience } from '@/data/credentials';
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, X } from 'lucide-react';
import { useState } from 'react';

interface ExperienceListProps {
  experiences: Experience[];
}

export function ExperienceList({ experiences }: ExperienceListProps) {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  return (
    <>
      <div className="space-y-8 pl-4">
        <div className="relative border-l border-[#0f0]/30 space-y-12 pb-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedExp(exp)}
              className="relative pl-8 group cursor-pointer"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-black border border-[#0f0]/30 group-hover:border-[#0f0] flex items-center justify-center transition-colors shadow-md z-10">
                <Briefcase
                  className={`w-4 h-4 ${exp.active ? 'text-[#0f0]' : 'text-gray-500'}`}
                />
              </div>

              <div className="space-y-3 p-4 rounded-xl border border-transparent group-hover:border-[#0f0]/30 group-hover:bg-[rgba(0,255,0,0.05)] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                  <div className="flex items-center gap-3">
                    {exp.logo && (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={exp.logo}
                          alt={`${exp.title} logo`}
                          className="w-10 h-10 rounded object-cover bg-white/5 border border-white/10 shrink-0"
                        />
                      </>
                    )}
                    <h3 className="text-lg font-bold text-white group-hover:text-[#0f0] transition-colors">
                      {exp.title}
                    </h3>
                  </div>

                  <span className="text-xs text-white dark:text-[#0f0]/70 font-mono bg-blue-500/30 dark:bg-[#0f0]/10 px-2 py-1 rounded w-fit whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {exp.summary}
                </p>

                {exp.image && (
                  <div className="pt-2">
                    <span className="text-xs font-bold font-mono text-[#0f0]">
                      [ VIEW_DETAIL ]
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Popup for Experience Details */}
      <AnimatePresence>
        {selectedExp && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-24 sm:p-6 sm:pt-28 md:p-12 md:pt-32">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[85vh] flex flex-col glass-card bg-black/90 border border-[#0f0]/30 rounded-xl shadow-[0_0_40px_rgba(0,255,0,0.15)] overflow-hidden z-10"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between p-4 md:p-6 border-b border-white/10 bg-black/50">
                <div className="flex items-center gap-4 pr-4">
                  {selectedExp.logo && (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={selectedExp.logo}
                        alt="Logo"
                        className="w-12 h-12 rounded object-cover bg-white/5 border border-white/10 shrink-0"
                      />
                    </>
                  )}
                  <div className="space-y-2">
                    <h3 className="text-[#0f0] font-mono text-base sm:text-lg font-bold">
                      {selectedExp.title}
                    </h3>
                    <span className="inline-block text-xs text-white dark:text-[#0f0]/70 font-mono bg-blue-500/30 dark:bg-[#0f0]/10 px-2 py-1 rounded">
                      {selectedExp.period}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedExp(null)}
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-[#0f0] hover:bg-red-50 dark:hover:bg-[#0f0]/10 rounded-lg transition-colors shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="relative flex-grow overflow-auto p-4 md:p-6 space-y-6">
                <div className="space-y-3">
                  <h4 className="text-white font-bold font-mono text-sm border-b border-white/10 pb-2">
                    DESCRIPTION
                  </h4>
                  <ul className="space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300 list-disc pl-5">
                    {selectedExp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                {selectedExp.image && (
                  <div className="space-y-3 pt-1">
                    <div className="flex justify-center bg-black/50 p-2 rounded border border-white/5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={selectedExp.image}
                        alt={`Evidence for ${selectedExp.title}`}
                        className="max-w-full max-h-[50vh] object-contain rounded"
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
