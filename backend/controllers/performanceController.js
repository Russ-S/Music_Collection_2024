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

// @desc    Create performance
// @route   POST /api/performances
// @access  Private/Admin
const createPerformance = asyncHandler(async (req, res) => {
  const performance = new Performance({
    performanceDate: req.body.performanceDate,
    composer: req.body.composer,
    composition: req.body.composition,
    artists: req.body.artists,
    conductor: req.body.conductor,
    ensemble: req.body.ensemble,
    concertHall: req.body.concertHall,
    city: req.body.city,
    state: req.body.state,
    workCategory: req.body.workCategory,
    notes: req.body.notes,
  });

  const createdPerformance = await performance.save();
  res.status(201).json(createdPerformance);
});

// @desc    Update a performance
// @route   PUT /api/performances/:id
// @access  Private/Admin
const updatePeformance = asyncHandler(async (req, res) => {
  const {
    performanceDate,
    composer,
    composition,
    artists,
    conductor,
    ensemble,
    concertHall,
    city,
    state,
    workCategory,
    notes,
  } = req.body;

  const performance = await Performance.findById(req.params.id);
  console.log(performance);

  if (performance) {
    performance.performanceDate =
      performanceDate || performance.performanceDate;
    performance.composer = composer || performance.composer;
    performance.composition = composition || performance.composition;
    performance.artists = artists || performance.artists;
    performance.conductor = conductor || performance.conductor;
    performance.ensemble = ensemble || performance.ensemble;
    performance.concertHall = concertHall || performance.concertHall;
    performance.city = city || performance.city;
    performance.state = state || performance.state;
    performance.workCategory = workCategory || performance.workCategory;
    performance.notes = notes || performance.notes;

    const updatedPerformance = await performance.save();
    res.json(updatedPerformance);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

// @desc    Delete a performance
// @route   DELETE /api/prformances/:id
// @access  Private/Admin
const deletePerformance = asyncHandler(async (req, res) => {
  const performance = await Performance.findById(req.params.id);

  if (performance) {
    await Performance.deleteOne({ _id: performance._id });
    res.status(200).json({ message: "Performance deleted" });
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export {
  createPerformance,
  getPerformances,
  getPerformanceById,
  updatePeformance,
  deletePerformance,
};
