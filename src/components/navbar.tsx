'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'experience', path: '/experience' },
    { name: 'projects', path: '/projects' },
    { name: 'achievements', path: '/achievements' },
    { name: 'contact', path: '/contact' },
  ];

  // Helper to determine active state
  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false;
    if (path !== '/' && pathname.startsWith(path)) return true;
    if (path === '/' && pathname === '/') return true;
    return false;
  };

  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-8 py-6 font-mono text-xs md:text-sm border-b border-green-900/30">
      {/* Left side: Terminal prompt */}
      <div className="flex items-center space-x-2 whitespace-nowrap">
        <span className="text-green-500 font-bold">root@portfolio:~/</span>
        <span className="text-gray-400">
          {pathname === '/' ? 'home' : pathname.replace('/', '')}
        </span>
      </div>

      {/* Right side: Navigation links */}
      <div className="hidden md:flex items-center space-x-6 overflow-x-auto">
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`transition-colors hover:text-green-400 relative pb-1 ${
                active ? 'text-green-500' : 'text-gray-500'
              }`}
            >
              ./{item.name}
              {active && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500"></span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Mobile Navigation Dropdown (Minimal approach) */}
      <div className="md:hidden flex items-center space-x-4 overflow-x-auto max-w-[50%] scrollbar-hide">
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`whitespace-nowrap transition-colors hover:text-green-400 relative pb-1 ${
                active ? 'text-green-500' : 'text-gray-500'
              }`}
            >
              ./{item.name}
              {active && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500"></span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
