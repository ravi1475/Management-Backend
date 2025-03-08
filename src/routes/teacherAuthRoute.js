import express from "express";
import { signup, login } from "../controllers/auth/teacherAuthController.js";

const router = express.Router();

router.post("/teacherSignup", signup);
router.post("/teacherLogin", login);

export default router;
