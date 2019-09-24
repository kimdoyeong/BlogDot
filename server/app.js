const express = require("express");
const cors = require("cors");

const v1 = require("./routes/v1");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/v1", v1);

app.use((err, req, res, next) => {
  if (err.show) {
    res.status(err.status || 500).json({
      success: false,
      message: err.message
    });
    return;
  }
  res.status(500).json({
    success: false,
    message: "서버에서 오류가 발생했습니다."
  });

  console.error(err);
});

module.exports = app;
