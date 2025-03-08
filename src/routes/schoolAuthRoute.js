import express from "express";
import { signup, login } from "../controllers/auth/schoolAuthController.js";

const router = express.Router();

router.post("/schoolSignup", signup);
router.post("/schoolLogin", login);

export default router;
