import express from "express";
// import { Request, Response } from "express";

import {
  signUp,
  verifyToken,
  login,
} from "../controller/employee_login_controller";

const router = express.Router();

router.post("/signUp", signUp);
router.post("/login",  login);

export default router;
