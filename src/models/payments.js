import mongoose from "mongoose";

const Payment_schema=new mongoose.Schema({
    amount:{
        type:Number,
        required:[true,"Amount is required."]
    },
    method:{
        type:String,
        required:[true,"Payment method is required."],
        enum:["cash","card",online],
    },
     status:{
        type:String,
        default:"pending",
        enum:["pending","completed","failed"],
    },
    createdAt:{
        type:Date,
        default:Date.now(),


    },
    payment:{
        type:mongoose.Types.ObjectId,
        ref:"payment",
    },

});

const model=mongoose.model("order",orderschema)