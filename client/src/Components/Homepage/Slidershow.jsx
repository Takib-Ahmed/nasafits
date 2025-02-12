import { Image } from "@nextui-org/react";
import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "./prevnext";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";

  
export default function Slidershow({setSelectedFilters}){
    var settings = {
        dots: true,
        
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable auto-sliding
    autoplaySpeed: 3000, // Delay between slides in ms (3 seconds)
    pauseOnHover: true, // Pause sliding on hover
    arrows: true,
    prevArrow: <CustomPrevArrow icon={<GrPrevious className=" text-white text-xl md:text-2xl  lg:text-3xl" />} />,
    nextArrow: <CustomNextArrow icon={<GrNext className=" text-white   text-xl md:text-2xl lg:text-3xl"     />} />,
      };
    return (
        <div className=" flex flex-col gap-0">
  
<Slider {...settings} className="   relative Slider w-full mt-10 md:mt-14 lg:mt-[1.1rem]   lg:h-[51rem]  overflow-hidden">
<Link to='/shop' className=" " onClick={()=>{
    setSelectedFilters({'winter collection':true})
}}>
<img
      alt="NextUI hero Image with delay"
     
      src="/Slideshow/New Project (14) (2).png" 
  className="   w-full   "
    />

</Link>

<div className="  ">
<img
      alt="NextUI hero Image with delay"
     
      src="/Slideshow/New Project (14) (2).png" 
  className="   w-full   "
    />
</div>
</Slider>
<div className=" w-full     -translate-y-2  "><img src="/Slideshow/Screenshot 2025-01-11 214951.png" alt=""  className=" w-full  "/></div>   
        
        </div>
    );
}