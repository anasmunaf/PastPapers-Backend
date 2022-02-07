/** @format */

const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected..." + db.connection.host);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

module.exports = ConnectDB;
