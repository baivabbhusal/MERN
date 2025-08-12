import User from "../models/user.js";
import bcrypt from "bcryptjs";

const register=async (data)=>{
 const hashedPassword=bcrypt.hashSync(data.password);
    return await User.create(
        {
            name:data.name,
            address:data.address,
            email:data.email,
            password:hashedPassword,
            phone:data.phone,

        }
    );

};

const login= async(data)=>{
const user=await User.findOne({email:data.email});
if(!user) throw {message: "User not found with this email"};

const isPasswordMatch=bcrypt.compareSync(data.password,user.password);
if(!isPasswordMatch) throw {message: "Incorrect username or password"};
    return user;
}
export default {
    register,
    login,
};