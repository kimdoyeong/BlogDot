const mongoose = require("mongoose");
const FieldNotExistError = require("../lib/errors/FieldNotExist");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  post: {
    type: String,
    required: true
  },
  id: {
    type: String,
    unique: true
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
    required: true
  }
});

PostSchema.pre("save", function() {
  if (!this.post || !this.title || !this.user) {
    throw new FieldNotExistError();
  }
});

const Post = mongoose.model("post", PostSchema);

module.exports = Post;
