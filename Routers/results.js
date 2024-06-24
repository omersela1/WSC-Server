const express = require("express");
const Result = require("../Models/result");
const router = express.Router();

// Create a new result
router.post("/", async (req, res) => {
  const { player, time, steps } = req.body;
  const newResult = new Result({ player, time, steps });

  try {
    const savedResult = await newResult.save();
    res.status(201).json(savedResult);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all results
router.get("/", async (req, res) => {
  try {
    const results = await Result.find();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/top", async (req, res) => {
  try {
    const results = await Result.find().sort({ time: 1 }).limit(5);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
