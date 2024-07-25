// DataCard.tsx
import React from 'react';

interface DataCardProps {
  title: string;
  desp: string;
  category: string;
}

const DataCard: React.FC<DataCardProps> = ({ title, desp, category }) => {
  return (
    <div className='w-80 h-48 bg-neutral-800 border-none rounded-2xl p-4 m-4 mt-0'>
      <div>
        <div className='text-xl'>{title}</div>
        <div className='text-neutral-400'>{desp}</div>
        <div className='text-neutral-300 text-md border-none w-fit absolute bottom-4 px-2 py-1 bg-neutral-900 rounded-lg mb-2'>{category}</div>
      </div>
    </div>
  );
}

export default DataCard;
