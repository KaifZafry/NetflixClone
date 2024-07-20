import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { options } from "../utils/constant"


const usePopularMovies = () => {
    const dispatch= useDispatch()
    const popularMovies= useSelector(store=>store.movies.popularMovies)

  const getPopularMovies= async()=> {
    let data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1', options)
    let json= await data.json()
    // console.log(json.results[0].original_title);
    // console.log(json.results)
    dispatch(addPopularMovies(json.results))
  }
  useEffect(()=> {
    !popularMovies && getPopularMovies(); // this will called when popular movies are null
  },[])
}

export default usePopularMovies;