import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/post.js";
import userRouter from "./routes/user.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRouter);

const database_url = process.env.DB_URL;
try {
  await mongoose.connect(database_url);
  console.log("database connection is established");
} catch (error) {
  console.log(error);
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
