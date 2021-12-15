const path = require("path");
const express = require("express");
const {
  getAllProfiles,
  getProfile,
  getEmail,
  addProfile,
  removeProfile,
  updateProfile,
  getAllCharacters,
  getCharacter,
  addCharacter,
  updateCharacter,
  removeCharacter,
  getCharacterByEmail,
} = require("./handlers");

const PORT = 8000;

express()
  .use(express.json())

  // resting api
  /////////////////////////////////////////

  .get("/api/profiles", getAllProfiles)

  .get("/api/profiles/:_id", getProfile)

  .get("/api/profiles/email/:email", getEmail)

  .post("/api/profiles", addProfile)

  .put("/api/profiles/:_id", updateProfile)

  .delete("/api/profiles/:_id", removeProfile)

  .get("/api/characters", getAllCharacters)

  .get("/api/characters/:_id", getCharacter)

  .get("/api/chracters/email/:email", getCharacterByEmail)

  .post("/api/characters", addCharacter)

  .put("/api/characters/:_id", updateCharacter)

  .delete("/api/characters/:_id", removeCharacter)

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
