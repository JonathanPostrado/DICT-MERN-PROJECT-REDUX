import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  FETCH_MOVIE,
} from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getMovie = (id) => async (dispatch) => {
  try {
    const { data } = await api.getMoviesDetailsApi(id);

    dispatch({ type: FETCH_MOVIE, payload: { movie: data } });
  } catch (error) {
    console.log(error.message);
  }
};
export const getMovieList = () => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.getMoviesApi();

    dispatch({ type: FETCH_ALL, payload: { data } });
  } catch (error) {
    console.log(error.message);
  }
};

export const createMovies = (movie) => async (dispatch) => {
  try {
    const { data } = await api.createMoviesApi(movie);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateMovies = (id, movie) => async (dispatch) => {
  try {
    const { data } = await api.updateMoviesApi(id, movie);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteMovies = (id) => async (dispatch) => {
  try {
    await api.deleteMoviesApi(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
