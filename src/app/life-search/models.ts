import {Injectable} from '@angular/core';
import {Query, gql} from 'apollo-angular';

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

export interface Reps {
  repositories: Repository[];
}

@Injectable({
  providedIn: 'root',
})
export class Repositories extends Query<Response> {
  override document = gql`
            query GetRepositories($queryString: String!) {
             search(query: $queryString, type: REPOSITORY, first: 10) {
              pageInfo {
                endCursor
                startCursor
              }
              nodes {
                ... on Repository {
                  name
                  description
                  url
                  stargazerCount
                  latestRelease {
                    createdAt
                  }
                  owner {
                    avatarUrl
                    ... on User {
                      name
                    }
                  }
                }
              }
            }
        }
      `;
}
