import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import AddMovies from "./AddMovies/AddMovies";
import MoviesList from "./MovieList/MovieList";
// import "./moviesindex.css";
import { getMovieList } from "../../actions/moviesActions";

const Index = () => {
  const [movieId, setmovieId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList());
  }, [movieId, dispatch]);

  return (
    <section class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-gray-600 body-font justify-center h-full">
      <div class="container px-5 py-10 mx-auto max-w-7x1 ">
        <div>
          <AddMovies movieId={movieId} setmovieId={setmovieId} />
        </div>
        <div>
          <MoviesList setmovieId={setmovieId} />
        </div>
      </div>
    </section>
  );
};

export default Index;
