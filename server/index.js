import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import moviesRoutes from "./routes/movieRoute.js";

const app = express();
const dbName = "merndb-redux";

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/movies", moviesRoutes);

(async () => {
  try {
    await mongoose.connect(
      `mongodb://localhost:27017/${dbName}?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`
    );
    console.log("Successfully connected to mongodb");
  } catch (err) {
    console.log(err);
  }

  app.listen(5000, () => {
    console.log("Server is running and listening to port 5000");
  });
})();
