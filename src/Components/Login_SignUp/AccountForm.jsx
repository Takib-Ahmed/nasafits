import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useLocalStorage as userememberme } from "../hooks/useLocalStorage";
import { Link } from "react-router-dom";

const AccountForm = () => {
  const { setItem: setremeberme } = userememberme("rememberme");
  const Rememberme = JSON.parse(localStorage.getItem("rememberme"));
  const [isRegister, setIsRegister] = useState(false);
  const [isremember, setmemberme] = useState(Rememberme?Rememberme:false);

  const { setItem } = useLocalStorage("userdata");

  const SavedcartedProduct = JSON.parse(localStorage.getItem("cartedProduct") || "[]");
  const storedUser = JSON.parse(localStorage.getItem("userdata"));
 

  const [registerUser, setRegisterUser] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    confirmPassword: "",
    cart: SavedcartedProduct,
  });

  const [loginUser, setLoginUser] = useState({
    email: storedUser && Rememberme ? storedUser.email:'',
    password: storedUser && Rememberme ? storedUser.password:'',
  });

  // Define fields for Registration
  const registrationFields = [
    { label: "Name", type: "text", placeholder: "Your Name", key: "name" },
    { label: "Mobile Phone", type: "text", placeholder: "01XXXXXXXXX", key: "phone" },
    { label: "E-Mail Address", type: "email", placeholder: "Your Email", key: "email" },
    { label: "Password", type: "password", placeholder: "Your Password", key: "password" },
    { label: "Confirm Password", type: "password", placeholder: "Confirm Your Password", key: "confirmPassword" },
  ];

  // Define fields for Sign In
  const loginFields = [
    { label: "E-Mail Address", type: "email", placeholder: "Your Email", key: "email" },
    { label: "Password", type: "password", placeholder: "Your Password", key: "password" },
  ];

  // Sync Remember Me with localStorage
  useEffect(() => {
  
     storedUser && setremeberme(isremember);
    

    
  }, [isremember, setremeberme,storedUser]);

  // Pre-fill login fields when Remember Me is active


  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleLoginChange = (e) => {

      const { name, value } = e.target;
    setLoginUser((prevUser) => ({ ...prevUser, [name]: value }));
    

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      handleRegister();
    } else {
      handleLogin();
    }
  };

  const handleRegister = () => {
    if (registerUser.password !== registerUser.confirmPassword) {
      alert("Passwords do not match!");
    } else {
      setItem(registerUser);
      console.log("User Registered:", registerUser);
      setIsRegister(false);
    }
  };

  const handleLogin = () => {
    if (storedUser) {
      if (loginUser.email === storedUser.email && loginUser.password === storedUser.password) {
        console.log("User Logged In:", loginUser);
        window.history.back();
      } else {
        alert("Invalid email or password", loginUser);
        console.log(loginUser)
      }
    } else {
      alert("No registered user found");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-fit py-20 overflow-hidden">
      <div className="w-full max-w-xl p-5 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isRegister ? "Registration" : "Sign In"}
        </h2>

        <form onSubmit={handleSubmit}>
          {(isRegister ? registrationFields : loginFields).map((field) => (
            <div key={field.key} className="mb-4">
              <label className="block text-gray-700">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                name={field.key}
         
                value={!isRegister ? Rememberme  ? storedUser[field.key]|| loginUser[field.key] : registerUser[field.key]|| loginUser[field.key] : registerUser[field.key]



                  
                }
                onChange={isRegister ? handleRegisterChange : handleLoginChange}
              />
            </div>
          ))}

          {!isRegister && (
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={Rememberme}
                onChange={() => setmemberme((prev)=>!prev)
                  
                }
              />
              <label className="text-gray-700">Remember Me</label>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

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
