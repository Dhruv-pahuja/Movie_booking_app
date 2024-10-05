import { getAllUsers, signup } from "../controllers/user-controllers.js";
import express from 'express';

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", signup);

export default userRouter;

// 51:22