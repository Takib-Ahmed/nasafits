/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "../Flashsale.css";
import { CustomNextArrow, CustomPrevArrow } from "./prevnext";
import { GrNext, GrPrevious } from "react-icons/gr";
import { PiShoppingCartSimple } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Flashsale({productDetails}) {



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    prevArrow: (
      <CustomPrevArrow
        icon={<GrPrevious className="text-black text-xl md:text-2xl  " />}
      />
    ),
    nextArrow: (
      <CustomNextArrow
        icon={<GrNext className="text-black text-xl md:text-2xl  " />}
      />
    ),
      responsive: [  {
          breakpoint: 1303,
          settings: {
            slidesToShow: 4,
            
          },
        },
    
   
          {
            breakpoint: 1030,
            settings: {
              slidesToShow: 3,
            },
          }
        ],
  };

  return (
    <>
      <div className=" text-center sm:px-2  ">
        <p className="text-3xl p-3 ">Flash Sale</p>
        <div className="bg-slate-200 w-full  rounded sm:p-1 pt-2 ">
          <Slider {...settings} className="  flex gap-2 text-center  flashsale ">
            {productDetails.map((product) => (
              <Link key={product.id}   to={`/details/${product.id}`} className="   pt-0.5 sm:pb-1 md:pb-0 grid  sm:w-60 md:w-72 lg:w-80 gap-1 sm:gap-1.5 saleproduct bg-white     border-1  rounded-lg  overflow-hidden">
                      <div  onClick={()=>{
              (product)
              }}>
                      <div className="cover p-0.5  sm:p-1  md:p-2 lg:p-2.5">
                        <img src={product.coverImage} alt={product.name} className="w-full   rounded-lg  overflow-hidden " />
                      </div>
                      <div className="title text-sm md:text-medium font-semibold sm:font-bold ">
                        <h3>{product.name}</h3>
                      </div> 
                      <div className="  Save flex justify-center   py-0.5
                      ">
                        <div className="bg-gray-700 text-white w-20 sm:w-24  rounded overflow-hidden   font-sans text-xs  sm:text-sm md:text-medium">Save Tk.{product.save}</div>
                      </div>
                      <div className="amount flex justify-center gap-2">
                        <div className="mainprice text-red-500 pt-0.5 text-xs sm:text-sm md:text-medium">
                          <s>৳{product.mainPrice}</s>
                        </div>
                        <div className="discountprice text-sm md:text-lg text-green-400">৳{product.discountPrice}</div>
                      </div>
                      <div className="buy py-0.5 sm:py-1 md:py-2 md:p-2 flex justify-center "> <p className="bg-black  py-1 cursor-pointer  flex gap-2  justify-center  text-white w-24 sm:w-32 rounded-lg text-xs sm:text-sm md:text-medium"><PiShoppingCartSimple className=" mt-0.5 text-sm sm:text-xl"   />Buy Now</p>
                      </div>
                    </div>
              </Link>
        
            ))}
          </Slider>
        </div>
        <br />
      </div>
    </>
  );
}
