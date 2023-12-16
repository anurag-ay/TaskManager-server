import express from "express";
const router = express.Router();
import { getUser, logIn, registerUser } from "../controller/userController.js";

// Register User Route
router.post("/register", registerUser);

// login Route
router.post("/login", logIn);

// Find User By Id
router.get("/getUser/:userId", getUser);

export default router;
