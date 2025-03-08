import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import adminRoute from "./routes/adminAuthRoute.js";
import schoolRoute from "./routes/schoolAuthRoute.js";
import teacherRoute from "./routes/teacherAuthRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const prisma = new PrismaClient();

app.use(cors());
app.use(cookieParser());
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded requests

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", adminRoute);
app.use("/api", schoolRoute);
app.use("/api", teacherRoute);

// Check Prisma Database Connection
async function checkDatabaseConnection() {
  try {
    await prisma.$connect();
    console.log("Connected to the database successfully!");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
}

checkDatabaseConnection();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong!",
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
