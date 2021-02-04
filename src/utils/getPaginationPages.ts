import { range, take, takeRight } from 'lodash';

/* Given the current page, total items, and pageSize, derive the 3 pages to display. */

export const getPaginationPages = (
  currentPage: number,
  totalPages: number,
  pageSize: number,
  maxPages = 3,
): number[] => {
  const allPages = range(1, Math.ceil(totalPages / pageSize) + 1);
  const allNextPages = allPages.filter(p => p >= currentPage);
  const allPrevPages = allPages.filter(p => p < currentPage);

  const pages = take(allNextPages, maxPages);
  if (pages.length !== maxPages) {
    return [...takeRight(allPrevPages, maxPages - pages.length), ...pages];
  }
  return pages;
};
