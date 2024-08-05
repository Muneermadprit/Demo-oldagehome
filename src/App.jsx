import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/hero'
import Prodect from './components/Navbar/prodect'
import Topproducts from './components/Navbar/topproducts'
import Banner from './components/Navbar/bannner'
import Subscription from './components/Navbar/subscription'
import Testimonial from './components/Navbar/testimonial'
import Footer from './components/Navbar/footer'

function App() {
  return (
    <>
     <Navbar/>
    <Hero/>
    <Prodect/>
    
    <Testimonial/>
    <Footer/>
    </>
   
  )
}

export default App