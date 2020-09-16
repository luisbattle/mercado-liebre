const path = require("path");
const express = require("express");
const { resolve } = require("path");
const app = express();

app.get("/", function (req, res) {
  let file = path.resolve("vistas/index.html");
  res.sendFile(file);
});

app.get("*", function (req, res) {
  if (req.url.endsWith(".css")) {
    let file = path.resolve("public/styles" + req.url);
    return res.sendFile(file);
  }

  let images = ["jpg", "jpeg", "gif", "png", "bmp", "webp", "svg"];
  let ext = req.url.split(".")[1];

  if (images.includes(ext)) {
    let file = path.resolve("public/images" + req.url);
    return res.sendFile(file);
  }
  res.send("Not found");
});

app.listen(3000, () => {
  console.log("##############################");
  console.log("#### Mercadoliebre server  ###");
  console.log("######### Running ############");
  console.log("##############################");
});
