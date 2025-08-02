import express from "express";
const router = express.Router();
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.controller.js";

// GET USER
router.get("/find/:userId", getUser);

// UPDATE USERS
router.put("/:id", updateUser);

// GET ALL USERS
router.get("/", getAllUser);

// DELETE USERS
router.delete("/:id", deleteUser);

export default router;
