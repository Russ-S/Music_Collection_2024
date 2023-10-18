import express from "express";
const router = express.Router();
import {
  createRecording,
  getRecordings,
  getRecordingById,
  updateRecording,
  deleteRecording,
} from "../controllers/recordingController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, createRecording).get(getRecordings);
router
  .route("/:id")
  .get(getRecordingById)
  .put(protect, updateRecording)
  .delete(protect, deleteRecording);

export default router;
