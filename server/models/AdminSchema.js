const mongoose = require ("mongoose");

const AdminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cpassword: { type: String, required: true },
  
  // role: { type: String, required: true},
  // phone: { type: Number },
  // role: {
  //   type: String,
  // },
  // isApproved: {
  //   type: String,
  //   enum: ["pending", "approved", "cancelled"],
  //   default: "pending",
  // },
});

module.exports = mongoose.model("Admin", AdminSchema);
