import express from "express";
import { updateUser, deleteUser, getAllUser, getSingleUser } from "../Controllers/userController.js";


router.get("/:id", authenticate, getSingleUser);
router.get("/", getAllUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
