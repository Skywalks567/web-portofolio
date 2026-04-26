'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'projects', path: '/projects' },
    { name: 'contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false;
    if (path !== '/' && pathname.startsWith(path)) return true;
    if (path === '/' && pathname === '/') return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-5 font-mono text-xs md:text-sm border-b border-[#0f0]/10 bg-black/80 backdrop-blur-md">
      {/* Left side: Terminal prompt */}
      <div className="flex items-center space-x-2 whitespace-nowrap">
        <span className="text-[#0f0] font-bold flex items-center gap-1.5">
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-2 h-2 rounded-full bg-[#0f0] shadow-[0_0_8px_#0f0]"
          />
          root@portfolio:~/
        </span>
        <span className="text-[#0f0]/40">
          {pathname === '/' ? 'home' : pathname.replace('/', '')}
        </span>
      </div>

      {/* Right side: Navigation links */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`group relative transition-all duration-300 py-1 ${
                active
                  ? 'text-[#0f0] cyber-glow-text'
                  : 'text-[#0f0]/30 hover:text-[#0f0]'
              }`}
            >
              ./{item.name}
              {active && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0f0]"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center">
        {navItems.map((item) => {
          const active = isActive(item.path);
          if (!active) return null;
          return (
            <span
              key={item.path}
              className="text-[#0f0] flex items-center gap-2"
            >
              <span className="animate-pulse">&gt;</span>
              ./{item.name}
            </span>
          );
        })}
      </div>
    </nav>
  );
}
