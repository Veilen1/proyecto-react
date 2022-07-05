import React from "react";
import "../Nav/styles.css"
import CarritoNashe from "../../assets/carrito-de-compras.png"


const Carrito = () => {
    return (  
        <>
        <a href="/" className=""><img className="nav-cart" src={CarritoNashe} alt="carrito" /></a>
        </> 
    )
    
}

export default Carrito