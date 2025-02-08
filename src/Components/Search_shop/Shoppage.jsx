import { useLayoutEffect, useState } from "react";
import All from "../Homepage/cc";
import ScrollToTop from "../ScrollToTop";

export default function Shop({ filteredProducts }) {




    return (
  <>
        <ScrollToTop/>
        <All 
        filteredProducts={filteredProducts} 
            page="Shop"
            className="flex mt-14 sm:mt-16 md:mt-20 lg:py-1 p-0 justify-between w-full gap-2 px-0 mx-0 "
            showFilterlist={true}
           
        /></>
    );
}
