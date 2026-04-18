import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full max-w-4xl px-4 flex flex-col items-start md:items-center text-left md:text-center space-y-6 md:space-y-8">
        <div className="flex flex-col items-start md:items-center w-full">
          <p className="text-green-500/80 font-mono text-sm md:text-base mb-2">
            [SYS] Initialization sequence complete...
          </p>
          <h1 className="text-5xl md:text-8xl font-bold font-mono text-green-500 tracking-tighter drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">
            WELCOME_
          </h1>
        </div>

        <div className="text-xl md:text-3xl font-mono flex items-start md:items-center w-full justify-start md:justify-center">
          <span className="text-green-600 mr-2 md:mr-3 animate-pulse">
            &gt;
          </span>
          <span className="text-green-400">Cybersecurity Enthusiast</span>
        </div>

        <div className="max-w-xl mx-auto w-full text-green-300/70 mt-4 md:mt-8 font-mono text-xs md:text-base leading-relaxed bg-green-950/20 p-4 md:p-6 border border-green-900/50 rounded-sm">
          <p className="mb-2">
            <span className="text-green-500 font-bold">root@portfolio:~$</span>{' '}
            whoami
          </p>
          <p>
            {"I'm"} <span className="text-white font-bold">Raymond</span>,
            passionate about exploring the ever-evolving world of technology,
            particularly in cybersecurity and software development. Analyzing
            vulnerabilities, developing secure solutions, and constantly
            expanding my knowledge base.
          </p>
        </div>

        <div className="mt-8 md:mt-12 flex justify-start md:justify-center gap-4 md:gap-6 flex-wrap w-full">
          <Link
            href="/cv.pdf"
            className="group relative px-6 py-2 md:px-8 md:py-3 border border-green-500 bg-transparent text-green-500 hover:bg-green-500 hover:text-black transition-all font-mono font-bold uppercase tracking-widest text-xs md:text-base overflow-hidden"
          >
            <span className="relative z-10">Download_CV</span>
            <div className="absolute inset-0 h-full w-full bg-green-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </Link>
          <Link
            href="/contact"
            className="group relative px-6 py-2 md:px-8 md:py-3 border border-green-800 bg-transparent text-green-600 hover:border-green-400 hover:text-green-400 transition-all font-mono font-bold uppercase tracking-widest text-xs md:text-base"
          >
            <span className="relative z-10">Contact_Me</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
