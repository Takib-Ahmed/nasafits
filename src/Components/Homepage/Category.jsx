export default function Categories() {
    const categories = [
      {
        name: "Hoddie",
        imgSrc: "/Categories/Untitled design (3)-fotor-20250106185420 copy (9).png",
      },
      {
        name: "Hoddie",
        imgSrc: "/Categories/Untitled design (3)-fotor-20250106185420 copy (9).png",
      },
      {
        name: "Hoddie",
        imgSrc: "/Categories/Untitled design (3)-fotor-20250106185420 copy (9).png",
      },
      {
        name: "Hoddie",
        imgSrc: "/Categories/Untitled design (3)-fotor-20250106185420 copy (9).png",
      },
      {
        name: "Hoddie",
        imgSrc: "/Categories/Untitled design (3)-fotor-20250106185420 copy (9).png",
      }
    ];
  
    return (
      <div className="p-5 ">
        <center className="text-2xl md:text-3xl lg:text-4xl font-semibold ">
          Browse Our Category
        </center>
        <br className="hidden lg:block" />
        <div className=" Categorycontainer  pt-2  grid grid-cols-2 sm:flex flex-wrap  w-full justify-center lg:justify-around gap-5 sm:gap-10 md:gap-5 ">
          {categories.map((category, index) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    );
  }
  