'use client'
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen justify-between p-24">
      <div>
        <Link href="/admin">
          <p>Go to Admin</p>
        </Link>
        <Link href="/dashboard">
          <p>Go to Dashboard</p>
        </Link>
      </div>
    </main>
  );
}
