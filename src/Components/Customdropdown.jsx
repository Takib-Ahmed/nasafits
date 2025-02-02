export default function HoverDropdown() {
  const categories = {
    mens: [
      "Hoodie",
      "Jacket",
      "T-shirt",
      "Polo-Shirt",
      "T-shirt (Blanks)",
      "Full Sleeve T-shirt",
      "Full Sleeve (Raglan)",
      "Wallet",
      "Belt"
    ],
    others: [
      "Panjabi",
      "Shirt",
      "Polo T-shirt",
      "Hoodie",
      "Jacket",
      "Denim Jeans",
      "Comfy Trouser",
      "Sports Trouser",
      "Joggers"
    ]
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div className="absolute top-12 left-1/4 w-max bg-white opacity-100 z-[100] shadow-lg rounded-md p-4 grid grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="flex flex-col space-y-2 text-black">
          <h3 className="font-bold">MENS</h3>
          {categories.mens.map((item, index) => (
            <a key={index} href="#" className="hover:text-blue-600">{item}</a>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-2 text-black">
          {categories.others.map((item, index) => (
            <a key={index} href="#" className="hover:text-blue-600">{item}</a>
          ))}
        </div>
      </div>
    </>
  );
}
