/* eslint-disable react/prop-types */
import { Input } from "@nextui-org/react";
import { CiFilter } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import Sidedrawer from "./drawer";
import { Link } from "react-router-dom";


export default function Mobilesearch({ className, type, inputclass, filtermenuclass,location}) {
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
    
          <Link to={location && !location.pathname.includes('/shop') &&'/shop'} className=" bg-black hover:bg-white hover:text-black transition-all duration-200 text-white  p-3 w-10 h-8 flex justify-center items-center  cursor-pointer ">
     <FaFilter/>
  { location && location.pathname.includes('/shop') &&    <Sidedrawer />}
          </Link>
        </div>
        <div>
       
          <Input
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
            endContent={
              <IoIosSearch className=" bg-black h-full   cursor-pointer absolute right-0 w-10 p-1 text-white" />
            }
            type="search"
            className=" relative bg-default-400/20  focus:bg-default-400/20  rounded-none  "
          />{" "}
        </div>
      </div>
    </>
  );
}
