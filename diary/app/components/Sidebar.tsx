'use client';
import React, { useContext } from 'react';
import { DataContext, DataContextType } from '../context/DataContext';
import MovieIcon from '@mui/icons-material/Movie';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FlightIcon from '@mui/icons-material/Flight';
import ComputerIcon from '@mui/icons-material/Computer';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Sidebar: React.FC = () => {
  const context = useContext<DataContextType | undefined>(DataContext);

  if (!context) {
    throw new Error('DataContext must be used within a DataContextProvider');
  }

  const { setCategoryFilter, setShowDemo, showDemo } = context;

  const handleCategoryClick = (category: string) => {
    setCategoryFilter(category);
    setShowDemo(showDemo); // Ensure the demo data state is preserved
  };

  return (
    <div className='w-[15%] h-3/6 bg-neutral-800 text-white border-none rounded-3xl ml-12 mt-28 p-4 px-2'>
      <div>
        <ol className='text-lg text-neutral-400 py-2'>
          <li className='flex items-center p-2 cursor-pointer  hover:bg-neutral-300 hover:text-neutral-950 hover:border-none hover:rounded-lg' onClick={() => handleCategoryClick('Entertainment')}>
            <MovieIcon className='mr-2' /> Entertainment
          </li>
          <li className='flex items-center p-2 cursor-pointer  hover:bg-neutral-300 hover:text-neutral-950 hover:border-none hover:rounded-lg' onClick={() => handleCategoryClick('Food')}>
            <FastfoodIcon className='mr-2' /> Food
          </li>
          <li className='flex items-center p-2 cursor-pointer  hover:bg-neutral-300 hover:text-neutral-950 hover:border-none hover:rounded-lg' onClick={() => handleCategoryClick('Travel')}>
            <FlightIcon className='mr-2' /> Travel
          </li>
          <li className='flex items-center p-2 cursor-pointer  hover:bg-neutral-300 hover:text-neutral-950 hover:border-none hover:rounded-lg' onClick={() => handleCategoryClick('Technology')}>
            <ComputerIcon className='mr-2' /> Technology
          </li>
          <li className='flex items-center p-2 cursor-pointer  hover:bg-neutral-300 hover:text-neutral-950 hover:border-none hover:rounded-lg' onClick={() => handleCategoryClick('Health')}>
            <FitnessCenterIcon className='mr-2' /> Health
          </li>
          <li className='flex items-center p-2 cursor-pointer  hover:bg-neutral-300 hover:text-neutral-950 hover:border-none hover:rounded-lg' onClick={() => handleCategoryClick('Others')}>
            <MoreHorizIcon className='mr-2' /> Others
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Sidebar;
