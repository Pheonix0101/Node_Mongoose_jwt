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

router.post("/add",verifyToken, create);
router.get("/details", verifyToken,  CacheService.cache("10 minutes"), get);
router.put("/update/:_id",  update);
router.delete("/delete/:_id([0-9a-fA-F]{24})",remove);
router.get(
  "/pagination/:page",
  verifyToken,
  CacheService.cache("10 minutes"),
  pagination
);
// cache.

export default router;
