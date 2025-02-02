import { useState } from "react";

export default function AccountDetails() {
  const [formData, setFormData] = useState({
    fullName: "",
    displayName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const fields = [
    { label: "Full name *", name: "fullName", type: "text" },
    { label: "Display name *", name: "displayName", type: "text", hint: "This will be how your name appears in reviews." },
    { label: "Email address *", name: "email", type: "email" },
    { section: "Password change" },
    { label: "Current password", name: "currentPassword", type: "password" },
    { label: "New password", name: "newPassword", type: "password" },
    { label: "Confirm new password", name: "confirmPassword", type: "password" }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
<div className="bg-white shadow-md rounded-md  p-16 py-5">
<div className="  p-6 ">
      <h2 className="text-xl font-semibold mb-4">Account Details</h2>

      {fields.map((field, index) => (
        field.section ? (
          <div key={index} className="border-t pt-4">
       
          </div>
        ) : (
          <div className="mb-4" key={field.name}>
            <label className="block font-medium">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
            {field.hint && <p className="text-sm text-gray-500">{field.hint}</p>}
          </div>
        )
      ))}

   <div className="w-full flex justify-end">
   <button className="w-52 bg-blue-500 text-white p-2 rounded-md">Save Changes</button>
   </div>
    </div>
</div>
  );
}
