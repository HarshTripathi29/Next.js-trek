'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import { DataContext, DataContextType } from './context/DataContext';

const Home: React.FC = () => {
  const context = useContext<DataContextType | undefined>(DataContext);

  if (!context) {
    throw new Error('DataContext must be used within a DataContextProvider');
  }

  const { data } = context;

  return (
    <main className="flex w-[100%] h-screen flex-col text-white items-center justify-between p-24 bg-neutral-900">
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <div>{item.title}</div>
            <div>{item.desp}</div>
            <div>{item.category}</div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
