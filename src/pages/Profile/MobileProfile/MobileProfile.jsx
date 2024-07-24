/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import LinkIcon from '../../../components/Icons/LinkIcon/LinkIcon'
import highlightData from '../HighlightsData'

const MobileProfile = () => {
  return (
    <div>
      <div className="w-full h-auto lg:hidden md:hidden sm:block block text-white">
      {/* Info Section */}
      <div className="w-full h-auto flex items-center gap-x-8 justify-center mb-3">
          <img 
            src="https://picsum.photos/800/600?random/?climber" 
            alt="Profile img" 
            className="rounded-full w-20 h-20 object-cover" 
          />
          {/* UserName */}
          <div className="flex items-start flex-col gap-y-3">

          
          <Link to='/profile' className='text-lg text-gray-200 font-normal'>
            mountain_Lover
          </Link>
          {/* Buttons */}
          <div className="flex items-center gap-x-2">
            <button className="bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base 
            text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150">
              Edit Profile
            </button>
            <button className="bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150">
              View archive
            </button>
          </div>
          </div>
      </div>
      {/* Bio */}
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
      {/* Link Section */}
      <p className="text-base text-gray-100 font-normal flex items-center gap-x-2 mb-5">
        <LinkIcon />
        <Link to='/' className='text-blue-500 hover:underline font-medium '>
            www.mountainlover.com
        </Link>
      </p>
      {/* HighLight Section */}
      <div className="w-full h-auto flex items-center gap-x-9 mb-10">
        <div className="max-w-[61vw] w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll">
        {highlightData.map((data) => (
            <Link 
              to='/' key={data.id} 
              className='flex items-center justify-between flex-col flex-shrink-0'
            >
              <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#1d1d1d] to-[#1d1d1d]">
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
          {/* For reference */}
          {/* <div className="flex items-start flex-col">
            <div className="flex items-center gap-x-5 mb-4">
              <Link to='/profile' className='text-lg text-gray-200 font-normal'>
                mountain_Lover
              </Link>
              <div className="flex items-center gap-x-2">
                <button className="bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base 
                text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150">
                  Edit Profile
                </button>
                <button className="bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150">
                  View archive
                </button>
              </div>
              <Settings />
            </div>
            <div className="flex items-center gap-x-6 mb-4">
                <h6 className="text-base text-gray-100 font-normal">10 Posts</h6>
                <Link to='/' className='text-base text-gray-100 font-normal'>
                    1200 Followers
                </Link>
                <Link to='/' className='text-base text-gray-100 font-normal'>
                    10 Following
                </Link>

            </div>
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
            <p className="text-base text-gray-100 font-normal flex items-center gap-x-2">
                <LinkIcon />
                <Link to='/' className='text-blue-500 hover:underline font-medium '>
                   www.mountainlover.com
                </Link>
            </p>
          </div> */}
        
      </div>
    </div>
  )
}

export default MobileProfile
