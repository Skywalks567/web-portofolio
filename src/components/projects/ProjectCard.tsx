import { Project } from '@/data/projects';
import { Variants, motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  variants: Variants;
}

export function ProjectCard({ project, variants }: ProjectCardProps) {
  return (
    <motion.div
      variants={variants}
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
        <p className="text-gray-400 text-sm leading-relaxed mb-6 min-h-[4.5rem]">
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
  );
}
