import { PiShoppingCartSimple } from "react-icons/pi";

export default function ProductCard({key,cover,name,mainPrice,discountPrice,save}){
    return (
            <div key={key} className="Productcard   pt-0.5 sm:pb-1  grid shadow-lg lg:w-auto gap-0.5 saleproduct bg-white     border-1  rounded-lg  overflow-hidden">
                      <div className="cover p-1.5 sm:2 md:p-2.5 lg:p-3">
                        <img src={cover} alt={name} className="w-full   rounded-lg  overflow-hidden " />
                      </div>
                      <div className="title font-semibold sm:font-bold ">
                        <h3>{name}</h3>
                      </div> 
                      <div className="  Save  justify-center hidden  
                      ">
                        <div className="bg-gray-700 text-white w-24   rounded overflow-hidden ">{save}</div>
                      </div>
                      <div className="amount flex justify-center gap-2">
                        <div className="mainprice text-red-500 pt-0.5">
                          <s>{mainPrice}</s>
                        </div>
                        <div className="discountprice text-lg text-green-400">{discountPrice}</div>
                      </div>
                      <div className="buy p-2 flex justify-center"> <p className="bg-black  py-1 cursor-pointer  flex gap-2  justify-center  text-white w-32 rounded-lg"><PiShoppingCartSimple className=" mt-0.5" size={20}  />Buy Now</p>
                      </div>
                    </div>
    );
}