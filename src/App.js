
import React from "react";
import NavBar from "./components/Nav/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Carrito/CartWidget";
import CartProvider from "./context/CartContext";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

const App = () => {



  return (
  <BrowserRouter>
    <CartProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/product/:productId" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </CartProvider>
  </BrowserRouter>
  )
}

export default App