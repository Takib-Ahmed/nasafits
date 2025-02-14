

import Product from "../models/product.model.js";
import mongoose from "mongoose";
import express from "express";
export const getprodcuts =  async (req, res) => {
    try {
      const products = await Product.find({}); // Database থেকে সব products নেবে
      res.status(200).json({ success: true, data: products });
    } catch (error) {
      console.error("Error fetching products:", error.message);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  }

  export const createProduct = async (req, res) => {
    console.log("Incoming Product Data:", req.body); // ✅ Debugging step
    const product = req.body;
    const newProduct = new Product(product);
  
    try {
      await newProduct.save();
      res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
      console.error("Error in createProduct:", error.message);
      res.status(400).json({ success: false, message: "Server Error: " + error.message });
    }
  };
  



export const DeleteProduct =  async(req,res)=>{
const {id}= req.params

if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({success:false,message:"Product not found"})  
}
try{
    await Product.findByIdAndDelete(id);
    res.status(200).json({success:true,message:"product delelted"})
}
catch(error)
{
    res.status(500).json({success:false,message:"Server Error"})
}
}








export const UpdateProduct =  async(req,res)=>{
    const {id}= req.params
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success:false,message:"Product not found"})  
    }
    try{
     const updateProdcut =  await Product.findByIdAndUpdate(id,product,{new:true})
     res.status(200).json({sccess:true,data:updateProdcut})
    }catch(error){
res.status(500).json({success:false,message:"Server Error"})
    }
}


