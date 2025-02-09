import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Dealsubscribe from "./Components/Subscribe";
import Details from "./Components/Details/details";
import Cartpage from "./Components/Cart/Cartpage";
import Sidecart from "./Components/Cart/Sidecart";
import AccountForm from "./Components/Login_SignUp/AccountForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import { HeroUIProvider } from "@heroui/react";
import Shop from "./Components/Search_shop/Shoppage";
import Context from "./contexts/Context";
import AccountPage from "./Components/Profile/Account";
import Checkout from "./Components/Checkout/Checkoutpage";
import ScrollToTop from "./Components/ScrollToTop";
import Paymentpage from "./Components/Checkout/Paymentpage";
import { useLocalStorage } from "./Components/hooks/useLocalStorage";
import { useLocalStorage as userAddressbook } from "./Components/hooks/useLocalStorage";
function App() {
  const productDetails = [
    {
      id: 1,
      coverImage: "/collections/edited/black.png",
      name: "Mens Premium Polo Black",
      category: ["polo shirt"],
      for: ["men"],
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      showcases: ["new arrival", "best selling", "summer", "top selling"],
      images: [
        "/collections/black.png",
        "/collections/black.png",
        "/collections/black.png",
      ],
      sizes: ["M", "L", "XL", "2XL"],
    },
    {
      id: 2,
      coverImage: "/collections/edited/gray.png",
      name: "Mens Premium T-Shirt - Gray",
      category: ["t shirt"],
      for: ["men"],
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      showcases: ["featured", "best selling", "summer"],
      images: [
        "/collections/gray.png",
        "/collections/gray.png",
        "/collections/gray.png",
      ],
      sizes: ["M", "L", "XL", "2XL"],
    },
    {
      id: 3,
      coverImage: "/collections/edited/itachi.png",
      name: "Mens Premium Hoodie Itachi",
      category: ["hoodie"],
      for: ["men"],
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      showcases: ["best selling", "winter collection", "top selling"],
      images: [
        "/collections/itachi2.png",
        "/collections/itachi2.png",
        "/collections/itachi2.png",
      ],
      sizes: ["M", "L", "XL", "2XL"],
    },
    {
      id: 4,
      coverImage: "/collections/edited/ai.png",
      name: "Mens Premium Hoodie AI",
      category: ["hoodie"],
      for: ["men"],
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      showcases: ["winter collection", "flash sale"],
      images: [
        "/collections/ai2.png",
        "/collections/ai2.png",
        "/collections/ai2.png",
      ],
      sizes: ["M", "L", "XL", "2XL"],
    },
    {
      id: 5,
      coverImage: "/collections/edited/brown.png",
      name: "Mens Premium Hoodie Browny",
      category: ["hoodie"],
      for: ["men"],
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      showcases: ["winter collection", "top selling"],
      images: [
        "/collections/brown2.png",
        "/collections/brown2.png",
        "/collections/brown2.png",
      ],
      sizes: ["M", "L", "XL", "2XL"],
    },
    {
      id: 6,
      coverImage: "/collections/edited/red jacket.png",
      name: "Mens Premium Jacket - Red",
      category: ["jacket"],
      for: ["men"],
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      showcases: ["new arrival", "winter collection"],
      images: [
        "/collections/red jacket.png",
        "/collections/red jacket.png",
        "/collections/red jacket.png",
      ],
      sizes: ["M", "L", "XL", "2XL"],
    },
    {
      id: 7,
      coverImage: "/collections/edited/red.png",
      name: "Mens Premium Hoodie - Red",
      category: ["hoodie"],
      for: ["men"],
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      showcases: ["best selling", "winter collection", "flash sale"],
      images: [
        "/collections/red2.png",
        "/collections/red2.png",
        "/collections/red2.png",
      ],
      sizes: ["M", "L", "XL", "2XL"],
    },
    {
      id: 8,
      coverImage: "/collections/edited/itachi.png",
      name: "Mens Premium Hoodie Itachi",
      category: ["hoodie"],
      for: ["men"],
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      showcases: [
        "best selling",
        "winter collection",
        "flash sale",
        "top selling",
      ],
      images: [
        "/collections/itachi2.png",
        "/collections/itachi2.png",
        "/collections/itachi2.png",
      ],
      sizes: ["M", "L", "XL", "2XL"],
    },
    {
      id: 9,
      coverImage: "/collections/edited/green.png",
      name: "Mens Premium Hoodie Green",
      category: ["hoodie"],
      for: ["men"],
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      showcases: ["new arrival", "winter collection"],
      images: [
        "/collections/green2.png",
        "/collections/green2.png",
        "/collections/green2.png",
      ],
      sizes: ["M", "L", "XL", "2XL"],
    },
    {
      id: 10,
      coverImage: "/collections/edited/panjabi.png",
      name: "Mens Premium Panjabi Violet",
      category: ["panjabi"],
      for: ["men"],
      save: 600,
      mainPrice: 1800,
      discountPrice: 1200,
      showcases: ["new arrival"],
      images: [
        "/collections/panjabi.png",
        "/collections/panjabi.png",
        "/collections/panjabi.png",
      ],
      sizes: ["M", "L", "XL", "2XL"],
    }
  ];


  const [showmbsearhbar, setshowsearchbar] = useState(false);

  const savedCartedProduct = JSON.parse(localStorage.getItem("cartedProduct") || "[]");
  const [cartedProduct, setcartedproduct] = useState(savedCartedProduct.length>0 ? savedCartedProduct:[]);
  const [SelectedCarts, setselectedcarts] = useState(savedCartedProduct.length>0 ? savedCartedProduct:[]);


  
  const [selectedFilters, setSelectedFilters] = useState({});
  const selectedFilterArray = Object.keys(selectedFilters).filter((key) => selectedFilters[key] === true  );
  const filteredProducts =
  selectedFilterArray.length === 0
    ? productDetails
    : productDetails.filter((product) =>
        selectedFilterArray.every((filter) => {
          const lowerFilter = filter.toLowerCase();
          return (
            product.category.some(cat => cat.toLowerCase().includes(lowerFilter)) ||
            product.for.some(f => f.toLowerCase().includes(lowerFilter)) ||
            product.showcases.some(showcase => showcase.toLowerCase().includes(lowerFilter)) ||
            product.name.toLowerCase().includes(lowerFilter)
          );
        })
      );

      


        const StoredOrderhistory = JSON.parse(localStorage.getItem("Orderhistory")) || []; 
  const [Orderhistory,setOrderhistory] = useState(StoredOrderhistory)
  const [placedOrder,setplacedOrder] = useState({})
  const {setItem} = useLocalStorage('Orderhistory')


  useEffect(() => {
    
    setItem(Orderhistory)
  }, [Orderhistory,setItem]);



const [profilelocation,setprofilelocation] = useState('Dashboard')

  const menuSections = [
    {
      title: "Manage My Account",
      items: ["Dashboard",'Account Details', "Address Book",'My Orders',"My Returns", "My Cancellations"],
    },

 
  ]
  ;
  const { setItem: setuseradresses } = userAddressbook("useradress");
  const storeduserAddresses = JSON.parse(localStorage.getItem("useradress")) || []; 
  const [userAddresses,setAdressbook] =useState(storeduserAddresses?storeduserAddresses:[]);
  useEffect(() => {
  
  userAddresses.length > 0 &&   setuseradresses(userAddresses)
  }, [userAddresses,setuseradresses,selectedFilterArray]);


  const getPropertyCount = (counterm) => {
    const count = productDetails.reduce((total, product) => {
      let matchFound = false;
  
      if (product.name && product.name.includes(counterm)) {
        matchFound = true;
      }
  
      if (product.for && product.for.includes(counterm)) {
        matchFound = true;
      }
  
      if (product.category && product.category.includes(counterm)) {
        matchFound = true;
      }
  
      if (Array.isArray(product.showcases)) {
        const showcaseMatch = product.showcases.some(showcase =>
          showcase.includes(counterm)
        );
        if (showcaseMatch) matchFound = true;
      }
  
      return matchFound ? total + 1 : total;
    }, 0);
  
    return count;
  };
  



  return (
    <>
      <BrowserRouter>
        <Context.Provider value={{ setSelectedFilters, selectedFilters ,getPropertyCount}}>
          <HeroUIProvider>
            <Header
            productDetails={productDetails}
              showmbsearhbar={showmbsearhbar}
              setshowsearchbar={setshowsearchbar}
              setSelectedFilters={setSelectedFilters}
              menuSections={menuSections}
              setprofilelocation={setprofilelocation}
            />
            <Sidecart
   SelectedCarts={SelectedCarts}
   setselectedcarts={setselectedcarts}
   cartedProduct={cartedProduct}
   setcartedproduct={setcartedproduct}
            />
            <ScrollToTop/>

            <Routes>
              <Route
                path="/"
                element={<Homepage setSelectedFilters={setSelectedFilters} productDetails={productDetails} />}
              />

<Route  path={`/profile`} element={<AccountPage userAddresses={userAddresses} setAdressbook={setAdressbook} setOrderhistory={setOrderhistory}  setprofilelocation={setprofilelocation}  menuSections={menuSections} Orderhistory={Orderhistory}  />} />
{
  menuSections.map((section)=>(
    section.items.map((goto,key)=>(
      <Route key={key} path={`/profile/${goto}`} element={<AccountPage  userAddresses={userAddresses} setAdressbook={setAdressbook}  setOrderhistory={setOrderhistory}  setprofilelocation={setprofilelocation} Goto={goto} menuSections={menuSections} Orderhistory={Orderhistory}  />} />
      
   
      
    ))
  ))
}
{  userAddresses.map((Adresses)=>(
        <Route key={Adresses.id} path={`/profile/${profilelocation}/${Adresses.id}`} element={<AccountPage
           userAddress={Adresses} setAdressbook={setAdressbook}  setOrderhistory={setOrderhistory}  setprofilelocation={setprofilelocation} Goto={'Editingadress'} menuSections={menuSections} Orderhistory={Orderhistory}   />} />
       ))}
       <Route  path={`/profile/${profilelocation}/address`} element={<AccountPage  setAdressbook={setAdressbook}  setOrderhistory={setOrderhistory}  setprofilelocation={setprofilelocation} Goto={'Editingadress'} menuSections={menuSections} Orderhistory={Orderhistory}   />} />
           <Route path="/checkout" element={<Checkout setAdressbook={setAdressbook} setplacedOrder={setplacedOrder} setselectedcarts={setselectedcarts}     setcartedproduct={setcartedproduct}
              SelectedCarts={SelectedCarts} setOrderhistory={setOrderhistory}  Orderhistory={Orderhistory} />} />
              <Route
                path="/shop"
                element={<Shop filteredProducts={filteredProducts} />}
              />
              {productDetails.map((product, key) => (
                <Route
                  key={key}
                  path={`/details/${product.id}`}
                  element={
                    <Details
                      product={product}
                      setcartedproduct={setcartedproduct}
                      cartedProduct={cartedProduct}
                    />
                  }
                ></Route>
              ))}
              <Route path="/account" element={<AccountForm />} />
              <Route
                path="/cart"
                element={
                  <Cartpage
                    SelectedCarts={SelectedCarts}
                    setselectedcarts={setselectedcarts}
                    cartedProduct={cartedProduct}
                    setcartedproduct={setcartedproduct}
                  />
                }
              />
       {
        Orderhistory.map((placedOrdered)=>(
     

          <Route key={placedOrdered.Id} path={`/payment/${placedOrdered.Id}`} element={<Paymentpage setOrderhistory={setOrderhistory} placedOrdered={placedOrdered} />}/>
        )

         
        )
       }
           {
        Orderhistory.map((placedOrdered)=>(

         <Route  key={placedOrdered.Id} path={`/profile/${profilelocation}-${placedOrdered.Id}`}  element={<AccountPage userAddresses={userAddresses} setAdressbook={setAdressbook} setOrderhistory={setOrderhistory} orderData={placedOrdered} setprofilelocation={setprofilelocation} Goto={'OrderDetails'} menuSections={menuSections} Orderhistory={Orderhistory} />} />

        )

         
        )
       }
              
            </Routes>
          

            <Dealsubscribe />
            <Footer setSelectedFilters={setSelectedFilters} />
          </HeroUIProvider>
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
