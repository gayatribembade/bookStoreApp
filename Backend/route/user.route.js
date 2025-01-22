import express from "express";
import { signup,login } from "../controller/user.controller.js";  // Make sure the controller uses ES module syntax

const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);

export default router;  // Default export
