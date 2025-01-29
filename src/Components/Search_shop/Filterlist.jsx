import React, { useState } from "react";

export default function Filterlist({className}) {
  const [selectedFilters, setSelectedFilters] = useState({});

  const categories = [
    { name: "New Arrival", count: 24 },
    { name: "Flash Sale", count: 32 },
    { name: "Top Selling", count: 218 },
    { name: "Free Delivery", count: 535 },
  ];
  
  const products = [
    {
      name: "Mens",
      count: 952,
      subCategories: [
        {
          name: "Half Sleeve T-Shirt",
          count: 319,
          subCategories: [
            { name: "Blank", count: 51 },
            { name: "Cut & Stitch", count: 24 },
            { name: "Cut & Stitchs", count: 28 },
            { name: "Drop Shoulder T-Shirt", count: 7 },
          ],
        },
      ],
    },
  ];
  
  const toggleFilter = (category) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      {categories.map((category, idx) => (
        <label key={idx} className="flex items-center space-x-1 lg:space-x-2">
          <input
            type="checkbox"
            checked={!!selectedFilters[category.name]}
            onChange={() => toggleFilter(category.name)}
          />
          <span className="flex justify-between w-full mt-0.5 lg:mt-0">
            <span>{category.name}<font className='lg:ms-1'>⚡</font></span>
            <span className="bg-gray-200 text-xs lg:text-sm rounded-xl p-0.5 ">
              ({category.count})
            </span>
          </span>
        </label>
      ))}

      {products.map((product, idx) => (
        <div key={idx}>
          <p className="font-semibold">
            {product.name} ({product.count})
          </p>
          {product.subCategories.map((sub, subIdx) => (
            <div key={subIdx} className=" flex flex-col gap-3 py-2 ">
              <label className="flex items-center space-x-1 lg:space-x-2  ">
                <input
                  type="checkbox"
                  checked={!!selectedFilters[sub.name]}
                  onChange={() => toggleFilter(sub.name)}
                />
                <span className="flex justify-between w-full mt-0.5 lg:mt-0">
                  <span>{sub.name}<font className='lg:ms-1'>⚡</font></span>
                  <span className="bg-gray-200 text-xs lg:text-sm rounded-xl p-0.5">
                    ({sub.count})
                  </span>
                </span>
              </label>
              {sub.subCategories && (
                <div className="pl-4 flex flex-col gap-2.5 text-sm">
                  {sub.subCategories.map((child, childIdx) => (
                    <label key={childIdx} className="flex items-center space-x-1 lg:space-x-2">
                      <input
                        type="checkbox"
                        checked={!!selectedFilters[child.name]}
                        onChange={() => toggleFilter(child.name)}
                      />
                      <span className="flex justify-between w-full  mt-0.5 pt-0.5 h-fit">
                        <span>{child.name}<font className='lg:ms-1'>⚡</font></span>
                        <span className="bg-gray-200 text-xs lg:text-sm rounded-xl h-fit p-0.5 ">
                          ({child.count})
                        </span>
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
