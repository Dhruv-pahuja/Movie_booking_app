import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";

dotenv.config();
const app = express();

// middlewares
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);


mongoose
  .connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.tvrfhnu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() =>
    app.listen(5000, () =>
      console.log("Connected to Database and Server is running")
    )
  )
  .catch((e) => console.log("Database connection error:", e));
