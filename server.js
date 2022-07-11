/** @format */

const express = require("express");
const dotenv = require("dotenv");
const ConnectDB = require("./config/db");
const AnnualRoutes = require("./routes/yearly");
const cors = require("cors");

dotenv.config({ path: "./config/.env" });
ConnectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/yearly/", AnnualRoutes);
app.use(express.static(__dirname));
const port = process.env.PORT || config.get("port");
app.listen(port, () => {
  console.log("Connected to Server at port: " + port);
});
