'use client';

import { ActivityItem } from '@/data/github';
import {
  FolderGit,
  GitCommit,
  GitPullRequest,
  MessageSquare,
} from 'lucide-react';

interface ActivityItemCardProps {
  act: ActivityItem;
}

export function ActivityItemCard({ act }: ActivityItemCardProps) {
  return (
    <div className="relative group/item">
      {/* Timeline Icon Badge */}
      <div className="absolute left-[-30px] top-0.5 w-7 h-7 rounded-full bg-black border border-white/10 group-hover/item:border-[#0f0]/50 flex items-center justify-center transition-colors shadow-md z-10">
        {act.type === 'commits' && (
          <GitCommit className="w-4 h-4 text-[#0f0]" />
        )}
        {act.type === 'repo' && <FolderGit className="w-4 h-4 text-[#0f0]" />}
        {act.type === 'pr' && (
          <GitPullRequest className="w-4 h-4 text-[#0f0]" />
        )}
        {act.type === 'pr_multiple' && (
          <GitPullRequest className="w-4 h-4 text-[#0f0]" />
        )}
      </div>

      <div className="space-y-4">
        {/* Title & Date */}
        <div className="flex flex-wrap items-center justify-between gap-2 pl-2">
          <h4 className="text-sm md:text-base font-bold text-white tracking-wide group-hover/item:text-[#0f0] transition-colors leading-relaxed">
            {act.title}
          </h4>
          {act.date && (
            <span className="text-xs text-gray-500 font-mono">{act.date}</span>
          )}
        </div>

        {/* Render Commits Detail */}
        {act.type === 'commits' && act.repos && (
          <div className="space-y-3 pl-2 max-w-xl">
            {act.repos.map((repo, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center gap-2 justify-between text-xs sm:text-sm"
              >
                <span className="text-gray-400 font-mono group-hover/item:text-gray-300 flex items-center gap-1.5 break-all">
                  <span className="w-1.5 h-1.5 bg-[#0f0] rounded-full inline-block animate-ping" />
                  {repo.name}
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <span className="text-[#0f0]/80 min-w-[70px] text-right font-mono">
                    {repo.commits} commits
                  </span>
                  <div className="w-24 sm:w-32 bg-white/5 h-2.5 rounded-full overflow-hidden border border-white/10 p-[1px]">
                    <div
                      className="bg-[#0f0] h-full rounded-full transition-all duration-1000 shadow-[0_0_8px_#0f0]"
                      style={{ width: `${repo.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Render Repository Detail */}
        {act.type === 'repo' && act.repoDetail && (
          <div className="pl-2 flex items-center gap-4 text-xs sm:text-sm">
            <span className="text-gray-400 font-mono flex items-center gap-1">
              <FolderGit className="w-3.5 h-3.5 text-gray-500" />
              {act.repoDetail.name}
            </span>
            <div className="flex items-center gap-1.5">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: act.repoDetail.langColor }}
              />
              <span className="text-gray-500 text-xs">
                {act.repoDetail.language}
              </span>
            </div>
          </div>
        )}

        {/* Render PR Detail Card */}
        {act.type === 'pr' && act.prDetail && (
          <div className="pl-2">
            <div className="border border-white/10 hover:border-[#0f0]/30 bg-white/[0.02] hover:bg-[#0f0]/[0.01] p-4 rounded-xl space-y-3 transition-all duration-300 max-w-3xl">
              <div className="flex items-start gap-2.5">
                <GitPullRequest className="w-4 h-4 text-[#0f0] mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <h5 className="text-xs sm:text-sm font-bold text-white hover:text-[#0f0] transition-colors leading-relaxed font-mono">
                    {act.prDetail.title}
                  </h5>
                  <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed font-mono">
                    {act.prDetail.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/5 text-[11px] sm:text-xs font-mono">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-500 font-semibold">
                    {act.prDetail.additions}
                  </span>
                  <span className="text-rose-500 font-semibold">
                    {act.prDetail.deletions}
                  </span>

                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`w-2.5 h-2.5 rounded-sm ${
                          i < act.prDetail!.linesChangedBlocks
                            ? 'bg-emerald-500 shadow-[0_0_4px_rgba(16,185,129,0.5)]'
                            : 'bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-500">lines changed</span>
                </div>

                <div className="flex items-center gap-1 text-gray-400">
                  <MessageSquare className="w-3.5 h-3.5 text-gray-500" />
                  <span>{act.prDetail.commentsCount} comments</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
