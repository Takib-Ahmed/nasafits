import { useLayoutEffect, useState } from "react";
import All from "../Homepage/cc";

export default function Shop({ productDetails }) {




    return (
        <All 
            productDetails={productDetails} 
            page="Shop"
            className="flex mt-14 sm:mt-16 md:mt-20 lg:mt-10 p-0 justify-between w-full gap-2 px-0 mx-0"
            showFilterlist={true}
        />
    );
}
