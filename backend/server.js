const express = require("express");
const connectDB = require("./src/config/db");
const authRoutes = require("./src/routes/route");

require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Bideya Boost <3");
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));