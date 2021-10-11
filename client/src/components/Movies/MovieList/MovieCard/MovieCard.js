import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { deleteMovies } from "../../../../actions/moviesActions";

const MovieCard = ({ movie, setmovieId }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const openMovie = () => history.push(`/movies/${movie._id}`);

  return (
    <div class="bg-white p-6 rounded-lg">
      <div class="card shadow-2xl image-full">
        <figure>
          <img src={movie.selectedImage} alt="movie" />
        </figure>
        <div class="justify-end card-body">
          <div>
            <h6 class="card-title text-3xl ">{movie.movieTitle}</h6>
            <p className="text-md">Year: {movie.movieYear}</p>
            <p className="text-md">Duration: {movie.movieDuration}</p>
            <p className="text-md">
              Genre: {movie.movieGenre.map((comma) => `${comma},`)}
            </p>
            {/* <p>{moment(movie.createdAt).fromNow()}</p> */}
          </div>
          <div class="justify-center card-actions">
            <ul class="menu shadow-lg bg-base-200 rounded-box horizontal ">
              <li>
                <a onClick={() => dispatch(deleteMovies(movie._id))}>
                  <i class="fas fa-trash text-red-600" />
                </a>
              </li>
              <li>
                <a onClick={() => setmovieId(movie._id)}>
                  <i class="fas fa-edit text-green-600" />
                </a>
              </li>
              <li>
                <a onClick={openMovie}>
                  <i class="fas fa-eye text-gray-700" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
