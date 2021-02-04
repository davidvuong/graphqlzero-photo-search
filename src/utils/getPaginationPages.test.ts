import { genNumber } from '../Gen';
import { PAGE_LIMIT } from '../gql/SearchPhotosByQuery';
import { getPaginationPages } from './getPaginationPages';

describe('getPaginationPages', () => {
  beforeEach(() => expect.hasAssertions());

  test('should return the next available set of pages when currentPage is first', () => {
    const currentPage = 1;
    const totalPages = genNumber(100, 200);
    const pageSize = PAGE_LIMIT;

    expect(getPaginationPages(currentPage, totalPages, pageSize)).toEqual([1, 2, 3]);
  });

  test('should return non-negative page numbers', () => {
    const currentPage = genNumber(10, 40);
    const totalPages = genNumber(100, 200);
    const pageSize = PAGE_LIMIT;

    const pages = getPaginationPages(currentPage, totalPages, pageSize);
    expect(pages.filter(p => p <= 0)).toHaveLength(0);
  });

  test('should return past pages when the currentPage is at the end', () => {
    const totalPages = genNumber(100, 200);
    const pageSize = PAGE_LIMIT;
    const currentPage = Math.ceil(totalPages / PAGE_LIMIT);
    const maxPages = 3;

    const pages = getPaginationPages(currentPage, totalPages, pageSize, maxPages);
    expect(pages.filter(p => p <= currentPage)).toHaveLength(maxPages);
  });
});
