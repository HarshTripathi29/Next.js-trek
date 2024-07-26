import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WebIcon from '@mui/icons-material/Web';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="bg-neutral-800 w-screen px-4 py-2 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center">
        <GitHubIcon className="text-white mr-4" />
        <InstagramIcon className="text-white mr-4" />
        <WebIcon className="text-white" />
      </div>
      <SearchBar />
    </header>
  );
}

export default Header;
