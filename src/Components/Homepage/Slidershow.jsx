import { Image } from "@nextui-org/react";
import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "./prevnext";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

  
export default function Slidershow(){
    var settings = {
        dots: true,
        
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    //     autoplay: true, // Enable auto-sliding
    // autoplaySpeed: 3000, // Delay between slides in ms (3 seconds)
    // pauseOnHover: true, // Pause sliding on hover
    arrows: true,
    prevArrow: <CustomPrevArrow icon={<GrPrevious className=" text-white  text-3xl" />} />,
    nextArrow: <CustomNextArrow icon={<GrNext className=" text-white   text-3xl"     />} />,
      };
    return (
        <>
  
<Slider {...settings} className="   relative Slider w-full mt-16 md:mt-14 lg:mt-2.5    lg:h-[51rem]  overflow-hidden">
<div className=" ">
<img
      alt="NextUI hero Image with delay"
     
      src="/Slideshow/New Project (14) (2).png" 
  className="   w-full   "
    />

</div>
<div className="   ">
<img
      alt="NextUI hero Image with delay"
     
      src="/Slideshow/New Project (24) copy.png"
  className="   w-full h-full  "
    />

</div>
<div className="  ">
<img
      alt="NextUI hero Image with delay"
     
      src="/Slideshow/New Project (14) (2).png" 
  className="   w-full   "
    />
</div>
</Slider>
<div className=" w-screen  "><img src="/Slideshow/Screenshot 2025-01-11 214951.png" alt=""  className=" w-full "/></div>   
        
        </>
    );
}