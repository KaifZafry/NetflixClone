import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondContainer = () => {
  const movies= useSelector(store=> store.movies)

  return movies.nowPlayingMovies &&(
    <div className='bg-black'>
      <div className='-mt-52 z-20 relative'>
      <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
      <MoviesList title={"Popular"} movies={movies?.popularMovies}/>
      <MoviesList title={"Top Rated"} movies={movies?.topRatedMovies}/>
      <MoviesList title={"Upcoming"} movies={movies?.upcomingMovies}/>
      <MoviesList title={"Horror"} movies={movies?.nowPlayingMovies}/>
      <MoviesList title={"Sci- Fi"} movies={movies?.topRatedMovies}/>
    </div>
    </div>
  )
}

export default SecondContainer