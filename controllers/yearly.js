/** @format */

const annualData = require("../models/yearly");
const cloudinary = require("../utils/cloudinary");

const getYear = async (req, res) => {
  try {
    const papers = await annualData.find();
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

    console.log(req.file);
    res.send("Single file uploaded");
  } catch (error) {
    console.log("Error: " + error);
  }
};

const updateYear = async (req, res) => {
  const paper = await annualData.find({
    subject: req.params.sub,
    year: req.params.yr,
    month: req.params.mth,
    category: req.params.typ,
    paper: req.params.var,
  });
  console.log(paper);
  res.send(paper);
};

module.exports = {
  getYear,
  postYear,
  updateYear,
};
