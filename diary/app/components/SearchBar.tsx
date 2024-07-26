// components/SearchBar.jsx
'use client';
import React, { useContext } from 'react';
import { DataContext, DataContextType } from '../context/DataContext';

const SearchBar: React.FC = () => {
  const context = useContext<DataContextType | undefined>(DataContext);

  if (!context) {
    throw new Error('DataContext must be used within a DataContextProvider');
  }

  const { searchQuery, setSearchQuery } = context;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className='w-6/6 p-2 px-4'>
      <input
        type='text'
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder='Search...'
        className='w-full p-2 px-4 border border-gray-300 bg-neutral-800 text-neutral-300 rounded-2xl'
      />
    </div>
  );
};

export default SearchBar;
