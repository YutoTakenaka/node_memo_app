const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const controller = require("./controller");
const mongoose = require("mongoose");

app.use(express.json());

app.use(morgan("common"));

app.use("/memo", controller.memo());

mongoose.connect("mongodb://localhost:27017/nodeMemoApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
