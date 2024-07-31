import React, { useEffect, useState } from 'react'
import { IMG_CDN_URL, options } from '../utils/constant'
import { Link } from 'react-router-dom'

const MovieCard = ({id,posterPath}) => {
  const [trailerid,setTrailerId]=useState(null);
  const getMovieVideos= async()=>{
    const data= await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US", options);
    const json=await data.json();
    const filterData=json?.results.filter(video=>video.type==="Trailer")
    const trailer=filterData[0];
    setTrailerId(trailer?.key)
    
}


useEffect(()=>{
  getMovieVideos();
},[])


  return (
    // <div className='w-36 md:w-48 pr-2'>
    //     <img src={IMG_CDN_URL+ posterPath} alt="Now playing" />
    // </div>
    <div className='w-36 md:w-48 pr-2'>
      <Link to={"https://www.youtube.com/watch?v="+ trailerid}>
        <img
          src={IMG_CDN_URL+ posterPath}
          alt="Movie Poster"
          className="poster-image rounded-lg hover:scale-125 ease-in duration-300"
        />
      </Link>
    </div>
  )
}

export default MovieCard