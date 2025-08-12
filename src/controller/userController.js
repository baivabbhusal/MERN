import userService from "../services/userService.js";

const createUser=async (req,res)=>{
    try{
        const data=await userService.createUser(req.body);
        res.status(201).json(data);
    }
    catch(error){
        res.status(500).send(error.message);
    }
}

const getUsers=async (req,res)=>{
    const data=await userService.getUsers();
    res.status(201).json(data);
}

const updateUsers=async (req,res)=>{
    const id=req.params.id;
    try{
        const data=await userService.updateUsers(id,req.body);
        res.status(201).json(data);
    }
    catch(error){
        console.log(error.message);
    }

}

const deleteUser=async (req,res)=>{
    const id=req.params.id;
    try{
        await userService.deleteUser(id);
        res.status(201).send(`Product with id:${id} deleted sucessfully`);
    }
    catch(error){
        res.status(500).send(error.msessage);
    }


}

export default {
createUser,
getUsers,
updateUsers,
deleteUser
};