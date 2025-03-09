import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const addSchool = async (req, res) => {
  try {
    const {
      name,
      code,
      address,
      contact,
      email,
      principal,
      established,
      password,
    } = req.body;

    const existingSchool = await prisma.school.findUnique({
      where: { code },
    });

    if (existingSchool) {
      return res
        .status(409)
        .json({ success: false, message: "School already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newSchool = await prisma.school.create({
      data: {
        fullName: name,
        code,
        address,
        contact: Number(contact),
        email,
        principal,
        established: Number(established),
        password: hashedPassword,
      },
    });

    res.status(201).json({
      success: true,
      message: "School added successfully!",
      school: newSchool,
    });
  } catch (error) {
    console.error("Error adding school:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
