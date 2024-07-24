/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Settings from '../../../components/Icons/Settings/Settings'
import LinkIcon from '../../../components/Icons/LinkIcon/LinkIcon'
import highlightData from '../HighlightsData'
import Tab from './Tab/Tab'
import PostIcon from '../../../components/Icons/Post/post.png'
import ReelIcon from '../../../components/Icons/Reel/reel.png'
import TagIcon from '../../../components/Icons/Tag/tag.png'
import Posts from '../../Profile/Profile/Post/Post'
import Reels from '../../Profile/Profile/Reels/Reels'
import Tags from './Tags/Tags'

const Profile = () => {
    const [activeTab, setActiveTab] = useState("posts");
    const [isContentVisible, setContentVisible] = useState(true);
  
    const handleTabClick = (tab) => {
        setContentVisible(false);


        // delay animation
        setTimeout(() => {
            setActiveTab(tab)
            setContentVisible(true)
        }, 300);
    }

    return (

    <div>
      <div className="lg:w-[88%] md:w-[88%] sm:w-full w-full h-auto lg:block md:block sm:hidden hidden">
        {/* Info Section */}
        <div className="w-full h-auto flex items-center lg:gap-x-20 md:gap-x-16 sm:gap-x-12 gap-x-8 justify-center mb-10">
          <img 
            src="https://picsum.photos/800/600?random/?climber" 
            alt="Profile img" 
            className="rounded-full lg:w-36 md:w-36 sm:w-32 w-28 lg:h-36 md:h-36 sm:h-32 h-28 object-cover -mt-10" 
          />
          <div className="flex items-start flex-col -mt-10">
            <div className="flex items-center gap-x-5 mb-4 mt-10">
              <Link to='/profile' className='text-lg text-gray-200 font-normal'>
                mountain_Lover
              </Link>
              <div className="flex items-center gap-x-2">
                <button className="bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150">
                  Edit Profile
                </button>
                <button className="bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150">
                  View archive
                </button>
              </div>
              <Settings />
            </div>
            {/* Post, Follower, following */}
            <div className="flex items-center gap-x-6 mb-4">
                <h6 className="text-base text-gray-100 font-normal">11 Posts</h6>
                <Link to='/' className='text-base text-gray-100 font-normal'>
                    2200 Followers
                </Link>
                <Link to='/' className='text-base text-gray-100 font-normal'>
                    11 Following
                </Link>

            </div>
            {/* fullname */}
            <p className="text-base text-gray-100 font-normal">
                Mountain Lover
            </p> 
            <p className="text-base text-gray-100 font-normal">
                ꧁༒🕉️𝖓𝖆𝖒𝖆𝖍 𝖘𝖍𝖎𝖛𝖆𝖞༒꧂ <br /> 
                Professional Account <br />
                🚀 Web/App Enthusiast 💻<br />
                📜 Lifelong Learner 📰<br />
               Front-end Developer 💻 <br />
            </p>
            {/* Link */}
            <p className="text-base text-gray-100 font-normal flex items-center gap-x-2">
                <LinkIcon />
                <Link to='/' className='text-blue-500 hover:underline font-medium '>
                   www.mountainlover.com
                </Link>
            </p>
          </div>
        </div>
        {/* Highlight Section */}
        <div className="w-full h-auto flex items-center gap-x-9 mb-10">
            <div className="max-w-[61vw] w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll">
            {highlightData.map((data) => (
                <Link to='/' key={data.id} 
                className='flex items-center justify-between flex-col flex-shrink-0'>
                <div className="w-28 h-28 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#1d1d1d] to-[#1d1d1d]">
                    <img 
                    src={data.img} 
                    alt={data.name} 
                    className="rounded-full h-full w-full object-cover p-[2.5px] bg-black" 
                    />
                    
                </div>
                <p className="text-white text-sm mt-1">
                        {data.name}
                    </p>
                </Link>
            ))}
            </div>
        </div>
        {/* Post, Reels, Tagged Section */}
        <div className="w-full h-auto">
          {/* Tab section */}
            <div className="w-full h-auto flex items-center justify-center gap-x-6 mb-4 
            border-t border-[#313131]">
                <Tab label="POSTS" 
                icon={PostIcon} 
                isActive={activeTab === "posts"}
                onclick={() => handleTabClick("posts")}
                />
                <Tab label="REELS" 
                icon={ReelIcon} 
                isActive={activeTab === "reels"}
                onclick={() => handleTabClick("reels")}
                />
                <Tab label="TAGGED" 
                icon={TagIcon} 
                isActive={activeTab === "tagged"}
                onclick={() => handleTabClick("tagged")}
                />
            </div>
        </div>
        {/* Tab Content Section */}
        <div className={`mt-4 transition-opacity duration-300 ease-out ${
        isContentVisible ? "opacity-100" : "opacity-0"
        }`}
        >
          {activeTab === "posts" && <Posts />}
          {activeTab === "reels" && <Reels />}
          {activeTab === "tagged" && <Tags />}
        </div>
      </div>
    </div>
  )
}

export default Profile
