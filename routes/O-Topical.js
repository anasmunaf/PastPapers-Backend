/** @format */

const express = require("express");
const multer = require("multer");
const { getTopic, postTopic } = require("../controllers/O-Topical");
const O_TopicalRoutes = express.Router();
const fileStorageEngine = require("../utils/multer");
const upload = multer({ storage: fileStorageEngine });

O_TopicalRoutes.route("/:subject")
  .get(getTopic)
  .post(upload.single("image"), postTopic);
// O_TopicalRoutes.route("/:id")
//   .get(getYearById)
//   .put(upload.single("pdf"), updateYear)
//   .delete(deleteYear);
// O_TopicalRoutes.route("/pdf/:id").get(getPdfById);
module.exports = O_TopicalRoutes;
