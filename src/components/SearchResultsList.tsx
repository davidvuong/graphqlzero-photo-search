import React, { FC } from 'react';
import styled from 'styled-components';
import { Photo } from '../typed/Photo';
import { SearchListItem } from './SearchResultsItem';

const Table = styled.table.attrs({
  className: `
    min-w-full
    divide-y
    divide-gray-200
  `,
})``;
const TableHead = styled.thead.attrs({
  className: `
    bg-gray-50
  `,
})``;
const TableRow = styled.tr.attrs({})``;
const TableHeadColumn = styled.th.attrs({
  scope: 'col',
  className: `
    px-6 py-3
    text-left
    text-xs
    font-medium
    text-gray-500
    uppercase
    tracking-wider
  `,
})``;
const TableBody = styled.tbody.attrs({
  className: `
    bg-white
    divide-y
    divide-gray-200
  `,
})``;

export interface SearchResultsListProps {
  readonly photos: Photo[];
}

export const SearchResultsList: FC<SearchResultsListProps> = ({ photos }) => {
  if (photos.length === 0) {
    return (
      <p className="text-sm text-gray-900">
        No photos were found or you&apos;ve reached the end... please start again.
      </p>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeadColumn>Photo ID</TableHeadColumn>
                  <TableHeadColumn>Title</TableHeadColumn>
                  <TableHeadColumn>Thumbnail</TableHeadColumn>
                </TableRow>
              </TableHead>
              <TableBody>
                {photos.map((photo, i) => (
                  <SearchListItem key={i} photo={photo} />
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};
