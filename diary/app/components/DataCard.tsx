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
        <div className='text-neutral-300 text-lg border-1 border-white rounded-sm'>{category}</div>
      </div>
    </div>
  );
}

export default DataCard;
