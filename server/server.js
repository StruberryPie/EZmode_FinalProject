const path = require("path");
const express = require("express");
const {
  getAllProfiles,
  getProfile,
  addProfile,
  removeProfile,
  updateProfile,
} = require("./handlers");

const PORT = 8000;

express()
  .use(express.json())

  // resting api
  /////////////////////////////////////////

  .get("/api/profiles", getAllProfiles)

  .get("/api/profiles/:_id", getProfile)

  .post("/api/profiles", addProfile)

  .put("/api/profiles/:_id", updateProfile)

  .delete("/api/profiles/:_id", removeProfile)

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
