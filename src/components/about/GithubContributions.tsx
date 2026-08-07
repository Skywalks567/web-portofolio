'use client';

import { useTheme } from '@/context/ThemeContext';
import { ActivityItem } from '@/data/github';
import { Variants, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

import { ActivityTimeline } from './ActivityTimeline';

interface GithubContributionsProps {
  variants: Variants;
}

export function GithubContributions({ variants }: GithubContributionsProps) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [mounted, setMounted] = useState(false);
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [totalContributions, setTotalContributions] = useState<number | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    async function fetchActivities() {
      try {
        const res = await fetch('/api/github');
        if (!res.ok) {
          throw new Error('API response was not ok');
        }
        const data = await res.json();
        setTotalContributions(data.totalContributions || null);
        if (data.activities && data.activities.length > 0) {
          setActivities(data.activities);
          setHasError(false);
        } else {
          setActivities([]);
          setHasError(false);
        }
      } catch (error) {
        console.warn('Failed to fetch real-time GitHub activity:', error);
        setActivities([]);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchActivities();
  }, []);

  const customTheme = {
    dark: [
      'rgba(255, 255, 255, 0.05)',
      'rgba(0, 255, 0, 0.2)',
      'rgba(0, 255, 0, 0.45)',
      'rgba(0, 255, 0, 0.7)',
      'rgba(0, 255, 0, 0.95)',
    ],
    light: [
      'rgba(0, 0, 0, 0.05)',
      'rgba(0, 82, 255, 0.3)',
      'rgba(0, 82, 255, 0.55)',
      'rgba(0, 82, 255, 0.8)',
      'rgba(0, 82, 255, 1.0)',
    ],
  };

  return (
    <motion.section variants={variants} className="space-y-8 w-full">
      {/* 03. GITHUB_CONTRIBUTIONS Heading */}
      <div className="space-y-2">
        <h2 className="text-xl font-bold border-l-4 border-[#0f0] pl-3 uppercase tracking-wider">
          03. GITHUB_CONTRIBUTIONS
        </h2>
      </div>

      {/* Main Glassmorphism Graph Card */}
      <div className="glass-card group bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-[#0f0]/30 p-6 md:p-8 rounded-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,0,0.05)] flex flex-col items-center justify-center">
        <div className="w-full overflow-hidden flex justify-center py-2">
          {mounted ? (
            <div className="w-full overflow-x-auto custom-scrollbar flex justify-center">
              <div className="min-w-[750px] md:min-w-0 md:w-full flex justify-center text-white scale-[0.95] sm:scale-100 origin-center transition-all duration-300">
                <GitHubCalendar
                  username="Skywalks567"
                  colorScheme={isLight ? 'light' : 'dark'}
                  theme={customTheme}
                  labels={{
                    totalCount: '{{count}} contributions in the last year',
                  }}
                  fontSize={12}
                  blockSize={12}
                  blockMargin={4}
                />
              </div>
            </div>
          ) : (
            <div className="h-[120px] flex items-center justify-center text-[#0f0]/40 font-mono text-sm animate-pulse">
              LOADING_GITHUB_CALENDAR...
            </div>
          )}
        </div>
      </div>

      {/* Contribution Activity Timeline Component */}
      <ActivityTimeline
        activities={activities}
        loading={loading}
        hasError={hasError}
        mounted={mounted}
      />
    </motion.section>
  );
}
