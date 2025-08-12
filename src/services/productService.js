import fs from "fs";
import product from "../models/Product.js";
    const rawData=fs.readFileSync("./src/data/products.json","utf8");
    const products=JSON.parse(rawData);

 
const getProducts=async (query)=>{

    const filterProducts=await product.find();
    return filterProducts;
}
const getProductById=async (id)=>{
    const foundProduct=await product.findById(id);
    return foundProduct;
}

const createProduct=async (data)=>{

    const createdProduct=await product.create(data);
    return createdProduct;

};

const updateProduct=async (id,data)=>{
    const updatedProduct=await product.findByIdAndUpdate(id,
        { $set: data }
        ,{
        new:true,

    });
    return updatedProduct;
}

const deleteProduct=async (id)=>{
await product.findByIdAndDelete(id);
};

export default {
getProducts,
getProductById,
createProduct,
updateProduct,
deleteProduct
};