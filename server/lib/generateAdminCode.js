const Code = require("../models/Code");

const words = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvw";
function generateRandom(len = 16) {
  let w = "";
  for (let i = 0; i < len; i++) {
    w += words[Math.floor(Math.random() * words.length)];
  }
  return w;
}
module.exports = async () => {
  if (process.env.NODE_ENV === "development") {
    await Code.deleteMany();
  }
  const code = generateRandom();
  console.log(code);
  await new Code({
    code
  }).save();
};
