const express = require("express");
const router = express.Router();

const user = require("./user");
const code = require("./code");
const token = require("./token");
const post = require("./post");

router.use("/user", user);
router.use("/code", code);
router.use("/token", token);
router.use("/post", post);

module.exports = router;
