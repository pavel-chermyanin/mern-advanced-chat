const express = require("express");
const dotenv = require("dotenv");
const data = require("./data/data");
const cors = require('cors')
const connectDB = require('./config/db')
const colors = require('colors');
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");



dotenv.config();
connectDB()
const app = express();
app.use(cors())
app.use(express.json())


// Routes
app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)
app.use("/api/message", messageRoutes);

// Middleware
app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`.blue.bold);
});
