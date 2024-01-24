import Payment from "../models/PaymentSchema.js";
import Booking from "../models/BookingSchema.js";
import razorpay from "razorpay";
import { sendEmail } from "../utils/sendEmail.js";
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
    const temp_book = await booking.save();

    await Payment.create({
      booking: booking,
      amount: temp.amount,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
    
        .page {
          width: 100%;
          height: 600px;
          background-color: #fff1b8;
        }
    
        .content {
          position: relative;
          padding: 20px;
          background-color: white;
          height: 100%;
          width: 50%;
          margin: auto;
        }
    
        .subheader {
          font-size: 18px;
          font-weight: bold;
          margin-top: 20px;
        }
    
        .header {
          font-size: 24px;
          font-weight: bold;
        }
    
        .date {
          font-size: 14px;
        }
    
        .time {
          font-size: 14px;
        }
    
        .venue {
          margin-top: 20px;
          font-size: 18px;
          font-weight: bold;
        }
    
        .venue_detail {
          font-size: 14px;
          margin-bottom: 40px;
        }
    
        .details {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 20px;
        }
    
        .booking,
        .subbooking,
        .payment_divider {
          margin-top: 10px;
          margin-bottom: 10px;
          height: 2px;
          background-color: #000;
        }
    
        .name {
          font-size: 14px;
          font-weight: bold;
        }
    
        .bookingId,
        .category,
        .phone {
          font-size: 14px;
        }
    
        .payment {
          margin-top: 40px;
          font-size: 18px;
          font-weight: bold;
        }
    
        .payment_status,
        .payment_price,
        .payment_discount,
        .payment_transaction {
          
          font-size: 14px;
        }
    
        .payment_price_val,
        .payment_discount_val {
          font-size: 14px;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="page">
        <div class="content">
          <div class="subheader">You are attending</div>
          <div class="header">Green Planet Run - Marching Green 2.0</div>
          <div class="date">7th Apr, 2024, Sun</div>
          <div class="time">05:00 AM (GMT+05:30)</div>
          <div class="venue">Venue</div>
          <div class="venue_detail">
            River Front Event Centre, Sabamati Riverfront Walkaway W, Narayan
            Nagar Society, Kocharab, Paldi, Ahmedabad, Gujarat 380007, India
          </div>
          <div class="subbooking"></div>
          <div class="details">Your Booking Details</div>
          <div class="name">Name: ${booking.name}</div>
          <div class="bookingId">Booking ID: ${temp_book._id}</div>
          <div class="category">Category: ${booking.category}</div>
          <div class="phone">Contact: ${booking.phone}</div>
          <div class="payment_divider"></div>
          <div class="payment">Payment Summary</div>
          <div class="payment_status">Status: Completed </div>
          <div class="payment_price">Ticket price: INR ${
            booking.category === "5 KM" ? "300.00" : "350.00"
          }</div>
          <div class="payment_discount">Paid Amount: INR ${temp.amount}</div>
          <div class="payment_transaction">Transaction ID: ${razorpay_payment_id}</div>
        </div>
      </div>
    </body>
    </html>`;
    await sendEmail(
      booking.email,
      "Thank you! Your ticket confirmation is here.",
      html
    );
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
