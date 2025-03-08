import express from "express";
import { signup, login } from "../controllers/auth/adminAuthController.js";

const router = express.Router();

router.post("/adminSignup", signup);
router.post("/adminLogin", login);

export default router;
