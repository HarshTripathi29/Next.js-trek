'use client';
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { DataContext, DataContextType } from './context/DataContext';
import DataCard from './components/DataCard';
import Header from './components/Header';

const Home: React.FC = () => {
  const context = useContext<DataContextType | undefined>(DataContext);
  const router = useRouter();

  if (!context) {
    throw new Error('DataContext must be used within a DataContextProvider');
  }

  const { data } = context;

  const handleCardClick=(index:number)=>{
    router.push(`/edit/${index}`);
  }

  return (
    <main className="flex w-[100%] h-auto flex-col text-white items-center justify-left px-4 py-12 bg-neutral-900">
      <Header/>
      
      <div className='flex flex-wrap justify-left items-center mt-4 mx-8 bg-neutral-900'>

        {data.map((item, index) => (
          <div key={index} onClick={()=>handleCardClick(index)}>
            <DataCard 
              title={item.title} 
              desp={item.desp} 
              category={item.category}
            />
          </div>
        ))}
        </div>
      
    </main>
  );
};

export default Home;
