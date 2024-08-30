import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-full md:w-2/5 h-screen aspect-video p-3 ps:8 md:ps-16 absolute pt-[30%] md:pt-[18%] text-white bg-gradient-to-r from-black'>
        <h1 className=' font-bold text-2xl md:text-3xl mt-4'>{title}</h1>
        <h4 className='mb-2 text-xs'>{overview}</h4>
        <div className='flex gap-2'>
            <button className='py-1 md:py-2 px-4 bg-opacity-50  rounded-lg text-black bg-white'>▶️ Play</button>
            <button className=' py-1 md:py-2 px-4 bg-opacity-50  rounded-lg bg-gray-500'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle 