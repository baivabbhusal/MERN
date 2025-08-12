import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Product name is required"],
    },
    brand:{
        type:String,
         required:[true,"Product brand is required"],
    },
    category:{
        type:String,
         required:[true,"Product category is required"],
    },
    price:{
        type:Number,
         required:[true,"Product price is required"],
         min:[1,"Product price must be positive value"],
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    stock:{
        type:Number,
        default:1,
        max:[10000,"Stock must not be more than 10000"]
    },
    imageUrls:{
        type:[String],
        
    }
});

const model=mongoose.model("Product",productSchema);

export default model;