const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config({ path: "./.env" });
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// api functions
/////////////////////////////////////////////////////

const getAllProfiles = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("EZmode");

    const results = await db.collection("Profiles").find().toArray();

    if (results.length > 0) {
      res.status(200).json({ status: 200, message: "profiles found", results });
      client.close();
    } else {
      res.status(404).json({ status: 404, message: "profiles not found" });
      client.close();
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

/////////////////////////////////////////////////////

const getProfile = async (req, res) => {
  const { _id } = req.params;

  try {
    const client = new MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("EZmode");

    const results = await db.collection("Profiles").findOne({ _id });

    if (results) {
      res.status(200).json({ status: 200, message: "profile found", results });
      client.close();
    } else {
      res.status(404).json({ status: 404, message: "profile not found" });
      client.close();
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

/////////////////////////////////////////////////////

const getEmail = async (req, res) => {
  const { email } = req.params;

  try {
    const client = new MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("EZmode");

    const results = await db.collection("Profiles").findOne({ email });

    if (results) {
      res.status(200).json({ status: 200, message: "email found", results });
      client.close();
    } else {
      res.status(404).json({ status: 404, message: "email not found" });
      client.close();
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

/////////////////////////////////////////////////////

const addProfile = async (req, res) => {
  const { _id, username, email, password } = req.body;
  const newProfile = { _id: uuidv4(), ...req.body };

  try {
    const client = new MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("EZmode");

    if (!username || !email || !password) {
      res.status(404).json({ status: 404, message: "all fields not filled" });
      client.close();
    } else if (!email.includes("@") || !email.includes(".")) {
      res.status(404).json({ status: 404, message: "not a proper email" });
      client.close();
    } else {
      const results = await db.collection("Profiles").insertOne(newProfile);
      res.status(200).json({ status: 200, message: "profile added", results });
      client.close();
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

/////////////////////////////////////////////////////

const updateProfile = async (req, res) => {
  const { _id } = req.params;
  const query = { _id };
  const newValues = { $set: { ...req.body } };

  try {
    const client = new MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("EZmode");

    const results = await db.collection("Profiles").updateOne(query, newValues);

    res.status(201).json({ status: 201, message: "profile updated", results });

    client.close();
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

/////////////////////////////////////////////////////

const removeProfile = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("EZmode");

    const results = await db.collection("Profiles").deleteOne(req.body);

    res.status(204).json({ status: 204, message: "profile deleted", results });

    client.close();
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

/////////////////////////////////////////////////////

const getAllCharacters = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("EZmode");

    const results = await db.collection("Characters").find().toArray();

    if (results.length > 0) {
      res
        .status(200)
        .json({ status: 200, message: "characters found", results });
      client.close();
    } else {
      res.status(404).json({ status: 404, message: "characters not found" });
      client.close();
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

/////////////////////////////////////////////////////

const getCharacter = async (req, res) => {
  const { _id } = req.params;

  try {
    const client = new MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("EZmode");

    const results = await db.collection("Characters").findOne({ _id });

    if (results) {
      res
        .status(200)
        .json({ status: 200, message: "character found", results });
      client.close();
    } else {
      res.status(404).json({ status: 404, message: "character not found" });
      client.close();
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

/////////////////////////////////////////////////////

const getCharacterByEmail = async (req, res) => {
  const { email } = req.params;

  try {
    const client = new MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("EZmode");

    const results = await db.collection("Characters").find({ email }).toArray();

    if (results) {
      res
        .status(200)
        .json({ status: 200, message: "character by email found", results });
      client.close();
    } else {
      res
        .status(404)
        .json({ status: 404, message: "character by email not found" });
      client.close();
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

/////////////////////////////////////////////////////

const addCharacter = async (req, res) => {
  const { email, character } = req.body;
  const newCharacter = { _id: uuidv4(), ...req.body };

  try {
    const client = new MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("EZmode");

    if (!email || !character) {
      res.status(404).json({ status: 404, message: "all fields not filled" });
      client.close();
    } else if (!email.includes("@") || !email.includes(".")) {
      res.status(404).json({ status: 404, message: "not a proper email" });
      client.close();
    } else {
      const results = await db.collection("Characters").insertOne(newCharacter);
      res
        .status(200)
        .json({ status: 200, message: "character added", results });
      client.close();
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

/////////////////////////////////////////////////////

const updateCharacter = async (req, res) => {
  const { _id } = req.params;
  const query = { _id };
  const newValues = { $set: { ...req.body } };

  try {
    const client = new MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("EZmode");

    const results = await db
      .collection("Characters")
      .updateOne(query, newValues);

    res
      .status(201)
      .json({ status: 201, message: "character updated", results });

    client.close();
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

/////////////////////////////////////////////////////

const removeCharacter = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("EZmode");

    const results = await db.collection("Characters").deleteOne(req.body);

    res
      .status(204)
      .json({ status: 204, message: "character deleted", results });

    client.close();
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

/////////////////////////////////////////////////////

module.exports = {
  getAllProfiles,
  getProfile,
  getEmail,
  addProfile,
  removeProfile,
  updateProfile,
  getAllCharacters,
  getCharacter,
  getCharacterByEmail,
  addCharacter,
  updateCharacter,
  removeCharacter,
};
