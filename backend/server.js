const express = require("express");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// Middleware
server.use(express.json());
server.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, { dbName: "Skeleton" })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Model for Contacts
const Contacts = mongoose.model(
  "Contacts",
  new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
  })
);

// Model for Users
const Users = mongoose.model(
  "Users",
  new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    created: Date,
    update: Date,
  })
);

//Home route
server.get("/", (req, res) => {
    res.json({"message": "Welcome to My Portfolio application."});
});

// CRUD API for Contacts

//Get all contacts
server.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contacts.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get a contact by ID
server.get("/api/contacts/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const contacts = await Contacts.findById(id);
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Create a new contact
server.post("/api/contacts", async (req, res) => {
  try {
    const contacts = req.body;
    const response = await Contacts.create(contacts);
    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Update a contact by ID
server.put("/api/contacts/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const response = await Contacts.findByIdAndUpdate(id, req.body, {new: true});
        res.json(response);
    } catch(err){
        res.status(500).json({message: err.message});
    }
})

//Delete a contact by ID
server.delete("/api/contacts/:id", async (req,res) => {
    try{
        const id = req.params.id;
        const response = await Contacts.findByIdAndDelete(id);
        res.json(response);
    } catch(err){
        res.status(500).json({message: err.message});
    }
})

//Delete all contacts
server.delete("/api/contacts", async (req, res) => {
    try{
        const response = await Contacts.deleteMany({});
        res.json(response);
    } catch(err){
        res.status(500).json({message: err.message});
    }
})

// CRUD API for Users

//Get all users
server.get("/api/users", async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get a users by ID
server.get("/api/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await Users.findById(id);
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Create a new users
server.post("/api/users", async (req, res) => {
  try {
    const users = req.body;
    const response = await Users.create(users);
    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Update a users by ID
server.put("/api/users/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const response = await Users.findByIdAndUpdate(id, req.body, {new: true});
        res.json(response);
    } catch(err){
        res.status(500).json({message: err.message});
    }
})

//Delete a users by ID
server.delete("/api/users/:id", async (req,res) => {
    try{
        const id = req.params.id;
        const response = await Users.findByIdAndDelete(id);
        res.json(response);
    } catch(err){
        res.status(500).json({message: err.message});
    }
})

//Delete all users
server.delete("/api/users", async (req, res) => {
    try{
        const response = await Users.deleteMany({});
        res.json(response);
    } catch(err){
        res.status(500).json({message: err.message});
    }
})

server.listen(process.env.PORT, () => {
  console.log("Server is running on port: ", process.env.PORT);
});
