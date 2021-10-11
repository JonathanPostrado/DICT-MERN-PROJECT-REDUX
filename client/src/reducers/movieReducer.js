import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  FETCH_MOVIE,
} from "../constants/actionTypes";

const movieReduce = (state = { isLoading: true, movies: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        movies: action.payload.data,
      };
    case FETCH_MOVIE:
      return { ...state, movie: action.payload.movie };
    case CREATE:
      return { ...state, movies: [...state.movies, action.payload] };
    case UPDATE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie._id === action.payload._id ? action.payload : movie
        ),
      };
    case DELETE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie._id !== action.payload),
      };
    default:
      return state;
  }
};

export default movieReduce;
