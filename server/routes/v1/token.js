const express = require("express");
const token = require("../../lib/tokenUtill");
const auth = require("../../lib/middlewares/authentication");
const router = express.Router();

router.post("/", (req, res) => {
  (async () => {
    const { id, pw } = req.body;
    const t = await token.sign(id, pw);
    if (!t) {
      return res.status(403).json({
        success: false,
        message: "아이디가 없거나 비밀번호가 같지 않습니다."
      });
    }
    res.json({
      success: true,
      token: t
    });
  })();
});

router.post("/validate", auth.auth, (req, res) => {
  res.json({
    success: true,
    data: res.locals.user
  });
});
module.exports = router;
