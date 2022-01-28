import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Apollo, gql} from 'apollo-angular';
import {Repository} from './models';

const SEARCH_QUERY = gql`
          query GetRepositories($searchString: String!) {
            search(query: $searchString, type: REPOSITORY, first: 10) {
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
            }`


@Injectable()
export class LifeSearchService {
  constructor(
    private apollo: Apollo
  ) {
  }

  getRepository(repositoryName: string): Observable<Repository[]> {
    return this.apollo
      .watchQuery({
        query: SEARCH_QUERY,
        variables: {
          searchString: repositoryName,
        },
      })
      .valueChanges.pipe(
        map((repositories: any) => {
          return repositories.data.search.nodes;
        }),
      );
  }
}
