/** @format */

const multer = require("multer");
const path = require("path");
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

module.exports = fileStorageEngine;
