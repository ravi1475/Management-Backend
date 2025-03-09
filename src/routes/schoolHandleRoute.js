import express from "express";
import { addSchool } from "../controllers/schoolFun/addSchoolController.js";

const router = express.Router();

router.post("/addSchool", addSchool);

export default router;
