import express from "express";
import fs from "fs";
import productController from "../controller/productController.js"
const router=express.Router();



router.post("/",productController.createProduct);

router.get("/",productController.getProducts);
router.get("/:id",productController.getProductById);
router.put("/:id",productController.updateProduct);
router.delete("/:id",productController.deleteProduct);
export default router;
