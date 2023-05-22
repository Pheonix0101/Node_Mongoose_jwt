import express from "express";
import compression from "compression";

import {
  create,
  get,
  update,
  remove,
  pagination,
} from "../controller/employee_controller";
import { verifyToken } from "../controller/employee_login_controller";
const CacheService = require("express-api-cache");

const router = express.Router();
router.use(compression());

router.post("/add", verifyToken, create);
router.get("/", CacheService.cache("10 minutes"), verifyToken, get);
router.put("/update/:_id", verifyToken, update);
router.delete("/:_id([0-9a-fA-F]{24})", verifyToken, remove);
router.get(
  "/pagination/:page",
  CacheService.cache("10 minutes"),
  verifyToken,
  pagination
);
// cache.

export default router;
