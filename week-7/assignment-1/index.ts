import express from "express";
const app = express();
import mongoose from "mongoose";
const port = 3000;
const authRoutes = require("./routes/auth");
const todoRoutes = require("./routes/todo");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

mongoose.connect(
  "mongodb+srv://captaincoder:captainCoder55@fullstackcourse.ifidch4.mongodb.net/?retryWrites=true&w=majority",
  { dbName: "courses" }
);
