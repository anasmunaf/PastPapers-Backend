/** @format */

const annualData = require("../models/yearly");
const path = require("path");
// const cloudinary = require("../utils/cloudinary");

const getYear = async (req, res) => {
  try {
    const papers = await annualData.find();
    res.send(papers);
  } catch (error) {
    console.log("Error:" + error);
  }
};

const getYearById = async (req, res) => {
  try {
    const papers = await annualData.findById(req.params.id);
    res.send(papers);
  } catch (error) {
    console.log("Error:" + error);
  }
};

const postYear = async (req, res) => {
  try {
    // const file = await cloudinary.uploader.upload(
    //   req.file.path,
    //   (err, result) => {
    //     if (err) console.log("err: " + err);
    //     else console.log(result);
    //   },
    // );

    const paper = await annualData.create({
      subject: req.body.subject,
      year: req.body.year,
      month: req.body.month,
      category: req.body.category,
      paper: req.body.paper,
      pdf: req.file,
    });

    res.send("Single file uploaded");
  } catch (error) {
    console.log("Error: " + error);
  }
};

const updateYear = async (req, res) => {
  try {
    const paper = await annualData.findByIdAndUpdate(req.params.id, {
      subject: req.body.subject,
      year: req.body.year,
      month: req.body.month,
      category: req.body.category,
      paper: req.body.paper,
      pdf: req.file,
    });
    res.send("Update");
  } catch (error) {
    console.log("Error: " + error);
  }
};
const deleteYear = async (req, res) => {
  try {
    const paper = await annualData.findByIdAndDelete(req.params.id);
    res.send("Delete");
  } catch (error) {
    console.log("Error: " + error);
  }
};
module.exports = {
  getYear,
  getYearById,
  postYear,
  updateYear,
  deleteYear,
};
