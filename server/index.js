import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import registerRoute from "./Routes/register.js";

const router = express.Router();

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("API is Working..");
});

//database Connection
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Database is Connected");
  } catch (error) {
    console.log(error);
  }
};

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/verification", registerRoute);

app.listen(port, () => {
  connectDB();
  console.log("Server is Running on Port " + port);
});
