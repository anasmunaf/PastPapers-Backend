/** @format */

const mongoose = require("mongoose");

const annualSchema = mongoose.Schema({
  subject: {
    type: String,
    required: [true, "Subject entry is required"],
    enum: ["Maths", "Physics", "Chemistry"],
  },
  year: {
    type: String,
    required: [true, "Year entry is required"],
    enum: ["2015", "2016", "2017", "2018", "2019", "2020"],
  },
  month: {
    type: String,
    required: [true, "month entry is required"],
    enum: ["Summer", "Winter"],
  },
  category: {
    type: String,
    required: [true, "category entry is required"],
    enum: ["QS", "MS"],
  },
  paper: {
    type: String,
    required: [true, "paper entry is required"],
    enum: ["P1", "P2"],
  },
});

const pdfSchema = mongoose.Schema({
  annualId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Yearlies",
    require: true,
  },
  pdf: {
    type: Object,
    require: true,
  },
});

const annualData = mongoose.model("Yearlies", annualSchema);
const pdfData = mongoose.model("Pdf", pdfSchema);

module.exports = { annualData, pdfData };
