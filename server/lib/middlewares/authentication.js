const token = require("../tokenUtill");

exports.auth = (req, res, next) => {
  const jwt = req.headers["x-access-token"];
  (async () => {
    try {
      res.locals.user = await token.validate(jwt);
      next();
    } catch (e) {
      if (e.name === "JsonWebTokenError") {
        return res.status(400).json({
          success: false,
          message: "올바르지 않은 토큰입니다."
        });
      } else if (e.name === "TokenExpiredError") {
        return res.status(422).json({
          success: false,
          message: "이미 만료된 토큰입니다."
        });
      }
      throw e;
    }
  })();
};
