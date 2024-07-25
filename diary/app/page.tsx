'use client';
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { DataContext, DataContextType } from './context/DataContext';
import DataCard from './components/DataCard';
import Header from './components/Header';

const demoData = [
  { title: "Exploring React", desp: "A comprehensive guide to getting started with React.", category: "Technology", para: "" },
  { title: "Top 10 Travel Destinations", desp: "A curated list of the best travel destinations around the world.", category: "Travel", para: "" },
  { title: "Healthy Eating Habits", desp: "Tips and tricks for maintaining a healthy diet.", category: "Health", para: "" },
  { title: "New Tech Gadgets of 2024", desp: "An overview of the most anticipated tech gadgets of the year.", category: "Technology", para: "" },
  { title: "Delicious Vegan Recipes", desp: "A collection of easy and delicious vegan recipes.", category: "Food", para: "" },
  { title: "The Future of AI", desp: "Predictions and trends for artificial intelligence in the next decade.", category: "Technology", para: "" },
  { title: "Budget Travel Tips", desp: "How to travel the world without breaking the bank.", category: "Travel", para: "" },
  { title: "Staying Fit at Home", desp: "Workout routines and fitness tips for exercising at home.", category: "Health", para: "" },
  { title: "The Best Movies of 2023", desp: "A list of the best movies released in 2023.", category: "Entertainment", para: "" },
  { title: "Innovations in Renewable Energy", desp: "The latest advancements in renewable energy technologies.", category: "Technology", para: "" }
];

const Home: React.FC = () => {
  const context = useContext<DataContextType | undefined>(DataContext);
  const router = useRouter();

  if (!context) {
    throw new Error('DataContext must be used within a DataContextProvider');
  }

  const { data, showDemo, categoryFilter } = context;

  const handleCardClick = (index: number) => {
    router.push(`/edit/${index}`);
  };

  const itemsToDisplay = (showDemo ? demoData : data).filter(item => !categoryFilter || item.category === categoryFilter);

  return (
    <main className="flex w-[100%] h-auto flex-col text-white items-center justify-left px-4 py-12 bg-neutral-950">
      <Header />
      
      <div className='flex flex-wrap justify-left items-center mt-4 mx-8 bg-neutral-950'>
        {itemsToDisplay.map((item, index) => (
          <div key={index} onClick={() => handleCardClick(index)}>
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
