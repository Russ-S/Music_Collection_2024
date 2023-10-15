import asyncHandler from "../middleware/asyncHandler.js";
import Category from "../models/categoryModel.js";

// @desc    Create category
// @route   POST /api/categories
// @access  Private/Admin
const createCategory = asyncHandler(async (req, res) => {
  res.send("create category");
});

// @desc    Get categories
// @route   GET /api/categories
// @access  Private/Admin
const getCategories = asyncHandler(async (req, res) => {
  res.send("get categories");
});

// @desc    Get category by ID
// @route   GET /api/categories/:id
// @access  Private/Admin
const getCategoryById = asyncHandler(async (req, res) => {
  res.send("get category by ID");
});

// @desc    Update categories
// @route   PUT /api/categories/:id
// @access  Private/Admin
const updateCategory = asyncHandler(async (req, res) => {
  res.send("update category");
});

// @desc    Delete categories
// @route   DELETE /api/categories/:id
// @access  Private/Admin
const deleteCategory = asyncHandler(async (req, res) => {
  res.send("delete category");
});

export {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
