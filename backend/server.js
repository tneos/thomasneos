const express = require("express");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const log = console.log;
const app = express();
app.use(cors(corsOptions));

const PORT = 8080;

// Data parsing
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Post data endpoint
app.post("/email", (req, res) => {
  // TODO
  // send email here
  console.log(req.body);
  res.json({message: "Message received!!"});
});

app.listen(PORT, () => log("Server is starting on port ", PORT));
