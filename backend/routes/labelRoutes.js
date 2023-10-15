import express from "express";
const router = express.Router();
import {
  createLabel,
  getLabels,
  getLabelById,
  updateLabel,
  deleteLabel,
} from "../controllers/labelController.js";

router.route("/").post(createLabel).get(getLabels);
router.route("/:id").delete(deleteLabel).get(getLabelById).put(updateLabel);

export default router;
