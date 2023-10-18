import express from "express";
const router = express.Router();
import {
  createLabel,
  getLabels,
  getLabelById,
  updateLabel,
  deleteLabel,
} from "../controllers/labelController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, createLabel).get(protect, getLabels);
router
  .route("/:id")
  .delete(protect, deleteLabel)
  .get(protect, getLabelById)
  .put(protect, updateLabel);

export default router;
