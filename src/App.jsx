import { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Cart from './components/Cart'
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
  <Route path='/' element={<Product/>}/>
  <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
