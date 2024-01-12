import User from "../models/UserSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Token from "../models/token.js";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";

const generateToken = (user) => {
  // console.log(process.env.JWT_SECRET_KEY, "authController");
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });
};

function isStrongPassword(password) {
  const strongPasswordRegex =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  // console.log(strongPasswordRegex.test(password));
  return strongPasswordRegex.test(password);
}

export const register = async (req, res) => {
  // console.log("register");
  const { name, email, password, cpassword } = req.body;
  // console.log(`${name}, ${email}, ${password}, ${cpassword} `);

  if (!isStrongPassword(password)) {
    return res
      .status(401)
      .json({ success: false, message: "Password is not strong enough" });
  }
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
    temp = await user.save();

    const token = await new Token({
      userId: temp._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();

    const url = `http://localhost:5173/user/${temp._id}/verify/${token.token}`;
    await sendEmail(user.email, "Verify Email: Green Planet Run", url);

    res.status(200).json({
      success: true,
      message: "An Email has been sent. Please Verify",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  const { email } = req.body;
  try {
    let user = null;
    user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid Credantials" });
    }

    if (!user.verified) {
      let token = await Token.findOne({ userId: user._id });
      if (!token) {
        token = await new Token({
          userId: user._id,
          token: crypto.randomBytes(32).toString("hex"),
        }).save();
        const url = `${process.env.BASE_URL}users/${user.id}/verify/${token.token}`;
        await sendEmail(user.email, "Verify Email", url);
      }

      return res
        .status(400)
        .send({ message: "An Email sent to your account please verify" });
    }

    const token = generateToken(user);

    const { password, ...rest } = user._doc;

    res.status(200).json({
      status: true,
      message: "Successfully login",
      token,
      data: { ...rest },
    });
  } catch (err) {
    res.status(500).json({ status: false, message: "Failed to login" });
  }
};
export const verify = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send({ message: "Invalid link" });

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send({ message: "Invalid link" });

    await User.updateOne({ _id: user._id, verified: true });
    await token.remove();

    res.status(200).send({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
