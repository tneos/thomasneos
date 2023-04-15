const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const log = console.log;
const app = express();
app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Data parsing
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Post data endpoint
app.post("/message", (req, res) => {
  log(req.body);
  res.json({message: "Message received!!"});
});

app.listen(PORT, () => log("Server is starting on port ", PORT));
