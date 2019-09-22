const mongoose = require("mongoose");
const password = require("../lib/password");

const userSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  pw: {
    type: String,
    set(v) {
      return password(v);
    },
    required: true
  },
  username: {
    type: String,
    required: true
  }
});

userSchema.methods.comparePassword = function(pw) {
  if (this.pw !== password(pw)) return false;
  return true;
};
const User = mongoose.model("user", userSchema);

module.exports = User;
