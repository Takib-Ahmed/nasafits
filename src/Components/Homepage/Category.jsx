import { Link } from "react-router-dom";

export default function Categories({setSelectedFilters}) {
    const categories = [
      {
        name: "Hoodie",
        imgSrc: "/Categories/hoodie.png",
      },
      {
        name: "Jacket",
        imgSrc: "/Categories/jacket.png",
      },
      {
        name: "Polo Shirt",
        imgSrc: "/Categories/polo-shirt (1).png",
      },
      {
        name: "T Shirt",
        imgSrc: "/Categories/t-shirt (2).png",
      },
      {
        name: "Panjabi",
        imgSrc: "/Categories/panjabi (1).png",
      }
    ];
  
    return (
      <div className=" p-0.5 sm:p-4 md:p-5 ">
        <center className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold  ">
          Browse Our Category
        </center>
        <br className="hidden lg:block" />
        <div className=" Categorycontainer p-2 lg:p-0  grid grid-cols-2 sm:flex flex-wrap  w-full justify-center lg:justify-around gap-2 sm:gap-5 sm:gap-10 md:gap-5 ">
          {categories.map((category, index) => (
            <Link to='/shop'
            onClick={()=>{
              setSelectedFilters({[category.name.toLocaleLowerCase()]:true})
            }}
              key={index}
              className="Category flex flex-col-reverse sm:72 md:w-80 lg:w-60 relative text-center overflow-hidden rounded"
            >
              <img
                src={category.imgSrc}
                alt={category.name}
                className="transition-all duration-300 shadow-lg w-96"
              />
              <div className="w-full absolute bottom-0 items-center flex justify-center transition-all name translate-y-16 duration-300">
                <p className="bg-black opacity-50 w-full py-5 cursor-pointer text-white font-semibold">
                  <p className="text-white opacity-100">{category.name}</p>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
  