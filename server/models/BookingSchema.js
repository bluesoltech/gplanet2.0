import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true, unique: true },
  phone: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
    unique: true,
  },
  bgroup: {
    type: String,
    required: true,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  dob: {
    type: Date,
    required: true,
  },
  gender: { type: String, required: true, enum: ["male", "female", "other"] },
  category: {
    type: String,
    required: true,
    enum: ["5 KM", "10 KM"],
  },
  tshirt: {
    type: String,
    required: true,
    enum: ["S", "M", "L", "XL", "2XL"],
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pin: {
    type: String,
    required: true,
  },
  ePhone: {
    type: String,
    required: true,
  },
  eName: {
    type: String,
    required: true,
  },
  eRelation: {
    type: String,
    required: true,
  },
  paid: {
    type: Boolean,
    default: false,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Booking", bookingSchema);
