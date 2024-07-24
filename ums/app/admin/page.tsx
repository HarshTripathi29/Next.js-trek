'use client'
import React, { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
import { useUserContext } from '../context/UserContext';

export default function Admin() {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [profession, setProfession] = useState<string>('');

  const { addUser } = useUserContext();

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    addUser({ name, age, gender, profession });
    setName('');
    setAge('');
    setGender('');
    setProfession('');
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (
    ev: ChangeEvent<HTMLInputElement>
  ) => {
    setter(ev.target.value);
  };

  return (
    <main className="min-h-screen justify-between p-24">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex-col h-4/4">
            <input
              type="text"
              placeholder="name"
              onChange={handleInputChange(setName)}
              value={name}
            />
            <input
              type="text"
              placeholder="age"
              onChange={handleInputChange(setAge)}
              value={age}
            />
            <input
              type="text"
              placeholder="gender"
              onChange={handleInputChange(setGender)}
              value={gender}
            />
            <input
              type="text"
              placeholder="profession"
              onChange={handleInputChange(setProfession)}
              value={profession}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <Link href="/dashboard">
        <p>Go to Dashboard</p>
      </Link>
    </main>
  );
}
