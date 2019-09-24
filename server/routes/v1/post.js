const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");
const auth = require("../../lib/middlewares/authentication");
router.post("/", auth.auth, (req, res) => {
  const { post, title } = req.body;
  const p = new Post({
    post,
    title,
    user: res.locals.user._id
  });

  (async () => {
    const savedData = p.save();

    res.status(201).json({
      success: true,
      id: savedData._id
    });
  })();
});

module.exports = router;
