'use client';

import { ActivityItem, fallbackActivities } from '@/data/github';
import { Variants, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

import { ActivityTimeline } from './ActivityTimeline';

interface GithubContributionsProps {
  variants: Variants;
}

export function GithubContributions({ variants }: GithubContributionsProps) {
  const [mounted, setMounted] = useState(false);
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [totalContributions, setTotalContributions] = useState<number | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [isUsingFallback, setIsUsingFallback] = useState(false);

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
          setIsUsingFallback(false);
        } else {
          setActivities(fallbackActivities);
          setIsUsingFallback(true);
        }
      } catch (error) {
        console.warn(
          'Failed to fetch real-time GitHub activity, falling back to static logs:',
          error,
        );
        setActivities(fallbackActivities);
        setIsUsingFallback(true);
      } finally {
        setLoading(false);
      }
    }

    fetchActivities();
  }, []);

  const cyberpunkTheme = {
    dark: [
      'rgba(255, 255, 255, 0.05)',
      'rgba(0, 255, 0, 0.2)',
      'rgba(0, 255, 0, 0.45)',
      'rgba(0, 255, 0, 0.7)',
      'rgba(0, 255, 0, 0.95)',
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
                  colorScheme="dark"
                  theme={cyberpunkTheme}
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
        isUsingFallback={isUsingFallback}
        mounted={mounted}
      />
    </motion.section>
  );
}
