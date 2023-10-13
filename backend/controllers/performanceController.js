import asyncHandler from "../middleware/asyncHandler.js";
import Performance from "../models/performanceModel.js";

// @desc    Fetch all performances
// @route   GET /api/performances
// @access  Public
const getPerformances = asyncHandler(async (req, res) => {
  const performances = await Performance.find({}).sort({
    composer: 1,
    composition: 1,
  });
  res.json(performances);
});

// @desc    Fetch a performance
// @route   GET /api/performances/:id
// @access  Public
const getPerformanceById = asyncHandler(async (req, res) => {
  const performance = await Performance.findById(req.params.id);

  if (performance) {
    return res.json(performance);
  } else {
    res.status(404);
    throw new Error("Performance not found");
  }
});

export { getPerformances, getPerformanceById };
