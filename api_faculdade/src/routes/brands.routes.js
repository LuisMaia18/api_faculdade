import express from "express";
import {
  listBrands,
  getBrand,
  addBrand,
  editBrand,
  deleteBrand
} from "../controllers/brands.controller.js";

const router = express.Router();

router.get("/", listBrands);
router.get("/:id", getBrand);
router.post("/", addBrand);
router.put("/:id", editBrand);
router.delete("/:id", deleteBrand);

export default router;
