import { useEffect, useState } from "react";

import Orders from "./Order/Order";
import Profile from "./Profiledetails";
import Sidebar from "./Sidebar";
import Addresscard from "./Adresscard";
import Addressbooks from "./Adressbooks";
import AccountDetails from "./Accountdetails";
import { useLocalStorage } from "../hooks/useLocalStorage";
import OrderSummary from "./Order/Orderdetails";

const AccountPage = ({Orderhistory,menuSections,Goto,setprofilelocation,orderData,setOrderhistory,mobileview}) => {
 
  const storedUser = JSON.parse(localStorage.getItem("userdata")) || {};
    const { setItem } = useLocalStorage("userdata");
  const user = {
    name: storedUser?.name || "SA Takib",
    email: storedUser?.email || "su************@gmail.com",
    marketingSMS: true,
    marketingEmail: false,
  };
 



  const [userAddresses,setAdressbook] =useState([
    {
      name: "Takib (Home)",
      address: "M/S. Nafisa Business House, Gondhomoti Buyan Market, Rampur Rd, Kotbari 3503, Chattogram",
      phone: storedUser?.phone || "",
    },
    {
      name: "Takib (Office)",
      address: "Tech Hub Tower, Level 5, Dhanmondi, Dhaka 1209",
      phone: storedUser?.phone || "",
    },
  ]);



  const [orderid,setorderid] = useState()
  const selectedItem = Orderhistory.find(item => item.Id === orderid);
  
  // Dynamic rendering object
  const pages = {
    Dashboard: (
      <>
        <Profile {...user} />
        <div className="bg-white rounded-lg">
          <h2 className="text-xl font-semibold w-full p-4 pb-0">Address Book</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {userAddresses.map((address, key) => (
              <Addresscard key={key} {...address} className="pt-0" />
            ))}
          </div>
        </div>
        <Orders Orderhistory={Orderhistory} orderData={orderData?orderData:selectedItem} Goto={Goto} setorderid={setorderid} />
      </>
    ),
    "Address Book": <Addressbooks userAddresses={userAddresses} setAdressbook={setAdressbook}  />,
    "My Orders":<Orders Orderhistory={Orderhistory}  orderData={orderData} Goto={Goto}  />,
    "Account Details": <AccountDetails storedUser={storedUser}  setItem={setItem}/>,
    "My Cancellations": <Orders Orderhistory={Orderhistory}  show={'canceled'}  orderData={orderData} Goto={Goto}/>,
    "My Returns": <Orders Orderhistory={Orderhistory}  show={'returned'} Goto={Goto}/>,    
    'OrderDetails': <OrderSummary  orderData={orderData} setOrderhistory={setOrderhistory} />,
  };

  return (
    <div className={`flex bg-gray-100 md:p-10 lg:p-20  mt-12 text-sm lg:text-medium ${Goto?'py-20':'py-10'}`}>
      <Sidebar Goto={Goto} menuSections={menuSections} setprofilelocation={setprofilelocation}  />
      {
        Goto && <div className={`flex-1 ml-4 space-y-4 `}> 
        {pages[Goto] || <div className="text-center text-gray-500">Page not found</div>}
      </div>
      }
    </div>
  );
};

export default AccountPage;







