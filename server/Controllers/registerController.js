import Booking from "../models/BookingSchema.js";

function calculateAge(birthDateObject) {
  const currentDate = new Date("2024-04-07");
  const bdate = new Date(birthDateObject);
  const age = currentDate.getFullYear() - bdate.getFullYear();
  if (
    currentDate.getMonth() < bdate.getMonth() ||
    (currentDate.getMonth() === bdate.getMonth() &&
      currentDate.getDate() < bdate.getDate())
  ) {
    return age - 1;
  }
  return age;
}

export const verification = async (req, res) => {
  // console.log("register");
  const { email, phone, dob, category } = req.body;
  // const {
  //   user,
  //   name,
  //   email,
  //   phone,
  //   bgroup,
  //   dob,
  //   gender,
  //   street,
  //   tshirt,
  //   category,
  //   city,
  //   state,
  //   pin,
  //   ePhone,
  //   eName,
  //   eRelation,
  // } = req.body;

  const age = calculateAge(dob);

  if ((category == "5 KM" && age < 8) || (category == "10 KM" && age < 12)) {
    // console.log("26");
    return res.status(400).json({
      success: false,
      message: "Doesn't meet the minimum age requirement",
    });
  }

  try {
    let ticket = null;
    ticket = await Booking.findOne({ $or: [{ email }, { phone }] });
    if (ticket) {
      return res.status(400).json({ message: "Member already exist" });
    }
    // ticket = new Booking({
    //   user: user._id,
    //   name,
    //   email,
    //   phone,
    //   bgroup,
    //   dob,
    //   gender,
    //   category,
    //   tshirt,
    //   street,
    //   city,
    //   state,
    //   pin,
    //   ePhone,
    //   eName,
    //   eRelation,
    //   paid: false,
    // });

    // await ticket.save();
    res.status(200).json({ success: true, message: "Redirecting" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
