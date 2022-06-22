
import React from "react";
import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


const App = () => {
  const miMensaje= "Hola";

  return (
  <>
    <Header/>
    <ItemListContainer miProp={miMensaje}/>
  </>
  )
}

export default App