import { Link } from "react-router-dom";

const Addresscard = ({ name, address, phone,className,id ,Goto,setprofilelocation,city}) => {
    return (
      <div className={`bg-white p-4 rounded-lg  ${className}`}>
        <div className="flex justify-end items-center">
      
          <Link to={`/profile/${Goto}/${id}`} onClick={()=>{
            setprofilelocation(Goto)
          }} className="text-blue-500 hover:underline">EDIT</Link>
        </div>
        <p className="font-medium">{name}</p>
        <p className="text-gray-600">{address},{city}</p>
        <p className="text-gray-600">{phone}</p>
      </div>
    );
  };
  
  export default Addresscard;
  