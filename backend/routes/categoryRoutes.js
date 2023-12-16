import express from "express";
const router = express.Router();
import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
  fetchCategories,
  getCategoriesFormlist,
} from "../controllers/categoryController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, createCategory).get(getCategories);
router.route("/categories").get(fetchCategories);
router.route("/formlist").get(getCategoriesFormlist);
router
  .route("/:id")
  .delete(protect, deleteCategory)
  .get(protect, getCategoryById)
  .put(protect, updateCategory);

export default router;
