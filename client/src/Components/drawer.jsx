/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerBody,
  useDisclosure,
} from "@heroui/react";

import Filterlist from "./Search_shop/Filterlist";
import { Button } from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import Context from "../contexts/Context";
export default function Sidedrawer({ menuItems, location,setSelectedFilters }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [size, setSize] = useState("md");

  // Function to update drawer size based on screen width
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1104) {
        setSize("xl");
      } else if (window.innerWidth >= 850) {
        setSize("lg");
      } else if (window.innerWidth >= 750) {
        setSize("md");
      } else if (window.innerWidth >= 650) {
        setSize("xs"); // Smallest on small screens
      } else {
        setSize("w-64");
      }
    };
    updateSize(); // Run on mount
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <Button
        className="bg-transparent rounded-none hover:text-black text-white p-0   absolute  left-0  w-[5%]  -translate-x-2 h-full  drawer "
        onPress={onOpen}
      ></Button>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onOpenChange={onOpenChange}
        className={`rounded-none ${size}`}
        size={size} // Dynamic width
      >
        <DrawerContent>
          {location && location.pathname.includes("/shop") ? (
            <div className="text-center text-2xl py-5">Filter Options</div>
          ) : (
            !location && (
              <div className="text-center text-2xl py-5">Filter Options</div>
            )
          )}
          <DrawerBody>
            {menuItems && !location.pathname.includes("/shop") ? (
              <div className="  w-full py-5 flex flex-col gap-2 ">
                {menuItems.map((item, index) => (
                  <div key={`${item}-${index}`} className="">
                    <Link
                      className="w-full"
                      to={`${item === 'Home' ? '/':  '/shop' 



                      }`}
                      color={
                        index === 2
                          ? "primary"
                          : index === menuItems.length - 1
                          ? "danger"
                          : "foreground"
                      }
                      href="#"
                      size="lg"
                  
                  onClick={()=>{
item === 'Winter Collection' ? setSelectedFilters({['winter collection']:true}) : item === 'Flash Sale' &&  setSelectedFilters({['flash sale']:true}) 
                  }}>
                      {item}
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <Context.Consumer>
                {({ setSelectedFilters, selectedFilters ,getPropertyCount,FilteredProducts,setfilteredProducts,ShowFIlteredproducts}) => (
                  <Filterlist
                  FilteredProducts ={FilteredProducts}
                  
                  setfilteredProducts={setfilteredProducts}
                  ShowFIlteredproducts={ShowFIlteredproducts}
                  getPropertyCount={getPropertyCount}
                    setSelectedFilters={setSelectedFilters}
                    selectedFilters={selectedFilters}
                  />
                )}
              </Context.Consumer>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
