const { MongoClient } = require("mongodb");

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

module.exports = {
  getAllProfiles,
  getProfile,
  addProfile,
  removeProfile,
  updateProfile,
};
