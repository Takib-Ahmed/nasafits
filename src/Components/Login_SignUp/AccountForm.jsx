

import React, { useState } from "react";

const AccountForm = () => {
  const [isRegister, setIsRegister] = useState(false);

  // Define fields for Sign In and Registration
  const commonFields = [
    { label: "E-Mail Address", type: "email", placeholder: "Your Email", key: "email" },
    { label: "Password", type: "password", placeholder: "Your Password", key: "password" },
  ];

  const registrationFields = [
    { label: "Name", type: "text", placeholder: "Your Name", key: "name" },
    { label: "Mobile Phone", type: "text", placeholder: "01XXXXXXXXX", key: "phone" },
    { label: "Confirm Password", type: "password", placeholder: "Confirm Your Password", key: "confirmPassword" },
  ];

  // Dynamically get the fields based on the mode
  const fieldsToRender = isRegister ? [...registrationFields, ...commonFields] : commonFields;

  return (
    <div className="flex justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full max-w-md  p-6 rounded-lg shadow-md bg-gray-100 ">
        {/* Title */}
<center className=" hidden">        <img src="/public/Header/a-minimalist-logo-for-a-clothing-fashion-company-c-OXy9GXuRTQ-7WpsIPVJmVA-qZyLngqpR-K1xV0Fkj8INQ.png" alt="" className=" w-32" /></center>
        <h2 className="text-2xl font-bold text-center mb-6">
          {isRegister ? "Registration" : "Sign In"}
        </h2>

        {/* Form */}
        <form>
          {fieldsToRender.map((field) => (
            <div key={field.key} className="mb-4">
              <label className="block text-gray-700">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              />
            </div>
          ))}

          {/* Remember Me Checkbox */}
          {!isRegister && (
            <div className="mb-4 flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-700">Remember Me</label>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        {/* Toggle Links */}
        <div className="text-center mt-4">
          {isRegister ? (
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => setIsRegister(false)}
                className="text-blue-500 hover:underline"
              >
                Sign In
              </button>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Forgot Your Password? |{" "}
              <button
                onClick={() => setIsRegister(true)}
                className="text-blue-500 hover:underline"
              >
                Registration
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
