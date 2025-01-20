/* eslint-disable react/prop-types */

import Banner from "./Banner";
import Categories from "./Category";
import Hoodies from "./cc";
import Collection from "./Collections";
import Flashsale from "./Flashsale";
import Slidershow from "./Slidershow";

export default function Homepage({productDetails,setproduct}){
    
    return (
        <>
       
           <Slidershow/>
        
   <Categories/>
   <Flashsale productDetails={productDetails} setproduct={setproduct}/>
   <Collection Collectiontype={'Featured Product'} productDetails={productDetails} setproduct={setproduct}/>
   <Collection Collectiontype={'New Arrivals'} productDetails={productDetails} setproduct={setproduct}/>

   <Banner/>
   <Collection Collectiontype={'Hoodies'} productDetails={productDetails} setproduct={setproduct}/>
  <Hoodies setproduct={setproduct} productDetails={productDetails}/></>
    );
}