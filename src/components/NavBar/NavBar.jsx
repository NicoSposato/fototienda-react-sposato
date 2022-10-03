import React from "react";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navBar container-fluid">
            <h1>
                <span>Tu </span>Foto <span>Tienda</span> 
            </h1>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/categoria/italiano">Italiano</Link>
                    </li>
                    <li>
                        <Link to="/categoria/canvas">Canvas</Link>

                    </li>
                    <li>
                        <Link to="#">Contacto</Link>
                    </li>
                    <li className="CartWidget">
                        <CartWidget />
                    </li>
                    
                </ul>
            
        </nav>
    );
}

export default NavBar;

