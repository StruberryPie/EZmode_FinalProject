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

    if (results) {
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
  try {
    const client = new MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("EZmode");

    const results = await db.collection("Profiles").findOne({ username });

    if (results) {
      res.status(200).json({ status: 200, message: "profile found", results });
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
  //   try {
  //     const client = new MongoClient(MONGO_URI, options);
  //     await client.connect();
  //     const db = client.db("EZmode");
  //     const results = await db.collection("Profiles").findOne({ username });
  //     if (results) {
  //       res.status(200).json({ status: 200, message: "profile found", results });
  //     } else {
  //       res.status(404).json({ status: 404, message: "profile not found" });
  //       client.close();
  //     }
  //   } catch (error) {
  //     res.status(500).json({ status: 500, message: error.message });
  //   }
};

/////////////////////////////////////////////////////

const updateProfile = async (req, res) => {
  //   try {
  //     const client = new MongoClient(MONGO_URI, options);
  //     await client.connect();
  //     const db = client.db("EZmode");
  //     const results = await db.collection("Profiles").findOne({ username });
  //     if (results) {
  //       res.status(200).json({ status: 200, message: "profile found", results });
  //     } else {
  //       res.status(404).json({ status: 404, message: "profile not found" });
  //       client.close();
  //     }
  //   } catch (error) {
  //     res.status(500).json({ status: 500, message: error.message });
  //   }
};

/////////////////////////////////////////////////////

const removeProfile = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("EZmode");

    const results = await db.collection("Profiles").deleteOne(req.body);

    res.status(204).json({ status: 204, message: "profile deleted" });
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
