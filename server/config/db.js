
import mongoose from "mongoose"
export const conntecDB  = async()=>{
    try{
const concection = await mongoose.connect(process.env.MONGO_URI)
concection && console.log('Connected to MongoDB')
    }
    catch(error){
console.log(error.message)
process.exit(1)
    }
}