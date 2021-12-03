const path = require("path");
const express = require("express");

const PORT = 8000;

express()
  .use(express.json())

  .listen(PORT, function () {
    console.info("🌎 Listening on port " + PORT);
  });
