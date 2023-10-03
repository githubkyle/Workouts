const mongoose = require("mongoose");
const workoutSchema = require("./Workouts");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  workouts: [workoutSchema],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
