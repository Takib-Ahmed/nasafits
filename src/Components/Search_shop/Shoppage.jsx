import { useEffect, useState } from "react";
import All from "../Homepage/cc";


export default function Shop({productDetails}){
    const [showFilterlist,setshowfilterlist] = useState(true)
    const handleResize = () => {
        window.innerWidth < 878 ? setshowfilterlist(false) : setshowfilterlist(true);
    };

    useEffect(() => {
        window.innerWidth < 878 ? setshowfilterlist(false) : setshowfilterlist(true);
        handleResize(); // Run on initial render
        window.addEventListener("resize", handleResize); // Add resize listener
        return () => window.removeEventListener("resize", handleResize); // Clean up the listener on unmount
    }, []);
    return (
        <>

        <All productDetails={productDetails} page='Shop' className='  mt-14 sm:mt-16 md:mt-20  lg:mt-10 ' 
        
        showFilterlist={showFilterlist}
        />
        
      
        </>
    );
}