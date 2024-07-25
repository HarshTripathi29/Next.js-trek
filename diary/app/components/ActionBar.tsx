'use client';
import React, { useContext } from 'react';
import Link from 'next/link';
import { DataContext, DataContextType } from '../context/DataContext';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ActionBar: React.FC = () => {
  const context = useContext(DataContext) as DataContextType;

  if (!context) {
    throw new Error('DataContext must be used within a DataContextProvider');
  }

  const { setShowDemo, setShowFavourites } = context;

  const handleDemoClick = () => {
    setShowDemo((prev) => !prev);
    setShowFavourites(false);
  };

  const handleFavouritesClick = () => {
    setShowFavourites((prev) => !prev);
    setShowDemo(false);
  };

  return (
    <div className='w-[15%] h-3/6 bg-neutral-800 text-white border-none rounded-2xl m-12 p-4 px-2'>
      <div>
        <ol className='text-lg text-neutral-400 py-2'>
          <Link href='/create'>
            <li className='flex items-center p-2 cursor-pointer  hover:bg-neutral-300 hover:text-neutral-950 hover:border-none hover:rounded-lg'>
              <AddIcon className='mr-2' /> Create
            </li>
          </Link>
          <li className='flex items-center p-2 cursor-pointer hover:bg-neutral-300 hover:text-neutral-950 hover:border-none hover:rounded-lg' onClick={handleDemoClick}>
            <VisibilityIcon className='mr-2' /> Demo
          </li>
          <li className='flex items-center p-2 cursor-pointer  hover:bg-neutral-300 hover:text-neutral-950 hover:border-none hover:rounded-lg' onClick={handleFavouritesClick}>
            <FavoriteIcon className='mr-2' /> Favourites
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ActionBar;
