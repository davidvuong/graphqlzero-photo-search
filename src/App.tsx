import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import Modal from 'react-modal';
import { SearchBar } from './components/SearchBar';
import { SearchResultsList } from './components/SearchResultsList';
import { SearchPagination } from './components/SearchPagination';
import { PAGE_LIMIT, SearchQueryInput, SearchQueryResult, SEARCH_PHOTOS_BY_QUERY } from './gql/SearchPhotosByQuery';
import { Photo } from './typed/Photo';

const AppContainer = styled.div.attrs({
  className: `
    h-screen
    overflow-scroll
    bg-gray-100
    p-3
  `,
})``;
const Container = styled.div.attrs({
  className: `
    container
    mx-auto
  `,
})``;
const TitleText = styled.h1.attrs({
  className: `
    text-2xl
    mb-3
    text-center
  `,
})``;
const StatusText = styled.p.attrs({
  className: `
    text-gray-800
    text-center
    text-sm
  `,
})``;

const App = (): JSX.Element => {
  // @see: https://github.com/reactjs/react-modal/issues/632
  if (process.env.NODE_ENV !== 'test') {
    Modal.setAppElement('#root');
  }

  const [searchQuery, setSearchQuery] = useState('');
  const [searchQueryPage, setSearchQueryPage] = useState(1);

  const { loading, error, data: response } = useQuery<SearchQueryResult, SearchQueryInput>(SEARCH_PHOTOS_BY_QUERY, {
    variables: {
      page: searchQueryPage,
      limit: PAGE_LIMIT,
      query: searchQuery,
    },
  });

  const onSearch = (q: string) => {
    setSearchQueryPage(1);
    setSearchQuery(q);
  };

  return (
    <AppContainer>
      <Container>
        <TitleText>GraphQLZero Photo Search</TitleText>
        <SearchBar onChange={onSearch} />
        {loading && <StatusText>Searching... please wait</StatusText>}
        {error && <StatusText>{`An error occurred searching for "${searchQuery}"`}</StatusText>}
        {!loading && !error && response && (
          <>
            <SearchPagination
              links={response.photos.links}
              meta={response.photos.meta}
              currentPage={searchQueryPage}
              onPageChange={setSearchQueryPage}
            />
            <SearchResultsList photos={response.photos.data ?? ([] as Photo[])} />
          </>
        )}
      </Container>
    </AppContainer>
  );
};

export default App;
