import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";
import { getMovie } from "../../../actions/moviesActions";

const MovieDetailsPage = () => {
  console.log("Im here at movie details");
  const { movie, movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovie(id));
  }, [id]);

  if (!movie) return null;

  return (
    <section class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-gray-600 body-font justify-center h-full">
      <div class="container px-5 py-10 mx-auto max-w-7x1 ">
        <div className="mt-3 rounded-lg bg-white flex flex-col p-3 px-4 shadow-2xl ">
          {/*  */}
          <div class="grid grid-cols-1 gap-0 mt-2 sm:grid-cols-3">
            <div class="animation-zoom p-6 rounded-lg col-span-1 transform transition duration-500 hover:scale-105">
              <img
                src={movie.selectedImage}
                alt="movie"
                className="rounded-3xl"
              />
            </div>
            <div class="p-6 rounded-lg col-span-2">
              <div class="flex flex-wrap w-full mb-4 p-4">
                <div class="w-full mb-6 lg:mb-0">
                  <h1 class="md:text-4xl sm:text-lg font-medium font-bold title-font mb-2 text-gray-900">
                    {movie.movieTitle} ({movie.movieYear})
                  </h1>
                  <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                  <div class="grid grid-cols-1 gap-0 mt-2 sm:grid-cols-3">
                    <div class="p-6 rounded-lg col-span-1">
                      <div className="mt-3">
                        <span className="font-semibold">Posted by: </span>
                        <span className="italic">{movie.creator}</span>
                        <br />
                        <span className="font-semibold">Added: </span>
                        <span className="italic">
                          {moment(movie.createdAt).fromNow()}
                        </span>
                        <br />
                        <span className="font-semibold">Genre: </span>
                        <span className="italic">
                          {movie.movieGenre.map((comma) => `${comma},`)}
                        </span>
                        <br />
                        <span className="font-semibold">Duration: </span>
                        <span className="italic">{movie.movieDuration}</span>
                        <br />
                        <span className="font-semibold">Directors: </span>
                        <span className="italic">
                          {movie.movieDirectors.map((comma) => `${comma},`)}
                        </span>
                        <br />
                        <span className="font-semibold">Productions: </span>
                        <span className="italic">{movie.movieProduction}</span>
                        <br />
                      </div>
                    </div>
                    <div class="p-6 rounded-lg col-span-2">
                      <div className="mt-3">
                        <span className="font-semibold">Casts: </span>
                        <span className="italic">
                          {movie.movieCasts.map((comma) => `${comma},`)}
                        </span>
                        <br />
                        <span className="font-semibold">Overview: </span>
                        <br />
                        <span className="ml-6 italic">
                          {movie.movieDescription}
                        </span>
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="font-semibold">Trailer: </span>
                    <div class="content-center">
                      <iframe
                        width="500"
                        height="300"
                        src={movie.movieTrailer}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen="true"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsPage;
