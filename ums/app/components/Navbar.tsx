import Link from 'next/link';
import React from 'react';

const Navbar:React.FC = () => {
  return (
    <div>
      <nav className="flex justify-left w-full mb-8">
      <Link href="/admin">
        <div className="p-2 bg-blue-600 text-white rounded">Admin</div>
      </Link>
      <Link href="/dashboard">
        <div className="p-2 bg-blue-600 text-white rounded">Dashboard</div>
      </Link>
    </nav>
    </div>
  )
}

export default Navbar
