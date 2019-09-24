const express = require("express");
const validateCode = require("../../lib/validateCode");

const router = express.Router();

router.get("/:code", (req, res) => {
  const { code } = req.params;
  validateCode(code).then(v => {
    if (v) {
      res.json({ success: true, validation: true });
    } else {
      res.status(404).json({
        success: false,
        validation: false,
        message: "코드를 찾을 수 없습니다."
      });
    }
  });
});
module.exports = router;
