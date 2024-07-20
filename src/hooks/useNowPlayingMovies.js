import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { options } from "../utils/constant"


const useNowPlayingMovies = () => {
    const dispatch= useDispatch()
    const nowPlaying= useSelector(store=>store.movies.nowPlayingMovies)
  const nowPlayingMovies= async()=> {
    let data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
    let json= await data.json()
    // console.log(json.results[0].original_title);
    // console.log(json.results)
    dispatch(addNowPlayingMovies(json.results))
  }
  useEffect(()=> {
    !nowPlaying && nowPlayingMovies(); // this is called when nowPlayingMovies is null
  },[])
}

export default useNowPlayingMovies