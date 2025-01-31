
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  const footerSections = [
    {
      title: "Follow Us",
      content: (
        <div className="flex flex-wrap gap-4">
          <a href="#" aria-label="Facebook">
            <RiFacebookCircleLine  className=" text-2xl   rounded-full w-fit p-0 m-0 " />
          </a>
          <a href="#" aria-label="YouTube">
            <FaInstagram   className="text-2xl   rounded-full w-fit p-0 m-0 pt-0.5" />
          </a>
        </div>
      ),
    },
    {
      title: "Blog",
      content: <p>Nasa Fits</p>,
    },
    {
      title: "Most Popular Products",
      content: (
        <ul className="space-y-1">
          {["Mens Premium Hoddie", "Full Sleve T-Shirt"].map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Shop Now",
      content: (
        <ul className="space-y-1">
          {["Hoodie", "Jacket", "Polo Shirt", "T-Shirt"].map(
            (category, index) => (
              <li key={index}>{category}</li>
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
          <p>satakib300@gmail.com</p>
        </address>
      ),
    },
  ];

  return (
    <>
     
      <footer className="bg-black text-white p-20">
        <div className="container mx-auto flex justify-around flex-wrap gap-24 text-sm">
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
