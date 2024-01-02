import User from "../models/UserSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import password from "password-hash-and-salt";

export const register = async (req, res) => {
  const { name, email, password, cpassword } = req.body;

  try {
    let user = null;

    if (user) {
      user = await User.findOne({ email });
    }
    //check if user exist
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    if (password != cpassword) {
      res
        .status(400)
        .json({ success: false, message: "Password do not match" });
    }

    const hashPassword = await bcrypt.hash(password, salt);
    user = new User({
      name,
      email,
      password: hashPassword,
    });
    await user.save();
    res
      .status(200)
      .json({ success: true, message: "User successfully created" });
  } catch (error) {
    res
      .status(200)
      .json({ success: true, message: "Internal server error, Try again" });
  }
};

export const login = (req, res) => {
  try {
  } catch (err) {}
};
