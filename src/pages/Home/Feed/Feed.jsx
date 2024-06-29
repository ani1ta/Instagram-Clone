/* eslint-disable no-unused-vars */
import React from 'react';
import TopNav from '../../../components/Header/TopNav/TopNav';
import Stories from '../Stories/Stories';
import FeedCard from './FeedCard/FeedCard';
import RecommendedUser from '../RecommendedUser/RecommendedUser';

const Feed = () => {
  return (
    <div className="lg:w-[83%] md:w-[83%] sm:w-full w-full min-h-screen lg:py-7 md:py-7 sm:py-4 py-3 px-3 flex items-start gap-x-20">
      {/* Feed + Story Section */}
        <div className="lg:w-[55%] md:w-full sm:w-full w-full h-auto relative">
          {/* Top Navbar (Only visible on small screen) */}
          <TopNav />
          {/* Stories Section */}
          <Stories />
          {/* Feed Section */}
          <div className="w-full  h-auto  flex items-center justify-center mt-6">
            <div className="lg:w-[73%] md:w-[73%] sm:w-[80%] w-[80%] h-auto">
              <FeedCard />
              <FeedCard />
              <FeedCard />
              <FeedCard />
            </div>
          </div>
        </div>
        {/* Recommended user section */}
        <div className="w-[25%] h-auto lg:block md:hidden sm:hidden hidden ">
          {/* Recommended users content */}
          <RecommendedUser />
        </div>
      
    </div>
  );
};

export default Feed;
