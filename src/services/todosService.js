import fs from "fs";
const todosService=()=>{
const rawData=fs.readFileSync("./src/data/todos.json","utf8");
const todos=JSON.parse(rawData);

const todosCom=todos.filter((item)=>item.completed==true);
return todosCom;
}

export default {todosService}