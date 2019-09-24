const Code = require("../models/Code");

module.exports = async code => {
  const validation = await Code.findOne({ code });
  if (!validation) return false;
  return validation._id;
};
