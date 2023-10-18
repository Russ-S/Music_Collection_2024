import asyncHandler from "../middleware/asyncHandler.js";
import Label from "../models/labelModel.js";

// @desc    Create label
// @route   POST /api/labels
// @access  Private/Admin
const createLabel = asyncHandler(async (req, res) => {
  const label = new Label({
    name: req.body.name,
  });

  const createdLabel = await label.save();
  res.status(201).json(createdLabel);
});

// @desc    Get labels
// @route   GET /api/labels
// @access  Private/Admin
const getLabels = asyncHandler(async (req, res) => {
  const labels = await Label.find({}).sort({
    name: 1,
  });
  res.json(labels);
});

// @desc    Get label by ID
// @route   GET /api/labels/:id
// @access  Private/Admin
const getLabelById = asyncHandler(async (req, res) => {
  const label = await Label.findById(req.params.id);

  if (label) {
    return res.json(label);
  } else {
    res.status(404);
    throw new Error("Label not found");
  }
});

// @desc    Update labels
// @route   PUT /api/labels/:id
// @access  Private/Admin
const updateLabel = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const label = await Label.findById(req.params.id);

  if (label) {
    label.name = name;

    const updatedLabel = await label.save();
    res.json(updatedLabel);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

// @desc    Delete labels
// @route   DELETE /api/labels/:id
// @access  Private/Admin
const deleteLabel = asyncHandler(async (req, res) => {
  const label = await Label.findById(req.params.id);

  if (label) {
    await Label.deleteOne({ _id: label._id });
    res.status(200).json({ message: "Label deleted" });
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { createLabel, getLabels, getLabelById, updateLabel, deleteLabel };
