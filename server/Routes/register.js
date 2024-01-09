import express from "express";
// import {
//   updateUser,
//   deleteUser,
//   getAllUser,
//   getSingleUser,
//   getUserProfile,
//   getMyTickets,
// } from "../Controllers/userController.js";
import { authenticate } from "../auth/verifyToken.js";
import { verification } from "../Controllers/registerController.js";

const router = express.Router();

router.post("/", authenticate, verification);

export default router;
