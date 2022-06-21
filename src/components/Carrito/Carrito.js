import React from "react";
import "materialize-css/dist/css/materialize.min.css"
import "../Nav/styles.css"
import CarritoNashe from "../../assets/carrito-de-compras.png"


const Carrito = () => {
    return (  
        <>
        <a href="/" className="btn-flat"><img className="nav-cart" src={CarritoNashe} alt="carrito" /></a>
        </> 
    )
    
}

export default Carrito