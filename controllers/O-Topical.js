import { OLevelTopicalData } from "../models/O-Topical";

const O_TopicalRoutes = require("../model/O-Topical");
const cloudinary = require("../utils/cloudinary");

async function getTopic(req, res) {
  try {
    const topic = await OLevelTopicalData.find();
    res.send(topic);
  } catch (error) {}
}

async function postTopic(req, res) {
  try {
    const file = await cloudinary.uploader.upload(
      req.file.path,
      (err, result) => {
        if (err) console.log("err: " + err);
        else console.log(result);
      }
    );
    console.log(file);
    // const topic = await OLevelTopicalData.create({
    //   subject: req.body.subject,
    //   year: req.body.year,
    //   month: req.body.month,
    //   category: req.body.category,
    //   paper: req.body.paper,
    // });
    res.send("file uploaded");
  } catch (error) {
    console.log("Error: " + error);
  }
}

export { getTopic, postTopic };
