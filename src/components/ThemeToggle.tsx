'use client';

import { useTheme } from '@/context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      className="relative flex items-center gap-2 font-mono text-xs text-gray-500 hover:text-[#0f0] transition-colors duration-300 cursor-pointer"
    >
      {/* Toggle Switch */}
      <div
        className={`relative w-10 h-5 rounded-full border transition-all duration-300 ${
          isLight
            ? 'bg-gray-200 border-gray-400'
            : 'bg-[#0f0]/10 border-[#0f0]/30'
        }`}
      >
        {/* Thumb */}
        <div
          className={`absolute top-0.5 w-4 h-4 rounded-full transition-all duration-300 ${
            isLight
              ? 'left-5 bg-black'
              : 'left-0.5 bg-[#0f0] shadow-[0_0_6px_#0f0]'
          }`}
        />
      </div>

      {/* Label */}
      <span className="hidden md:block select-none">
        {isLight ? 'LIGHT' : 'DARK'}
      </span>
    </button>
  );
}
