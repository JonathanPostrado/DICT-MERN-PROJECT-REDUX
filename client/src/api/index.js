import axios from "axios";
const baseURL = "http://localhost:5000";

// API Call for movie details
const getMoviesDetailsApi = (id) => {
  const response = `${baseURL}/movies/${id}`;
  return axios.get(response);
};

// API Call to show all movies
const getMoviesApi = () => {
  const response = `${baseURL}/movies`;
  return axios.get(response);
};

// API Call to create movies
const createMoviesApi = (newMovie) => {
  const response = `${baseURL}/movies`;
  return axios.post(response, newMovie);
};

// API Call to update movies
const updateMoviesApi = (id, updatedMovie) => {
  const response = `${baseURL}/movies/${id}`;
  return axios.patch(response, updatedMovie);
};

// API Call to delete movies
const deleteMoviesApi = (id) => {
  const response = `${baseURL}/movies/${id}`;
  return axios.delete(response);
};

export {
  getMoviesDetailsApi,
  getMoviesApi,
  createMoviesApi,
  updateMoviesApi,
  deleteMoviesApi,
};
