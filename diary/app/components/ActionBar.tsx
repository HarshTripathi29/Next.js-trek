'use client';
import React, { useContext } from 'react';
import Link from 'next/link';
import { DataContext, DataContextType } from '../context/DataContext';

const ActionBar: React.FC = () => {
  const context = useContext(DataContext) as DataContextType;

  if (!context) {
    throw new Error('DataContext must be used within a DataContextProvider');
  }

  const { setShowDemo } = context;

  const handleDemoClick = () => {
    setShowDemo((prev) => !prev);
  };

  return (
    <div className='w-[15%] h-3/6 bg-neutral-800 text-white border-none rounded-2xl m-12 p-4 px-2'>
      <div>
        <ol className='text-lg text-neutral-400 py-2'>
          <Link href='/create'><li className='p-2'>Create</li></Link>
          <li className='p-2'><button onClick={handleDemoClick}>Demo</button></li>
        </ol>
      </div>
    </div>
  );
};

export default ActionBar;
