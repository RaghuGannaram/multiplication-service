import express from "express";
import multiplicationController from "../controllers/multiplication.controller.js";

const router = express.Router();

router.post("/multiplication", multiplicationController.multiplication);

export default router;
