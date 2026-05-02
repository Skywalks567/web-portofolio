import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
      <Link
        href="https://github.com/Skywalks567"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-8 py-3 border border-green-500/30 rounded-full text-[#0f0]/80 bg-green-500/5 hover:bg-green-500/10 hover:text-[#0f0] hover:shadow-[0_0_10px_rgba(0,255,0,0.2)] transition-all duration-300 font-bold group backdrop-blur-md"
      >
        <FaGithub className="size-5 group-hover:scale-110 transition-transform" />
        <span className="tracking-wide">GitHub</span>
      </Link>

      <Link
        href="https://www.linkedin.com/in/raymond-situmorang"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-8 py-3 border border-green-500/30 rounded-full text-[#0f0]/80 bg-green-500/5 hover:bg-green-500/10 hover:text-[#0f0] hover:shadow-[0_0_10px_rgba(0,255,0,0.2)] transition-all duration-300 font-bold group backdrop-blur-md"
      >
        <FaLinkedin className="size-5 group-hover:scale-110 transition-transform" />
        <span className="tracking-wide">LinkedIn</span>
      </Link>
    </div>
  );
}
