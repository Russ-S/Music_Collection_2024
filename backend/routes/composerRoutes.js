import express from "express";
const router = express.Router();
import {
  createComposer,
  getComposers,
  getComposerById,
  updateComposer,
  deleteComposer,
} from "../controllers/composerController.js";

router.route("/").post(createComposer).get(getComposers);
router
  .route("/:id")
  .delete(deleteComposer)
  .get(getComposerById)
  .put(updateComposer);

export default router;
