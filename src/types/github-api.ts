export interface CommitRepoNode {
  repository: {
    nameWithOwner: string;
  } | null;
  contributions: {
    totalCount: number;
  };
}

export interface PRNode {
  occurredAt: string;
  pullRequest: {
    title: string;
    url: string;
    bodyText: string;
    createdAt: string;
    state: string;
    additions: number;
    deletions: number;
    comments: {
      totalCount: number;
    };
    repository: {
      nameWithOwner: string;
    } | null;
  } | null;
}

export interface RepoNode {
  occurredAt: string;
  repository: {
    name: string;
    nameWithOwner: string;
    url: string;
    primaryLanguage: {
      name: string;
      color: string;
    } | null;
  } | null;
}

export interface GitHubContributionsCollection {
  totalCommitContributions?: number;
  contributionCalendar?: {
    totalContributions: number;
  };
  commitContributionsByRepository?: CommitRepoNode[];
  repositoryContributions?: {
    nodes?: RepoNode[];
  };
  pullRequestContributions?: {
    nodes?: PRNode[];
  };
}
