import todosService from "../services/todosService.js";

const getToDos=(req,res)=>{

    res.json(todosService.todosCom);

}

export default {getToDos};