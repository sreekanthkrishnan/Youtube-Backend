import express from "express";
import { signin, signup, googleSignin } from "../controllers/auth.js";

const router = express.Router();

//CREATE USER WITH
router.post("/signup", signup);

//SIGN IN USER
router.post("/signin", signin);

// SIGN IN USER WITH GOOGLE
router.post("/google", googleSignin);

export default router;
