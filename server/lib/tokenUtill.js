const jwt = require("jsonwebtoken");
const User = require("../models/User");
const key = process.env.JWT_SECRET || "server_secret";

const sign = payload => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, key, {}, (err, token) => {
      if (err) {
        return reject(err);
      }
      return resolve(token);
    });
  });
};

exports.sign = async (id, pw) => {
  const user = await User.findOne({ id }, ["id", "username", "_id", "pw"]);
  if (!user || !user.comparePassword(pw)) {
    return null;
  }
  const { username, _id } = user;
  return await sign({
    id,
    username,
    _id
  });
};

exports.validate = token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, key, (err, decored) => {
      if (err) return reject(err);
      resolve(decored);
    });
  });
};
