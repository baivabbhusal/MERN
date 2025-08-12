import mongoose from "mongoose";
import config from "./config.js";
async function connectDb(){
    try{
        const status=await mongoose.connect(config.mongoDbUrl);

        console.log(`Database Connected:${status.connection.host}`);

    }
    catch(error){
        console.log(error);

    }
}
export default connectDb;
