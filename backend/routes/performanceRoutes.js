import express from "express";
const router = express.Router();
import {
  getPerformances,
  getPerformanceById,
  createPerformance,
  updatePeformance,
  deletePerformance,
  fetchAllPerformances,
  filterPerformances,
} from "../controllers/performanceController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, createPerformance).get(getPerformances);
router
  .route("/:id")
  .get(getPerformanceById)
  .put(protect, updatePeformance)
  .delete(protect, deletePerformance);

router.route("/allperformances").get(fetchAllPerformances);
router.route("/filtered-performances").post(filterPerformances);

export default router;
