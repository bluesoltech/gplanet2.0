import Payment from "../models/PaymentSchema.js";
import razorpay from "razorpay";
import crypto from "crypto";

console.log(process.env.JWT_SECRET_KEY, "JWT");
const instance = new razorpay({
  key_id: "rzp_test_9buV7XwhjuStLr",
  key_secret: process.env.Razor_SECRET,
});

export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  console.log(order);
  res.status(200).json({
    success: true,
    order,
    message: "Order created successfully",
  });
};
export const paymentverification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const body = razorpay_order_id + " " + razorpay_payment_id;
  const expectedsignature = crypto
    .createHmac("sha256", process.env.Razor_SECRET)
    .update(body.toString())
    .digest("hex");

  const isauth = expectedsignature === razorpay_signature;

  if (isauth) {
    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });
    res.redirect(
      `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({ success: false, message: "Payment Not Successful" });
  }
};
export const getkey = async (req, res) => {
  return res.status(200).json({ key: process.env.Razor_KEY });
};
