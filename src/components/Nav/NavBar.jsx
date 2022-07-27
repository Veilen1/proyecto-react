import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartWidget from "../Carrito/CartWidget";
import "./styles.css";



const NavBar = () => {
/*     const { cart } = useCartContext;
    const category = [cart.map(product => [{categoria :product.category}])]
    console.log(category); */

    return (
        
        <nav className="nav">
            <Link to={"/"}><h1 className="nav-logo">Mitienda ONLINE</h1></Link>
            <CartWidget/>
        </nav>
        
    )
    
}

export default NavBar