const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors(corsOptions));

dotenv.config({path: "./.env"});

// Data parsing
app.use(express.json({extended: false}));
app.use(express.json());

// Define routes
app.use("/message", require("./routes/message"));
// Connect to Database
connectDB();
app.listen(PORT, () => console.log("Server is starting on port ", PORT));
