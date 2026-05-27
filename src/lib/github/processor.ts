import { ActivityItem } from '@/data/github';
import {
  CommitRepoNode,
  GitHubContributionsCollection,
  PRNode,
  RepoNode,
} from '@/types/github-api';

function formatDate(isoString: string): string {
  const date = new Date(isoString);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return `${months[date.getMonth()]} ${date.getDate()}`;
}

function processCommits(
  collection: GitHubContributionsCollection,
): ActivityItem[] {
  const commitRepos: CommitRepoNode[] =
    collection.commitContributionsByRepository || [];
  const totalCommits = collection.totalCommitContributions || 0;

  if (totalCommits === 0 || commitRepos.length === 0) return [];

  let maxCommits = 1;
  const reposMapped = commitRepos.map((item: CommitRepoNode) => {
    const count = item.contributions?.totalCount || 0;
    if (count > maxCommits) maxCommits = count;
    return {
      name: item.repository?.nameWithOwner || 'Unknown Repo',
      commits: count,
    };
  });

  const activeRepos = reposMapped
    .filter((r) => r.commits > 0)
    .map((r) => ({
      ...r,
      percentage: Math.max(10, Math.round((r.commits / maxCommits) * 100)),
    }))
    .sort((a, b) => b.commits - a.commits);

  if (activeRepos.length === 0) return [];

  return [
    {
      id: 'commits-dynamic',
      type: 'commits',
      title: `Created ${totalCommits} commits in ${activeRepos.length} ${activeRepos.length === 1 ? 'repository' : 'repositories'}`,
      repos: activeRepos,
      sortDate: new Date().toISOString(),
    },
  ];
}

function processRepositories(
  collection: GitHubContributionsCollection,
): ActivityItem[] {
  const createdRepos: RepoNode[] =
    collection.repositoryContributions?.nodes || [];
  return createdRepos.flatMap((node: RepoNode) => {
    const repo = node.repository;
    if (!repo) return [];
    return [
      {
        id: `repo-${repo.nameWithOwner}`,
        type: 'repo' as const,
        title: `Created 1 repository`,
        date: formatDate(node.occurredAt),
        sortDate: node.occurredAt,
        repoDetail: {
          name: repo.nameWithOwner,
          language: repo.primaryLanguage?.name || 'Markdown',
          langColor: repo.primaryLanguage?.color || '#8b8b8b',
        },
      },
    ];
  });
}

function processPullRequests(
  collection: GitHubContributionsCollection,
): ActivityItem[] {
  const createdPRs: PRNode[] = collection.pullRequestContributions?.nodes || [];
  return createdPRs.flatMap((node: PRNode) => {
    const pr = node.pullRequest;
    if (!pr) return [];

    let desc = pr.bodyText || '';
    if (desc.length > 180) desc = desc.substring(0, 180) + '...';

    const totalChanges = pr.additions + pr.deletions;
    const blocks =
      totalChanges > 1000
        ? 5
        : totalChanges > 500
          ? 4
          : totalChanges > 100
            ? 3
            : totalChanges > 10
              ? 2
              : 1;

    return [
      {
        id: `pr-${pr.url}`,
        type: 'pr' as const,
        title: `Created a pull request in ${pr.repository?.nameWithOwner} that received ${pr.comments?.totalCount || 0} ${pr.comments?.totalCount === 1 ? 'comment' : 'comments'}`,
        date: formatDate(node.occurredAt),
        sortDate: node.occurredAt,
        prDetail: {
          title: pr.title,
          description: desc || 'No description provided.',
          additions: `+${pr.additions.toLocaleString()}`,
          deletions: `-${pr.deletions.toLocaleString()}`,
          commentsCount: pr.comments?.totalCount || 0,
          linesChangedBlocks: blocks,
        },
      },
    ];
  });
}

/**
 * Transforms raw GitHub API data into a sorted list of ActivityItems.
 */
export function processGitHubData(
  collection: GitHubContributionsCollection,
): ActivityItem[] {
  const activities: ActivityItem[] = [
    ...processCommits(collection),
    ...processRepositories(collection),
    ...processPullRequests(collection),
  ];

  return activities.sort((a, b) => {
    const dateA = a.sortDate ? new Date(a.sortDate).getTime() : 0;
    const dateB = b.sortDate ? new Date(b.sortDate).getTime() : 0;
    return dateB - dateA;
  });
}
