'use client'
import React, { useContext, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import 'react-quill/dist/quill.snow.css';
import { DataContext, DataContextType } from '../context/DataContext';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Page: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [desp, setDesp] = useState<string>('');
  const [para, setPara] = useState<string>('');

  const context = useContext(DataContext);
  const router=useRouter();

  if (!context) {
    throw new Error('DataContext must be used within a DataContextProvider');
  }

  const { data, setData } = context;

  console.log(para);

  const handleClick = () => {
    setData([...data, { title, category, desp, para }]);
    setTitle('');
    setDesp('');
    setCategory('');
    setPara('');
    console.log(data);
    router.push('/');
  };

  return (
    <div className='w-[100%] h-screen bg-neutral-950 flex justify-center align-top p-12'>
      <div className='flex'>
        <div className='flex h-5/6 justify-center bg-neutral-800 p-8 border-none rounded-3xl'>
          <ReactQuill
            className='h-5/6'
            value={para}
            onChange={(value: string) => setPara(value)}
          />
        </div>

        <div className='flex flex-col bg-neutral-800 border-1 ml-2 px-2 h-[40%] rounded-3xl py-8'>
          <input
            type='text'
            placeholder='title'
            className='py-1 px-2 m-1 mt-0 border-1 bg-neutral-700 rounded-md'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            value={title}
          />
          <input
            type='text'
            placeholder='description'
            className='py-1 px-2 m-1 border-1 bg-neutral-700 rounded-md'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDesp(e.target.value)}
            value={desp}
          />
          <select
            value={category}
            className='py-2 px-2 m-1 border-1 bg-neutral-700 rounded-md'
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
          <div className=' pl-0'>
            <button
              className='bg-neutral-300 text-black py-1 px-2 m-2 rounded-sm hover:bg-neutral-900 hover:text-neutral-300'
              onClick={handleClick}
            >
              Save
            </button>
            <button className='bg-neutral-300 text-black py-1 px-2 rounded-sm hover:bg-neutral-900 hover:text-neutral-300' onClick={() => router.push('/')}
            >
              Discard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
