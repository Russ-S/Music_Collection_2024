import express from "express";
const router = express.Router();
import {
  createComposer,
  getComposers,
  getComposerById,
  updateComposer,
  deleteComposer,
  getComposersFormlist,
} from "../controllers/composerController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, createComposer).get(getComposers);
router.route("/formlist").get(getComposersFormlist);
router
  .route("/:id")
  .delete(protect, deleteComposer)
  .get(protect, getComposerById)
  .put(protect, updateComposer);

export default router;
