import express from "express";
import { addAdmin } from "../controllers/adminFun/adminHandleController.js";

const router = express.Router();

router.post("/admin/users/add", addAdmin);

export default router;
