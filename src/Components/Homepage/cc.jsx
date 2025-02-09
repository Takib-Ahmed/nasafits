/* eslint-disable react/prop-types */
import { PiShoppingCartSimple } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard";
import Mobilesearch from "../Mobilesearchbar";
import Filterlist from "../Search_shop/Filterlist";
import { useState } from "react";
import Context from "../../contexts/Context";
import { Button } from "@nextui-org/react";
export default function All({
  setproduct,
  filteredProducts,
  page,
  className,
  slice,
  showFilterlist,
  productDetails,
}) {

 
  const Showproducts = slice && productDetails.slice(0, slice)
  const [FilteredProducts,setfilteredProducts]  = useState([])
  const ShowFIlteredproducts = FilteredProducts.length>0 ? FilteredProducts: filteredProducts
  const navigate = useNavigate()
  return (
    <>
      <div
        className={`collections text-center  p-0 sm:p-2 md:p-3 lg:p-5  py-5 md:pt-0  ${className}   `}
      >
        {showFilterlist ? (
          <Context.Consumer>
            {({ setSelectedFilters, selectedFilters,getPropertyCount }) => (
              <Filterlist
              ShowFIlteredproducts={ShowFIlteredproducts}
              getPropertyCount={getPropertyCount}
                setSelectedFilters={setSelectedFilters}
                selectedFilters={selectedFilters}
                className={
                  "  sidefilterlist sticky top-0 w-1/2 mt-1  z-20  bg-white  rounded text-small  lg:text-medium   "
                }
              />
            )}
          </Context.Consumer>
        ) : (
          !page && (
            <div className=" relative w-full  title text-2xl md:text-3xl lg:text-4xl font-semibold py-2 text-center border-gray border-b-2 flex items-center flex-col justify-center ">
              <h1 className="  ">{`All Collections`}</h1>
              <p className=" hovered absolute bottom-0.5 translate-y-1  border-black border-b-2 w-72 mx-20  transition-all duration-300"></p>
            </div>
          )
        )}
        {page == "Shop" ? (
          <div className=" shoplist flex flex-col  gap-2  justify-end">
            <Mobilesearch 
            FilteredProducts={FilteredProducts}
            setfilteredProducts={setfilteredProducts}
            filteredProducts={filteredProducts}
           
              className=" w-fit lg:w-full  flex   justify-center  "
              filtermenuclass="hidden"
              inputclass=" w-[60vw] sm:w-[65vw] md:w-[70vw]   lg:w-[76.5vw]  shopsearchbar        p-2    "
            />
            <div className=" Cardcontainer    grid grid-cols-2 md:flex flex-wrap w-full justify-center gap-1.5 sm:gap-2  px-2 sm:px-0 ">
              {ShowFIlteredproducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  showSave={false}
                  className={` shopcard  pb-1 grid shadow-lg sm:w-60 md:w-[10rem] lg:w-[18rem]  gap-1 saleproduct bg-white     border-1  rounded-lg  overflow-hidden`}
                  type="ALL"
                />
              ))}
            </div>
          </div>
        ) : (
<>
<div className=" Cardcontainer    grid grid-cols-2 md:flex flex-wrap w-full justify-center gap-1.5 sm:gap-2 md:gap-4  py-10 pt-5 pb-5">
            {Showproducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showSave={false}
                className={`All  pb-1 grid shadow-lg sm:w-60 md:w-auto lg:w-[22rem]  gap-1 saleproduct bg-white     border-1  rounded-lg  overflow-hidden`}
                type="ALL"
              />
            ))}

          </div>
                <div className=" flex justify-center w-full items-center">      <Link to='/shop' className="cursor-pointer" role="button"><Button    size="md"  href='/shop'   variant="solid" color=""  className='bg-slate-700 text-white md:hidden' radius="md"
                
                onClick={()=>{
                  navigate('/shop')
                }} 
                >Show More</Button><Button size="lg"    variant="solid" color=""  className=' hidden md:block bg-slate-700 text-white' radius="md">Show More</Button></Link></div></>
        )}
      </div>
    </>
  );
}
