export interface ActivityRepo {
  name: string;
  commits: number;
  percentage: number;
}

export interface ActivityItem {
  id: string;
  type: 'commits' | 'repo' | 'pr' | 'pr_multiple';
  title: string;
  date?: string;
  sortDate?: string;
  repos?: ActivityRepo[];
  repoDetail?: {
    name: string;
    language: string;
    langColor: string;
  };
  prDetail?: {
    title: string;
    description: string;
    additions: string;
    deletions: string;
    commentsCount: number;
    linesChangedBlocks: number;
  };
}

export const fallbackActivities: ActivityItem[] = [
  {
    id: 'act-1',
    type: 'commits',
    title: 'Created 88 commits in 4 repositories',
    repos: [
      { name: 'Kurtz17/NutriScale', commits: 46, percentage: 85 },
      { name: 'Skywalks567/web-portofolio', commits: 19, percentage: 45 },
      { name: 'Skywalks567/vulnlabjs', commits: 17, percentage: 40 },
      { name: 'Kurtz17/ChemLab', commits: 6, percentage: 15 },
    ],
  },
  {
    id: 'act-2',
    type: 'repo',
    title: 'Created 1 repository',
    date: 'May 21',
    repoDetail: {
      name: 'Skywalks567/vulnlabjs',
      language: 'TypeScript',
      langColor: '#3178c6',
    },
  },
  {
    id: 'act-3',
    type: 'pr',
    title:
      'Created a pull request in Skywalks567/vulnlabjs that received 2 comments',
    date: 'May 22',
    prDetail: {
      title:
        'feat(idor): Complete IDOR Lab Module and Offline Technical Writeup',
      description:
        'Summary of Changes IDOR Module Separation: Separated the vulnerable target (/labs/idor/vulnerable) and the secured target (/labs/idor/fixed) envir...',
      additions: '+2,465',
      deletions: '-137',
      commentsCount: 2,
      linesChangedBlocks: 4,
    },
  },
  {
    id: 'act-4',
    type: 'pr_multiple',
    title: 'Opened 20 other pull requests in 4 repositories',
    repos: [{ name: 'Kurtz17/NutriScale', commits: 13, percentage: 100 }],
  },
];
