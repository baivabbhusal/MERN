import fs from "fs";
import productService from "../services/productService.js";

const getProducts=async (req,res)=>{

    const products=await productService.getProducts(req.query);
    res.status(200).json(products);
    
}

const getProductById=async (req,res)=>{
    const id=req.params.id;
    const product=await productService.getProductById(id);
     res.json(product);
};

const createProduct=async (req,res)=>{
try{
       const data=await productService.createProduct(req.body);
   res.status(200).json(data);
}
catch(error){
    res.status(500).send(error.message);
}
}

const updateProduct=async (req,res)=>{
     const id=req.params.id;
   try{
    
    const data= await productService.updateProduct(id,req.body);

   
    res.status(201).json(data);
}
catch(error){
res.status(500).send(error.message);
}
}

const deleteProduct=async (req,res)=>{
const id=req.params.id;
try{
    await productService.deleteProduct(id);
    res.send(`Product Deleted Sucessfully with id: ${id}`);
}
catch(error){
res.status(500).send(error.message);
}
}

export default {
getProducts,
createProduct,
getProductById,
updateProduct,
deleteProduct
};
