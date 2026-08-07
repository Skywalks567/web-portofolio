'use client';

import { Certificate } from '@/data/credentials';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, ExternalLink, X } from 'lucide-react';
import { useState } from 'react';

interface CertificateGridProps {
  certificates: Certificate[];
}

export function CertificateGrid({ certificates }: CertificateGridProps) {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const handleCardClick = (cert: Certificate) => {
    if (cert.image) {
      setSelectedCert(cert);
    } else if (cert.credentialUrl) {
      window.open(cert.credentialUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => handleCardClick(cert)}
            className="glass-card group bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-[#0f0]/50 p-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.1)] cursor-pointer flex flex-col h-full"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-lg bg-[rgba(0,255,0,0.1)] text-[#0f0] group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              {cert.credentialUrl && !cert.image && (
                <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#0f0] transition-colors" />
              )}
            </div>
            <div className="flex-grow space-y-2">
              <h3 className="text-lg font-bold text-white group-hover:text-[#0f0] transition-colors line-clamp-2">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#0f0]/60">
                {cert.date}
              </span>
              {cert.image && (
                <span className="text-xs font-mono text-gray-500 group-hover:text-[#0f0] transition-colors">
                  [ VIEW_IMAGE ]
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal / Popup for Image */}
      <AnimatePresence>
        {selectedCert && selectedCert.image && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-24 sm:p-6 sm:pt-28 md:p-12 md:pt-32">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[85vh] flex flex-col glass-card bg-black/90 border border-[#0f0]/30 rounded-xl shadow-[0_0_40px_rgba(0,255,0,0.15)] overflow-hidden z-10"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/50">
                <div className="space-y-1">
                  <h3 className="text-[#0f0] font-mono text-sm sm:text-base font-bold">
                    {selectedCert.name}
                  </h3>
                  <p className="text-gray-400 text-xs font-mono">
                    {selectedCert.issuer}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-[#0f0] hover:bg-red-50 dark:hover:bg-[#0f0]/10 rounded-lg transition-colors shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Body */}
              <div className="relative flex-grow overflow-auto p-4 flex items-center justify-center min-h-[300px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="max-w-full max-h-[60vh] object-contain rounded border border-white/5"
                />
              </div>

              {/* Modal Footer (Verify Button) */}
              {selectedCert.credentialUrl && (
                <div className="p-4 border-t border-white/10 bg-black/50 flex justify-end">
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 bg-[#0f0]/10 hover:bg-[#0f0]/20 text-[#0f0] border border-[#0f0]/30 hover:border-[#0f0] rounded font-mono text-xs transition-all duration-300"
                  >
                    [ VERIFY_AUTHENTICITY ]
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
