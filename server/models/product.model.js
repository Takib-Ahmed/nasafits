import mongoose from "mongoose";
const productSchenma = new mongoose.Schema({
 id:{type:Number,required:true,unique:true},

coverImage:{type:String,required:true},
 name:{type:String,required:true,unique:true},
 catergory:{type:[String],required:true},
 for:{type:[String],required:true},
 savings:{type:Number,required:true},
 mainPrice:{type:Number,required:true},
 discountPrice:{type:Number,required:true},
 showcasess:{type:[String],required:true},
 images:{type:[String],required:true},
 sizes:{type:[String],required:true},
}


 
 

  )

  const Product = mongoose.model('Product',productSchenma)
  export default Product