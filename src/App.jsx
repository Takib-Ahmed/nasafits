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


function App() {

  const productDetails = [
    {
      id: 1,
      coverImage: "/collections/itachi.png",
      name: "Mens Premium Hoodie Itachi - Tsukuyomi",
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      images: [
        "/collections/itachi2.png",
        "/collections/itachi2.png",
        "/collections/itachi2.png"
      ],
      sizes: ["M", "L", "XL", "2XL"]
    },
    {
      id: 2,
      coverImage: "/collections/ai.png",
      name: "Mens Premium Hoodie Itachi - Tsukuyomi",
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      images: [
        "/collections/ai2.png",
        "/collections/ai2.png",
        "/collections/ai2.png"
      ],
      sizes: ["M", "L", "XL", "2XL"]
    },
    {
      id: 3,
      coverImage: "/collections/brown.png",
      name: "Mens Premium Hoodie Itachi - Tsukuyomi",
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      images: [
        "/collections/brown2.png",
        "/collections/brown2.png",
        "/collections/brown2.png"
      ],
      sizes: ["M", "L", "XL", "2XL"]
    },
    {
      id: 4,
      coverImage: "/collections/green.png",
      name: "Mens Premium Hoodie Itachi - Tsukuyomi",
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      images: [
        "/collections/green2.png",
        "/collections/green2.png",
        "/collections/green2.png"
      ],
      sizes: ["M", "L", "XL", "2XL"]
    },
    {
      id: 5,
      coverImage: "/collections/red.png",
      name: "Mens Premium Hoodie Itachi - Tsukuyomi",
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      images: [
        "/collections/red2.png",
        "/collections/red2.png",
        "/collections/red2.png"
      ],
      sizes: ["M", "L", "XL", "2XL"]
    },
    {
      id: 6,
      coverImage: "/collections/itachi.png",
      name: "Mens Premium Hoodie Itachi - Tsukuyomi",
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      images: [
        "/collections/itachi2.png",
        "/collections/itachi2.png",
        "/collections/itachi2.png"
      ],
      sizes: ["M", "L", "XL", "2XL"]
    }
  ];
  
    const [product,setproduct] = useState(  {
      id: 1,
      coverImage: "/collections/ai.png",
      name: "Mens Premium Hoodie Itachi - Tsukuyomi",
      save: 200,
      mainPrice: 1000,
      discountPrice: 800,
      images: [
        "/collections/ai2.png",
        "/collections/ai2.png",
        "/collections/ai2.png"
      ],
      sizes: ["M", "L", "XL", "2XL"]
    })
  return (
    <>
    <BrowserRouter>
    <HeroUIProvider >
   <Header/>
   <Sidecart/>

    <Routes>
      <Route path="/" element={<Homepage productDetails={productDetails} setproduct={setproduct}/>} />
      <Route path="/detalis" element={ <Details product={product} />} />


   
  
      <Route path="/signin" element={<AccountForm/>} />
      <Route path="/cart" element={   <Cartpage/>} />
      </Routes>
   
 
  <Dealsubscribe/>
<Footer/>
</HeroUIProvider>
</BrowserRouter>





  
 




    </>
  )
}

export default App
