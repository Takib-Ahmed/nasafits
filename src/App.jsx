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


function App() {
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
  
  return (
    <>
   <Header/>
   <Cartpage/>
  <Sidecart/>
  <Details productDetails={productDetails}/>
   <Slidershow/>
   <Categories/>
   <Flashsale productDetails={productDetails}/>
   <Collection Collectiontype={'Featured Product'} productDetails={productDetails}/>
   <Collection Collectiontype={'New Arrivals'} productDetails={productDetails}/>

   <Banner/>
   <Collection Collectiontype={'Hoodies'} productDetails={productDetails}/>
  <Hoodies/>
  <Dealsubscribe/>
<Footer/>    </>
  )
}

export default App
