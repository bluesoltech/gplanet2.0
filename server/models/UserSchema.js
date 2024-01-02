import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cpassword: { type: String, required: true },
  // role: { type: String, required: true},

  // lastName: {
  //   type: String,
  //   required: true,
  // },
  // phone: { type: Number },
  // role: {
  //   type: String,
  //   enum: ["customer", "admin"],
  //   default: "customer",
  // },
  // gender: { type: String, enum: ["male", "female", "other"] },
  // bloodType: {
  //   type: String,
  //   required: true,
  //   enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  // },
  // birthDate: {
  //   type: String,
  //   required: true,
  // },
  // tShirtSize: {
  //   type: String,
  //   required: true,
  //   enum: ["S", "M", "L", "XL", "2XL"],
  // },
  // category: {
  //   type: String,
  //   required: true,
  //   enum: ["5KM", "10KM"],
  // },
  // number: {
  //   type: String,
  //   required: true,
  //   minlength: 10,
  //   maxlength: 10,
  // },
  // emergencyContactNumber: {
  //   type: String,
  //   required: true,
  // },
  // emergencyName: {
  //   type: String,
  //   required: true,
  // },
  // relation: {
  //   type: String,
  //   required: true,
  // },
  // country: {
  //   type: String,
  //   required: true,
  //   default: "India",
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
  // updatedAt: {
  //   type: Date,
  // },
  // address: {
  //   streetAddress: {
  //     type: String,
  //     required: true,
  //   },
  //   city: {
  //     type: String,
  //     required: true,
  //   },
  //   state: {
  //     type: String,
  //     required: true,
  //   },
  //   postalCode: {
  //     type: String,
  //     required: true,
  //   },
  // },
});

export default UserSchema;
