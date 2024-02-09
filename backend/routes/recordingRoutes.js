import express from "express";
const router = express.Router();
import {
  createRecording,
  getRecordings,
  getRecordingById,
  updateRecording,
  deleteRecording,
  getRecordingsSortList,
  fetchAllRecordings,
  filterRecordings,
  fetchRecordings,
} from "../controllers/recordingController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, createRecording).get(getRecordings);
router.route("/sortlist").get(getRecordingsSortList);
router.route("/result").get(fetchRecordings);
router
  .route("/:id")
  .get(getRecordingById)
  .put(protect, updateRecording)
  .delete(protect, deleteRecording);

router.route("/allrecordings").get(fetchAllRecordings);
router.route("/filtered-recordings").post(filterRecordings);

export default router;
