/* eslint-disable react/prop-types */
import { Checkbox, Chip } from "@heroui/react";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
export default function Filterlist({className,setSelectedFilters,selectedFilters,getPropertyCount}) {


  const categories = [
    { name: "New Arrival" },
    { name: "Flash Sale" },
    { name: "Top Selling" },
    { name: "Winter Collection" }
  ];
  
  const products = [
    {
      name: "Men",
      subCategories: [
        {
          name: "Men",
          subCategories: [
            { name: "Jacket" },
            { name: "Hoodie" },
            { name: "T Shirt" },
            { name: "Polo Shirt" },
            { name: "Panjabi" }
          ]
        }
      ]
    }
  ];
  
  
  const toggleFilter = (category) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };
;
  const selectedFilterArray = Object.keys(selectedFilters).filter(
    (key) => selectedFilters[key] === true
  );




  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      
      {categories.map((category, idx) => (
        
        <label key={idx} className="flex items-center space-x-1 lg:space-x-2 cursor-pointer">
  
               <Checkbox  color='primary'     size="sm"  type="checkbox"
            isSelected={!!selectedFilters[category.name.toLocaleLowerCase()]}
            onChange={() =>             toggleFilter(category.name.toLocaleLowerCase())} icon={<GoDotFill className="text-white  w-full text-5xl "/>} >
    
      </Checkbox>
          <span className="flex justify-between w-full mt-0.5 lg:mt-0">
            <span>{category.name}<font className='lg:ms-1'>⚡</font></span>
            <Chip radius="full"  className="text-xs lg:text-sm  w-5 p-0 " size="sm">{getPropertyCount(category.name.toLocaleLowerCase())}</Chip>
       
          </span>
        </label>
      ))}

      {products.map((product, idx) => (
        <div key={idx} >
          
          <p className="font-semibold" onClick={()=>{
   
        }}>
            {product.name} {getPropertyCount(product.name.toLocaleLowerCase())}
          </p>
          {product.subCategories.map((sub, subIdx) => (
            <div key={subIdx} className=" flex flex-col gap-3 py-2 " 
        >

      
              <label className="flex items-center space-x-1 lg:space-x-2   cursor-pointer">


              <Checkbox  color='primary'      size="sm"     type="checkbox" 
                  isSelected={!!selectedFilters[sub.name.toLocaleLowerCase()]}
                  onChange={() => toggleFilter(sub.name.toLocaleLowerCase())} icon={<GoDotFill className="text-white  w-full text-5xl "/>} >
    
      </Checkbox>
          
                <span className="flex justify-between w-full mt-0.5 lg:mt-0">
                  <span>{sub.name}<font className='lg:ms-1'>⚡</font></span>
                  <Chip radius="full"  className="text-xs lg:text-sm  w-5 p-0 " size="sm">{getPropertyCount(sub.name.toLocaleLowerCase())}</Chip>
             
                </span>
              </label>
              {sub.subCategories && (
                <div className="pl-4 flex flex-col gap-2.5 text-sm">
                  {sub.subCategories.map((child, childIdx) => (
                    <label key={childIdx} className="flex items-center space-x-1 lg:space-x-2 cursor-pointer" >
                      
              <Checkbox  color='primary'     size="sm"                      type="checkbox"
                        isSelected={!!selectedFilters[child.name.toLocaleLowerCase()]}
                        onChange={() => toggleFilter(child.name.toLocaleLowerCase())} icon={<GoDotFill className="text-white  w-full text-5xl "/>} >
    
      </Checkbox>
                      
                      <span className="flex justify-between w-full  mt-0.5 pt-0.5 h-fit">
                        <span>{child.name}<font className='lg:ms-1'>⚡</font></span>
                        <Chip radius="full"  className="text-xs lg:text-sm  w-5 p-0 " size="sm">{getPropertyCount(child.name.toLocaleLowerCase())}</Chip>
                    
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
