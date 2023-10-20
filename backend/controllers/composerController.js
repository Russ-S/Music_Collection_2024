import asyncHandler from "../middleware/asyncHandler.js";
import Composer from "../models/composerModel.js";

// @desc    Create composer
// @route   POST /api/composers
// @access  Private/Admin
const createComposer = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const composerExists = await Composer.findOne({ name });

  if (composerExists) {
    res.status(400);
    throw new Error("Composer already exists");
  }

  const composer = await Composer.create({
    name,
  });

  if (composer) {
    res.status(201).json({
      _id: composer._id,
      name: composer.name,
    });
  } else {
    res.status(400);
    throw new Error("Unable to add composer");
  }
});

// @desc    Get composers
// @route   GET /api/composers
// @access  Private/Admin
const getComposers = asyncHandler(async (req, res) => {
  const composers = await Composer.find({}).sort({
    name: 1,
  });
  res.json(composers);
});

// @desc    Get compsoerby ID
// @route   GET /api/composers/:id
// @access  Private/Admin
const getComposerById = asyncHandler(async (req, res) => {
  const composer = await Composer.findById(req.params.id);

  if (composer) {
    return res.json(composer);
  } else {
    res.status(404);
    throw new Error("Composer not found");
  }
});

// @desc    Update composers
// @route   PUT /api/composers/:id
// @access  Private/Admin
const updateComposer = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const composer = await Composer.findById(req.params.id);

  if (composer) {
    composer.name = name;

    const updatedComposer = await composer.save();
    res.json(updatedComposer);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

// @desc    Delete composers
// @route   DELETE /api/composers/:id
// @access  Private/Admin
const deleteComposer = asyncHandler(async (req, res) => {
  const composer = await Composer.findById(req.params.id);

  if (composer) {
    await Composer.deleteOne({ _id: composer._id });
    res.status(200).json({ message: "Composer deleted" });
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export {
  createComposer,
  getComposers,
  getComposerById,
  updateComposer,
  deleteComposer,
};
