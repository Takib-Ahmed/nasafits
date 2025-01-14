import React from "react";

const Footer = () => {
  const footerSections = [
    {
      title: "Follow Us",
      content: (
        <div className="flex flex-wrap gap-4">
          <a href="#" aria-label="Facebook">
            <img src="facebook-icon.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" aria-label="YouTube">
            <img src="youtube-icon.png" alt="YouTube" className="w-6 h-6" />
          </a>
        </div>
      ),
    },
    {
      title: "Blog",
      content: <p>DeshiCommerce</p>,
    },
    {
      title: "Most Popular Products",
      content: (
        <ul className="space-y-1">
          {["Product 5", "Product 7"].map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Shop Now",
      content: (
        <ul className="space-y-1">
          {["Category 4", "Category 3", "Category 2", "Hoodie"].map(
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
          <p>Shamoly House: 32/1, Road: 03</p>
          <p>01766681318</p>
          <p>hello@deshicommerce.com</p>
        </address>
      ),
    },
  ];

  return (
    <>
      <div className="">
        <img
          src="/public/Screenshot 2025-01-12 182853.png"
          alt=""
          className="w-full"
        />
      </div>
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
