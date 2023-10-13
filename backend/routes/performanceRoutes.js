import express from "express";
const router = express.Router();
import {
  getPerformances,
  getPerformanceById,
} from "../controllers/performanceController.js";

router.route("/").get(getPerformances);
router.route("/:id").get(getPerformanceById);

export default router;
