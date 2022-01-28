import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Repositories, Reps} from './models';
import {Apollo, gql} from 'apollo-angular';

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
    private repositories: Repositories,
    private apollo: Apollo
  ) {
  }

  getRepository(repositoryName: any): Observable<any> {
    return this.apollo
      .watchQuery({
        query: SEARCH_QUERY,
        variables: {
          searchString: repositoryName,
        },
      })
      .valueChanges.pipe();
    // return this.repositories.watch({
    //   search: repositoryName,
    // }).valueChanges.pipe();
  }
}
