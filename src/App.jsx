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

function App() {


  return (
    <>
   <Header/>
   <Slidershow/>
   <Categories/>
   <Flashsale/>
   <Collection Collectiontype={'Featured Product'}/>
   <Collection Collectiontype={'New Arrivals'}/>

   <Banner/>
   <Collection Collectiontype={'Hoodies'}/>
  <Hoodies/>

<Footer/>    </>
  )
}

export default App
