import asyncHandler from "../middleware/asyncHandler.js";
import Recording from "../models/recordingModel.js";

// @desc    Create recording
// @route   POST /api/recordings
// @access  Private/Admin
const createRecording = asyncHandler(async (req, res) => {
  const recording = new Recording({
    composer: req.body.composer,
    coverImage: req.body.coverImage,
    composition: req.body.composition,
    artists: req.body.artists,
    conductor: req.body.conductor,
    ensemble: req.body.ensemble,
    media: req.body.media,
    source: req.body.source,
    digital: req.body.digital,
    workCategory: req.body.workCategory,
    fileCategory: req.body.fileCategory,
    label: req.body.label,
    catalogNumber: req.body.catalogNumber,
    purchaseDate: req.body.purchaseDate,
    value: req.body.value,
    tapeNumber: req.body.tapeNumber,
    location: req.body.location,
  });

  const createdRecording = await recording.save();
  res.status(201).json(createdRecording);
});

// @desc    Fetch all recordings
// @route   GET /api/recordings
// @access  Public
const getRecordings = asyncHandler(async (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.pageNumber) || 1;
  const count = await Recording.countDocuments();

  const recordings = await Recording.find({})
    .sort({
      composer: 1,
      composition: 1,
    })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ recordings, page, pages: Math.ceil(count / pageSize) });
});

const getRecordingsSortList = asyncHandler(async (req, res) => {
  const items = await Recording.find({}).sort({
    composer: 1,
    composition: 1,
  });
  res.json(items);
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

// @desc    Update a recording
// @route   PUT /api/recordings/:id
// @access  Private/Admin
const updateRecording = asyncHandler(async (req, res) => {
  const {
    composer,
    coverImage,
    composition,
    artists,
    conductor,
    ensemble,
    media,
    source,
    digital,
    workCategory,
    fileCategory,
    label,
    catalogNumber,
    purchaseDate,
    value,
    tapeNumber,
    location,
  } = req.body;

  const recording = await Recording.findById(req.params.id);
  console.log(recording);

  if (recording) {
    recording.composer = composer || recording.composer;
    recording.coverImage = coverImage || recording.coverImage;
    recording.composition = composition || recording.composition;
    recording.artists = artists || recording.artists;
    recording.conductor = conductor || recording.conductor;
    recording.ensemble = ensemble || recording.ensemble;
    recording.media = media || recording.media;
    recording.source = source || recording.source;
    recording.digital = digital || recording.digital;
    recording.workCategory = workCategory || recording.workCategory;
    recording.fileCategory = fileCategory || recording.fileCategory;
    recording.label = label || recording.label;
    recording.catalogNumber = catalogNumber || recording.catalogNumber;
    recording.purchaseDate = purchaseDate || recording.purchaseDate;
    recording.value = value || recording.value;
    recording.tapeNumber = tapeNumber || recording.tapeNumber;
    recording.location = location || recording.location;

    const updatedRecording = await recording.save();
    res.json(updatedRecording);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

// @desc    Delete a recording
// @route   DELETE /api/recordings/:id
// @access  Private/Admin
const deleteRecording = asyncHandler(async (req, res) => {
  const recording = await Recording.findById(req.params.id);

  if (recording) {
    await Recording.deleteOne({ _id: recording._id });
    res.status(200).json({ message: "Recording deleted" });
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

const fetchAllRecordings = asyncHandler(async (req, res) => {
  try {
    const recordings = await Recording.find({})
      .populate("media")
      .limit(12)
      .sort({ composer: 1, composition: 1 });

    res.json(recordings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

const filterRecordings = asyncHandler(async (req, res) => {
  try {
    const { checked, radio } = req.body;

    let args = {};
    if (checked.length > 0) args.media = checked;
    if (radio.length) args.category = { $gte: radio[0], $lte: radio[1] };

    const recordings = await Recording.find(args).sort({
      composer: 1,
      composition: 1,
    });
    res.json(recordings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

export {
  createRecording,
  getRecordings,
  getRecordingById,
  updateRecording,
  deleteRecording,
  getRecordingsSortList,
  fetchAllRecordings,
  filterRecordings,
};
