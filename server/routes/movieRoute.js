import express from "express";
import {
  getMovieList,
  getMovie,
  createMovies,
  updateMovies,
  deleteMovies,
} from "../controllers/movieController.js";

const router = express.Router();

router.get("/", getMovieList);
router.get("/:id", getMovie);
router.post("/", createMovies);
router.patch("/:id", updateMovies);
router.delete("/:id", deleteMovies);

export default router;
