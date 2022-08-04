/** @format */

const path = require("path");
const fs = require("fs");
const { OLevelTopicalData } = require("../models/O-Topical");
const cloudinary = require("../utils/cloudinary");

async function getTopic(req, res) {
  try {
    const topic = await OLevelTopicalData.find();
    res.send(topic);
  } catch (error) {}
}
async function getTopicById(req, res) {
  try {
    const topic = await OLevelTopicalData.find({
      subject: req.params.subject,
      topic: req.params.topic,
    });
    console.log(topic);
    res.send(topic);
  } catch (error) {
    console.log("Error: " + error);
  }
}

async function postTopic(req, res) {
  try {
    const urls = Object.values(req.files).map(async (file) => {
      const cloudData = await cloudinary.uploader.upload(
        path.join(__dirname, "../upload/", file[0].filename),
        (err, result) => {
          if (err) console.log("err: " + err);
          else
            fs.unlinkSync(path.join(__dirname, "../upload/", file[0].filename));
        }
      );
      console.log(__dirname);
      return cloudData.url;
    });

    const topic = await OLevelTopicalData.create({
      subject: req.body.subject,
      topic: req.body.topic,
      year: req.body.year,
      month: req.body.month,
      category: req.body.category,
      paper: req.body.paper,
      question: await urls[0],
      answer: await urls[1],
    });
    res.send("file uploaded");
  } catch (error) {
    console.log("Error: " + error);
  }
}

module.exports = { getTopic, postTopic, getTopicById };
