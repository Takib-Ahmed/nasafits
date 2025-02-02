import { useState } from "react";

import Orders from "./Order";
import Profile from "./Profiledetails";
import Sidebar from "./Sidebar";
import Addresscard from "./Adresscard";
import Addressbooks from "./Adressbooks";
import AccountDetails from "./Accountdetails";

const AccountPage = () => {
  const storedUser = JSON.parse(localStorage.getItem("userdata")) || {};
  const user = {
    name: storedUser?.name || "SA Takib",
    email: storedUser?.email || "su************@gmail.com",
    marketingSMS: true,
    marketingEmail: false,
  };

  const orders = [
    { id: "670379841430393", date: "27/01/2025", image: "/item1.png", total: 300 },
    { id: "669957167730393", date: "26/12/2024", image: "/item2.png", total: 780 },
    { id: "669932985830393", date: "25/12/2024", image: "/item3.png", total: 780 },
  ];

  const userAddresses = [
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
  ];

  const [Goto, setGoto] = useState("Dashboard");

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
        <Orders orders={orders} />
      </>
    ),
    "Address Book": <Addressbooks userAddresses={userAddresses} />,
    "My Orders": <Orders orders={orders} />,
    "Account Details": <AccountDetails />,
  };

  return (
    <div className="flex bg-gray-100 lg:p-20 pt-20">
      <Sidebar Goto={Goto} setGoto={setGoto} />
      <div className="lg:flex-1 ml-4 space-y-4">
        {pages[Goto] || <div className="text-center text-gray-500">Page not found</div>}
      </div>
    </div>
  );
};

export default AccountPage;







// import React, { useState } from "react";
// import { Tabs, Tab, Card, CardBody, Switch } from "@heroui/react";
// import Orders from "./Order";
// import Profile from "./Profiledetails";
// import Addresscard from "./Adresscard";
// import Addressbooks from "./Adressbooks";

// const AccountPage = () => {
//   const storedUser = JSON.parse(localStorage.getItem("userdata")) || {};
//   const [isVertical, setIsVertical] = useState(true);

//   const user = {
//     name: storedUser?.name || "SA Takib",
//     email: "su************@gmail.com",
//     marketingSMS: true,
//     marketingEmail: false,
//   };

//   const orders = [
//     { id: "670379841430393", date: "27/01/2025", image: "/item1.png", total: 300 },
//     { id: "669957167730393", date: "26/12/2024", image: "/item2.png", total: 780 },
//     { id: "669932985830393", date: "25/12/2024", image: "/item3.png", total: 780 },
//   ];

//   const userAddresses = [
//     {
//       name: "Takib (Home)",
//       address: "M/S. Nafisa Business House, Gondhomoti Buyan Market, Rampur Rd, Kotbari 3503, Chattogram",
//       phone: storedUser?.phone || "",
//     },
//     {
//       name: "Takib (Office)",
//       address: "Tech Hub Tower, Level 5, Dhanmondi, Dhaka 1209",
//       phone: storedUser?.phone || "",
//     },
//   ];

//   return (
//     <div className="flex flex-col px-4 pt-20 bg-gray-100 min-h-screen">
//       <Switch className="mb-4" isSelected={isVertical} onValueChange={setIsVertical}>
//         Vertical Layout
//       </Switch>
//       <div className="flex w-full flex-col">
//         <Tabs aria-label="Account Options" isVertical={isVertical}>
//           <Tab key="profile" title="My Profile">
//             <Card>
//               <CardBody>
//                 <Profile {...user} />
//                 <h2 className="text-xl font-semibold w-full p-4 pb-0">Address Book</h2>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   {userAddresses.map((address, key) => (
//                     <Addresscard key={key} {...address} />
//                   ))}
//                 </div>
//               </CardBody>
//             </Card>
//           </Tab>
//           <Tab key="addresses" title="Address Book">
//             <Card>
//               <CardBody>
//                 <Addressbooks userAddresses={userAddresses} />
//               </CardBody>
//             </Card>
//           </Tab>
//           <Tab key="orders" title="Orders">
//             <Card>
//               <CardBody>
//                 <Orders orders={orders} />
//               </CardBody>
//             </Card>
//           </Tab>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default AccountPage;
