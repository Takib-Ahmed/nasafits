import Slider from "react-slick";
import './Flashsale.css'
export default function Hoddies(){
    var settings = {
        dots: true,
        
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    //     autoplay: true, // Enable auto-sliding
    // autoplaySpeed: 3000, // Delay between slides in ms (3 seconds)
    // pauseOnHover: true, // Pause sliding on hover
    arrows: true,

      };
    return (
 <>
<center className=" text-4xl">Hoddies</center>

        <Slider {...settings} className="flashsale text-center p-5 ">
   <div className=" grid shadow-lg  sm:w-60 md:w-72 lg:w-80  gap-1.5 saleproduct ">
            <div className="cover">
                <img src="/public/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png" alt="" className=" w-full" />
            </div>
            <div className="title font-semibold sm:font-bold">
                <h3>Mens Premium Hoodie Itachi - Tsukuyomi</h3>
            </div>
            <div className="Save flex justify-center">
                <div className=" bg-gray-700 text-white w-24">Save Tk. 220</div>
            </div>
            <div className="amount flex justify-center gap-2">
                <div className="mainprice text-red-500 mt-0.5"> <s>৳1000</s></div>
                <div className="discountprice text-lg">
                ৳800
                </div>
            </div>
            <div className="buy bg-gray-800 text-white">
                Buy Now
            </div>
        </div> 
        <div className=" grid shadow-lg  sm:w-60 md:w-72 lg:w-80  gap-1.5 saleproduct ">
            <div className="cover">
                <img src="/public/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png" alt="" className=" w-full" />
            </div>
            <div className="title font-semibold sm:font-bold">
                <h3>Mens Premium Hoodie Itachi - Tsukuyomi</h3>
            </div>
            <div className="Save flex justify-center">
                <div className=" bg-gray-700 text-white w-24">Save Tk. 220</div>
            </div>
            <div className="amount flex justify-center gap-2">
                <div className="mainprice text-red-500 mt-0.5"> <s>৳1000</s></div>
                <div className="discountprice text-lg">
                ৳800
                </div>
            </div>
            <div className="buy bg-gray-800 text-white">
                Buy Now
            </div>
        </div>    <div className=" grid shadow-lg  sm:w-60 md:w-72 lg:w-80  gap-1.5 saleproduct ">
            <div className="cover">
                <img src="/public/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png" alt="" className=" w-full" />
            </div>
            <div className="title font-semibold sm:font-bold">
                <h3>Mens Premium Hoodie Itachi - Tsukuyomi</h3>
            </div>
            <div className="Save flex justify-center">
                <div className=" bg-gray-700 text-white w-24">Save Tk. 220</div>
            </div>
            <div className="amount flex justify-center gap-2">
                <div className="mainprice text-red-500 mt-0.5"> <s>৳1000</s></div>
                <div className="discountprice text-lg">
                ৳800
                </div>
            </div>
            <div className="buy bg-gray-800 text-white">
                Buy Now
            </div>
        </div>    <div className=" grid shadow-lg  sm:w-60 md:w-72 lg:w-80  gap-1.5 saleproduct ">
            <div className="cover">
                <img src="/public/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png" alt="" className=" w-full" />
            </div>
            <div className="title font-semibold sm:font-bold">
                <h3>Mens Premium Hoodie Itachi - Tsukuyomi</h3>
            </div>
            <div className="Save flex justify-center">
                <div className=" bg-gray-700 text-white w-24">Save Tk. 220</div>
            </div>
            <div className="amount flex justify-center gap-2">
                <div className="mainprice text-red-500 mt-0.5"> <s>৳1000</s></div>
                <div className="discountprice text-lg">
                ৳800
                </div>
            </div>
            <div className="buy bg-gray-800 text-white">
                Buy Now
            </div>
        </div>    <div className=" grid shadow-lg  sm:w-60 md:w-72 lg:w-80  gap-1.5 saleproduct ">
            <div className="cover">
                <img src="/public/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png" alt="" className=" w-full" />
            </div>
            <div className="title font-semibold sm:font-bold">
                <h3>Mens Premium Hoodie Itachi - Tsukuyomi</h3>
            </div>
            <div className="Save flex justify-center">
                <div className=" bg-gray-700 text-white w-24">Save Tk. 220</div>
            </div>
            <div className="amount flex justify-center gap-2">
                <div className="mainprice text-red-500 mt-0.5"> <s>৳1000</s></div>
                <div className="discountprice text-lg">
                ৳800
                </div>
            </div>
            <div className="buy bg-gray-800 text-white">
                Buy Now
            </div>
        </div>  
        <div className=" grid shadow-lg  sm:w-60 md:w-72 lg:w-80  gap-1.5 saleproduct ">
            <div className="cover">
                <img src="/public/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png" alt="" className=" w-full" />
            </div>
            <div className="title font-semibold sm:font-bold">
                <h3>Mens Premium Hoodie Itachi - Tsukuyomi</h3>
            </div>
            <div className="Save flex justify-center">
                <div className=" bg-gray-700 text-white w-24">Save Tk. 220</div>
            </div>
            <div className="amount flex justify-center gap-2">
                <div className="mainprice text-red-500 mt-0.5"> <s>৳1000</s></div>
                <div className="discountprice text-lg">
                ৳800
                </div>
            </div>
            <div className="buy bg-gray-800 text-white">
                Buy Now
            </div>
        </div> 

        </Slider>
 
 </>
    );
}