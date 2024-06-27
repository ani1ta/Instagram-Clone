/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import InstagramLogo from '../../../assets/logo/instagram.png';
import HeartLogo from '../../../assets/navlogo/heart.png';
import MessageLogo from '../../../assets/navlogo/message.png';

const TopNav = () => {
  return (
    <div className="w-full h-auto mb-5 lg:hidden md:hidden sm:block block">
      <div className="flex items-center justify-between w-full h-auto px-4">
        <Link to='/'>
          <img 
            src={InstagramLogo} 
            alt="Instagram logo" 
            className="w-28 h-auto object-contain" 
          />
        </Link>
        <div className="flex-1 flex justify-end items-center gap-x-4">
          <Link to='/'>
            <img src={HeartLogo} alt="Search Logo" className="w-6 h-6" />
          </Link>
          <Link to='/' className='relative'>
            <img src={MessageLogo} alt="message Logo" className="w-6 h-6" />
            <div className="absolute -right-2 -top-2 bg-red-600 text-sm text-white rounded-full w-5 h-5 flex items-center justify-center">
              19
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
