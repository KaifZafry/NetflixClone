import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="ml-6">
      <h1 className="text-xl md:text-2xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-auto pb-20 -mb-20">
      <div className="flex ">
        {movies?.map((movie) => (
          <MovieCard key={movie?.id} id={movie?.id} posterPath={movie?.poster_path} />
        ))  }
      </div>
    </div>
    </div>
  );
};

export default MoviesList;
                           