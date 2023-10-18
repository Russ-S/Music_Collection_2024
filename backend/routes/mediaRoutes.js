import express from "express";
const router = express.Router();
import {
  createMedia,
  getMedia,
  getMediaById,
  updateMedia,
  deleteMedia,
} from "../controllers/mediaController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, createMedia).get(protect, getMedia);
router
  .route("/:id")
  .delete(protect, deleteMedia)
  .get(protect, getMediaById)
  .put(protect, updateMedia);

export default router;
