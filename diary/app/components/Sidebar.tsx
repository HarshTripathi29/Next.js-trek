'use client';
import React, { useContext } from 'react';

import { DataContext, DataContextType } from '../context/DataContext';

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
    <div className='w-[15%] h-3/6 bg-neutral-800 text-white border-none rounded-3xl m-12 p-4 px-2'>
      <div>
        <ol className='text-lg text-neutral-400 py-2'>
          <li className='flex items-center p-2' onClick={() => handleCategoryClick('Entertainment')}>
            Entertainment
          </li>
          <li className='flex items-center p-2' onClick={() => handleCategoryClick('Food')}>
            Food
          </li>
          <li className='flex items-center p-2' onClick={() => handleCategoryClick('Travel')}>
            Travel
          </li>
          <li className='flex items-center p-2' onClick={() => handleCategoryClick('Technology')}>
            Technology
          </li>
          <li className='flex items-center p-2' onClick={() => handleCategoryClick('Health')}>
            Health
          </li>
          <li className='flex items-center p-2' onClick={() => handleCategoryClick('Others')}>
            Others
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Sidebar;
