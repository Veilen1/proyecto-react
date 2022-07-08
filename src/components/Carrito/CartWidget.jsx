import React from "react";
import "../Nav/styles.css"
import CarritoNashe from "../../assets/carrito-de-compras.png"
import { Link } from "react-router-dom";


const CartWidget = () => {
    return (  
        <>
        <Link to={"/cart"} className=""><img className="nav-cart" src={CarritoNashe} alt="Cart.ico" /></Link>
        </> 
    )
    
}

export default CartWidget