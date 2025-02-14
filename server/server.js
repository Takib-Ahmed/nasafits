import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { conntecDB } from './config/db.js'
import Product from './models/product.model.js'
import mongoose from 'mongoose'
import router from './Routes/product.routes.js'
dotenv.config()
const app = express()

const Port = process.env.PORT
const corsOptions = {
    origin:['http://localhost:5173']
}
app.use(express.json())
app.use(cors(corsOptions))
app.get('/',(req,res)=>{
res.json({"numbers":["One","Two","three"]})
})

app.listen(Port|| 3000,()=>{
    conntecDB()
    console.log('Server is running on ' + Port)
})


app.use('/api/products',router)
