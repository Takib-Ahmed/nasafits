import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function EditAddressForm({ storedAddress,userAddress,setAdressbook}) {
   const navigate = useNavigate()
  const [addressData, setAddressData] = useState({
    name: userAddress?.name || '',
    address: userAddress?.address || '',
   
    city: userAddress?.city || '',
    phone: userAddress?.phone || '',
    id:userAddress?.id || Date.now()
  });

  // Fields configuration for dynamic rendering
  const fields = [
    { label: "Name", name: "name", placeholder: "Enter Name" },
    { label: "Detailed Adress", name: "address", placeholder: "Enter Detailed Adress" },
 
    { label: "City", name: "city", placeholder: "Enter City" },
    { label: "Phone", name: "phone", placeholder: "Enter Phone" },

  ];

  // Handle input change
  const handleChange = (e) => {
    setAddressData({ ...addressData, [e.target.name]: e.target.value });
  };

  // Save updated address

  const handleSubmit = () => {
    // handleSave(addressData);
    setAdressbook((prev) =>
      prev.map((address) =>
        address.id === userAddress.id ? { ...address, ...addressData } : address
      )
    );
    navigate(`/profile/Address Book`)
  
    
  };
  const handleAdd = () => {
    // handleSave(addressData);
    setAdressbook((prev) => [...prev,addressData]    );
    
    navigate(-1)
  
  };
  const handleCancel=()=>{
    navigate(-1)
  }

  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-xl font-semibold mb-4" onClick={()=>{
        console.log(userAddress)
      }}>{userAddress?'Edit':'Add'} Address</h2>

      {/* Dynamically Render Form Fields */}
      {fields.map((field) => (
        <div className="mb-4" key={field.name}>
          <label className="block font-medium">{field.label}</label>
          <Input
            name={field.name}
            value={addressData[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
          />
        </div>
      ))}

      {/* Action Buttons */}
      <div className="flex justify-between mt-4">
        <Button className="bg-red-500 text-white" onClick={handleCancel}>
          Cancel
        </Button>
        <Button className="bg-blue-500 text-white" onClick={()=>{
          userAddress?handleSubmit():handleAdd()
        }}>
        {userAddress?'Save':'Add'}
        </Button>
      </div>
    </div>
  );
}
