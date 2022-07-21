import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../Carrito/CartWidget";
import "./styles.css";



const NavBar = () => {
    return (
        
        <nav className="nav">
            <Link to={"/"}><h1 className="nav-logo">Mitienda ONLINE</h1></Link>
            <CartWidget/>
        </nav>
        
    )
    
}

export default NavBar