import { useState } from "react";

export default function AccountDetails({ storedUser,setItem }) {
  const [formData, setFormData] = useState({
    name: storedUser?.name || "SA Takib",
    email: storedUser?.email || "su************@gmail.com",
    displayName: storedUser?.name || "SA Takib",
    password: storedUser?.password || "SA Takib",
    newPassword: "",
    confirmPassword: ""
  });

  const fields = [
    { label: "Full name *", name: "name", type: "text" }, // Updated from fullName to name
    { label: "Display name *", name: "displayName", type: "text", hint: "This will be how your name appears in reviews." },
    { label: "Email address *", name: "email", type: "email" },
 
    { label: "Current password", name: "password", type: "password" }, // Updated to match formData key
    { label: "New password", name: "newPassword", type: "password" },
    { label: "Confirm new password", name: "confirmPassword", type: "password" }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    const updatedData = {
      ...formData,
      password: formData.newPassword // Update the password with newPassword
    };
  
    setFormData(updatedData); // Update the state
    setItem(updatedData); // Immediately use the updated data
  };
  
  return (
    <div className="bg-white shadow-md rounded-md p-16 py-5">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Account Details</h2>

        {fields.map((field, index) =>
       (
            <div className="mb-4" key={field.name}>
              <label className="block font-medium">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                readOnly={field.name=='password'?true:false}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
              {field.hint && <p className="text-sm text-gray-500">{field.hint}</p>}
            </div>
          )
        )}

        <div className="w-full flex justify-end">
          <button className="w-52 bg-blue-500 text-white p-2 rounded-md" onClick={handleSave}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}
