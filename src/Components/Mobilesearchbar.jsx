

import { Input } from "@nextui-org/react";
import { CiFilter } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
export default function Mobilesearch({className}){
    return (
       <>
       <div className={`flex  justify-between text-xl gap-1   mobilesearch p-1 px-2  ${className}`}>

     <div className=" bg-default-200   items-center flex justify-center p-2">   <div className=" bg-black text-white  p-2 w-10 h-8 flex justify-center items-center  cursor-pointer "><FaFilter/></div></div>
        <div>   <Input
            classNames={{
              base: " mbsearchbar  bg-white  md:h-8 lg:h-10  p-2  ",
              mainWrapper: "h-full",
              input: "text-small bg-white",
              inputWrapper:
                " w-full h-full font-normal text-default-500 bg-white  focus:bg-white  rounded-none inputwrapper",
              
            }}
            placeholder="Type to search..."
            size="sm"
            endContent={<IoIosSearch size={25}  className=" bg-black h-full   cursor-pointer absolute right-0 w-10 p-2 text-white"/>}
            type="search" className=" relative bg-default-400/20  focus:bg-default-400/20  rounded-none  "
          /> </div>
       </div>
       
       </> 
    );
}