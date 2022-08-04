/** @format */

const express = require("express");
const multer = require("multer");
const {
  getTopicById,
  postTopic,
  getTopic,
} = require("../controllers/O-Topical");
const O_TopicalRoutes = express.Router();
const fileStorageEngine = require("../utils/multer");
const upload = multer({ storage: fileStorageEngine });

O_TopicalRoutes.route("/:subject/:topic").get(getTopicById);
O_TopicalRoutes.route("/")
  .get(getTopic)
  .post(
    upload.fields([
      { name: "question", maxCount: 1 },
      { name: "answer", maxCount: 1 },
    ]),
    postTopic
  );
module.exports = O_TopicalRoutes;
