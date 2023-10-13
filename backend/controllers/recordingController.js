import asyncHandler from "../middleware/asyncHandler.js";
import Recording from "../models/recordingModel.js";

// @desc    Fetch all recordings
// @route   GET /api/recordings
// @access  Public
const getRecordings = asyncHandler(async (req, res) => {
  const recordings = await Recording.find({}).sort({
    composer: 1,
    composition: 1,
  });
  res.json(recordings);
});

// @desc    Fetch a recording
// @route   GET /api/recordings/:id
// @access  Public
const getRecordingById = asyncHandler(async (req, res) => {
  const recording = await Recording.findById(req.params.id);

  if (recording) {
    return res.json(recording);
  } else {
    res.status(404);
    throw new Error("Recording not found");
  }
});

export { getRecordings, getRecordingById };
