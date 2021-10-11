import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import { createMovies, updateMovies } from "../../../actions/moviesActions";

const AddMovies = ({ movieId, setmovieId }) => {
  const [movieData, setMovieData] = useState({
    creator: "",
    movieTitle: "",
    movieYear: "",
    movieDuration: "",
    movieGenre: "",
    movieDirectors: "",
    movieProduction: "",
    movieTrailer: "",
    movieCasts: "",
    movieDescription: "",
    selectedImage: "",
  });

  const movie = useSelector((state) =>
    movieId
      ? state.movies.movies.find((message) => message._id === movieId)
      : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (movie) setMovieData(movie);
  }, [movie]);

  const clear = () => {
    setmovieId(0);
    setMovieData({
      creator: "",
      movieTitle: "",
      movieYear: "",
      movieDuration: "",
      movieGenre: "",
      movieDirectors: "",
      movieProduction: "",
      movieTrailer: "",
      movieCasts: "",
      movieDescription: "",
      selectedImage: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (movieId === 0) {
      dispatch(createMovies({ ...movieData }));
      alert("Movie Successfully Added");
      clear();
    } else {
      dispatch(updateMovies(movieId, { ...movieData }));
      alert("Movie Successfully Updated");
      clear();
    }
  };

  return (
    <div className="mt-3 rounded-lg bg-white flex flex-col p-3 px-4 shadow-2xl">
      <div class="flex flex-wrap w-full mb-4 p-4">
        <div class="w-full mb-6 lg:mb-0">
          <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">
            {movieId ? `Editing "${movie?.movieTitle}"` : "Add Movie"}
          </h1>
          <div class="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
      </div>

      {/* 1st form row */}
      <div class="grid grid-cols-1 gap-2 mt-2 sm:grid-cols-4">
        {/* Creator input */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Creator</span>
          </label>
          <input
            type="text"
            class="input input-info input-bordered"
            placeholder="Add Creator"
            name="creator"
            value={movieData.creator}
            onChange={(e) =>
              setMovieData({ ...movieData, creator: e.target.value })
            }
          />
        </div>

        {/* Movie Title input */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Movie Title</span>
          </label>
          <input
            type="text"
            class="input input-info input-bordered"
            placeholder="Add Movie Title"
            name="movieTitle"
            value={movieData.movieTitle}
            onChange={(e) =>
              setMovieData({ ...movieData, movieTitle: e.target.value })
            }
          />
        </div>

        {/* Movie Year input */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Movie Year</span>
          </label>
          <input
            type="text"
            class="input input-info input-bordered"
            placeholder="Add Movie Year"
            name="movieYear"
            value={movieData.movieYear}
            onChange={(e) =>
              setMovieData({ ...movieData, movieYear: e.target.value })
            }
          />
        </div>

        {/* Duration input */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Duration</span>
          </label>
          <input
            type="text"
            class="input input-info input-bordered"
            placeholder="Add Movie Duration"
            name="movieDuration"
            value={movieData.title}
            onChange={(e) =>
              setMovieData({ ...movieData, movieDuration: e.target.value })
            }
          />
        </div>
      </div>

      {/* 2nd form row */}
      <div class="grid grid-cols-1 gap-2 mt-2 sm:grid-cols-4">
        {/* Genre input */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Genre</span>
          </label>
          <input
            type="text"
            class="input input-info input-bordered"
            placeholder="Add Movie Genre (Add comma every after items)"
            name="movieGenre"
            value={movieData.movieGenre}
            onChange={(e) =>
              setMovieData({
                ...movieData,
                movieGenre: e.target.value.split(","),
              })
            }
          />
        </div>

        {/* Directors input */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Directors</span>
          </label>
          <input
            type="text"
            class="input input-info input-bordered"
            placeholder="Add Movie Directors (Add comma every after items)"
            name="movieDirectors"
            value={movieData.movieDirectors}
            onChange={(e) =>
              setMovieData({ ...movieData, movieDirectors: e.target.value })
            }
          />
        </div>

        {/* Production Companies input */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Production Companies</span>
          </label>
          <input
            type="text"
            class="input input-info input-bordered"
            placeholder="Add Production Companies (Add comma every after items)"
            name="movieProduction"
            value={movieData.movieProduction}
            onChange={(e) =>
              setMovieData({ ...movieData, movieProduction: e.target.value })
            }
          />
        </div>

        {/* Trailer input */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Trailer Link</span>
          </label>
          <input
            type="text"
            class="input input-info input-bordered"
            placeholder="Add Trailer"
            name="movieTrailer"
            value={movieData.title}
            onChange={(e) =>
              setMovieData({ ...movieData, movieTrailer: e.target.value })
            }
          />
        </div>
      </div>

      {/* 3rd form row */}
      <div class="grid grid-cols-1 gap-2 mt-2 sm:grid-cols-3">
        {/* Movie Casts input */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Casts</span>
          </label>
          <textarea
            type="text"
            class="resize-none textarea textarea-bordered textarea-info h-32"
            placeholder="Add Movie Casts"
            name="movieCasts"
            value={movieData.movieCasts}
            onChange={(e) =>
              setMovieData({
                ...movieData,
                movieCasts: e.target.value.split(","),
              })
            }
          />
        </div>

        {/* Movie Description input */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Movie Description</span>
          </label>
          <textarea
            type="text"
            class="resize-none textarea textarea-bordered textarea-info h-32"
            placeholder="Add Movie Description"
            name="movieDescription"
            value={movieData.movieDescription}
            onChange={(e) =>
              setMovieData({ ...movieData, movieDescription: e.target.value })
            }
          />
        </div>

        {/* Movie Image input */}
        <div class="form-control">
          <label class="label">
            <span class="label-text">Movie Image:</span>
          </label>
          <div class="flex justify-center px-5 py-4 border-2 border-gray-300 border-dashed rounded-md">
            <div class="space-y-1 text-center">
              <div>
                <i className="fas fa-images text-green-500"></i>
              </div>
              <div class="justify-center text-sm text-gray-600">
                <div>
                  <label
                    for="file-upload"
                    class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span class="">Upload a file </span>
                  </label>
                </div>
                <div>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setMovieData({ ...movieData, selectedImage: base64 })
                    }
                  />
                </div>
              </div>
              <p class="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex space-x-3 text-sm">
        <button
          className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md"
          onClick={clear}
        >
          <div>
            <i className="fas fa-trash-alt text-red-500"></i>
          </div>
          <div>
            <p className="font-semibold text-gray-500">Clear</p>
          </div>
        </button>
        <button
          className="flex-1 flex items-center h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md"
          type="submit"
          onClick={handleSubmit}
        >
          <div>
            <i className="far fa-save text-blue-400"></i>
          </div>
          <div>
            <p className="font-semibold text-gray-500">Save Movie</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AddMovies;
