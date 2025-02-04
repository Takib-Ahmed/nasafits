/* eslint-disable react/prop-types */

import Banner from "./Banner";
import Categories from "./Category";
import All from "./cc";
import Collection from "./Collections";
import Flashsale from "./Flashsale";
import Slidershow from "./Slidershow";

export default function Homepage({productDetails,setSelectedFilters}){
    
    return (
        <>
       
           <Slidershow/>
        
   <Categories setSelectedFilters={setSelectedFilters}/>
   <Flashsale productDetails={productDetails} />
   <Collection Collectiontype={'Featured Product'} productDetails={productDetails} />
   <Collection Collectiontype={'New Arrivals'} productDetails={productDetails}/>

   <Banner/>
   <Collection Collectiontype={'Hoodies'} productDetails={productDetails} />
  <All  productDetails={productDetails} slice={8}/></>
    );
}