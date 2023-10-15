import asyncHandler from "../middleware/asyncHandler.js";
import Media from "../models/mediaModel.js";

// @desc    Create media
// @route   POST /api/media
// @access  Private/Admin
const createMedia = asyncHandler(async (req, res) => {
  res.send("create media");
});

// @desc    Get media
// @route   GET /api/media
// @access  Private/Admin
const getMedia = asyncHandler(async (req, res) => {
  res.send("get media");
});

// @desc    Get media by ID
// @route   GET /api/media/:id
// @access  Private/Admin
const getMediaById = asyncHandler(async (req, res) => {
  res.send("get media by ID");
});

// @desc    Update media
// @route   PUT /api/media/:id
// @access  Private/Admin
const updateMedia = asyncHandler(async (req, res) => {
  res.send("update media");
});

// @desc    Delete media
// @route   DELETE /api/medias/:id
// @access  Private/Admin
const deleteMedia = asyncHandler(async (req, res) => {
  res.send("delete media");
});

export { createMedia, getMedia, getMediaById, updateMedia, deleteMedia };
