/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Post = () => {
  return (
    <>
    <div className="w-full h-auto flex items-center gap-1 flex-wrap">
        <Link to='/'
          className='lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
          style={{
            backgroundImage: `url("https://picsum.photos/800/600?random/?adventures")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Link>
        <Link to='/'
          className='lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
          style={{
            backgroundImage: `url("https://picsum.photos/800/600?random/?mountains")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Link>
        <Link to='/'
          className='lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
          style={{
            backgroundImage: `url("https://picsum.photos/800/600?random/?nature")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Link>
        <Link to='/'
          className='lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
          style={{
            backgroundImage: `url("https://picsum.photos/800/600?random/?waterfalls")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Link>
        <Link to='/'
          className='lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
          style={{
            backgroundImage: `url("https://picsum.photos/800/600?random/?animals")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Link>
        <Link to='/'
          className='lg:w-[33%] md:w-[33%] sm:w-[32.5%] w-[32.5%] lg:h-[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]'
          style={{
            backgroundImage: `url("https://picsum.photos/800/600?random/?temples")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Link>
    </div>
    </>
  )
}

export default Post
