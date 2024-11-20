import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <NavBar/>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collections/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/order' element={<Orders/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App