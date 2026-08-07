'use client';

import { Certificate, Experience } from '@/data/credentials';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { CertificateGrid } from './CertificateGrid';
import { ExperienceList } from './ExperienceList';

interface CredentialsTabsProps {
  experiences: Experience[];
  certificates: Certificate[];
}

type TabType = 'EXPERIENCE' | 'LICENSES_&_CERTS';

export function CredentialsTabs({
  experiences,
  certificates,
}: CredentialsTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('EXPERIENCE');

  const tabs: { id: TabType; label: string }[] = [
    { id: 'EXPERIENCE', label: 'EXPERIENCE_LOGS' },
    { id: 'LICENSES_&_CERTS', label: 'LICENSES_&_CERTS' },
  ];

  return (
    <div className="w-full space-y-8">
      {/* Tab Navigation */}
      <div className="flex flex-wrap items-center gap-4 border-b border-white/10 pb-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-2.5 font-mono text-sm uppercase tracking-wider transition-all duration-300 rounded border ${
                isActive
                  ? 'border-[#0f0] bg-[#0f0]/10 text-[#0f0] shadow-[0_0_15px_rgba(0,255,0,0.15)]'
                  : 'border-[#0f0]/30 bg-transparent text-[#0f0]/70 hover:bg-[#0f0]/5 hover:border-[#0f0]/60 hover:text-[#0f0]'
              }`}
            >
              [{tab.label}]
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTab === 'EXPERIENCE' ? (
            <motion.div
              key="EXPERIENCE"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ExperienceList experiences={experiences} />
            </motion.div>
          ) : (
            <motion.div
              key="LICENSES_&_CERTS"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <CertificateGrid certificates={certificates} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
