import express from "express";
const router = express.Router();
import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";

router.route("/").post(createCategory).get(getCategories);
router
  .route("/:id")
  .delete(deleteCategory)
  .get(getCategoryById)
  .put(updateCategory);

export default router;
