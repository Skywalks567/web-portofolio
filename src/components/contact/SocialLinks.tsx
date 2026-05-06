import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 font-mono">
      <Link
        href="https://github.com/Skywalks567"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-6 py-3 border border-[#0f0]/30 rounded-sm text-[#0f0]/80 bg-[#0f0]/5 hover:bg-[#0f0] hover:text-black hover:shadow-[0_0_15px_rgba(0,255,0,0.2)] transition-all duration-300 font-bold group"
      >
        <FaGithub className="size-5 group-hover:scale-110 transition-transform" />
        <span className="text-xs uppercase tracking-[0.2em]">GitHub</span>
      </Link>

      <Link
        href="https://www.linkedin.com/in/raymond-situmorang"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-6 py-3 border border-gray-600 rounded-sm text-gray-400 hover:border-white hover:text-white transition-all duration-300 font-bold group"
      >
        <FaLinkedin className="size-5 group-hover:scale-110 transition-transform" />
        <span className="text-xs uppercase tracking-[0.2em]">LinkedIn</span>
      </Link>
    </div>
  );
}
