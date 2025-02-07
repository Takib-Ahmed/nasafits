import { useState } from "react";
import { Input, Button } from "@nextui-org/react";

export default function EditAddressForm({ storedAddress, handleSave, handleCancel }) {
  const [addressData, setAddressData] = useState({
    name: storedAddress?.name || "Takib",
    addressLine: storedAddress?.addressLine || "M/S. Nafisa Business House, Gondhomoti Buyan Market",
    street: storedAddress?.street || "Rampur Rd",
    postalCode: storedAddress?.postalCode || "3503",
    city: storedAddress?.city || "Chattogram",
  });

  // Fields configuration for dynamic rendering
  const fields = [
    { label: "Name", name: "name", placeholder: "Enter Name" },
    { label: "Address Line", name: "addressLine", placeholder: "Enter Address Line" },
    { label: "Street", name: "street", placeholder: "Enter Street" },
    { label: "Postal Code", name: "postalCode", placeholder: "Enter Postal Code" },
    { label: "City", name: "city", placeholder: "Enter City" },
  ];

  // Handle input change
  const handleChange = (e) => {
    setAddressData({ ...addressData, [e.target.name]: e.target.value });
  };

  // Save updated address
  const handleSubmit = () => {
    handleSave(addressData);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-xl font-semibold mb-4">Edit Address</h2>

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
        <Button className="bg-blue-500 text-white" onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </div>
  );
}
