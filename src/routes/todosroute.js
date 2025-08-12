import express from "express";
import todosController from "../controller/todosController.js";
const router=express.Router();
router.get("/",todosController.getToDos);

export default router;