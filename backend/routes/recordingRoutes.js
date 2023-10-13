import express from "express";
const router = express.Router();
import {
  getRecordings,
  getRecordingById,
} from "../controllers/recordingController.js";

router.route("/").get(getRecordings);
router.route("/:id").get(getRecordingById);

export default router;
