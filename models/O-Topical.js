/** @format */

const mongoose = require("mongoose");

const OLevelTopicalSchema = mongoose.Schema({
  subject: {
    type: String,
    required: [true, "Subject entry is required"],
    enum: ["Maths", "Physics", "Chemistry", "Add Maths"],
  },
  topic: {
    type: String,
    required: [true, "Topic entry is required"],
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
  question: {
    type: String,
    required: [true, "Question entry is required"],
  },
  answer: {
    type: String,
    required: [true, "Answer entry is required"],
  },
});

const BankSchema = mongoose.Schema({
  topicId: [{ type: mongoose.Schema.Types.ObjectId, ref: "OLevelTopical" }],
  question: {
    type: String,
    required: [true, "Question entry is required"],
  },
  answer: {
    type: String,
    required: [true, "Answer entry is required"],
  },
});

const OLevelTopicalData = mongoose.model("OLevelTopical", OLevelTopicalSchema);
const BankData = mongoose.model("Bank", BankSchema);

module.exports = { OLevelTopicalData, BankData };
