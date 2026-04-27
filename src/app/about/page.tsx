'use client';

import { Variants, motion } from 'framer-motion';
import Image from 'next/image';

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
      {/* Radial Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#0f0]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#0f0]/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto relative z-10 flex flex-col items-start"
      >
        {/* Header: $ cat about.me */}
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
          {/* Decorative Line */}
          <div className="w-full h-[1px] bg-white/10" />
        </motion.div>

        {/* CENTERED PROFILE SECTION */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center mb-16 w-full"
        >
          <div className="relative group p-4">
            {/* HUD Spinner (Always Visible) */}
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
                src="/profile.png"
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
            <span className="text-[#0f0]">[STATUS: ACTIVE]</span>
            <span className="text-white">[ROLE: DEV & SEC]</span>
          </div>
        </motion.div>

        {/* STACKED CONTENT SECTIONS */}
        <div className="w-full space-y-12">
          {/* 01. Biographical Summary */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold border-l-4 border-[#0f0] pl-3 uppercase tracking-wider">
              01. BIOGRAPHICAL_SUMMARY
            </h2>
            <div className="glass-card group bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-[#0f0]/50 p-8 rounded-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,0,0.1)]">
              <p className="leading-relaxed text-sm md:text-base lg:text-lg text-gray-400 group-hover:text-gray-300 transition-colors">
                I am a technology enthusiast with a deep focus on{' '}
                <span className="text-[#0f0] font-bold">Cybersecurity</span> and{' '}
                <span className="text-[#0f0] font-bold">
                  Software Development
                </span>
                . My journey started with a curiosity about how systems work and
                how they can be secured against evolving threats.
                <br />
                <br />
                Currently, I spend my time building{' '}
                <span className="text-white">robust web applications</span> and
                exploring the intricacies of network security, ethical hacking,
                and system architecture.
              </p>
            </div>
          </motion.section>

          {/* 02. Technical Arsenal */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold border-l-4 border-[#0f0] pl-3 uppercase tracking-wider">
              02. TECHNICAL_ARSENAL
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Development',
                  items: ['Next.js / React', 'TypeScript', 'Node.js', 'Python'],
                },
                {
                  title: 'Security',
                  items: [
                    'Pentesting',
                    'Network Sec',
                    'Linux / Kali',
                    'CTF / Hacking',
                  ],
                },
                {
                  title: 'Tools',
                  items: [
                    'Docker / Git',
                    'Nmap / Burp',
                    'Wireshark',
                    'Metasploit',
                  ],
                },
              ].map((cat, idx) => (
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

          {/* 03. Recent Chronicles */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold border-l-4 border-[#0f0] pl-3 uppercase tracking-wider">
              03. RECENT_CHRONICLES
            </h2>
            <div className="glass-card group bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-[#0f0]/50 p-8 rounded-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,0,0.1)] space-y-10">
              <div className="relative pl-8 border-l border-white/10 group-hover:border-[#0f0]/30 transition-colors">
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-[#0f0] shadow-[0_0_8px_#0f0]" />
                <h4 className="font-bold text-lg text-white">
                  Fullstack Developer & Security Student
                </h4>
                <p className="text-[10px] text-[#0f0]/50 mb-3">PRESENT</p>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  Focusing on building secure-by-design applications and
                  contributing to open-source security tools.
                </p>
              </div>
              <div className="relative pl-8 border-l border-white/10 group-hover:border-[#0f0]/30 transition-colors">
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-[#0f0]/40" />
                <h4 className="font-bold text-lg text-[#0f0]/70 group-hover:text-[#0f0]/90">
                  Exploration Phase
                </h4>
                <p className="text-[10px] text-[#0f0]/40 mb-3">2023 - 2024</p>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                  Deep dived into web frameworks and fundamental networking
                  concepts. Started participating in bug bounty programs.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}
