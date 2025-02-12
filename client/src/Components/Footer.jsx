
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = ({setSelectedFilters}) => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top
  };
  const footerSections = [
    {
      title: "Follow Us",
      content: (
        <div className="flex flex-wrap gap-4">
          <a href="#" aria-label="Facebook">
            <RiFacebookCircleLine  className=" text-2xl   rounded-full w-fit p-0 m-0  hover:text-secondary" />
          </a>
          <a href="#" aria-label="YouTube">
            <FaInstagram   className="text-2xl   rounded-full w-fit p-0 m-0 pt-0.5 hover:text-secondary" />
          </a>
        </div>
      ),
    },
    {
      title: "Blog",
      content: <Link to='/'  className="  hover:text-secondary"><a href="#">Nasa Fits</a></Link>,
    },
    {
      title: "Most Popular Products",
      content: (
        <ul className="space-y-1">
          {["Mens Premium Hoddie", "Full Sleve T-Shirt"].map((product, index) => (
            <li className=" hover:text-secondary cursor-pointer"  key={index}>{product}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Shop Now",
      content: (
        <ul className="space-y-3 flex flex-col">
          {["Hoodie", "Jacket", "Polo Shirt", "T Shirt"].map(
            (category, index) => (
              <Link hrefLang=""   to='/shop'  key={index} className=" hover:text-secondary cursor-pointer"  onClick={()=>{
                setSelectedFilters({[category.toLocaleLowerCase()]:true})
                handleScrollToTop()
              }
              } >{category}</Link>
            )
          )}
        </ul>
      ),
    },
    {
      title: "Contact Us",
      content: (
        <address className="not-italic space-y-1">
          <p>Miabazar Road, Cumilla</p>
          <p>01615081141</p>
          <p>nasafits@gmail.com</p>
        </address>
      ),
    },
  ];

  return (
    <>
     
      <footer className="bg-black text-white p-10 sm:p-20 py-10 sm:py-20">
        <div className="footercontainer container mx-auto w-full flex sm:justify-around flex-wrap gap-20 sm:gap-24 text-sm">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4 w-fit border-gray-500 border-b-2 py-2">
                {section.title}
              </h4>
              {section.content}
            </div>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
