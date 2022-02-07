/** @format */

const mongoose = require("mongoose");

const annualSchema = mongoose.Schema({
  subject: {
    type: String,
    required: [true, "Subject entry is required"],
    enum: ["math", "physics", "chemistry"],
  },
  year: {
    type: Number,
    required: [true, "Subject entry is required"],
    min: 15,
    max: 20,
  },
  month: {
    type: String,
    required: [true, "month entry is required"],
    enum: ["s", "w"],
  },
  category: {
    type: String,
    required: [true, "category entry is required"],
    enum: ["qp", "ms"],
  },
  paper: {
    type: Number,
    required: [true, "paper entry is required"],
    enum: [1, 2],
  },
  pdf: {
    type: Object,
    require: true,
  },
});

const annualData = mongoose.model("Yearlies", annualSchema);

module.exports = annualData;
