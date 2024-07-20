import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground'

const HeroContainer = () => {
    const movies= useSelector(store => store.movies?.nowPlayingMovies)
    if(!movies) return;

    const mainMovie= movies[2];
    console.log(mainMovie.id)
    const {original_title,overview,id}=mainMovie;
    // console.log(mainMovie)
  return (
    <div className='relative w-screen overflow-hidden'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}


export default HeroContainer