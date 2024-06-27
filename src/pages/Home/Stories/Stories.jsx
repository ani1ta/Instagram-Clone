/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import storiesData from './StoriesData/StoriesData'
import TextElipse from './TextElipse/TextElipse'
const Stories = () => {
  return (
    <div>
        <div className="lg:max-w-[42vw] md:mx-w-[70vw] sm:max-w-full w-full h-auto flex 
        items-center gap-x-3.5 overflow-x-scroll">
            <Link to='/'
            key='1'
            className='flex items-center justify-center flex-col flex-shrink-0'
            >
                <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-green-600">
                    <img 
                    src="https://picsum.photos/100?random" 
                    alt="Story image" 
                    className="rounded-full w-full h-full object-cover p-[2.5px] bg-black" />
                </div>
                <TextElipse username="beautyofnature" maxLength={8}/>
            </Link>
            {storiesData.map((story) => (
                 <Link to='/'
                 key={story.id}
                 className='flex items-center justify-center flex-col flex-shrink-0'
                 >
                     <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-gradient-to-r
                      from-[#f02aa6] to-[#ff6f48]">
                         <img 
                         src={story.imageUrl} 
                         alt="Story image" 
                         className="rounded-full w-full h-full object-cover p-[2.5px] bg-black" />
                     </div>
                     <TextElipse username={story.username} maxLength={8}/>
                 </Link>
            ))}
        </div>
    </div>
  )
}

export default Stories