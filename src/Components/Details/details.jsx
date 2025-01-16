import { PiShoppingCartSimple } from "react-icons/pi";

import { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import SizeGuide from "./SIzeguide";
import Slider from "react-slick";
export default function Details(){
  const product = {
    id: 1,
    coverImage: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
    name: "Mens Premium Hoodie Itachi - Tsukuyomi",
    save: 200,
    mainPrice: 1000,
    discountPrice: 800,
    images: [
      "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png"
    ],
    sizes: ["M", "L", "XL", "2XL"]
  }
  const [quantity,setquantity] = useState(1);
  const [selectedkey,setSelectedkey] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
  const sliderRef = useRef(null);
   var settings = {
        dots: false,
        
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    //     autoplay: true,
    // autoplaySpeed: 3000, 
    // pauseOnHover: true, 
    arrows: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), 
    // customPaging: (i) => (
    //   <div
    //     className={`hover:bg-white transition-all duration-300 h-3 w-3 rounded-full ${
    //       currentSlide === i ? "bg-blue-400" : "bg-gray-400"
    //     }`}
    //     style={{ cursor: "pointer" }}
    //   />
    // ),
    // appendDots: (dots) => (
    //   <center className="justify-center  mx-0.5">
    //     <div className="p-1 z-50 grid items-center justify-center">
    //       <ul className="flex justify-center gap-0 pt-10 translate-y-[-38px] items-center ">
    //         {dots}
    //       </ul>
    //     </div>
    //   </center>
    // ),
      };
      const renderAdditionalDots = () => (
        <div className="flex justify-center gap-2 mt-4">
          {product.images.map((image, i) => (
            <div
              key={i}
              className="cursor-pointer"
              onClick={() => {
                sliderRef.current.slickGoTo(i); // Programmatically navigate to the clicked slide
                setCurrentSlide(i); // Update currentSlide to reflect the navigation
              }}
            >
              <img
                src={image}
                alt={image}
                className={` ${
                  currentSlide === i
                    ? "border-2  border-sky-500"
                    : "border border-gray-300"
                }`}
              />
            </div>
          ))}
        </div>
      );

    return (
        <>
                <div  className="   pt-0.5 sm:pb-1 md:pb-0  flex flex-wrap md:flex-nowrap  justify-center  mt-20  gap-1  saleproduct bg-white       rounded-lg  overflow-hidden">
                            <div className="cover p-0.5  sm:p-1  md:p-2 lg:p-2.5 w-[100%] md:w-[30rem] lg:w-[35rem]  ">
                     
   <Slider {...settings} className=" " ref={sliderRef}>
   {product.images.map((image, key) => (
       <div key={key} className="  overflow-hidden  ">
         <img
           src={image}
          
           className="  "
         />
       </div>
     ))}
   </Slider>
   {renderAdditionalDots()}

                            </div>
                          <div className="grid gap-3  pt-3 p-3 sm:p-5  ">
                          <div className="title text-2xl font-semibold sm:font-bold  ">
                              <h3>{product.name}</h3>
                            </div> 
                            {/* <div className="  Save  justify-center   py-0.5 hidden
                            ">
                              <div className="bg-gray-700 text-white w-20 sm:w-24  rounded overflow-hidden   font-sans text-xs  sm:text-sm md:text-medium ">Save Tk.{product.save}</div>
                            </div> */}
                            <div className="amount flex justify-start  gap-2  ">
                              <div className="mainprice text-red-500  text-lg pt-1">
                                <s>৳{product.mainPrice}</s>
                              </div>
                              <div className="discountprice text-2xl text-green-400">৳{product.discountPrice}</div>
                            </div>
                            <div className="grid gap-2.5 py-2 pt-0    ">
                              <p>Select Size</p>
                              <div className="flex gap-5">
                              {product.sizes.map((sizes,key)=>( <p onClick={()=>{
                                setSelectedkey(key)
                              }} className={ `border border-black p-1 cursor-pointer  w-12 text-center ${selectedkey==key && 'bg-black text-white'}`} key={key}>{sizes}</p>)
                               
                              )}
                              </div>
                            </div>
                            <div className="buy  flex flex-wrap justify-start  gap-2   select-none "> 
                              <div className="flex  border border-black w-28 justify-around items-center">
<FaMinus className=" cursor-pointer" onClick={()=>{quantity>1 && setquantity(prev=>prev-1)}}/> <p>{quantity}</p><FaPlus className=" cursor-pointer" onClick={()=>{setquantity(prev=>prev+1)}}/>
                              </div>
                              
                             <div className="flex gap-2" >
                             <p className="bg-gray-900  py-1 cursor-pointer  flex gap-2  justify-center z text-white w-24 sm:w-32  text-xs sm:text-sm md:text-medium items-center">
                              <FaPlus/> 
                                
                                Add To Cart</p><p className="bg-gray-950  py-1 cursor-pointer  flex gap-2  justify-center z text-white w-24 sm:w-32  text-xs sm:text-sm md:text-medium  items-center"><PiShoppingCartSimple className="  items-center text-sm sm:text-xl"   />Buy Now</p>
                             </div>
                            </div>
                            <div className={` description  py-2 justify-center lg:text-left  md:w-96 lg:w-[40rem]   `}>
                  <h1 className=" font-bold text-lg">PREMIUM HOODIE </h1>
                  <ul className=" grid gap-2  py-2">
                    <li><font className=' font-semibold'>Fabric:</font> Made from 100% fleece cotton with one-sided brush, ensuring lasting comfort and durability. Original 2x2 rubber rib cuff & bottom for a premium fit.  </li>
                    <li><font className=' font-semibold'>Quality:</font> Top-notch craftsmanship with GSM 480-550, guaranteeing exceptional quality.</li>
                    <li><font className=' font-semibold '>Available Colors:</font>  Black, White, Red,Coffee,green</li> 
                    <li className=" py-2"><SizeGuide/></li>
                  </ul>
      
                          </div>
                          <center className=" limited py-2 pt-0">  {` 


⚡ Limited Stock! Order Now to Elevate Your Style!`}</center>     
                          </div>
                      
                          </div>
                          
        </>
    );
}