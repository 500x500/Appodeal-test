export interface Repository {
  name: string;
  description: string;
  url: string;
  stargazerCount: number;
  latestRelease: {
    createdAt: string,
  };
  owner: {
    avatarUrl: string;
    name: string;
  };
}
