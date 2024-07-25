'use client';
import React, { useContext, useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { DataContext, DataContextType } from '../../context/DataContext';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const EditPage: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const context = useContext<DataContextType | undefined>(DataContext);

  if (!context) {
    throw new Error('DataContext must be used within a DataContextProvider');
  }

  const { data, setData } = context;
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [desp, setDesp] = useState<string>('');
  const [para, setPara] = useState<string>('');

  // get the current values of the input fields to be edited.  
  useEffect(() => {
    if (id !== undefined) {
      const item = data[Number(id)];
      if (item) {
        setTitle(item.title);
        setCategory(item.category);
        setDesp(item.desp);
        setPara(item.para);
      }
    }
  }, [id, data]);

  // update the data state. Get the id(index) of the object to be updated and update only that object
  const handleSave = () => {
    const updatedData = [...data];
    updatedData[Number(id)] = { title, category, desp, para };
    setData(updatedData);
    // setData([...data, { title, category, desp, para }])
    router.push('/');
  };

  return (
    <div className='w-[100%] h-screen bg-neutral-900 flex justify-center align-top p-12'>
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
              onClick={handleSave}
            >
              Save
            </button>
            <button className='bg-white text-black py-1 px-2 rounded-sm' onClick={() => router.push('/')}>Discard</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
