const Addresscard = ({ name, address, phone,className }) => {
    return (
      <div className={`bg-white p-4 rounded-lg  ${className}`}>
        <div className="flex justify-end items-center">
      
          <button className="text-blue-500 hover:underline">EDIT</button>
        </div>
        <p className="font-medium">{name}</p>
        <p className="text-gray-600">{address}</p>
        <p className="text-gray-600">{phone}</p>
      </div>
    );
  };
  
  export default Addresscard;
  