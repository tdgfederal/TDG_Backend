const express = require("express");
const router = express.Router();
const Cont = require("../models/Login");

router.post("/login", async (req, res) => {
  try {
    await Cont.create({
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ success: true });
  } catch (error) {
    console.log("errorrrr", error);
    res.json({ success: false });
  }
});

module.exports = router;
