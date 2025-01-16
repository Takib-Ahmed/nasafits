import Banner from "./Banner";
import Categories from "./Category";
import Hoodies from "./cc";
import Collection from "./Collections";
import Flashsale from "./Flashsale";
import Slidershow from "./Slidershow";

export default function Homepage({productDetails}){
    return (
        <>
           <Slidershow/>
   <Categories/>
   <Flashsale productDetails={productDetails}/>
   <Collection Collectiontype={'Featured Product'} productDetails={productDetails}/>
   <Collection Collectiontype={'New Arrivals'} productDetails={productDetails}/>

   <Banner/>
   <Collection Collectiontype={'Hoodies'} productDetails={productDetails}/>
  <Hoodies/></>
    );
}