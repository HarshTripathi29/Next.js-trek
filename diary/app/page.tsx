'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import { DataContext, DataContextType } from './context/DataContext';
import DataCard from './components/DataCard';

const Home: React.FC = () => {
  const context = useContext<DataContextType | undefined>(DataContext);

  if (!context) {
    throw new Error('DataContext must be used within a DataContextProvider');
  }

  const { data } = context;

  return (
    <main className="flex w-[100%] h-screen flex-col text-white items-center justify-between px-4 py-12 bg-neutral-900">
      <div className='flex flex-wrap'>
        {data.map((item, index) => (
          <div key={index}>
            <DataCard title={item.title} desp={item.desp} category={item.category}/>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
