'use client'
import React from 'react';
import { useUserContext } from '../context/UserContext';

export default function Dashboard() {
  const { users } = useUserContext();

  return (
    <main className="min-h-screen justify-between p-24">
      <div className="flex">
        <ol>
          {users.map((item, index) => (
            <div className="flex" key={index}>
              <li className="p-2">{index + 1}</li>
              <li className="p-2">{item.name}</li>
              <li className="p-2">{item.age}</li>
              <li className="p-2">{item.gender}</li>
              <li className="p-2">{item.profession}</li>
            </div>
          ))}
        </ol>
      </div>
    </main>
  );
}
