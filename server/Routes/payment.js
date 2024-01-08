import express from "express";
import { authenticate } from "../auth/verifyToken.js";
import {
  checkout,
  paymentverification,
  getkey,
} from "../Controllers/paymentController.js";

const router = express.Router();

router.post("/checkout", authenticate, checkout);
router.post("/paymentverify", authenticate, paymentverification);
router.get("/getkey", authenticate, getkey);

export default router;
