'use client';
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { DataContext, DataContextType } from './context/DataContext';
import DataCard from './components/DataCard';
import Header from './components/Header';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const demoData = [
  // Technology
  { title: "Exploring React", desp: "A comprehensive guide to getting started with React.", category: "Technology", para: "" },
  { title: "New Tech Gadgets of 2024", desp: "An overview of the most anticipated tech gadgets of the year.", category: "Technology", para: "" },
  { title: "The Future of AI", desp: "Predictions and trends for artificial intelligence in the next decade.", category: "Technology", para: "" },
  { title: "Innovations in Renewable Energy", desp: "The latest advancements in renewable energy technologies.", category: "Technology", para: "" },

  // Travel
  { title: "Top 10 Travel Destinations", desp: "A curated list of the best travel destinations around the world.", category: "Travel", para: "" },
  { title: "Budget Travel Tips", desp: "How to travel the world without breaking the bank.", category: "Travel", para: "" },
  { title: "Adventurous Travel Spots", desp: "Top spots for thrill-seekers and adventure lovers.", category: "Travel", para: "" },
  { title: "Luxury Travel on a Budget", desp: "Tips for experiencing luxury travel without the high cost.", category: "Travel", para: "" },

  // Health
  { title: "Healthy Eating Habits", desp: "Tips and tricks for maintaining a healthy diet.", category: "Health", para: "" },
  { title: "Staying Fit at Home", desp: "Workout routines and fitness tips for exercising at home.", category: "Health", para: "" },
  { title: "Mental Health Tips", desp: "Strategies for maintaining mental well-being.", category: "Health", para: "" },
  { title: "Holistic Health Approaches", desp: "A look into holistic and alternative health practices.", category: "Health", para: "" },

  // Food
  { title: "Delicious Vegan Recipes", desp: "A collection of easy and delicious vegan recipes.", category: "Food", para: "" },
  { title: "Quick and Healthy Snacks", desp: "Ideas for nutritious snacks that are easy to prepare.", category: "Food", para: "" },
  { title: "International Cuisine", desp: "Exploring culinary delights from around the world.", category: "Food", para: "" },
  { title: "Baking at Home", desp: "Tips and recipes for baking delicious treats at home.", category: "Food", para: "" },

  // Entertainment
  { title: "The Best Movies of 2023", desp: "A list of the best movies released in 2023.", category: "Entertainment", para: "" },
  { title: "Must-Watch TV Series", desp: "Top TV series you shouldn't miss.", category: "Entertainment", para: "" },
  { title: "Upcoming Music Albums", desp: "Highly anticipated music albums set to release soon.", category: "Entertainment", para: "" },
  { title: "Broadway Shows to See", desp: "A guide to the most popular Broadway shows currently running.", category: "Entertainment", para: "" }
];


const Home: React.FC = () => {
  const context = useContext<DataContextType | undefined>(DataContext);
  const router = useRouter();

  if (!context) {
    throw new Error('DataContext must be used within a DataContextProvider');
  }

  const { data, showDemo, categoryFilter, favourites, setFavourites, showFavourites, searchQuery } = context;

  const handleCardClick = (index: number) => {
    router.push(`/edit/${index}`);
  };

  const handleFavouriteClick = (item: DataItem) => {
    setFavourites((prevFavourites) => {
      if (prevFavourites.some(fav => fav.title === item.title)) {
        return prevFavourites.filter(fav => fav.title !== item.title);
      } else {
        return [...prevFavourites, item];
      }
    });
  };

  const filteredData = (showFavourites ? favourites : (showDemo ? demoData : data))
    .filter(item => !categoryFilter || item.category === categoryFilter)
    .filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <main className="flex w-[100%] h-auto flex-col text-white items-center justify-center px-4 py-12 pl-0 pt-0 bg-neutral-950">
      <Header />
      
        <div className='flex flex-wrap justify-left items-center mt-8 px-12 ml-12 bg-neutral-950'>
          <div className='w-80 h-48 bg-neutral-800 rounded-2xl p-4 m-4 mt-0'>
                <div>
                  <div className='text-xl text-red-500 font-bold'>Hello from Harsh.</div>
                  <div className='text-neutral-400 '>Please fo through the features of this app and share you experience.</div>
                </div>
        </div>

        {filteredData.map((item, index) => (
          <div key={index} className="relative">
            
            <div onClick={() => handleCardClick(index)}>
              <DataCard 
                title={item.title} 
                desp={item.desp} 
                category={item.category}
              />
            </div>
            <button
              className="absolute bottom-6 right-6 bg-neutral-900 text-white p-1 px-2 border-none rounded-xl"
              onClick={() => handleFavouriteClick(item)}
            >
              {favourites.some(fav => fav.title === item.title) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;