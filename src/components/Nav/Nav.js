import React from "react";
import Carrito from "../Carrito/Carrito";
import "./styles.css";

const menuItems = [
    {
        id:1,
        label: "Categoria1",
    },
    {
        id:2,
        label: "Categoria2",
    },
    {
        id:3,
        label: "Categoria3",
    },
];

const Nav = () => {
    return (
        
        <nav className="nav">
            <a  href="/"><h1 className="nav-logo">Mitienda ONLINE</h1></a>
            <div>
                {menuItems.map((item)=> (
                        <a key={item.id} className="nav-item" href="/">{item.label}</a>
                    ))}
            </div>
            <Carrito/>
        </nav>
        
    )
    
}

export default Nav