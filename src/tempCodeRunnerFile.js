import express from "express";
import fs from "fs";
import productRoute from "./routes/productRoute.js";

import config from "./config/config.js"
const app=express();

mongoose.connect("mongodb://localhost:27017/mern-20250622").then(()=>{
    console.log("Database Connected Sucessfully");
})
.catch((error)=>console.log(error));

// app.get("/",(req,res)=>{
//     const products=fs.readFileSync("./src/data/products.json","utf8");
//     const productObj=JSON.parse(products);
//     res.json(productObj);
// })

app.get("/",(req,res)=>{
    res.json({
        name:config.name,
        port:config.PORT,
        version:config.VERSION,
        status:"OK"
    });
})

app.use("/",productRoute)

app.listen(5000,()=>{
    console.log(`Server running at port ${config.PORT}`)
})