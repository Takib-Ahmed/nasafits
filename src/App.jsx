import { useState } from 'react'

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
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage'
import { HeroUIProvider } from "@heroui/react";
import { useNavigate, useHref } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const productDetails = [
    {
      id: 1,
      coverImage: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      name: "Mens Premium Hoodie Itachi - Tsukuyomi",
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      images: [
        "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
        "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
        "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png"
      ],
      sizes: ["M", "L", "XL", "2XL"]
    },
    {
      id: 2,
      coverImage: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      name: "Mens Premium Hoodie Itachi - Tsukuyomi",
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      images: [
        "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
        "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
        "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png"
      ],
      sizes: ["M", "L", "XL", "2XL"]
    },
    {
      id: 3,
      coverImage: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      name: "Mens Premium Hoodie Itachi - Tsukuyomi",
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      images: [
        "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
        "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
        "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png"
      ],
      sizes: ["M", "L", "XL", "2XL"]
    },
    {
      id: 4,
      coverImage: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      name: "Mens Premium Hoodie Itachi - Tsukuyomi",
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      images: [
        "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
        "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
        "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png"
      ],
      sizes: ["M", "L", "XL", "2XL"]
    },
    {
      id: 5,
      coverImage: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      name: "Mens Premium Hoodie Itachi - Tsukuyomi",
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      images: [
        "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
        "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
        "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png"
      ],
      sizes: ["M", "L", "XL", "2XL"]
    },
    {
      id: 6,
      coverImage: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      name: "Mens Premium Hoodie Itachi - Tsukuyomi",
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      images: [
        "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
        "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
        "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png"
      ],
      sizes: ["M", "L", "XL", "2XL"]
    }
  ];
    const [product,setproduct] = useState(  {
      id: 1,
      coverImage: "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
      name: "Mens Premium Hoodie Itachi - Tsukuyomi",
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      images: [
        "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
        "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png",
        "/collections/96043cb7-63b4-4f9f-8e91-34087e0f2585 (2).png"
      ],
      sizes: ["M", "L", "XL", "2XL"]
    })
  return (
    <>
   <Header/>
   <Sidecart/>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage productDetails={productDetails} setproduct={setproduct}/>} />
      <Route path="/detalis" element={ <Details product={product} />} />

    </Routes>
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <Routes>
      <Route path="/signin" element={<AccountForm/>} />
      <Route path="/cart" element={   <Cartpage/>} />
      </Routes>
    </HeroUIProvider>
  </BrowserRouter>
  <Dealsubscribe/>
<Footer/>





  
 




    </>
  )
}

export default App
