import express from "express";
import userController from "../controller/userController.js";

const router=express.Router();

router.post("/",userController.createUser);
router.get("/",userController.getUsers);

router.put("/:id",userController.updateUsers);
 router.delete("/:id",userController.deleteUser);
export default router;