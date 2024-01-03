import jwt from "jsonwebtoken";
// import User from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => {
  const authToken = req.headers.authorization;
  if (!authToken || !authToken.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ success: false, message: "No token, authorization denied" });
  }

  try {
    // console.log(authToken);
    const token = authToken.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.userId = decoded.id;

    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token is expired" });
    }

    return res.status(401).json({ success: false, message: "Invalid Token" });
  }
};

// export const restrict = async (req, res, next) => {
//     const userId = req.userId
//     let user;
//     user = await User.findById(userId)

//     if(!user)
// }
