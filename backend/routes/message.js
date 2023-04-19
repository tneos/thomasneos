const express = require("express");
const router = express.Router();
const {check, validationResult} = require("express-validator");

const User = require("../models/User");

// Post data endpoint
router.post(
  "/",
  [
    check("name", "Please add your full name").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("message", "Please enter a message(length 6-200 characters)").isLength({
      min: 6,
      max: 200,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }
    console.log(req.body);
    const {name, email, message} = req.body;

    try {
      let user = new User({name, email, message});

      await user.save();
      res.json(req.body);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
