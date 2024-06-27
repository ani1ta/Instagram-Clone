/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LargeNav from '../../components/Header/LargeNav/LargeNav'
import MobileNav from '../../components/Header/MobileNav/MobileNav'
import Feed from './Feed/Feed'

const Home = () => {
  return (
    <div>
      <div className="w-full h-auto flex items-start justify-between lg:gap-x-32 md:gap-x-16 sm:gap-x-8 gap-x-4 relative">
        {/* sidebar section */}
        <div className="lg:w-[16%] md:w-[17%] sm:w-none w-none h-[100vh] pt-10 px-3 border-r border-r-gray-500 sticky top-0 left-0 lg:block md:block sm:hidden hidden">
          <LargeNav />
        </div>

        {/* main content section */}
        <div className="flex-1 h-auto pt-10 px-3">
          <Routes>
            <Route path="/" element={<Feed />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>

      {/* bottom navbar for small screens */}
      <div className="w-full h-auto py-1 px-3 border-t border-t-[#1d1d1d] fixed bottom-0 
        left-0 lg:hidden md:hidden sm:block block bg-black z-50">
        <MobileNav />
      </div>
    </div>
  )
}

export default Home
