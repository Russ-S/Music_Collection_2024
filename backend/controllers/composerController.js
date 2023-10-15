import asyncHandler from "../middleware/asyncHandler.js";
import Composer from "../models/composerModel.js";

// @desc    Create composer
// @route   POST /api/composers
// @access  Private/Admin
const createComposer = asyncHandler(async (req, res) => {
  res.send("create composer");
});

// @desc    Get composers
// @route   GET /api/composers
// @access  Private/Admin
const getComposers = asyncHandler(async (req, res) => {
  res.send("get composers");
});

// @desc    Get compsoerby ID
// @route   GET /api/composers/:id
// @access  Private/Admin
const getComposerById = asyncHandler(async (req, res) => {
  res.send("get composer by ID");
});

// @desc    Update composers
// @route   PUT /api/composers/:id
// @access  Private/Admin
const updateComposer = asyncHandler(async (req, res) => {
  res.send("update composer");
});

// @desc    Delete composers
// @route   DELETE /api/composers/:id
// @access  Private/Admin
const deleteComposer = asyncHandler(async (req, res) => {
  res.send("delete composer");
});

export {
  createComposer,
  getComposers,
  getComposerById,
  updateComposer,
  deleteComposer,
};
