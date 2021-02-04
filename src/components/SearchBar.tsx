import React, { FC } from 'react';
import { DebounceInput } from 'react-debounce-input';

export interface SearchBarProps {
  readonly onChange: (q: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ onChange }) => {
  return (
    <div className="container mx-auto pt-8">
      <DebounceInput
        debounceTimeout={300}
        onChange={e => onChange(e.target.value)}
        className="w-full h-12 rounded mb-4 px-8 shadow-md focus:outline-none focus:shadow-outline"
        type="search"
        placeholder="Search for photos..."
      />
    </div>
  );
};
