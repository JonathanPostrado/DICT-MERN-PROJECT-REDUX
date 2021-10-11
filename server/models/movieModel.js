import mongoose from "mongoose";
const movieSchema = mongoose.Schema({
  creator: String,
  movieTitle: String,
  movieYear: Number,
  movieDuration: String,
  movieGenre: [String],
  movieDirectors: [String],
  movieProduction: [String],
  movieTrailer: String,
  movieCasts: [String],
  movieDescription: String,
  selectedImage: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var MovieModel = mongoose.model("MovieModel", movieSchema);

export default MovieModel;
