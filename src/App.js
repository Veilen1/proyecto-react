
import React from "react";
import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
const App = () => {
  const miMensaje= "Hola";

  return (
  <>
    <Header></Header>
    <ItemListContainer miProp={miMensaje}/>
    <ItemDetailContainer/>
  </>
  )
}
export default App