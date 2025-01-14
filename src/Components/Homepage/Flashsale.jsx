import Slider from "react-slick";
import "../Flashsale.css";
import { CustomNextArrow, CustomPrevArrow } from "./prevnext";
import { GrNext, GrPrevious } from "react-icons/gr";
import { PiShoppingCartSimple } from "react-icons/pi";

export default function Flashsale() {
  const products = [
    {
      id: 1,
      image: "/public/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      title: "Mens Premium Hoodie Itachi - Tsukuyomi",
      mainPrice: "৳1000",
      discountPrice: "৳800",
      savings: "Tk. 220",
    },
    {
      id: 2,
      image: "/public/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      title: "Mens Premium Hoodie Itachi - Tsukuyomi",
      mainPrice: "৳1000",
      discountPrice: "৳800",
      savings: "Tk. 220",
    },
    {
      id: 3,
      image: "/public/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      title: "Mens Premium Hoodie Itachi - Tsukuyomi",
      mainPrice: "৳1000",
      discountPrice: "৳800",
      savings: "Tk. 220",
    },
    {
        id: 3,
        image: "/public/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
        title: "Mens Premium Hoodie Itachi - Tsukuyomi",
        mainPrice: "৳1000",
        discountPrice: "৳800",
        savings: "Tk. 220",
      },
      {
        id: 3,
        image: "/public/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
        title: "Mens Premium Hoodie Itachi - Tsukuyomi",
        mainPrice: "৳1000",
        discountPrice: "৳800",
        savings: "Tk. 220",
      },
      {
        id: 3,
        image: "/public/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
        title: "Mens Premium Hoodie Itachi - Tsukuyomi",
        mainPrice: "৳1000",
        discountPrice: "৳800",
        savings: "Tk. 220",
      },
    // Add more products as needed
  ];

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
        icon={<GrPrevious className="text-black text-3xl -translate-x-3" />}
      />
    ),
    nextArrow: (
      <CustomNextArrow
        icon={<GrNext className="text-black text-3xl translate-x-3" />}
      />
    ),
  };

  return (
    <>
      <div className=" text-center  ">
        <p className="text-3xl p-3">Flash Sale</p>
        <div className="bg-slate-200 mx-2 rounded p-1 pt-2 ">
          <Slider {...settings} className="  flex gap-2 text-center  flashsale ">
            {products.map((product) => (
              <div key={product.id} className="   grid  sm:w-60 md:w-72 lg:w-80 gap-1.5 saleproduct bg-white     border-1  rounded-lg  overflow-hidden">
                      <div className="cover  p-3">
                        <img src={product.image} alt={product.title} className="w-full   rounded-lg  overflow-hidden " />
                      </div>
                      <div className="title font-semibold sm:font-bold ">
                        <h3>{product.title}</h3>
                      </div> 
                      <div className="  Save flex justify-center  
                      ">
                        <div className="bg-gray-700 text-white w-24   rounded overflow-hidden">{product.saveText}</div>
                      </div>
                      <div className="amount flex justify-center gap-2">
                        <div className="mainprice text-red-500 pt-0.5">
                          <s>{product.mainPrice}</s>
                        </div>
                        <div className="discountprice text-lg text-green-400">{product.discountPrice}</div>
                      </div>
                      <div className="buy p-2 flex justify-center"> <p className="bg-black  py-1 cursor-pointer  flex gap-2  justify-center  text-white w-32 rounded-lg"><PiShoppingCartSimple className=" mt-0.5" size={20}  />Buy Now</p>
                      </div>
                    </div>
            ))}
          </Slider>
        </div>
        <br />
      </div>
    </>
  );
}
