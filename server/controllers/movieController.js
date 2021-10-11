import express from "express";
import mongoose from "mongoose";

import MovieModel from "../models/movieModel.js";

const router = express.Router();

export const getMovieList = async (req, res) => {
  try {
    const movieList = await MovieModel.find();

    res.status(200).json({ data: movieList });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getMovie = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await MovieModel.findById(id);

    res.status(200).json(movie);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMovies = async (req, res) => {
  const {
    creator,
    movieTitle,
    movieYear,
    movieDuration,
    movieGenre,
    movieDirectors,
    movieProduction,
    movieTrailer,
    movieCasts,
    movieDescription,
    selectedImage,
  } = req.body;

  const newMovies = new MovieModel({
    creator,
    movieTitle,
    movieYear,
    movieDuration,
    movieGenre,
    movieDirectors,
    movieProduction,
    movieTrailer,
    movieCasts,
    movieDescription,
    selectedImage,
  });

  try {
    await newMovies.save();

    res.status(201).json(newMovies);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateMovies = async (req, res) => {
  const { id } = req.params;
  const {
    creator,
    movieTitle,
    movieYear,
    movieDuration,
    movieGenre,
    movieDirectors,
    movieProduction,
    movieTrailer,
    movieCasts,
    movieDescription,
    selectedImage,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No movies found in id: ${id}`);

  const updatedMovie = {
    creator,
    movieTitle,
    movieYear,
    movieDuration,
    movieGenre,
    movieDirectors,
    movieProduction,
    movieTrailer,
    movieCasts,
    movieDescription,
    selectedImage,
    _id: id,
  };

  await MovieModel.findByIdAndUpdate(id, updatedMovie, { new: true });

  res.json(updatedMovie);
};

export const deleteMovies = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No movies found in id: ${id}`);

  await MovieModel.findByIdAndRemove(id);

  res.json({ message: "Movie deleted." });
};

export default router;
