import { Checkbox } from "@heroui/react";
import { Link } from "react-router-dom";

const Addresscard = ({ name, address, phone,className,id ,Goto,city,setAdressbook,defaultaddress}) => {
    return (
      <label className={`bg-white p-4 rounded-lg relative cursor-pointer  ${className} w-full`}>
     
        <div className="flex justify-between items-center">
        <Checkbox className=" flex  items-center"  size="sm"  isSelected={defaultaddress} color={defaultaddress ? 'success':'danger'} onChange={(e)=>{
          setAdressbook((prev)=>prev.map((Adress)=>Adress.id === id? {...Adress,defaultaddress:e.target.checked}:{ ...Adress, defaultaddress: false }))
        }}  >
       <font className=' text-base'> Defualt Delivery Address</font>
      </Checkbox>
    
      <Link to={`/profile/${Goto}/${id}`}  className="text-blue-500 hover:underline">EDIT</Link>

     
        </div>
        <p className="font-medium">{name}</p>
        <p className="text-gray-600">{address},{city}</p>
        <p className="text-gray-600">{phone}</p>

      </label>
    );
  };
  
  export default Addresscard;
  