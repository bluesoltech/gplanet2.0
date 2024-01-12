import express from "express";
import { register, login, verify } from "../Controllers/authController.js";

const router = express.Router();

router.post("/signup", register);
router.post("/login", login);
router.get("/:id/verify/:token", verify);

export default router;
