const app = require("./app");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;
const db =
  process.env.DATABASE ||
  {
    production: "blogdot",
    development: "blogdot_dev",
    test: "blogdot_test"
  }[process.env.NODE_ENV || "development"];
const db_url = process.env.DATABASE_URL || "mongodb://localhost/" + db;
mongoose
  .connect(db_url, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listens port ${PORT}`);
    });
  });
