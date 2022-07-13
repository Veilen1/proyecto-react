
import React from "react";
import NavBar from "./components/Nav/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Carrito/CartWidget";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
const App = () => {

  const CartContext = React.createContext('')

  return (
  <BrowserRouter>
    <NavBar/>
    <CartContext.Provider value="Pablo" />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/product/:productId" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
  </BrowserRouter>
  )
}

export default App