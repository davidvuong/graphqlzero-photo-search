import { gql } from '@apollo/client';
import { Photo } from '../typed/Photo';

export const PAGE_LIMIT = 10;

// NOTE: These types are defined in the graphqlzero schema.
//
// Typically, you would use tools such as `graphql-codegen` to generate TS interfaces to share between
// BE and FE to avoid redefinition.

export interface PageMetadata {
  readonly totalCount: number;
}

export interface PageLimitPair {
  readonly page: number;
  readonly limit: number;
}

export interface PaginationLinks {
  readonly first: PageLimitPair;
  readonly prev: PageLimitPair;
  readonly next: PageLimitPair;
  readonly last: PageLimitPair;
}

export interface SearchQueryResult {
  readonly photos: {
    meta: PageMetadata;
    links: PaginationLinks | null;
    data: Photo[];
  };
}

export interface SearchQueryInput {
  readonly page: number;
  readonly limit: number;
  readonly query: string;
}

export const SEARCH_PHOTOS_BY_QUERY = gql`
  query SearchPhotosByQuery($query: String!, $page: Int, $limit: Int) {
    photos(options: { paginate: { page: $page, limit: $limit }, search: { q: $query } }) {
      meta {
        totalCount
      }
      links {
        first {
          page
          limit
        }
        prev {
          page
          limit
        }
        next {
          page
          limit
        }
        last {
          page
          limit
        }
      }
      data {
        id
        title
        url
        thumbnailUrl
      }
    }
  }
`;
