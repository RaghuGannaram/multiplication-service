import express from "express";
import multiplicationRouter from "../../routes/multiplication.route.js";

const router = express.Router();

router.use("/", multiplicationRouter);

export default router;
