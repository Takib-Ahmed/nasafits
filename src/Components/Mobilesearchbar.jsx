/* eslint-disable react/prop-types */
import {Input} from "@nextui-org/react";
import { IoIosSearch } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import Sidedrawer from "./drawer";
import { Link } from "react-router-dom";
import { MdOutlineClear } from "react-icons/md";
import { useState } from "react";
export default function Mobilesearch({ className, type, inputclass, filtermenuclass,location,Autocomplete, SearchTerm, setsearchterm, handlesearch, handleKeyDown,setSelectedFilters,setAutocomplete,setfilteredProducts,filteredProducts,FilteredProducts}) {
  const [filterSearch,setfiltervalue] = useState(SearchTerm)
  const handleSearch=(e)=>{

    const searchvalue = e.target.value.toLowerCase().trim()
    setfilteredProducts && setfilteredProducts(
      filteredProducts &&
      filteredProducts.filter((product) =>
        product.category.some(cat => cat.toLowerCase().includes(searchvalue.toLowerCase())) ||
        product.for.some(f => f.toLowerCase().includes(searchvalue.toLowerCase())) ||
        product.showcases.some(showcase => showcase.toLowerCase().includes(searchvalue.toLowerCase())) ||
        product.name.toLowerCase().includes(searchvalue.toLowerCase())
      )
    );
    
  }
  
  return (
    <>
      <div
        className={`flex    text-xl    p-1 px-2  ${className} ${
          type === "mbsearchbar" && "justify-between gap-1 "
        }`}
      >
        <div
          className={` bg-default-200   items-center flex justify-center p-2  ${filtermenuclass}`}
        >
    {
      location && !location.pathname.includes('/shop') ?<Link to={ '/shop'} className=" bg-black hover:bg-white hover:text-black transition-all duration-200 text-white  p-3 w-10 h-8 flex justify-center items-center  cursor-pointer ">
      <FaFilter/>
   { location && location.pathname.includes('/shop') ?    <Sidedrawer />:<></>}
           </Link>:<li className=" bg-black hover:bg-white hover:text-black transition-all duration-200 text-white  p-3 w-10 h-8 flex justify-center items-center  cursor-pointer ">
     <FaFilter/>
  { location && location.pathname.includes('/shop') ?    <Sidedrawer />:<></>}
          </li>
    }
          
        </div>
        <div>
       
          <Input
          value={SearchTerm && SearchTerm || filterSearch}
            classNames={{
              base: `   bg-white    ${
                type === "mbsearchbar"
                  ? `md:h-8 lg:h-10  p-2 mbsearchbar`
                  : inputclass
              }`,
              mainWrapper: "h-full",
              input: "text-small bg-white",
              inputWrapper:
                " w-full h-full font-normal text-default-500 bg-white  focus:bg-white  rounded-none inputwrapper",
            }}
            placeholder="Type to search..."
            size="sm"
          startContent={
            <MdOutlineClear className={` cursor-pointer absolute right-12 ${ SearchTerm? SearchTerm!=''?'block':'hidden' :  filterSearch!=''?'block':'hidden'}`} onClick={()=>{
              setsearchterm && setsearchterm('')
              setfiltervalue('')
            }}/>
          }
          onChange={(e)=>{
          handlesearch ?  handlesearch(e):handleSearch(e)
            setfiltervalue(e.target.value)
            
          }}
          onKeyDown={handleKeyDown && handleKeyDown}
          
            endContent={
              <IoIosSearch className=" bg-black h-full   cursor-pointer absolute right-0 w-10 p-1 text-white" />
            }
            type="search"
            className=" relative bg-default-400/20  focus:bg-default-400/20  rounded-none  "
          />
          <ul className={` top-14 absolute left-0  w-full  overflow-hidden   ${ Autocomplete?.length>0 ? 'flex flex-col bg-default-100':'hidden'}  gap-2    text-sm    border-[0.01px] border-default border-opacity-10 border-t-0`}>
          
             
           
                    
                    
            {filterSearch != '' &&   
          Autocomplete?.length > 0 ? (
            Autocomplete.map((item, index) => (
                <Link
                  key={index}
                  className={`px-3 py-1.5 hover:text-secondary cursor-pointer mx-2 ${
                    index !== Autocomplete.length - 1 ? 'border-b border-gray-400 border-opacity-10' : ''
                  }`}
          
          to={item.id ? `/details/${item.id}`:'/shop'}
              onClick={()=>{
                setfiltervalue( item.id ? item.name :item)
                setSelectedFilters(!item.id && {[item.toLowerCase()]:true}) 
                setAutocomplete([])
              }}
                >
                  {item.id ? item.name : item}
                </Link>
              ))
            ) : (
              filterSearch != '' &&  <li className="px-3 py-1.5 text-gray-500">No results found</li>
            )}
          
          
            
          
          
          
                    </ul>
        </div>
      </div>
    </>
  );
}
