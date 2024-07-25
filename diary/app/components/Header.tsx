import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WebIcon from '@mui/icons-material/Web';

const Header = () => {
  return (
    <div>
      <div className='bg-neutral-800 w-full py-12 px-60 border-none rounded-2xl mb-0'>
        <ul className='flex'>
          <li className='flex items-center p-4'>
            <GitHubIcon className='mr-2' /> 
          </li>
          <li className='flex items-center p-4'>
            <InstagramIcon className='mr-2' /> 
          </li>
          <li className='flex items-center p-4'>
            <WebIcon className='mr-2' /> 
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
