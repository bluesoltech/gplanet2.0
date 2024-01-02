import User from "../models/UserSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import password from "password-hash-and-salt";

export const register = async (req, res) => {
  // console.log("register");
  const { name, email, password, cpassword } = req.body;
  // console.log(`${name}, ${email}, ${password}, ${cpassword} `);

  if (password != cpassword) {
    // console.log("26");
    return res
      .status(400)
      .json({ success: false, message: "Password do not match" });
  }

  try {
    let user = null;
    user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }
    const salt = await bcrypt.genSalt(10);
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
    res.status(500).json({ success: false, message: error });
  }
};

export const login = (req, res) => {
  try {
  } catch (err) {}
};
