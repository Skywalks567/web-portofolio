'use client';

import { useTheme } from '@/context/ThemeContext';
import React, { useEffect, useRef } from 'react';

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"\'#&_(),.;:?!\\|{}<>[]^~';
    const charArray = characters.split('');
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -height;
    }

    const isLight = theme === 'light';

    ctx.fillStyle = isLight ? '#F8F9FA' : '#000000';
    ctx.fillRect(0, 0, width, height);

    const draw = () => {
      ctx.fillStyle = isLight ? 'rgba(248,249,250,0.18)' : 'rgba(0,0,0,0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = isLight ? '#0052FF' : '#0f0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      ctx.fillStyle = isLight ? '#ffffff' : '#000000';
      ctx.fillRect(0, 0, width, height);

      const newColumns = Math.floor(width / fontSize);
      if (newColumns > drops.length) {
        for (let i = drops.length; i < newColumns; i++) {
          drops[i] = 1;
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`matrix-canvas fixed inset-0 z-[-1] pointer-events-none ${
        theme === 'light' ? 'opacity-[0.25]' : 'opacity-[0.25]'
      }`}
      style={{ filter: 'blur(0.5px)' }}
    />
  );
};

export default MatrixBackground;
