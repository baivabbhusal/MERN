import express from "express";
import bodyParser from "body-parser";

import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import connectDb from "./config/database.js";
import config from "./config/config.js";
import todosroute from "./routes/todosroute.js";
import logger from "./middlewares/logger.js";
import auth from "./middlewares/auth.js";
const app=express();
connectDb();

// app.get("/",(req,res)=>{
//     const products=fs.readFileSync("./src/data/products.json","utf8");
//     const productObj=JSON.parse(products);
//     res.json(productObj);
// })

app.get("/",(req,res)=>{
    res.json({
        name:config.name,
        port:config.port,
        version:config.version,
        status:"OK"
    });
})

app.use(bodyParser.json());

app.use(logger)
app.use(auth)

app.use("/api/products",productRoute)


app.use("/todos",todosroute);

app.use("/api/auth",authRoute);
app.use("/api/users",auth,userRoute);
app.listen(5000,()=>{
    console.log(`Server running at port ${config.port}`)
})