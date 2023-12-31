import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updateUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to Updated" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    User.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "Successfully deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to deleted" });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id).select("-password");

    res.status(200).json({ success: true, message: "User Found", data: user });
  } catch (error) {
    res.status(404).json({ success: false, message: "No User found" });
  }
};
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");

    res.status(200).json({ success: true, message: "User Found", data: users });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};
export const getUserProfile = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const { password, ...rest } = user._doc;

    res.status(200).json({
      success: true,
      message: "Profile info is getting",
      data: { ...rest },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

export const getMyTickets = async (req, res) => {
  try {
    const booking = await Booking.find({ user: req.userId });
    res.status(200).json({
      success: true,
      message: "Getting Tickets",
      data: booking,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
