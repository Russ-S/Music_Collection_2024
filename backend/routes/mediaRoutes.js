import express from "express";
const router = express.Router();
import {
  createMedia,
  getMedia,
  getMediaById,
  updateMedia,
  deleteMedia,
} from "../controllers/mediaController.js";

router.route("/").post(createMedia).get(getMedia);
router.route("/:id").delete(deleteMedia).get(getMediaById).put(updateMedia);

export default router;
