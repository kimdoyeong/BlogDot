const render = require("./build/ssr").default;
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  "/",
  express.static(path.resolve(__dirname, "../build"), {
    index: false
  })
);
console.log(path.resolve("../build/static"));

app.get("*", (req, res) => {
  const body = render(req);
  fs.readFile(path.resolve(__dirname, "../build/index.html"), (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(
      data
        .toString()
        .replace('<div id="root"></div>', '<div id="root">' + body + "</div>")
    );
  });
});

app.listen(PORT, () => {
  console.log(`App listens port ${PORT}`);
});
