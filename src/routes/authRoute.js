import express from "express";
import authController from "../controller/authController.js";

const router=express.Router();

router.post("/register",authController.register);
router.post("/login", authController.login); // Assuming login will be implemented later

export default router;