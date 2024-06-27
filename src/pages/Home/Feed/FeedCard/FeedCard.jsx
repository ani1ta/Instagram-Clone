/* eslint-disable no-unused-vars */
import React from 'react'
import instagramFeed from '../FeedData/FeedData'

const FeedCard = () => {
  return (
    <div>
        {instagramFeed.map((feed) => (
            <div key={feed.id} className="w-full h-auto mb-6">
                {/* pp and username, time */}
                <div className="w-full h-auto flex items-center justify-between mb-2">
                    {/* Feed Img */}
                    {/* User Action (like, comment , share & save) */}
                </div>
            </div>
        ))}
    </div>
  )
}

export default FeedCard