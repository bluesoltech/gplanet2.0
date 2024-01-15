import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  getUserProfile,
  getMyTickets,
} from "../Controllers/userController.js";
import { authenticate } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/:id", authenticate, getSingleUser);
router.get("/", authenticate, getAllUser);
router.get("/profile/me", authenticate, getUserProfile);
router.get("/tickets/my-ticket", authenticate, getMyTickets);

router.put("/:id", authenticate, updateUser);
router.delete("/:id", authenticate, deleteUser);

export default router;
