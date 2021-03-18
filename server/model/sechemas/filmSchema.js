const mongoose = require("mongoose");
// Person Schema

const FilmSchema = mongoose.Schema(
  {
    filmId: {
      type: String,
      unique: true,
    },
    characters: [String],
    release_date: {
      type: String,
    },
    producer: {
      type: String,
    },
    director: {
      type: String,
    },
    opening_crawl: {
      type: String,
    },
  },
  {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false,
  }
);

const FilmModel = mongoose.model("Films", FilmSchema, "film");
module.exports = FilmModel;
