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
        showcases: {
            newArrival: true,
            featured: false,
            bestSelling: true,
            seasonal: {
                winter: false,
                summer: true
            },
            flashSale: false
        },
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
        showcases: {
            newArrival: false,
            featured: true,
            bestSelling: true,
            seasonal: {
                winter: false,
                summer: true
            },
            flashSale: false
        },
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
        category: 'hoddie',
        for: 'Men',
        save: 200,
        mainPrice: 1000,
        discountPrice: 800,
        showcases: {
            newArrival: false,
            featured: false,
            bestSelling: true,
            seasonal: {
                winter: true,
                summer: false
            },
            flashSale: false
        },
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
        category: 'hoddie',
        for: 'Men',
        save: 200,
        mainPrice: 1000,
        discountPrice: 800,
        showcases: {
            newArrival: false,
            featured: false,
            bestSelling: false,
            seasonal: {
                winter: true,
                summer: false
            },
            flashSale: true
        },
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
        category: 'hoddie',
        for: 'Men',
        save: 200,
        mainPrice: 1000,
        discountPrice: 800,
        showcases: {
            newArrival: false,
            featured: false,
            bestSelling: false,
            seasonal: {
                winter: true,
                summer: false
            },
            flashSale: false
        },
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
        category: 'hoddie',
        for: 'Men',
        save: 200,
        mainPrice: 1000,
        discountPrice: 800,
        showcases: {
            newArrival: true,
            featured: false,
            bestSelling: false,
            seasonal: {
                winter: true,
                summer: false
            },
            flashSale: false
        },
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
        category: 'hoddie',
        for: 'Men',
        save: 200,
        mainPrice: 1000,
        discountPrice: 800,
        showcases: {
            newArrival: false,
            featured: false,
            bestSelling: true,
            seasonal: {
                winter: true,
                summer: false
            },
            flashSale: true
        },
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
        category: 'hoddie',
        for: 'Men',
        save: 200,
        mainPrice: 1000,
        discountPrice: 800,
        showcases: {
            newArrival: false,
            featured: false,
            bestSelling: true,
            seasonal: {
                winter: true,
                summer: false
            },
            flashSale: true
        },
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
        category: 'hoddie',
        for: 'Men',
        save: 200,
        mainPrice: 1000,
        discountPrice: 800,
        showcases: {
            newArrival: true,
            featured: false,
            bestSelling: false,
            seasonal: {
                winter: true,
                summer: false
            },
            flashSale: false
        },
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
    
    const [cartedProduct,setcartedproduct] = useState([
    
      
    ])
    const {id} = useParams()
    const detailedproduct =  productDetails.find((iteam)=>iteam.id == parseInt(id))
          useEffect(() => {
setproduct(detailedproduct)}, [detailedproduct,id])
  return (
    <>
    <BrowserRouter >
    <HeroUIProvider >
   <Header showmbsearhbar={showmbsearhbar} setshowsearchbar={setshowsearchbar}/>
   <Sidecart cartedProduct={cartedProduct} setcartedproduct={setcartedproduct}/>

    <Routes>
      <Route path="/" element={<Homepage  productDetails={productDetails} setproduct={setproduct}/>} />



   <Route path='/shop' element={<Shop productDetails={productDetails} />} />
  {productDetails.map((product,key)=>(
    <Route key={key} path={`/details/${product.id}`} element={ <Details product={product} setcartedproduct={setcartedproduct} setproduct={setproduct} cartedProduct={cartedProduct}/>}></Route>
  ))}
      <Route path="/account" element={<AccountForm/>} />
      <Route path="/cart" element={   <Cartpage cartedProduct={cartedProduct} setcartedproduct={setcartedproduct} />} />

      </Routes>
   
 
  <Dealsubscribe/>
<Footer/>
</HeroUIProvider>
</BrowserRouter>





  
 




    </>
  )
}

export default App
