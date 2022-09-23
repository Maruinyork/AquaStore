import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemDetailContainer from './containers/ItemDetailContainer'
import ItemListContainer from './components/ItemListcontainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Cart from './components/Cart/Cart'
import CartProvider from './context/CartContext'


function App() {
  return (
    <div className="App">
      <p>ENVÍO GRATIS A PARTIR DE $14.990 Y 3 o 6 PAGOS SIN INTERÉS</p>
      <BrowserRouter>
        <CartProvider>
        <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting={'Bienvenido a su shop online'} />
              }
            />
            <Route
              path="/category/:categoryId"
              element={
                <ItemListContainer greeting={'Bienvenido a su shop online'} />
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
