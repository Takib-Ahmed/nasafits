import { PiShoppingCartSimple } from "react-icons/pi";

export default function Hoodies(){
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
  ];
  
    return (
        <>
            <div className="collections text-center p-5  py-5 md:pt-0   r">
        <div className=" relative mx-1.5 w-full  title text-2xl md:text-3xl lg:text-4xl font-semibold py-2 text-center border-gray border-b-2 flex items-center flex-col justify-center ">
          <h1 className="  ">{`All Collections`}</h1>
          <p className=" hovered absolute bottom-0.5 translate-y-1  border-black border-b-2 w-72 mx-20  transition-all duration-300" ></p>
        </div>
        <div  className=" Cardcontainer   flashsale grid grid-cols-2 md:flex flex-wrap w-full justify-center gap-4  py-10 pt-5">
          {productDetails.map((product) => (
            <div key={product.id} className="All  pb-1 grid shadow-lg sm:w-60 md:w-auto lg:w-[22rem]  gap-1 saleproduct bg-white     border-1  rounded-lg  overflow-hidden">
                    <div className="cover  p-3">
                      <img src={product.imgSrc} alt={product.title} className="w-full   rounded-lg  overflow-hidden " />
                    </div>
                    <div className="title font-semibold sm:font-bold ">
                      <h3>{product.title}</h3>
                    </div> 
                    <div className="  Save flex justify-center  hidden
                    ">
                      <div className="bg-gray-700 text-white w-24   rounded overflow-hidden">{product.saveText}</div>
                    </div>
                    <div className="amount flex justify-center gap-2">
                      <div className="mainprice text-red-500 pt-0.5">
                        <s>{product.mainPrice}</s>
                      </div>
                      <div className="discountprice text-lg text-green-400">{product.discountPrice}</div>
                    </div>
                    <div className="buy pb-2 flex justify-center"> <p className="bg-black  py-1 cursor-pointer  flex gap-2  justify-center  text-white w-32 rounded-lg"><PiShoppingCartSimple className=" mt-0.5" size={20}  />Buy Now</p>
                    </div>
                  </div>
          ))}
        </div>
      </div>
        </>
    );
}