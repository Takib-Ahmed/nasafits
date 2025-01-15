/* eslint-disable react/prop-types */
import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "./prevnext";
import { GrNext, GrPrevious } from "react-icons/gr";
import { PiShoppingCartSimple } from "react-icons/pi";
import ProductCard from "../ProductCard";
export default function Collection({ Collectiontype,productDetails }) {

  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
      prevArrow: <CustomPrevArrow  icon={<GrPrevious className=" text-black  text-xl md:text-2xl  lg:text-3xl -translate-x-4 sm:-translate-x-8" />} />,
        nextArrow: <CustomNextArrow icon={<GrNext className=" text-black   text-xl md:text-2xl  lg:text-3xl translate-x-4 sm:translate-x-8"     />} />,
        responsive: [  {
          breakpoint: 1303,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          },
        },
    
     
          {
            breakpoint: 1030,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            },
          },

        ],
  };

  return (
    <>
      <div className="collections text-center p-0 sm:p-5  py-5 md:pt-0   r">
        <div className=" relative mx-1.5 w-full  title text-xl md:text-2xl lg:text-3xl font-semibold py-2 text-center border-gray border-b-2 flex items-center flex-col justify-center ">
          <h1 className="  ">{Collectiontype}</h1>
          <p className=" hovered  absolute bottom-0.5 translate-y-1  border-black border-b-2 w-72  transition-all duration-300" ></p>
        </div>
        <Slider {...settings} className="collection   flashsale flex flex-wrap w-full justify-center gap-5 sm:gap-10 md:gap-12 py-10 pt-5">
          {productDetails.map((product) => (
          <ProductCard 
          key={product.id}
          cover={product.coverImage}
          name={product.name}
          save={product.save}
          mainPrice={product.mainPrice}
          discountPrice={product.discountPrice}
        
      />
          ))}
        </Slider>
      </div>
    </>
  );
}
