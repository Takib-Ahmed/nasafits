export function CustomPrevArrow({ onClick, icon }) {
    return (
      <button
        onClick={onClick}
        className="absolute left-0 z-10 text-gray-800  rounded-full p-2 "
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        {icon}
      </button>
    );
  }
  
 export function CustomNextArrow({ onClick, icon }) {
    return (
      <button
        onClick={onClick}
        className="absolute right-0 z-10 text-gray-800 rounded-full p-2  "
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        {icon}
      </button>
    );
  }