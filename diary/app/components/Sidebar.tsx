import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-[15%] h-3/6 bg-neutral-800 text-white border-none rounded-3xl m-12 p-4 px-2' >
      <div>
        <ol className='text-lg text-neutral-400 py-2'>
            <li className='p-2'>Entertainment</li>
            <li className='p-2'>Food</li>
            <li className='p-2'>Travel</li>
            <li className='p-2'>Technology</li>
            <li className='p-2'>Health</li>
            <li className='p-2'>Others</li>
        </ol>
      </div>
    </div>
  )
}

export default Sidebar
