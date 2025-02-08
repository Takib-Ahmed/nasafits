import { Checkbox } from "@heroui/react";

/* eslint-disable react/prop-types */
const Profile = ({ name, email, marketingSMS, marketingEmail }) => {
    return (
      <div className="bg-white p-4 pe-10 sm:pe-4 rounded-lg w-full ">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Personal Profile</h2>
          <button className="text-blue-500 hover:underline">EDIT</button>
        </div>
        <p className="mt-2 font-medium">{name}</p>
        <p className="text-gray-600">{email}</p>
        <div className="mt-2">
          <label className="flex items-center space-x-2">
          <Checkbox  size="sm"  type="checkbox" id="terms" className="  -translate-y-0.5" checked={marketingSMS} >

</Checkbox>
        
            <span>Receive marketing SMS</span>
          </label>
          <label className="flex items-center space-x-2">
    
            <Checkbox  size="sm"  type="checkbox" id="terms" className="  -translate-y-0.5" checked={marketingEmail}>

</Checkbox>
            <span>Receive marketing emails</span>
          </label>
        </div>
      </div>
    );
  };
  
  export default Profile;
  