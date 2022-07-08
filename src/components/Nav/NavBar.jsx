import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../Carrito/CartWidget";
import "./styles.css";

const categories = [
    { name: "electronics", id: 0, route: "/category/electronics" },
    { name: "jewelery", id: 1, route: "/category/jewelery" },
    { name: "men's clothing", id: 2, route: "/category/men's clothing" },
    { name: "women's clothing", id: 3, route: "/category/women's clothing" },
];

const NavBar = () => {
    return (
        
        <nav className="nav">
            <Link to={"/"}><h1 className="nav-logo">Mitienda ONLINE</h1></Link>
            <div>
                {categories.map((categories)=> (
                        <NavLink key={categories.id} className="nav-item" to={categories.route}>{categories.name}</NavLink>
                    ))}
            </div>
            <CartWidget/>
        </nav>
        
    )
    
}

export default NavBar