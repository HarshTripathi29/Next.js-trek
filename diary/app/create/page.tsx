'use client'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface DataItem {
  title: string;
  category: string;
  desp: string;
  para: string;
}

const Page: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [desp, setDesp] = useState<string>('');
  const [para, setPara] = useState<string>('');

  console.log(para);

  const handleClick = () => {
    setData([...data, { title, category, desp, para }]);
    setTitle('');
    setDesp('');
    setCategory('');
    setPara(''); 
    console.log(data);
  };

  return (
    <div className='w-4/6 h-screen bg-neutral-900 flex justify-center align-top p-12'>
      <div className='flex'>
        <div className='flex justify-center'>
          <ReactQuill
            className='h-4/6'
            value={para}
            onChange={(value: string) => setPara(value)}
          />
        </div>

        <div className='flex flex-col bg-neutral-800 border-1 ml-2 p-2 h-4/6 rounded-md'>
          <input
            type='text'
            placeholder='title'
            className='py-1 px-2 m-2 mt-0 border-1 bg-neutral-700 rounded-sm'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            value={title}
          />
          <input
            type='text'
            placeholder='description'
            className='py-1 px-2 m-2 border-1 bg-neutral-700 rounded-sm'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDesp(e.target.value)}
            value={desp}
          />
          <select
            value={category}
            className='py-1 px-2 m-2 border-1 bg-neutral-700 rounded-sm'
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
          >
            <option value='' disabled>Select Category</option>
            <option value='Entertainment'>Entertainment</option>
            <option value='Food'>Food</option>
            <option value='Travel'>Travel</option>
            <option value='Technology'>Technology</option>
            <option value='Health'>Health</option>
            <option value='Others'>Others</option>
          </select>
          <div className='p-2 pl-0'>
            <button
              className='bg-white text-black py-1 px-2 m-2 rounded-sm'
              onClick={handleClick}
            >
              Save
            </button>
            <button className='bg-white text-black py-1 px-2 rounded-sm'>Discard</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
