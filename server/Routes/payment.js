import express from "express";
import { authenticate } from "../auth/verifyToken.js";
import {
  checkout,
  paymentverification,
  getkey,
  getMyPay,
} from "../Controllers/paymentController.js";

const router = express.Router();

router.post("/checkout", authenticate, checkout);
router.post("/paymentverify", paymentverification);
router.get("/getkey", authenticate, getkey);
router.get("/getpayinfo/:id", authenticate, getMyPay);

export default router;
