const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv  = require('dotenv');
const authRoute = require('./Routes/auth');
const router = express.Router();


require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: true,
}

app.get("/", (req, res) => {
    res.send("API is Working..")
});

//database Connection
mongoose.set('strictQuery', false)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB Database is Connected')
    } catch (error) {
        console.log('Database Connection failed')
    }
}

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth',authRoute)

app.listen(port, () => {
    connectDB();
    console.log("Server is Running on Port " + port);
});

