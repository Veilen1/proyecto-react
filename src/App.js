
import React from "react";
import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
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
  </>
  )
}
export default App