import React from 'react'
import Link from 'next/link'


const ActionBar = () => {
  return (
    <div className='w-1/6 bg-neutral-800 text-white'>
    <div>
      <ol>
        <Link href='/create'><li>Create</li></Link>
        <li><button>Demo</button></li>
        </ol>
    </div>
    </div>
  )
}

export default ActionBar
