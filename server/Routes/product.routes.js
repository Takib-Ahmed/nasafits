
import express from 'express'
import Product from '../models/product.model.js';
import mongoose from 'mongoose';
import { createProduct, DeleteProduct, getprodcuts, UpdateProduct } from '../controller/product.controller.js';
const router = express.Router()









router.get('/',getprodcuts);
  
router.post('/',createProduct)


router.delete('/:id',DeleteProduct)

// uEOgDWisP3sPXmoG



router.patch('/:id',UpdateProduct)


export default router