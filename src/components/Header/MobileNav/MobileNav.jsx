/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import HomeLogo from "../../../assets/navlogo/home.png";
import SearchLogo from "../../../assets/navlogo/search.png";
import ExploreLogo from '../../../assets/navlogo/explore.png'
import ReelsLogo from '../../../assets/navlogo/reel.png'
import MessagesLogo from '../../../assets/navlogo/message.png'
import NotificationsLogo from '../../../assets/navlogo/like.png'
import CreateLogo from '../../../assets/navlogo/create.png'
import ThreadsLogo from '../../../assets/navlogo/threads.png'
import MoreLogo from '../../../assets/navlogo/more.png'


const MobileNav = () => {

    const sidebarItems = [
        {
          link: "/search",
          icon: SearchLogo,
        },
        {
          link: "/create",
          icon: CreateLogo,
        },
        {
          link: "/reels",
          icon: ReelsLogo,
        },

      ];

  return (
    <div>
        <div className="w-full h-auto">
          <div className="w-full h-auto flex items-center gap-x-2">
          <Link 
                to="/" 
                className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group"
                >
                  
                  <img src={HomeLogo}
                  alt="Home Icon" 
                  className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300" 
                  />

                  
          </Link>
          {sidebarItems.map((item) =>(
              <Link 
                to={item.link}
                key={item.id} 
                className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group">
                  <img src={item.icon}
                  alt="Home Icon" 
                  className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300" />
  
                
              </Link>
          ))}
          <Link 
                to="/profile"
                className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group"
                >
                  
                  <img src="https://picsum.photos/100?random" 
                  alt="Profile Icon" 
                  className="w-6 h-6 rounded-full object-cover group-hover:scale-105 ease-out duration-300" 
                  />
            </Link>
          </div>
        </div>
        
    </div>
  )
}

export default MobileNav