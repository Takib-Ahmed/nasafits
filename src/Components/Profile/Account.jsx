import {useState } from "react";
import Orders from "./Order/Order";
import Profile from "./Profiledetails";
import Sidebar from "./Sidebar";
import Addresscard from "./Adressbook/Adresscard";
import Addressbooks from "./Adressbook/Adressbooks";
import AccountDetails from "./Accountdetails";
import { useLocalStorage } from "../hooks/useLocalStorage";
import OrderSummary from "./Order/Orderdetails";
import EditAddressForm from "./Adressbook/Adressbookform";

const AccountPage = ({Orderhistory,menuSections,Goto,setprofilelocation,orderData,setOrderhistory,userAddresses,setAdressbook,userAddress}) => {
 
  const storedUser = JSON.parse(localStorage.getItem("userdata")) || {};
    const { setItem } = useLocalStorage("userdata");
  const user = {
    name: storedUser?.name || "SA Takib",
    email: storedUser?.email || "su************@gmail.com",
    marketingSMS: true,
    marketingEmail: false,
  };
 





  const [orderid,setorderid] = useState()
  const selectedItem = Orderhistory.find(item => item.Id === orderid)
  const Adresses =  userAddresses &&  userAddresses.slice(0, 2)
  // Dynamic rendering object
  const pages = {
    Dashboard: (
      <>
        <Profile {...user} />
        <div className="bg-white rounded-lg">
          <h2 className="text-xl font-semibold w-full p-4 pb-0">Address Book</h2>
          <div className={`flex flex-col ${Adresses && Adresses.length>1?'md:flex-row-reverse':'md:flex-row'}    gap-4 p-0.5`}>
            {Adresses && Adresses.map((address, key) => (
              <Addresscard setAdressbook={setAdressbook} setprofilelocation={setprofilelocation} key={key} {...address} className="pt-0 pe-10 sm:pe-4" Goto={Goto} />
            ))}
          </div>
        </div>
        <Orders Orderhistory={Orderhistory} orderData={orderData?orderData:selectedItem} Goto={Goto} setorderid={setorderid} />
      </>
    ),
    "Address Book": <Addressbooks  setprofilelocation={setprofilelocation} userAddresses={userAddresses} setAdressbook={setAdressbook} Goto={Goto} />,
    "My Orders":<Orders   Orderhistory={Orderhistory} orderData={orderData?orderData:selectedItem} Goto={Goto} setorderid={setorderid}  />,
    "Account Details": <AccountDetails storedUser={storedUser}  setItem={setItem}/>,
    "My Cancellations": <Orders  Orderhistory={Orderhistory} orderData={orderData?orderData:selectedItem} Goto={Goto} setorderid={setorderid}  show={'canceled'}  />,
    "My Returns": <Orders  Orderhistory={Orderhistory} orderData={orderData?orderData:selectedItem} Goto={Goto} setorderid={setorderid}  show={'returned'} />,    
    'OrderDetails': <OrderSummary  orderData={orderData?orderData:selectedItem} setOrderhistory={setOrderhistory} />,
    'Editingadress': <EditAddressForm  userAddress={userAddress} setAdressbook={setAdressbook}  />
  };

  return (
    <div className={`flex bg-gray-100 md:p-10 lg:p-20  mt-12 text-sm lg:text-medium ${Goto?'py-20':'py-10'}`}>
      <Sidebar Goto={Goto} menuSections={menuSections} setprofilelocation={setprofilelocation}  />
      {
        Goto && <div className={`flex-1 md:ml-4 space-y-4 `}> 
        {pages[Goto] || <div className="text-center text-gray-500">Page not found</div>}
      </div>
      }
    </div>
  );
};

export default AccountPage;







