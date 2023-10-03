const mongoose = require("mongoose");
const { Schema } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedWorkouts` array in User.js
const workoutSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  image: {
    type: String,
  },
});

module.exports = workoutSchema;
