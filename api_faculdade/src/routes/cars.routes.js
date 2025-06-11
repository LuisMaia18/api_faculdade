import express from "express";
import {
    getAllCarsController,
    getCarByIdController,
    createCarController,
    updateCarController,
    deleteCarController,
} from "../controllers/cars.controller.js";

const router = express.Router();

router.get("/", getAllCarsController);
router.get("/:id", getCarByIdController);
router.post("/", createCarController);
router.put("/:id", updateCarController);
router.delete("/:id", deleteCarController);

export default router;