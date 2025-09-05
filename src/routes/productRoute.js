import express from "express";
import fs from "fs";
import productController from "../controller/productController.js"
import auth from "../middlewares/auth.js";
const router=express.Router();



router.post("/",auth,productController.createProduct);

router.get("/",productController.getProducts);
router.get("/:id",productController.getProductById);
router.put("/:id",auth, productController.updateProduct);
router.delete("/:id",auth,productController.deleteProduct);
export default router;
