import asyncHandler from "../middleware/asyncHandler.js";
import Label from "../models/labelModel.js";

// @desc    Create label
// @route   POST /api/labels
// @access  Private/Admin
const createLabel = asyncHandler(async (req, res) => {
  res.send("create label");
});

// @desc    Get labels
// @route   GET /api/labels
// @access  Private/Admin
const getLabels = asyncHandler(async (req, res) => {
  res.send("get labels");
});

// @desc    Get label by ID
// @route   GET /api/labels/:id
// @access  Private/Admin
const getLabelById = asyncHandler(async (req, res) => {
  res.send("get label by ID");
});

// @desc    Update labels
// @route   PUT /api/labels/:id
// @access  Private/Admin
const updateLabel = asyncHandler(async (req, res) => {
  res.send("update label");
});

// @desc    Delete labels
// @route   DELETE /api/labels/:id
// @access  Private/Admin
const deleteLabel = asyncHandler(async (req, res) => {
  res.send("delete label");
});

export { createLabel, getLabels, getLabelById, updateLabel, deleteLabel };
