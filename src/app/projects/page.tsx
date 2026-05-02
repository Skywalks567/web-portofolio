'use client';

import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const projects = [
  {
    title: 'Personal Portfolio',
    description:
      'My portfolio website. Built with Next.js, TypeScript, Tailwind, and Framer Motion.',
    tags: ['Next.js', 'TypeScript', 'React'],
    image: '/projects/Web-Portofolio.png',
    link: 'https://github.com/Skywalks567/web-portofolio',
  },
  {
    title: 'Pyfend',
    description:
      'A cli tools and library for hash detection and cracking known hash value with smart wordlist generator.',
    tags: ['Python', 'Click', 'Hash Cracking'],
    image: '/projects/Pyfend.png',
    link: '',
  },
  {
    title: 'NutriScale',
    description:
      'A website that can calculate user BMI and suggest what food they should take and directly order them.',
    tags: ['Next.js', 'TypeScript', 'React', 'Python', 'Supabase'],
    image: '/projects/NutriScale.png',
    link: 'https://github.com/Kurtz17/NutriScale',
  },
  {
    title: 'Prim Visualiaation',
    description:
      'A web-based dashboard for graph visualization of prim algorithm. Deploy with Streamlit.',
    tags: ['Python', 'pandas', 'graphviz', 'Streamlit'],
    image: '/projects/Prim-Visualization.png',
    link: 'https://github.com/Skywalks567/PrimVisualization',
  },
  {
    title: 'Color Picker',
    description:
      'A website that can extract dominant colors from an image using k-means clustering. Deploy with Streamlit.',
    tags: ['Python', 'Streamlit', 'K-Means'],
    image: '/projects/ColorPicker.png',
    link: 'https://github.com/Skywalks567/ColorPicker',
  },
  {
    title: 'Weather Prediction',
    description: 'A website that get an API from bmkg to predict weather.',
    tags: [
      'Python',
      'Streamlit',
      'Machine Learning',
      'scikit-learn',
      'pandas',
      'API',
      'Random Forest Classifier',
    ],
    image: '/projects/Weather-Prediction.png',
    link: 'https://github.com/Skywalks567/WeatherPrediction',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-transparent font-mono text-[#0f0] p-6 md:p-12 lg:p-20 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#0f0]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#0f0]/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto relative z-10 flex flex-col items-start w-full"
      >
        {/* Header: $ ls ./projects */}
        <motion.div variants={itemVariants} className="mb-16 w-full space-y-6">
          <div className="flex items-center gap-3 pt-8">
            <span className="text-xl md:text-2xl text-white font-medium">
              $
            </span>
            <h1 className="text-xl md:text-2xl font-normal">
              <span className="text-[#0f0]">ls</span> ./projects
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card group bg-white/[0.02] backdrop-blur-md border border-white/10 hover:border-[#0f0]/30 rounded-none transition-all duration-500 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-video overflow-hidden border-b border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>

              {/* Content Wrapper */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-lg font-bold text-white group-hover:text-[#0f0] transition-colors duration-300 mb-4 tracking-tight">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 min-h-[4.5rem] line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-white/5 border border-white/10 text-gray-400 text-[10px] rounded-sm group-hover:border-[#0f0]/30 group-hover:text-[#0f0] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#0f0] flex items-center gap-2 group/link uppercase tracking-widest hover:brightness-125 transition-all"
                  >
                    VIEW SOURCE
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
