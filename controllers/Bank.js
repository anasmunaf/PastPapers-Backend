const { BankData } = require("../models/O-Topical");

async function postBank(urls, id) {
  await BankData.create({
    topicId: id,
    question: urls[0],
    answer: urls[1],
  });
}

async function getBank() {
  try {
    const cloudData = await cloudinary.search
      .execute()
      .then((result) => console.log(result));
  } catch (error) {
    console.log("Error: " + error);
  }
}
module.exports = { postBank };
