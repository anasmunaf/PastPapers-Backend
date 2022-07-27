const express = require("express");
const { getTopic, postTopic } = require("../controllers/O-Topical");
const O_TopicalRoutes = express.Router();

O_TopicalRoutes.route("/:subject").get(getTopic).post(postTopic);
// O_TopicalRoutes.route("/:id")
//   .get(getYearById)
//   .put(upload.single("pdf"), updateYear)
//   .delete(deleteYear);
// O_TopicalRoutes.route("/pdf/:id").get(getPdfById);
module.exports = O_TopicalRoutes;
