import Slider from "react-slick";
import "./Flashsale.css";

export default function Hoddies() {
  const products = [
    {
      id: 1,
      image: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      title: "Mens Premium Hoodie Itachi - Tsukuyomi",
      mainPrice: "৳1000",
      discountPrice: "৳800",
      savings: "Save Tk. 220",
    },
    {
      id: 2,
      image: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      title: "Mens Premium Hoodie Itachi - Tsukuyomi",
      mainPrice: "৳1000",
      discountPrice: "৳800",
      savings: "Save Tk. 220",
    },
    {
      id: 3,
      image: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      title: "Mens Premium Hoodie Itachi - Tsukuyomi",
      mainPrice: "৳1000",
      discountPrice: "৳800",
      savings: "Save Tk. 220",
    },
    // Add more products as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <center className="text-4xl">Hoddies</center>
      <Slider {...settings} className="flashsale text-center p-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="grid shadow-lg sm:w-60 md:w-72 lg:w-80 gap-1.5 saleproduct"
          >
            <div className="cover">
              <img
                src={product.image}
                alt={product.title}
                className="w-full"
              />
            </div>
            <div className="title font-semibold sm:font-bold">
              <h3>{product.title}</h3>
            </div>
            <div className="Save flex justify-center">
              <div className="bg-gray-700 text-white w-24">
                {product.savings}
              </div>
            </div>
            <div className="amount flex justify-center gap-2">
              <div className="mainprice text-red-500 mt-0.5">
                <s>{product.mainPrice}</s>
              </div>
              <div className="discountprice text-lg">
                {product.discountPrice}
              </div>
            </div>
            <div className="buy bg-gray-800 text-white">Buy Now</div>
          </div>
        ))}
      </Slider>
    </>
  );
}
