import React from 'react'
import Link from 'next/link'


const ActionBar = () => {
  return (
    <div className='w-[15%] h-3/6 bg-neutral-800 text-white border-none rounded-2xl m-12 p-4 px-2'>
    <div>
      <ol className='text-lg text-neutral-400 py-2'>
        <Link href='/create'><li className='p-2'>Create</li></Link>
        <li className='p-2'><button>Demo</button></li>
        </ol>
    </div>
    </div>
  )
}

export default ActionBar
