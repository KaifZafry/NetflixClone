import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer= (movieId)=>{
    const dispatch = useDispatch();
    
    const trailerVideo= useSelector(store=>store.movies.trailerVideo)
    const getMoviesVideo = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
          options
        );
        const json = await data.json();
        // console.log(json);
    
        const trailer = json?.results.filter((video) => video.type === "Trailer");
         console.log(trailer);
        dispatch(addTrailerVideo(trailer[0]));
      };
      useEffect(() => {
        !trailerVideo && getMoviesVideo(); //this will be called when the trailer is null
      }, []);
}

export default useMovieTrailer;