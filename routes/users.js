import express from "express";

import {
    registerUser,
    getUsers
} from "../controllers/userController.js";

const router = express.Router();

// Register User
router.post("/register", registerUser);

// Get All Users
router.get("/", getUsers);

export default router;