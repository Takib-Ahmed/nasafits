import { PiShoppingCartSimple } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Hoodies({setproduct,productDetails}){

    return (
        <>
            <div className="collections text-center  p-0 sm:p-2 md:p-3 lg:p-5  py-5 md:pt-0   ">
        <div className=" relative mx-1.5 w-full  title text-2xl md:text-3xl lg:text-4xl font-semibold py-2 text-center border-gray border-b-2 flex items-center flex-col justify-center ">
          <h1 className="  ">{`All Collections`}</h1>
          <p className=" hovered absolute bottom-0.5 translate-y-1  border-black border-b-2 w-72 mx-20  transition-all duration-300" ></p>
        </div>
        <div  className=" Cardcontainer    grid grid-cols-2 md:flex flex-wrap w-full justify-center gap-1.5 sm:gap-2 md:gap-4  py-10 pt-5">
          {productDetails.map((product) => (

<Link key={product.id}   onClick={()=>{
  setproduct(product)
}}  to='/detalis' className="All  pb-1 grid shadow-lg sm:w-60 md:w-auto lg:w-[22rem]  gap-1 saleproduct bg-white     border-1  rounded-lg  overflow-hidden">
<div>
                    <div className="cover  p-1.5 sm:2 md:p-2.5 lg:p-3">
                      <img src={product.coverImage} alt={product.name} className="w-full   rounded-lg  overflow-hidden " />
                    </div>
                    <div className="title font-semibold sm:font-bold ">
                      <h3>{product.name}</h3>
                    </div> 
                    <div className="  Save flex justify-center  hidden
                    ">
                      <div className="bg-gray-700 text-white w-24   rounded overflow-hidden">{product.save}</div>
                    </div>
                    <div className="amount flex justify-center gap-2">
                      <div className="mainprice text-red-500 pt-0.5">
                        <s>{product.mainPrice}</s>
                      </div>
                      <div className="discountprice text-lg text-green-400">{product.discountPrice}</div>
                    </div>
                    <div className="buy pb-2 flex justify-center"> <p className="bg-black  py-1 cursor-pointer  flex gap-2  justify-center  text-white w-32 rounded-lg"><PiShoppingCartSimple className=" mt-0.5" size={20}  />Buy Now</p>
                    </div>
                  </div></Link>
            
          ))}
        </div>
      </div>
        </>
    );
}