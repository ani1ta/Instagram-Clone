/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const TextElipse = ({username, maxLength = 8}) => {
  const usernameEllipseStory = 
     username.length > maxLength 
     ? `${username.slice(0, maxLength)}...` 
     : username;
  
    return (
    <div>
        <p className="text-white text-sm mt-1 truncate">
            {usernameEllipseStory}
        </p>
    </div>
  )
}

export default TextElipse