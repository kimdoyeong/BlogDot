const express = require("express");
const User = require("../../models/User");

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

module.exports = router;
