import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from "./routes/user-routes";
import adminRouter from "./routes/admin-routes";
dotenv.config();
const app = express();

const mongoose = require('mongoose');

// middlewares
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);

mongoose
.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.tvrfhnu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
)

.then(() =>
     app.listen(5000, ()=>
        console.log("Connected to Database and Server is running")
)
)
.catch((e) => console.log(e));

