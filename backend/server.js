const express = require("express");
const dotenv = require("dotenv");
const data = require("./data/data");
const cors = require('cors')
const connectDB = require('./config/db')
const colors = require('colors')

dotenv.config();
connectDB()
const app = express();
app.use(cors())

app.get("/", (req, res) => {
  try {
    res.send("API works");
  } catch (error) {
    console.log(error);
  }
});
app.get("/api/chat", (req, res) => {
  try {
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
app.get("/api/chat/:id", (req, res) => {
  try {
    const singleChat = data.find((chat) => {
      return chat._id == req.params.id;
    });
    res.send(singleChat);
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`.blue.bold);
});
