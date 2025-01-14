import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "./prevnext";
import { GrNext, GrPrevious } from "react-icons/gr";
import { PiShoppingCartSimple } from "react-icons/pi";
export default function Collection({ Collectiontype }) {
  const productDetails = [
    {
      id: 1,
      imgSrc: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      title: "Mens Premium Hoodie Itachi - Tsukuyomi",
      saveText: "Save Tk. 220",
      mainPrice: "৳1000",
      discountPrice: "৳800",
    },
    {
      id: 2,
      imgSrc: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      title: "Mens Premium Hoodie Itachi - Tsukuyomi",
      saveText: "Save Tk. 220",
      mainPrice: "৳1000",
      discountPrice: "৳800",
    },
    {
      id: 3,
      imgSrc: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      title: "Mens Premium Hoodie Itachi - Tsukuyomi",
      saveText: "Save Tk. 220",
      mainPrice: "৳1000",
      discountPrice: "৳800",
    },
    {
      id: 4,
      imgSrc: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      title: "Mens Premium Hoodie Itachi - Tsukuyomi",
      saveText: "Save Tk. 220",
      mainPrice: "৳1000",
      discountPrice: "৳800",
    },
    {
      id: 5,
      imgSrc: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      title: "Mens Premium Hoodie Itachi - Tsukuyomi",
      saveText: "Save Tk. 220",
      mainPrice: "৳1000",
      discountPrice: "৳800",
    },
    {
      id: 6,
      imgSrc: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      title: "Mens Premium Hoodie Itachi - Tsukuyomi",
      saveText: "Save Tk. 220",
      mainPrice: "৳1000",
      discountPrice: "৳800",
    },
    {
      id: 7,
      imgSrc: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      title: "Mens Premium Hoodie Itachi - Tsukuyomi",
      saveText: "Save Tk. 220",
      mainPrice: "৳1000",
      discountPrice: "৳800",
    },
    {
      id: 8,
      imgSrc: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      title: "Mens Premium Hoodie Itachi - Tsukuyomi",
      saveText: "Save Tk. 220",
      mainPrice: "৳1000",
      discountPrice: "৳800",
    },
    {
      id: 9,
      imgSrc: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      title: "Mens Premium Hoodie Itachi - Tsukuyomi",
      saveText: "Save Tk. 220",
      mainPrice: "৳1000",
      discountPrice: "৳800",
    },
    {
      id: 10,
      imgSrc: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      title: "Mens Premium Hoodie Itachi - Tsukuyomi",
      saveText: "Save Tk. 220",
      mainPrice: "৳1000",
      discountPrice: "৳800",
    },
  ];
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
      prevArrow: <CustomPrevArrow  icon={<GrPrevious className=" text-black  text-3xl -translate-x-8" />} />,
        nextArrow: <CustomNextArrow icon={<GrNext className=" text-black   text-3xl translate-x-8"     />} />,
  };

  return (
    <>
      <div className="collections text-center p-5  py-5 md:pt-0   r">
        <div className=" relative mx-1.5 w-full  title text-2xl md:text-3xl lg:text-4xl font-semibold py-2 text-center border-gray border-b-2 flex items-center flex-col justify-center ">
          <h1 className="  ">{Collectiontype}</h1>
          <p className=" hovered  absolute bottom-0.5 translate-y-1  border-black border-b-2 w-72  transition-all duration-300" ></p>
        </div>
        <Slider {...settings} className="   flashsale grid grid-cols-2 sm:flex flex-wrap w-full justify-center gap-5 sm:gap-10 md:gap-12 py-10 pt-5">
          {productDetails.map((product) => (
            <div key={product.id} className="  pb-1 grid shadow-lg sm:w-60 md:w-72 lg:w-80 gap-1.5 saleproduct bg-white     border-1  rounded-lg  overflow-hidden">
              <div className="cover  p-3">
                <img src={product.imgSrc} alt={product.title} className="w-full   rounded-lg  overflow-hidden " />
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
    </>
  );
}
