export interface LanguageDistribution {
  name: string;
  percentage: number;
  color: string;
}

export interface ContributionHighlight {
  label: string;
  value: string | number;
  subtext: string;
  icon: 'GitCommit' | 'GitBranch' | 'Activity' | 'Calendar';
}

export interface GitHubActivityData {
  username: string;
  profileUrl: string;
  totalContributionsLastYear: number;
  publicReposCount: number;
  activeStatus: string;
  topLanguages: LanguageDistribution[];
  highlights: ContributionHighlight[];
}

export const GITHUB_ACTIVITY: GitHubActivityData = {
  username: 'amy9273',
  profileUrl: 'https://github.com/amy9273',
  totalContributionsLastYear: 1010,
  publicReposCount: 16,
  activeStatus: 'Consistently Active Builder',
  topLanguages: [
    { name: 'Java (Spring Boot)', percentage: 40, color: '#7041A6' },
    { name: 'TypeScript / Node.js', percentage: 32, color: '#A77BEB' },
    { name: 'Python (FSL & Analytics)', percentage: 16, color: '#D8C5FF' },
    { name: 'SQL & Database DDL', percentage: 12, color: '#9D8AAE' }
  ],
  highlights: [
    {
      label: 'Annual Contributions',
      value: '1,010+',
      subtext: 'Verified commits, pull requests, and code reviews in the last year',
      icon: 'GitCommit'
    },
    {
      label: 'Public Engineering Repos',
      value: '16',
      subtext: 'Backend engines, microservice proxies, full-stack & mobile apps',
      icon: 'GitBranch'
    },
    {
      label: 'Build Consistency',
      value: 'Daily Active',
      subtext: 'Continuous shipping, test automation, and iterative systems design',
      icon: 'Activity'
    }
  ]
};
