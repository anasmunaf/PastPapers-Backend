/** @format */

const multer = require("multer");
const express = require("express");
const {
  getYear,
  postYear,
  updateYear,
  deleteYear,
  getYearById,
} = require("../controllers/yearly");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// const fileStorageEngine = require("../utils/multer");
// const upload = multer({ storage: fileStorageEngine });
const AnnualRoutes = express.Router();

AnnualRoutes.route("/").get(getYear).post(upload.single("pdf"), postYear);
AnnualRoutes.route("/:id")
  .get(getYearById)
  .put(upload.single("pdf"), updateYear)
  .delete(deleteYear);

module.exports = AnnualRoutes;
