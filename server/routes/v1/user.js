const express = require("express");
const User = require("../../models/User");
const Code = require("../../models/Code");
const validateCode = require("../../lib/validateCode");

const router = express.Router();
router.get("/:id", (req, res) => {
  User.findOne({ id: req.params.id })
    .then(value => {
      if (!value) {
        res.status(404).json({
          message: "Not Found",
          success: false
        });
        return;
      }
      res.status(200).json({
        success: true,
        ...value
      });
    })
    .catch(e => {
      console.error(e);
    });
});

router.post("/", (req, res) => {
  const { id, pw, username, code } = req.body;

  (async () => {
    const validation = await validateCode(code);
    if (!validation) {
      res.status(403).json({
        success: false,
        message: "유효하지 않은 코드입니다."
      });
      return;
    }
    try {
      const user = new User({
        id,
        pw,
        username
      });
      await user.save();
      res.status(201).json({ success: true });
    } catch (e) {
      if (e.name === "MongoError") {
        if (e.code === 11000) {
          res.status(422).json({
            success: false,
            message: "유저가 이미 존재합니다."
          });
          return;
        }
      }
      await Code.deleteOne({ _id: validation });
      res.status(500).json({
        success: false,
        message: e.message
      });
    }
  })();
});

module.exports = router;
