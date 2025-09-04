import authService from "../services/authService.js";
import { createJwt } from "../utils/jwt.js";

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
const data = await authService.login(input);

if (!data) {
  return res.status(401).send("Invalid email or password");
}

// Build a plain payload for JWT
const payload = {
  id: data._id.toString(),   // convert ObjectId to string
  email: data.email,
  role: data.roles[0]        // or include all roles if needed
};

const token = createJwt(payload);

res.status(201).json({
  success: true,
  user: {
    id: data._id,
    name: data.name,
    email: data.email,
    roles: data.roles,
    phone: data.phone,
    address: data.address,
  },
  token
})
   } 
   catch (error) {
      return res.status(500).send(error.message);
   }

}

export default {
   register,
   login,

};