import { useDispatch, useSelector } from "react-redux"
import { addUpcomingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { options } from "../utils/constant"


const useUpcomingMovies = () => {
    const dispatch= useDispatch()
    const upcomingMovies= useSelector(store=>store.movies.upcomingMovies)
  const getUpcomingMovies= async()=> {
    let data= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options)
    let json= await data.json()
    // console.log(json.results[0].original_title);
    // console.log(json.results)
    dispatch(addUpcomingMovies(json.results))
  }
  useEffect(()=> {
    !upcomingMovies && getUpcomingMovies();
  },[])
}

export default useUpcomingMovies