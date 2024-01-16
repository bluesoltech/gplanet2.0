import Payment from "../models/PaymentSchema.js";
import Booking from "../models/BookingSchema.js";
import razorpay from "razorpay";
import crypto from "crypto";

const razorpaySetup = () => {
  // console.log(process.env.JWT_SECRET_KEY, "JWT");
  const instance = new razorpay({
    key_id: process.env.Razor_KEY,
    key_secret: process.env.Razor_SECRET,
  });

  return instance;
};

let temp = {};

export const checkout = async (req, res) => {
  temp = req.body;
  const instance = razorpaySetup();
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  // console.log(options);
  const order = await instance.orders.create(options);
  // console.log(order, "order");
  res.status(200).json({
    success: true,
    order,
    message: "Order created successfully",
  });
};
export const paymentverification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedsignature = crypto
    .createHmac("sha256", process.env.Razor_SECRET)
    .update(body.toString())
    .digest("hex");

  const isauth = expectedsignature === razorpay_signature;

  const booking = new Booking({
    user: temp.data.user._id,
    name: temp.data.name,
    email: temp.data.email,
    phone: temp.data.phone,
    bgroup: temp.data.bgroup,
    dob: temp.data.dob,
    gender: temp.data.gender,
    category: temp.data.category,
    tshirt: temp.data.tshirt,
    street: temp.data.street,
    city: temp.data.city,
    state: temp.data.state,
    pin: temp.data.pin,
    ePhone: temp.data.ePhone,
    eName: temp.data.eName,
    eRelation: temp.data.eRelation,
    paid: true,
  });

  if (isauth) {
    await booking.save();

    await Payment.create({
      booking: booking,
      amount: temp.amount,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });
    res.redirect(
      `${process.env.FRONT_URL}/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({ success: false, message: "Payment Not Successful" });
  }
};
export const getkey = async (req, res) => {
  return res.status(200).json({ key: process.env.Razor_KEY });
};

export const getMyPay = async (req, res) => {
  try {
    const payment = await Payment.find({ booking: req.params.id });
    // console.log(booking)
    res.status(200).json({
      success: true,
      message: "Getting Payment Info",
      data: payment,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
