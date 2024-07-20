
import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo= useSelector(store => store.movies?.trailerVideo);
  
  useMovieTrailer(movieId);

  return (
    <div className="w-screen h-screen overflow-hidden">
      {console.log(trailerVideo)}
      <iframe
        className="w-screen h-screen aspect-w-16 aspect-h-9"
        src={"https://www.youtube.com/embed/"+ trailerVideo?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
