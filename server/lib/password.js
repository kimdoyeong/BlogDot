const crypto = require("crypto");

const salt = process.env.SALT || "easy_salt";
const password = pw => {
  return crypto.pbkdf2Sync(pw, salt, 100000, 64, "sha512").toString("base64");
};

module.exports = password;
