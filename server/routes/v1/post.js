const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Post = require("../../models/Post");
const auth = require("../../lib/middlewares/authentication");
router.post("/", auth.auth, (req, res) => {
  const { post, title, id } = req.body;
  const p = new Post({
    post,
    title,
    id,
    user: res.locals.user._id
  });

  (async () => {
    const savedData = await p.save();
    res.status(201).json({
      success: true,
      id: id || savedData._id
    });
  })();
});

router.get("/:id", (req, res) => {
  (async () => {
    let p = await Post.findOne({ id: req.params.id }).populate("user", [
      "username"
    ]);
    if (!p) {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(404).json({
          success: false,
          message: "글을 찾을 수 없습니다."
        });
        return;
      }
      p = await Post.findById(req.params.id).populate("user", ["username"]);
      if (!p) {
        res.status(404).json({
          success: false,
          message: "글을 찾을 수 없습니다."
        });
        return;
      }
    }
    res.json(p);
  })();
});

module.exports = router;
