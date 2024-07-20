import { useDispatch, useSelector } from "react-redux"
import { addTopRatedMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { options } from "../utils/constant"


const useTopRatedMovies = () => {
    const dispatch= useDispatch()
    const topRatedMovies= useSelector(store=>store.movies.topRatedMovies)
  const getTopRatedMovies= async()=> {
    let data= await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options)
    let json= await data.json()
    // console.log(json.results[0].original_title);
    // console.log(json.results)
    dispatch(addTopRatedMovies(json.results))
  }
  useEffect(()=> {
    !topRatedMovies && getTopRatedMovies();
  },[])
}

export default useTopRatedMovies