'use client';

import { ActivityItem } from '@/data/github';
import { useState } from 'react';

import { ActivityItemCard } from './ActivityItemCard';

interface ActivityTimelineProps {
  activities: ActivityItem[];
  loading: boolean;
  hasError: boolean;
  mounted: boolean;
}

export function ActivityTimeline({
  activities,
  loading,
  hasError,
  mounted,
}: ActivityTimelineProps) {
  const [expanded, setExpanded] = useState(false);

  // Requirement: Only show the top 3 by default, expand when clicking the button.
  const visibleActivities = expanded ? activities : activities.slice(0, 3);

  // Dynamic month extraction from the latest activity
  const getLatestActivityMonth = () => {
    if (activities.length > 0 && activities[0].sortDate) {
      const date = new Date(activities[0].sortDate);
      return {
        month: date.toLocaleString('en-US', { month: 'short' }),
        year: date.getFullYear(),
      };
    }
    const now = new Date();
    return {
      month: now.toLocaleString('en-US', { month: 'short' }),
      year: now.getFullYear(),
    };
  };

  const dateObj = getLatestActivityMonth();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#fff] bg-[#0f0]/10 px-2 py-1 rounded font-mono uppercase tracking-wider">
            Logs
          </span>
          <h3 className="text-lg font-bold uppercase tracking-wider font-mono text-white">
            Contribution Activity
          </h3>
        </div>
        {mounted && (
          <span className="text-[10px] text-[#0f0]/40 font-mono">
            {loading
              ? 'SYNCING_WITH_GITHUB...'
              : hasError
                ? 'MODE: SYNC_FAILED'
                : 'MODE: REAL_TIME_SYNCED'}
          </span>
        )}
      </div>

      {/* Two-column layout: left gutter (line) + right content (badge + items) */}
      <div className="flex w-full font-mono min-h-[150px]">
        {/* LEFT GUTTER */}
        <div className="relative w-8 shrink-0">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-grow space-y-8">
          {/* Month badge */}
          <div className="mb-4 relative -top-1 -ml-8">
            <span className="text-xs text-[#0f0] bg-black px-3 py-1 rounded border border-[#0f0]/30 shadow-[0_0_8px_rgba(0,0,0,0,0)] font-mono whitespace-nowrap inline-block">
              {dateObj.month} {dateObj.year}
            </span>
          </div>

          {loading ? (
            <div className="space-y-6 py-4 animate-pulse w-full">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 bg-white/5 rounded w-2/3 border border-white/5" />
                  <div className="h-3 bg-white/5 rounded w-1/2 border border-white/5" />
                </div>
              ))}
            </div>
          ) : activities.length === 0 ? (
            <div className="py-8 pl-4 flex items-center gap-3">
              <span
                className={`w-2 h-2 rounded-full ${hasError ? 'bg-red-500' : 'bg-gray-500'} animate-pulse`}
              />
              <p
                className={`text-sm font-mono ${hasError ? 'text-red-400' : 'text-gray-400'}`}
              >
                {hasError
                  ? '[ERROR]: Failed to sync with GitHub API.'
                  : '[SYSTEM_MSG]: Raymond has no activity yet for this period.'}
              </p>
            </div>
          ) : (
            visibleActivities.map((act) => (
              <ActivityItemCard key={act.id} act={act} />
            ))
          )}

          {/* Dynamic button to show more/less activity */}
          {!loading && activities.length > 3 && (
            <div className="w-full flex justify-center pt-2">
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-4 px-4 py-2 border border-[#0f0]/30 hover:border-[#0f0] text-xs font-mono text-[#0f0] hover:text-white bg-transparent hover:bg-[#0f0]/10 rounded transition-all duration-300 shadow-[0_0_10px_rgba(0,255,0,0.05)] hover:shadow-[0_0_15px_rgba(0,255,0,0.2)] cursor-pointer"
              >
                {expanded ? '[SHOW LESS ACTIVITY]' : '[SHOW MORE ACTIVITY]'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
