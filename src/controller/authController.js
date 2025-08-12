import authService from "../services/authService.js";

const register=async (req,res)=>{
   try {
      const input=req.body;
      if(!input.password){
         return res.status(500).send("Password is required");
      }

      if(!input.confirmPassword){
         return res.status(500).send("Confirm password is required");
      }

      if(input.password !== input.confirmPassword){
          return res.status(500).send("Password and confirm password do not match");
      }
      
      const data=await authService.register(req.body);
      return res.status(201).json(data);

      }

   catch (error) {
    res.status(500).send(error.message);
   }
}    

const login=async (req,res)=>{
   const input=req.body;
   try {
         if(!input){
      return res.status(500).send("Input is required");
   }
   if(!input.email){
      return res.status(500).send("Email is required");
   }
   if(!input.password){
      return res.status(500).send("Password is required");
   }
   const data=await authService.login(input);
   res.status(201).json(data);
   } 
   catch (error) {
      return res.status(500).send(error.message);
   }

}

export default {
   register,
   login,

};