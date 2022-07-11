const { pdfData } = require("../models/yearly");

const getPdf = async (req, res) => {
  try {
    const pdf = await pdfData.find().populate("annualId");
    res.send(pdf);
  } catch (error) {
    console.log("Error:" + error);
  }
};

const getPdfById = async (req, res) => {
  try {
    const pdf = await pdfData.findOne({ annualId: req.params.id });
    res.send(pdf);
  } catch (error) {
    console.log("Error:" + error);
  }
};

const postPdf = async (id, file) => {
  try {
    await pdfData.create({
      annualId: id,
      pdf: file,
    });
  } catch (error) {
    console.log("Error: " + error);
  }
};

const updatePdf = async (id, file) => {
  try {
    await pdfData.findOneAndUpdate({ annualId: id }, { pdf: file });
  } catch (error) {
    console.log("Error: " + error);
  }
};
const deletePdf = async (id) => {
  try {
    await pdfData.findOneAndDelete({ annualId: id });
  } catch (error) {
    console.log("Error: " + error);
  }
};

module.exports = { getPdf, getPdfById, postPdf, updatePdf, deletePdf };
