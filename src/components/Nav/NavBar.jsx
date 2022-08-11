import {React} from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../Carrito/CartWidget";
import "./styles.css";



const NavBar = () => {

    return (
        <nav className="nav">
            <Link to={"/"}><h1 className="nav-logo">Mitienda ONLINE</h1></Link>
            <ul className="nav-links">
                <li>
                    <NavLink className={"nav-item"} to={"/category/Remeras"}>Remeras</NavLink>
                </li>
                <li>
                    <NavLink className={"nav-item"} to={"/category/Pantalones"}>Pantalones</NavLink>
                </li>
                <li>
                    <NavLink className={"nav-item"} to={"/category/Buzos"}>Buzos</NavLink>
                </li>
            </ul>
            <CartWidget/>
        </nav>
        
    )
    
}

export default NavBar