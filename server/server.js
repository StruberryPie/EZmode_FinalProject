const path = require("path");
const express = require("express");

const PORT = 8000;

express()
  .use(express.json())

  // api functions
  /////////////////////////////////////////

  /////////////////////////////////////////

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(PORT, function () {
    console.info("🌎 Listening on port " + PORT);
  });
