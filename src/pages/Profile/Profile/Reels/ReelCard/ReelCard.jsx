/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import reelsData from '../ReelData/ReelData'
import Liked from '../../../../../components/Icons/Like/liked.png'
import Commented from '../../../../../components/Icons/Comment/Commentted.png'

const ReelCard = () => {
  return (
    <div>
      {reelsData.map((reel) => (
        <Link to='/' key={reel.id}
        className='lg:w-[24.675%] md:w-[24.675%] sm:w-[32.5%] w-[32.5%] lg:h-[48vh] md:h-[40vh]
        sm:h-[35vh] h-[30vh] relative group'
        style={{
            backgroundImage: `url("https://picsum.photos/800/600?random/?adventures")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

        }} 
        >
            <video 
               src={reel.video} 
               title='reel video' 
               loop 
               muted 
               autoPlay 
               className='w-full h-full object-cover' 
               />
               <div className="hidden group-hover:flex items-center justify-center gap-x-3 
               absolute top-[50%] left-[50%] translate-x-[50%]">
                    <div className="flex items-center gap-x-1">
                        <img src={Liked} alt="like icon" className="w-6 h-6" />
                        <p className="text-base text-white font-medium">
                            {reel.likeCount}
                        </p>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <img src={Commented} alt="like icon" className="w-6 h-6" />
                        <p className="text-base text-white font-medium">
                            {reel.commentCount}
                        </p>
                    </div>
               </div>
        </Link>
      ))}
    </div>
  )
}

export default ReelCard
