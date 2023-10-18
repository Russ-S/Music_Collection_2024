import express from "express";
const router = express.Router();
import {
  getPerformances,
  getPerformanceById,
  createPerformance,
  updatePeformance,
  deletePerformance,
} from "../controllers/performanceController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, createPerformance).get(getPerformances);
router
  .route("/:id")
  .get(getPerformanceById)
  .put(protect, updatePeformance)
  .delete(protect, deletePerformance);

export default router;
