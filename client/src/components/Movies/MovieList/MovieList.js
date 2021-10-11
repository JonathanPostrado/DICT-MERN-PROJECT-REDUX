import React from "react";
import { useSelector } from "react-redux";

import MovieCard from "./MovieCard/MovieCard";

const MovieList = ({ setmovieId }) => {
  const { movies } = useSelector((state) => state.movies);

  return !movies.length ? (
    <p>No Movie Record</p>
  ) : (
    <div className="mt-3 rounded-lg bg-white flex flex-col p-3 px-4 shadow-2xl ">
      <div class="flex flex-wrap w-full mb-4 p-4">
        <div class="w-full mb-6 lg:mb-0">
          <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">
            Movies
          </h1>
          <div class="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-2 mt-2 sm:grid-cols-3">
        {movies?.map((movie) => (
          <div key={movie._id} item xs={12} sm={6} md={6}>
            <MovieCard movie={movie} setmovieId={setmovieId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
