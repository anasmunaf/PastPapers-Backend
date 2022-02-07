/** @format */

const express = require("express");
const { getYear, postYear, updateYear } = require("../controllers/yearly");
const fileStorageEngine = require("../utils/multer");
const multer = require("multer");

const upload = multer({ storage: fileStorageEngine });
const AnnualRoutes = express.Router();

AnnualRoutes.route("/").get(getYear).post(upload.single("pdf"), postYear);
AnnualRoutes.route("/:sub/:yr/:mth/:typ/:var").put(
  upload.single("pdf"),
  updateYear,
);

module.exports = AnnualRoutes;
