import express from "express";
import {
  register,
  login,
  verify,
  forgot,
  change,
} from "../Controllers/authController.js";

const router = express.Router();

router.post("/signup", register);
router.post("/login", login);
router.post("/forgot", forgot);
router.get("/:id/verify/:token", verify);
router.post("/:id/change/:token", change);

export default router;
