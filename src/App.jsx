import { useEffect, useState } from 'react'

import './App.css'
import Header from './Components/Header'
import Slidershow from './Components/Homepage/Slidershow'
import Categories from './Components/Homepage/Category'
import Collection from './Components/Homepage/Collections'
import Banner from './Components/Homepage/Banner'
import Footer from './Components/Footer'
import Flashsale from './Components/Homepage/Flashsale'

import Hoodies from './Components/Homepage/cc'
import Dealsubscribe from './Components/Subscribe'
import Details from './Components/Details/details'
import Cartpage from './Components/Cart/Cartpage'
import Sidecart from './Components/Cart/Sidecart'
import AccountForm from './Components/Login_SignUp/AccountForm'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage'
import { HeroUIProvider } from "@heroui/react";
import Shop from './Components/Search_shop/Shoppage'


function App() {
const productDetails = [
    {
        id: 1,
        coverImage: "/collections/edited/black.png",
        name: "Mens Premium Polo Black",
        category: 'polo shirt',
        for: 'Men',
        save: 200,
        mainPrice: 1000,
        discountPrice: 800,
        showcases: ["new arrival", "best selling", "summer"],
        images: [
            "/collections/black.png",
            "/collections/black.png",
            "/collections/black.png"
        ],
        sizes: ["M", "L", "XL", "2XL"]
    },
    {
        id: 2,
        coverImage: "/collections/edited/gray.png",
        name: "Mens Premium T-Shirt - Gray",
        category: 't shirt',
        for: 'Men',
        save: 200,
        mainPrice: 1000,
        discountPrice: 800,
        showcases: ["featured", "best selling", "summer"],
        images: [
            "/collections/gray.png",
            "/collections/gray.png",
            "/collections/gray.png"
        ],
        sizes: ["M", "L", "XL", "2XL"]
    },
    {
        id: 3,
        coverImage: "/collections/edited/itachi.png",
        name: "Mens Premium Hoodie Itachi",
        category: 'hoodie',
        for: 'Men',
        save: 200,
        mainPrice: 1000,
        discountPrice: 800,
        showcases: ["best selling", "winter"],
        images: [
            "/collections/itachi2.png",
            "/collections/itachi2.png",
            "/collections/itachi2.png"
        ],
        sizes: ["M", "L", "XL", "2XL"]
    },
    {
        id: 4,
        coverImage: "/collections/edited/ai.png",
        name: "Mens Premium Hoodie AI",
        category: 'hoodie',
        for: 'Men',
        save: 200,
        mainPrice: 1000,
        discountPrice: 800,
        showcases: ["winter", "flash sale"],
        images: [
            "/collections/ai2.png",
            "/collections/ai2.png",
            "/collections/ai2.png"
        ],
        sizes: ["M", "L", "XL", "2XL"]
    },
    {
        id: 5,
        coverImage: "/collections/edited/brown.png",
        name: "Mens Premium Hoodie Browny",
        category: 'hoodie',
        for: 'Men',
        save: 200,
        mainPrice: 1000,
        discountPrice: 800,
        showcases: ["winter"],
        images: [
            "/collections/brown2.png",
            "/collections/brown2.png",
            "/collections/brown2.png"
        ],
        sizes: ["M", "L", "XL", "2XL"]
    },
    {
        id: 6,
        coverImage: "/collections/edited/red jacket.png",
        name: "Mens Premium Jacket - Red",
        category: 'hoodie',
        for: 'Men',
        save: 200,
        mainPrice: 1000,
        discountPrice: 800,
        showcases: ["new arrival", "winter"],
        images: [
            "/collections/red jacket.png",
            "/collections/red jacket.png",
            "/collections/red jacket.png"
        ],
        sizes: ["M", "L", "XL", "2XL"]
    },
    {
        id: 7,
        coverImage: "/collections/edited/red.png",
        name: "Mens Premium Hoodie - Red",
        category: 'hoodie',
        for: 'Men',
        save: 200,
        mainPrice: 1000,
        discountPrice: 800,
        showcases: ["best selling", "winter", "flash sale"],
        images: [
            "/collections/red2.png",
            "/collections/red2.png",
            "/collections/red2.png"
        ],
        sizes: ["M", "L", "XL", "2XL"]
    },
    {
        id: 8,
        coverImage: "/collections/edited/itachi.png",
        name: "Mens Premium Hoodie Itachi",
        category: 'hoodie',
        for: 'Men',
        save: 200,
        mainPrice: 1000,
        discountPrice: 800,
        showcases: ["best selling", "winter", "flash sale"],
        images: [
            "/collections/itachi2.png",
            "/collections/itachi2.png",
            "/collections/itachi2.png"
        ],
        sizes: ["M", "L", "XL", "2XL"]
    },
    {
        id: 9,
        coverImage: "/collections/edited/green.png",
        name: "Mens Premium Hoodie Green",
        category: 'hoodie',
        for: 'Men',
        save: 200,
        mainPrice: 1000,
        discountPrice: 800,
        showcases: ["new arrival", "winter"],
        images: [
            "/collections/green2.png",
            "/collections/green2.png",
            "/collections/green2.png"
        ],
        sizes: ["M", "L", "XL", "2XL"]
    }
];

    

    const [product,setproduct] = useState({
      id: 1,
      coverImage: "/collections/edited/ai.png",
      name: "Mens Premium Hoodie Itachi - Tsukuyomi",
      category:'hoddie',
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      images: [
        "/collections/ai2.png",
        "/collections/ai2.png",
        "/collections/ai2.png"
      ],
      sizes: ["M", "L", "XL", "2XL"]
    },)

    const [showmbsearhbar,setshowsearchbar] = useState(false)
    
    const [cartedProduct,setcartedproduct] = useState([ ])
    const [SelectedCarts,setselectedcarts] = useState([])
    const {id} = useParams()
    const detailedproduct =  productDetails.find((iteam)=>iteam.id == parseInt(id))
          useEffect(() => {
setproduct(detailedproduct)}, [detailedproduct,id])
const [selectedFilters, setSelectedFilters] = useState({});
const selectedFilterArray = Object.keys(selectedFilters).filter(
  (key) => selectedFilters[key] === true
);
  return (
    <>
    <BrowserRouter >
    <HeroUIProvider >
   <Header  showmbsearhbar={showmbsearhbar} setshowsearchbar={setshowsearchbar}/>
   <Sidecart cartedProduct={cartedProduct} setcartedproduct={setcartedproduct} SelectedCarts={SelectedCarts}/>

    <Routes>
      <Route path="/" element={<Homepage  productDetails={productDetails} />} />



   <Route path='/shop' element={<Shop productDetails={productDetails} />} />
  {productDetails.map((product,key)=>(
    <Route key={key} path={`/details/${product.id}`} element={ <Details product={product} setcartedproduct={setcartedproduct}  cartedProduct={cartedProduct}/>}></Route>
  ))}
      <Route path="/account" element={<AccountForm/>} />
      <Route path="/cart" element={   <Cartpage SelectedCarts={SelectedCarts} setselectedcarts={setselectedcarts} cartedProduct={cartedProduct} setcartedproduct={setcartedproduct} />} />

      </Routes>
   
 
  <Dealsubscribe/>
<Footer/>
</HeroUIProvider>
</BrowserRouter>





  
 




    </>
  )
}

export default App
