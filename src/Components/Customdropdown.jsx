export default function HoverDropdown() {
  return (
    <>
      <br />
      <br />
      <br />
      <div
        className="absolute  top-12 left-1/4 w-max bg-white opacity-100 z-[100] shadow-lg rounded-md p-4 grid grid-cols-2 gap-4"
      >
        {/* Left Column */}
        <div className="flex flex-col space-y-2 text-black">
          <h3 className="font-bold">MENS</h3>
          <a href="#" className="hover:text-blue-600">T-shirt</a>
          <a href="#" className="hover:text-blue-600">T-shirt (Raglan)</a>
          <a href="#" className="hover:text-blue-600">T-shirt (Cut & Stitch)</a>
          <a href="#" className="hover:text-blue-600">T-shirt (Sports Edition)</a>
          <a href="#" className="hover:text-blue-600">T-shirt (Blanks)</a>
          <a href="#" className="hover:text-blue-600">Full Sleeve T-shirt</a>
          <a href="#" className="hover:text-blue-600">Full Sleeve (Raglan)</a>
          <a href="#" className="hover:text-blue-600">Wallet</a>
          <a href="#" className="hover:text-blue-600">Belt</a>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-2 text-black">
          <a href="#" className="hover:text-blue-600">Panjabi</a>
          <a href="#" className="hover:text-blue-600">Shirt</a>
          <a href="#" className="hover:text-blue-600">Polo T-shirt</a>
          <a href="#" className="hover:text-blue-600">Hoodie</a>
          <a href="#" className="hover:text-blue-600">Jacket</a>
          <a href="#" className="hover:text-blue-600">Denim Jeans</a>
          <a href="#" className="hover:text-blue-600">Comfy Trouser</a>
          <a href="#" className="hover:text-blue-600">Sports Trouser</a>
          <a href="#" className="hover:text-blue-600">Joggers</a>
        </div>
      </div>
    </>
  );
}
