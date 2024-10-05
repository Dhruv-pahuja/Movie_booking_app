import express from 'express';
import { addAdmin } from '../controllers/admin-controllers.js';

const adminRouter = express.Router();

adminRouter.post("/signup", addAdmin);
adminRouter.post("/login", addAdmin);

export default adminRouter;