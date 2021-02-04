import React, { FC } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { PageMetadata, PaginationLinks, PAGE_LIMIT } from '../gql/SearchPhotosByQuery';
import { getPaginationPages } from '../utils/getPaginationPages';

const PageLinkList = styled.div.attrs({
  className: `
    flex
    justify-end
    rounded
    my-2
  `,
})``;

export interface PageLinkProps {
  readonly focus?: boolean;
}

const PageLink = styled.button.attrs<PageLinkProps>(({ focus }: PageLinkProps) => ({
  className: classNames(
    { 'font-semibold': focus },
    { 'bg-gray-100': focus },
    `
      text-sm
      py-2
      px-3
      border
      border-gray-200
      text-gray-800
      bg-gray-50
      hover:bg-gray-100
    `,
  ),
}))<PageLinkProps>``;

export interface SearchPaginationProps {
  readonly links: PaginationLinks | null;
  readonly meta: PageMetadata;
  readonly currentPage: number;
  readonly onPageChange: (pageNumber: number) => void;
}

export const SearchPagination: FC<SearchPaginationProps> = ({ links, meta, currentPage, onPageChange }) => {
  const shouldShowPrev = (): boolean => currentPage > 1 || !!(links && links.prev);
  const shouldShowNext = (): boolean => currentPage !== Math.ceil(meta.totalCount / PAGE_LIMIT);
  const availablePages = getPaginationPages(currentPage, meta.totalCount, PAGE_LIMIT);

  return (
    <PageLinkList>
      {shouldShowPrev() && <PageLink onClick={() => onPageChange(currentPage - 1)}>&#171;</PageLink>}
      {availablePages.map(pageNumber => (
        <PageLink focus={currentPage === pageNumber} key={pageNumber} onClick={() => onPageChange(pageNumber)}>
          {pageNumber}
        </PageLink>
      ))}
      {shouldShowNext() && <PageLink onClick={() => onPageChange(currentPage + 1)}>&#187;</PageLink>}
    </PageLinkList>
  );
};
